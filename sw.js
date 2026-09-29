const CACHE_NAME = "moa-app-shell-v3";
const APP_FILES = ["./", "./index.html", "./styles.css", "./main.js", "./manifest.webmanifest", "./assets/icon.svg"];

self.addEventListener("install", (event) => {
  const files = APP_FILES.map((file) => new URL(file, self.registration.scope).href);
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(files)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("moa-app-shell-") && key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);
  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(new URL("./index.html", self.registration.scope).href, response.clone()));
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match(new URL("./index.html", self.registration.scope).href)))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
        return response;
      });
    })
  );
});