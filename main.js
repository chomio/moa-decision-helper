const candidateSets = {
  destination: [
    { name: "강릉", detail: "바다와 커피 거리, 기차로 떠나는 동해 여행", tags: ["바다", "카페", "맛집", "기차 이동", "휴식", "한적함", "사진 명소", "해산물 메뉴"] },
    { name: "전주", detail: "한옥 골목과 전통 음식, 걷기 좋은 도심", tags: ["맛집", "문화·전통", "도보 여행", "기차 이동", "실내 코스", "사람 많은 곳", "촘촘한 일정"] },
    { name: "제주 동쪽", detail: "성산 바다와 오름을 따라가는 자연 여행", tags: ["바다", "자연", "드라이브", "휴식", "장거리 이동", "비싼 숙소", "직접 운전", "야외 활동", "액티비티"] },
    { name: "남해", detail: "다랭이마을과 바다 풍경 속 느린 휴식", tags: ["자연", "드라이브", "휴식", "바다", "장거리 이동", "비싼 숙소", "직접 운전", "한적함", "야외 활동"] },
    { name: "부산", detail: "해변과 시장, 도심의 맛집을 함께 즐기는 여행", tags: ["바다", "도시 여행", "맛집", "대중교통", "카페", "액티비티", "사람 많은 곳", "사진 명소", "해산물 메뉴"] },
    { name: "춘천", detail: "호수와 숲길, 가까운 자연에서 쉬어 가기", tags: ["자연", "드라이브", "맛집", "액티비티", "휴식", "야외 활동", "도보 여행", "한적함"] },
    { name: "속초", detail: "설악산과 동해, 중앙시장을 한 번에", tags: ["바다", "자연", "맛집", "대중교통", "사진 명소", "해산물 메뉴", "사람 많은 곳", "야외 활동"] },
    { name: "양양", detail: "서핑과 해변 카페가 있는 자유로운 바닷가", tags: ["바다", "카페", "액티비티", "드라이브", "야외 활동", "한적함", "장거리 이동"] },
    { name: "여수", detail: "밤바다와 해산물, 낭만적인 항구 산책", tags: ["바다", "맛집", "기차 이동", "사진 명소", "해산물 메뉴", "도보 여행", "사람 많은 곳"] },
    { name: "경주", detail: "유적지와 한옥, 고즈넉한 역사 여행", tags: ["문화·전통", "도보 여행", "기차 이동", "실내 코스", "사진 명소", "한적함", "촘촘한 일정"] },
    { name: "통영", detail: "섬과 항구, 케이블카 풍경을 만나는 남쪽 여행", tags: ["바다", "자연", "맛집", "액티비티", "사진 명소", "해산물 메뉴", "드라이브", "장거리 이동"] },
    { name: "거제", detail: "외도와 해안 절경을 따라가는 드라이브", tags: ["바다", "자연", "드라이브", "휴식", "장거리 이동", "직접 운전", "야외 활동", "사진 명소"] },
    { name: "포항", detail: "바다 산책과 시장 먹거리가 기다리는 동해", tags: ["바다", "맛집", "기차 이동", "사진 명소", "해산물 메뉴", "도보 여행", "한적함"] },
    { name: "목포", detail: "근대 거리와 항구 음식, 여유로운 도시 산책", tags: ["문화·전통", "맛집", "기차 이동", "도보 여행", "실내 코스", "해산물 메뉴", "한적함"] },
    { name: "순천", detail: "국가정원과 습지에서 만나는 초록 여행", tags: ["자연", "휴식", "기차 이동", "도보 여행", "야외 활동", "사진 명소", "한적함"] },
    { name: "담양", detail: "대숲과 정원, 한적한 남도의 풍경", tags: ["자연", "휴식", "드라이브", "도보 여행", "야외 활동", "한적함", "맛집"] },
    { name: "안동", detail: "하회마을과 고택을 둘러보는 전통 여행", tags: ["문화·전통", "기차 이동", "도보 여행", "한적함", "실내 코스", "맛집"] },
    { name: "군산", detail: "근대 건축과 골목 맛집을 찾는 레트로 여행", tags: ["문화·전통", "맛집", "기차 이동", "도보 여행", "실내 코스", "사진 명소", "한적함"] },
    { name: "대전", detail: "빵집과 과학관, 이동이 편리한 도심 나들이", tags: ["도시 여행", "맛집", "카페", "기차 이동", "대중교통", "실내 코스"] },
    { name: "인천 개항장", detail: "근대 거리와 차이나타운을 걷는 도심 여행", tags: ["도시 여행", "문화·전통", "맛집", "대중교통", "도보 여행", "실내 코스", "사람 많은 곳"] },
    { name: "파주", detail: "출판도시와 미술관, 북카페를 둘러보는 하루", tags: ["문화·전통", "카페", "실내 코스", "드라이브", "도보 여행", "휴식"] },
    { name: "제주 서쪽", detail: "협재 해변과 오름, 노을을 따라가는 여행", tags: ["바다", "자연", "드라이브", "휴식", "장거리 이동", "비싼 숙소", "직접 운전", "야외 활동", "사진 명소"] },
    { name: "울릉도", detail: "절벽 해안과 맑은 바다를 만나는 섬 여행", tags: ["바다", "자연", "액티비티", "장거리 이동", "비싼 숙소", "야외 활동", "사진 명소", "해산물 메뉴"] },
    { name: "제천", detail: "호수와 케이블카, 산책 코스로 쉬어 가기", tags: ["자연", "휴식", "액티비티", "드라이브", "야외 활동", "사진 명소", "한적함"] },
    { name: "수원", detail: "화성 성곽과 행궁동 골목을 즐기는 가까운 여행", tags: ["문화·전통", "도시 여행", "맛집", "대중교통", "도보 여행", "카페", "사람 많은 곳"] },
    { name: "광주", detail: "미술관과 시장, 남도 음식을 즐기는 문화 여행", tags: ["도시 여행", "문화·전통", "맛집", "기차 이동", "대중교통", "실내 코스"] }
  ],
  dinner: [
    { name: "광화문 샤브샤브", detail: "대화하기 편하고 여럿이 나눠 먹기 좋아요", tags: ["한식", "조용한 대화", "넓은 좌석", "대중교통", "가성비", "메뉴 다양"] },
    { name: "성수 이탈리안", detail: "분위기 좋은 파스타와 활기찬 거리", tags: ["양식", "야외 테라스", "대중교통", "시끄러운 곳", "비싼 곳", "긴 웨이팅", "예약 필수"] },
    { name: "을지로 한식주점", detail: "퇴근 후 천천히 이야기 나누기 좋은 곳", tags: ["한식", "조용한 대화", "대중교통", "매운 음식", "좁은 좌석", "늦게 끝남"] },
    { name: "망원 비건식당", detail: "가볍고 산뜻한 메뉴, 부담 없는 분위기", tags: ["비건 메뉴", "조용한 대화", "대중교통", "가성비", "메뉴 다양", "넓은 좌석"] },
    { name: "강남 스시 오마카세", detail: "정갈한 일식 코스, 예약하고 즐기는 저녁", tags: ["일식", "조용한 대화", "비싼 곳", "예약 필수", "좁은 좌석", "메뉴 선택 적음"] },
    { name: "합정 한식뷔페", detail: "메뉴가 다양하고 취향대로 고를 수 있어요", tags: ["한식", "넓은 좌석", "대중교통", "가성비", "메뉴 다양", "매운 음식"] }
  ],
  date: [
    { name: "이번 주 금요일 저녁", detail: "퇴근 후 만나 여유 있게 식사해요", tags: ["평일", "저녁", "퇴근 후", "오프라인", "2시간 이내"] },
    { name: "이번 주 토요일 점심", detail: "주말 한낮에 부담 없이 만나요", tags: ["주말", "점심", "오프라인", "2시간 이내"] },
    { name: "다음 주 수요일 저녁 화상 모임", detail: "한 주 중간, 퇴근 뒤 짧게 만나요", tags: ["평일", "저녁", "퇴근 후", "온라인", "2시간 이내"] },
    { name: "이번 주 일요일 오후", detail: "일정 전후로 조정하기 쉬운 시간", tags: ["주말", "오후", "오프라인", "유동적"] },
    { name: "다음 주 금요일 점심 통화", detail: "점심시간에 온라인으로 짧게 만나요", tags: ["평일", "점심", "온라인", "2시간 이내"] },
    { name: "이번 주 토요일 브런치", detail: "주말 오전, 여유롭게 시작하는 만남", tags: ["주말", "오전", "오프라인", "유동적"] }
  ]
};

const preferenceOptions = {
  destination: {
    likes: ["바다", "자연", "맛집", "카페", "휴식", "액티비티", "문화·전통", "기차 이동", "드라이브", "한적함", "실내 코스", "사진 명소"],
    dislikes: ["장거리 이동", "직접 운전", "사람 많은 곳", "비싼 숙소", "많이 걷기", "촘촘한 일정", "해산물 메뉴", "야외 활동"]
  },
  dinner: {
    likes: ["한식", "양식", "일식", "비건 메뉴", "조용한 대화", "넓은 좌석", "대중교통", "가성비", "야외 테라스", "메뉴 다양"],
    dislikes: ["시끄러운 곳", "비싼 곳", "매운 음식", "좁은 좌석", "긴 웨이팅", "예약 필수", "주차 불편", "메뉴 선택 적음"]
  },
  date: {
    likes: ["주말", "평일", "점심", "저녁", "오후", "오전", "온라인", "오프라인", "퇴근 후", "2시간 이내", "유동적"],
    dislikes: ["아침 일찍", "늦은 밤", "퇴근 직후", "주말", "평일", "점심", "온라인", "오프라인"]
  }
};

function createPerson(name, preferences = {}) {
  return {
    name,
    preferences: Object.fromEntries(Object.keys(preferenceOptions).map((type) => [
      type,
      { likes: [], dislikes: [], ...preferences[type] }
    ]))
  };
}

const starterPeople = [
  createPerson("민지", { destination: { likes: ["문화·전통", "카페", "기차 이동", "실내 코스"], dislikes: ["사람 많은 곳", "많이 걷기"] }, dinner: { likes: ["한식", "조용한 대화"], dislikes: ["시끄러운 곳"] }, date: { likes: ["주말", "오후"], dislikes: ["아침 일찍"] } }),
  createPerson("도윤", { destination: { likes: ["자연", "액티비티", "드라이브", "야외 활동"], dislikes: ["장거리 이동", "직접 운전"] }, dinner: { likes: ["넓은 좌석", "가성비"], dislikes: ["긴 웨이팅"] }, date: { likes: ["평일", "저녁"], dislikes: ["퇴근 직후"] } }),
  createPerson("서연", { destination: { likes: ["맛집", "사진 명소", "휴식", "도시 여행"], dislikes: ["비싼 숙소", "촘촘한 일정"] }, dinner: { likes: ["비건 메뉴", "대중교통"], dislikes: ["매운 음식"] }, date: { likes: ["주말", "온라인"], dislikes: ["늦은 밤"] } })
];

let currentType = "destination";
let people = structuredClone(starterPeople);
let hasCalculated = false;
let showAllCandidates = false;
const peopleList = document.querySelector("#people-list");
const recommendationList = document.querySelector("#recommendation-list");
const toast = document.querySelector("#toast");
const storageStatus = document.querySelector("#storage-status");
let databasePromise;
let saveTimer;
let installPrompt;
let serviceWorkerRegistration;

function openDatabase() {
  if (!("indexedDB" in window)) return Promise.reject(new Error("IndexedDB is unavailable"));
  if (!databasePromise) {
    databasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open("moa-local", 1);
      request.onupgradeneeded = () => request.result.createObjectStore("app-state");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  return databasePromise;
}

function currentState() {
  return { people, currentType, hasCalculated, showAllCandidates, decisionTitle: document.querySelector("#decision-title").value };
}

async function saveState() {
  const state = currentState();
  try {
    const database = await openDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction("app-state", "readwrite");
      transaction.objectStore("app-state").put(state, "current");
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    storageStatus.textContent = "이 기기의 브라우저에 저장 중";
  } catch {
    try {
      localStorage.setItem("moa-local-state", JSON.stringify(state));
      storageStatus.textContent = "이 기기의 브라우저에 저장 중";
    } catch {
      storageStatus.textContent = "이 탭을 닫으면 입력이 사라져요";
    }
  }
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveState, 180);
}

function exportBackup() {
  const backup = { app: "moa", version: 1, exportedAt: new Date().toISOString(), state: currentState() };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `moa-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("이 기기의 선호 설정을 백업했어요.");
}

function normalizeBackupPerson(person) {
  const preferences = {};
  for (const type of Object.keys(preferenceOptions)) {
    preferences[type] = {};
    for (const group of ["likes", "dislikes"]) {
      const allowed = preferenceOptions[type][group];
      const selected = person.preferences?.[type]?.[group];
      preferences[type][group] = Array.isArray(selected) ? [...new Set(selected.filter((tag) => allowed.includes(tag)))] : [];
    }
  }
  return createPerson(String(person.name || "참여자").trim().slice(0, 18) || "참여자", preferences);
}

async function importBackup(file) {
  try {
    const backup = JSON.parse(await file.text());
    if (backup.app !== "moa" || backup.version !== 1 || !Array.isArray(backup.state?.people) || backup.state.people.length < 1) {
      throw new Error("Invalid backup format");
    }
    if (!window.confirm("현재 선호 설정을 백업 파일의 내용으로 바꿀까요?")) return;
    people = backup.state.people.map(normalizeBackupPerson);
    currentType = preferenceOptions[backup.state.currentType] ? backup.state.currentType : "destination";
    hasCalculated = Boolean(backup.state.hasCalculated);
    showAllCandidates = Boolean(backup.state.showAllCandidates);
    document.querySelector("#decision-title").value = String(backup.state.decisionTitle || "우리의 다음 여행").slice(0, 50);
    document.querySelectorAll(".choice-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.type === currentType));
    renderPeople();
    renderRecommendations();
    await saveState();
    showToast("백업한 선호 설정을 복원했어요.");
  } catch {
    showToast("모아에서 내려받은 백업 파일인지 확인해 주세요.");
  }
}

async function restoreState() {
  try {
    const database = await openDatabase();
    const saved = await new Promise((resolve, reject) => {
      const request = database.transaction("app-state", "readonly").objectStore("app-state").get("current");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    if (saved) return saved;
  } catch {
    storageStatus.textContent = "이 기기의 브라우저에 저장 중";
  }
  try {
    return JSON.parse(localStorage.getItem("moa-local-state") || "null");
  } catch {
    return null;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function renderPeople() {
  const options = preferenceOptions[currentType];
  peopleList.innerHTML = people.map((person, index) => `
    <article class="person-card" data-person="${index}">
      <div class="person-card-head"><span class="person-avatar avatar-${index % 4}">${escapeHTML(person.name.trim().charAt(0) || "?")}</span><input class="person-name" aria-label="참여자 이름" maxlength="18" value="${escapeHTML(person.name)}" /><span class="person-index">PERSON / ${String(index + 1).padStart(2, "0")}</span>${people.length > 2 ? `<button class="remove-person" type="button" data-remove="${index}" aria-label="${escapeHTML(person.name)} 삭제" title="참여자 삭제">×</button>` : ""}</div>
      <div class="preference-fields">${["likes", "dislikes"].map((group) => `<section class="preference-group"><h3 class="preference-label"><i class="${group === "likes" ? "like-dot" : "dislike-dot"}"></i>${group === "likes" ? "좋은 조건" : "피하고 싶은 조건"}<span>${person.preferences[currentType][group].length}개 선택</span></h3><div class="preference-options">${options[group].map((tag) => { const selected = person.preferences[currentType][group].includes(tag); return `<button type="button" class="preference-choice ${selected ? `is-selected-${group === "likes" ? "like" : "dislike"}` : ""}" data-pref="${group}" data-tag="${escapeHTML(tag)}" aria-pressed="${selected}">${escapeHTML(tag)}</button>`; }).join("")}</div></section>`).join("")}</div>
    </article>`).join("");
  document.querySelector("#people-count").textContent = `${people.length}명`;
}

function scoreCandidate(candidate) {
  const details = people.map((person) => {
    const preferences = person.preferences[currentType];
    const liked = preferences.likes.filter((tag) => candidate.tags.includes(tag));
    const disliked = preferences.dislikes.filter((tag) => candidate.tags.includes(tag));
    const score = Math.max(0, Math.min(100, 58 + liked.length * 16 - disliked.length * 42));
    return { name: person.name || "참여자", score, liked, disliked };
  });
  const average = details.reduce((total, person) => total + person.score, 0) / details.length;
  const lowest = Math.min(...details.map((person) => person.score));
  const balance = Math.round(average * 0.42 + lowest * 0.58);
  const friction = details.filter((person) => person.disliked.length).sort((a, b) => b.disliked.length - a.disliked.length)[0];
  const positiveCount = details.reduce((total, person) => total + person.liked.length, 0);
  return { ...candidate, balance, average: Math.round(average), lowest, details, friction, positiveCount };
}

function renderRecommendations() {
  const ranked = candidateSets[currentType].map((candidate, index) => ({ ...scoreCandidate(candidate), originalIndex: index })).sort((a, b) => b.balance - a.balance || a.originalIndex - b.originalIndex);
  const visibleCandidates = showAllCandidates ? ranked : ranked.slice(0, 8);
  const best = ranked[0];
  const title = document.querySelector("#decision-title").value.trim() || "함께 정할 결정";
  document.querySelector("#results-heading").textContent = hasCalculated ? title : "함께 고른다면";
  document.querySelector("#results-description").textContent = hasCalculated
    ? `${people.length}명의 좋은 조건과 피하고 싶은 조건을 함께 살펴봤어요.`
    : "예시 선호가 미리 들어 있어요. 내용을 바꾸고 계산해 보세요.";
  recommendationList.innerHTML = visibleCandidates.map((candidate, index) => {
    const lead = candidate.positiveCount ? "선택한 선호와 잘 맞아요" : "여러 취향을 두루 고려했어요";
    const concern = candidate.friction ? `${candidate.friction.name}님이 피하고 싶은 조건과 겹쳐요` : "피하고 싶은 조건과 겹치지 않아요";
    return `<article class="recommendation ${index === 0 ? "is-best" : ""}"><div class="recommendation-top"><div class="rank-label">${index === 0 ? "BEST MATCH" : `추천 ${String(index + 1).padStart(2, "0")}`} ${index === 0 ? '<span aria-hidden="true">✳</span>' : ""}</div><span class="score-label">균형 점수 <strong>${candidate.balance}</strong></span></div><div class="candidate-title-row"><h3>${escapeHTML(candidate.name)}</h3></div><p class="candidate-detail">${escapeHTML(candidate.detail)}</p><div class="match-note"><span class="match-positive">${escapeHTML(lead)}</span><span class="match-divider">·</span><span>${escapeHTML(concern)}</span></div></article>`;
  }).join("");
  const moreButton = document.querySelector("#show-all-candidates");
  moreButton.hidden = ranked.length <= 8;
  moreButton.textContent = showAllCandidates ? "추천 상위 8곳만 보기" : `전국 ${ranked.length}곳 모두 보기`;
}

function syncPersonField(event) {
  const card = event.target.closest(".person-card");
  if (!card) return;
  const index = Number(card.dataset.person);
  if (event.target.matches(".person-name")) {
    people[index].name = event.target.value;
    const avatar = card.querySelector(".person-avatar");
    avatar.textContent = event.target.value.trim().charAt(0) || "?";
    renderRecommendations();
    scheduleSave();
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function showUpdateBanner() {
  document.querySelector("#update-banner").hidden = false;
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) return;
  try {
    serviceWorkerRegistration = await navigator.serviceWorker.register(new URL("./sw.js", document.baseURI), {
      scope: new URL("./", document.baseURI).pathname
    });
    if (serviceWorkerRegistration.waiting && navigator.serviceWorker.controller) showUpdateBanner();
    serviceWorkerRegistration.addEventListener("updatefound", () => {
      const worker = serviceWorkerRegistration.installing;
      worker?.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) showUpdateBanner();
      });
    });
    const persisted = await navigator.storage?.persisted?.();
    storageStatus.textContent = persisted ? "기기 저장소 보호됨" : "브라우저 정책에 따라 저장 중";
  } catch {
    storageStatus.textContent = "이 기기의 브라우저에 저장 중";
  }
}

async function requestStoragePersistence() {
  try {
    const persisted = await navigator.storage?.persist?.();
    storageStatus.textContent = persisted ? "기기 저장소 보호됨" : "브라우저 정책에 따라 저장 중";
    showToast(persisted ? "브라우저 저장소 보호가 설정됐어요." : "보호 요청이 거절됐어요. 백업 다운로드로 설정을 보관해 주세요.");
  } catch {
    showToast("이 브라우저에서는 저장소 보호를 요청할 수 없어요.");
  }
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  document.querySelector("#install-button").classList.add("is-install-ready");
});

document.querySelector("#install-button").addEventListener("click", async () => {
  if (installPrompt) {
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    return;
  }
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  showToast(isIOS ? "Safari의 공유 버튼을 누르고 ‘홈 화면에 추가’를 선택해 주세요." : "브라우저 메뉴에서 ‘앱 설치’ 또는 ‘홈 화면에 추가’를 선택해 주세요.");
});

document.querySelector("#update-button").addEventListener("click", () => {
  const waitingWorker = serviceWorkerRegistration?.waiting;
  if (!waitingWorker) return;
  const hadController = Boolean(navigator.serviceWorker.controller);
  if (hadController) {
    navigator.serviceWorker.addEventListener("controllerchange", () => window.location.reload(), { once: true });
  }
  waitingWorker.postMessage({ type: "SKIP_WAITING" });
});

document.querySelector("#dismiss-update").addEventListener("click", () => {
  document.querySelector("#update-banner").hidden = true;
});
document.querySelector("#protect-storage-button").addEventListener("click", requestStoragePersistence);
document.querySelector("#export-backup").addEventListener("click", exportBackup);
document.querySelector("#import-backup").addEventListener("click", () => document.querySelector("#backup-file").click());
document.querySelector("#backup-file").addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) importBackup(file);
  event.target.value = "";
});

peopleList.addEventListener("input", syncPersonField);
peopleList.addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove]");
  if (remove) {
    people.splice(Number(remove.dataset.remove), 1);
    renderPeople();
    renderRecommendations();
    scheduleSave();
    return;
  }
  const choice = event.target.closest("[data-tag][data-pref]");
  if (choice) {
    const index = Number(choice.closest(".person-card").dataset.person);
    const group = choice.dataset.pref;
    const selected = people[index].preferences[currentType][group];
    const existingIndex = selected.indexOf(choice.dataset.tag);
    if (existingIndex === -1) selected.push(choice.dataset.tag);
    else selected.splice(existingIndex, 1);
    const isSelected = existingIndex === -1;
    choice.setAttribute("aria-pressed", String(isSelected));
    choice.classList.toggle(`is-selected-${group === "likes" ? "like" : "dislike"}`, isSelected);
    choice.closest(".preference-group").querySelector(".preference-label span").textContent = `${selected.length}개 선택`;
    hasCalculated = true;
    renderRecommendations();
    scheduleSave();
  }
});

document.querySelectorAll(".choice-tab").forEach((button) => button.addEventListener("click", () => {
  currentType = button.dataset.type;
  hasCalculated = false;
  document.querySelectorAll(".choice-tab").forEach((tab) => tab.classList.toggle("is-active", tab === button));
  const titles = { destination: "우리의 다음 여행", dinner: "다음 회식 장소 정하기", date: "다 함께 만날 날짜" };
  document.querySelector("#decision-title").value = titles[currentType];
  renderPeople();
  renderRecommendations();
  scheduleSave();
}));

document.querySelector("#add-person").addEventListener("click", () => {
  people.push(createPerson(`참여자 ${people.length + 1}`));
  renderPeople();
  peopleList.lastElementChild.querySelector(".person-name").focus();
  scheduleSave();
});

document.querySelector("#calculate-button").addEventListener("click", () => {
  if (!people.length) return showToast("함께 정할 사람을 한 명 이상 추가해 주세요.");
  hasCalculated = true;
  renderRecommendations();
  scheduleSave();
  document.querySelector(".results-column").scrollIntoView({ behavior: "smooth", block: "nearest" });
  const best = recommendationList.querySelector(".recommendation h3");
  if (best) showToast(`모두의 균형을 고려해 ${best.textContent}을(를) 추천해요.`);
});
document.querySelector("#recalculate-button").addEventListener("click", () => {
  hasCalculated = true;
  renderRecommendations();
  scheduleSave();
  const best = recommendationList.querySelector(".recommendation h3");
  if (best) showToast(`현재 선호로 ${best.textContent}을(를) 추천해요.`);
});
document.querySelector("#show-all-candidates").addEventListener("click", () => {
  showAllCandidates = !showAllCandidates;
  renderRecommendations();
  scheduleSave();
});
document.querySelector("#decision-title").addEventListener("input", () => {
  if (hasCalculated) document.querySelector("#results-heading").textContent = document.querySelector("#decision-title").value.trim() || "함께 정할 결정";
  scheduleSave();
});
document.querySelector("#reset-button").addEventListener("click", () => {
  currentType = "destination";
  people = structuredClone(starterPeople);
  hasCalculated = false;
  showAllCandidates = false;
  document.querySelector("#decision-title").value = "우리의 다음 여행";
  document.querySelectorAll(".choice-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.type === currentType));
  renderPeople();
  renderRecommendations();
  scheduleSave();
  showToast("예시 결정으로 초기화했어요.");
});

async function initializeApp() {
  const saved = await restoreState();
  if (saved && Array.isArray(saved.people) && saved.people.every((person) => person?.preferences)) {
    people = saved.people;
    currentType = preferenceOptions[saved.currentType] ? saved.currentType : "destination";
    hasCalculated = Boolean(saved.hasCalculated);
    showAllCandidates = Boolean(saved.showAllCandidates);
    document.querySelector("#decision-title").value = saved.decisionTitle || "우리의 다음 여행";
    document.querySelectorAll(".choice-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.type === currentType));
  }
  renderPeople();
  renderRecommendations();
  registerServiceWorker();
}

initializeApp();