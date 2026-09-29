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
  food: [
    { name: "김치찌개와 계란말이", detail: "익숙하고 든든하게 즐기는 따뜻한 한식 한 상", tags: ["한식", "국물 요리", "돼지고기", "매콤한 맛", "따뜻한 음식", "밥과 함께", "유제품 없음"] },
    { name: "불고기 비빔밥", detail: "고기와 채소를 한 그릇에 담은 균형 잡힌 메뉴", tags: ["한식", "소고기", "밥과 함께", "채소 듬뿍", "맵지 않은 음식", "따뜻한 음식", "글루텐 없음"] },
    { name: "들깨 버섯 칼국수", detail: "고소한 들깨 국물과 버섯을 곁들인 면 요리", tags: ["한식", "면 요리", "채식 가능", "국물 요리", "따뜻한 음식", "유제품 없음", "견과류 포함"] },
    { name: "제육볶음 정식", detail: "매콤달콤한 돼지고기와 밥으로 든든하게", tags: ["한식", "돼지고기", "매콤한 맛", "밥과 함께", "따뜻한 음식", "글루텐 포함", "가성비"] },
    { name: "삼계탕", detail: "닭과 인삼을 푹 끓인 담백한 보양식", tags: ["한식", "닭고기", "국물 요리", "맵지 않은 음식", "따뜻한 음식", "밥과 함께", "글루텐 없음"] },
    { name: "회덮밥", detail: "신선한 생선과 채소를 새콤하게 비벼 먹어요", tags: ["한식", "해산물", "날음식", "밥과 함께", "채소 듬뿍", "차가운 음식", "매콤한 맛", "글루텐 포함"] },
    { name: "들기름 막국수", detail: "메밀 향과 들기름의 고소함을 살린 담백한 한 그릇", tags: ["한식", "면 요리", "채식 가능", "맵지 않은 음식", "차가운 음식", "견과류 포함", "유제품 없음"] },
    { name: "순두부찌개", detail: "부드러운 두부와 얼큰한 국물이 잘 어울려요", tags: ["한식", "채식 가능", "국물 요리", "매콤한 맛", "따뜻한 음식", "밥과 함께", "유제품 없음"] },
    { name: "초밥 모둠", detail: "여러 생선과 밥을 조금씩 맛보는 일본식 메뉴", tags: ["일식", "해산물", "날음식", "밥과 함께", "맵지 않은 음식", "차가운 음식", "글루텐 포함", "고가 메뉴"] },
    { name: "돈카츠", detail: "바삭한 튀김옷과 육즙 있는 돼지고기 조합", tags: ["일식", "돼지고기", "튀김", "맵지 않은 음식", "따뜻한 음식", "유제품 포함", "글루텐 포함"] },
    { name: "연어 덮밥", detail: "연어와 아보카도를 곁들인 산뜻한 덮밥", tags: ["일식", "해산물", "날음식", "밥과 함께", "차가운 음식", "맵지 않은 음식", "글루텐 없음"] },
    { name: "미소 라멘", detail: "진한 된장 육수와 면, 토핑이 어우러진 일본 라멘", tags: ["일식", "면 요리", "돼지고기", "국물 요리", "따뜻한 음식", "글루텐 포함", "유제품 없음"] },
    { name: "마파두부 덮밥", detail: "두부와 다진 고기에 얼얼한 소스를 더했어요", tags: ["중식", "돼지고기", "두부", "매콤한 맛", "밥과 함께", "따뜻한 음식", "글루텐 포함"] },
    { name: "짜장면", detail: "춘장 소스와 쫄깃한 면으로 즐기는 친숙한 중식", tags: ["중식", "면 요리", "돼지고기", "맵지 않은 음식", "따뜻한 음식", "글루텐 포함", "가성비"] },
    { name: "마라탕", detail: "원하는 재료와 맵기를 직접 고르는 얼얼한 국물", tags: ["중식", "국물 요리", "매콤한 맛", "메뉴 선택 자유", "따뜻한 음식", "글루텐 포함"] },
    { name: "꿔바로우와 볶음밥", detail: "새콤달콤한 바삭한 고기와 든든한 볶음밥", tags: ["중식", "돼지고기", "튀김", "밥과 함께", "맵지 않은 음식", "따뜻한 음식", "글루텐 포함"] },
    { name: "마르게리타 피자", detail: "토마토와 바질, 치즈를 올린 클래식 피자", tags: ["이탈리안", "채식 가능", "치즈", "구운 요리", "맵지 않은 음식", "따뜻한 음식", "유제품 포함", "글루텐 포함"] },
    { name: "토마토 파스타", detail: "산뜻한 토마토 소스에 취향에 따라 재료를 더해요", tags: ["이탈리안", "면 요리", "채식 가능", "맵지 않은 음식", "따뜻한 음식", "글루텐 포함", "유제품 없음"] },
    { name: "버섯 크림 리조또", detail: "버섯과 크림의 부드럽고 진한 풍미", tags: ["이탈리안", "채식 가능", "쌀 요리", "따뜻한 음식", "유제품 포함", "글루텐 없음"] },
    { name: "치킨 파히타", detail: "닭고기와 채소를 또띠아에 싸 먹는 멕시칸 요리", tags: ["멕시칸", "닭고기", "채소 듬뿍", "매콤한 맛", "메뉴 선택 자유", "따뜻한 음식", "글루텐 포함"] },
    { name: "비프 타코", detail: "소고기와 살사, 채소를 한입에 즐겨요", tags: ["멕시칸", "소고기", "채소 듬뿍", "매콤한 맛", "글루텐 없음", "메뉴 선택 자유"] },
    { name: "팔라펠 샐러드볼", detail: "병아리콩과 신선한 채소로 만든 든든한 비건 한 그릇", tags: ["중동식", "비건", "채식 가능", "채소 듬뿍", "차가운 음식", "유제품 없음", "글루텐 없음"] },
    { name: "치킨 팟타이", detail: "새콤달콤한 쌀국수와 땅콩의 태국식 볶음면", tags: ["태국식", "닭고기", "면 요리", "매콤한 맛", "따뜻한 음식", "견과류 포함", "글루텐 없음"] },
    { name: "쌀국수", detail: "향긋하고 맑은 육수에 쌀면을 담은 베트남 음식", tags: ["베트남식", "소고기", "면 요리", "국물 요리", "맵지 않은 음식", "따뜻한 음식", "글루텐 없음", "고수"] },
    { name: "그릭 샐러드", detail: "토마토와 오이, 올리브에 페타 치즈를 곁들여요", tags: ["그리스식", "채식 가능", "채소 듬뿍", "차가운 음식", "맵지 않은 음식", "유제품 포함", "글루텐 없음"] },
    { name: "렌틸콩 카레", detail: "향신료와 콩을 푹 끓인 따뜻한 비건 카레", tags: ["인도식", "비건", "채식 가능", "매콤한 맛", "밥과 함께", "따뜻한 음식", "유제품 없음", "글루텐 없음"] },
    { name: "치킨 티카 마살라", detail: "향신료에 재운 닭고기와 부드러운 토마토 크림 소스", tags: ["인도식", "닭고기", "매콤한 맛", "밥과 함께", "따뜻한 음식", "유제품 포함", "글루텐 없음"] },
    { name: "에그 베네딕트", detail: "수란과 홀랜다이즈 소스로 즐기는 브런치 메뉴", tags: ["브런치", "달걀", "맵지 않은 음식", "따뜻한 음식", "유제품 포함", "글루텐 포함"] },
    { name: "두부 포케", detail: "현미밥과 두부, 채소를 골라 담는 가벼운 한 끼", tags: ["하와이안", "비건", "채식 가능", "두부", "밥과 함께", "채소 듬뿍", "메뉴 선택 자유", "유제품 없음"] },
    { name: "떡볶이와 순대", detail: "매콤한 떡볶이와 분식을 함께 즐기는 간식 한 상", tags: ["분식", "매콤한 맛", "돼지고기", "따뜻한 음식", "가성비", "글루텐 포함"] },
    { name: "고구마·두부 샐러드", detail: "구운 고구마와 두부를 곁들인 가벼운 채식 메뉴", tags: ["샐러드", "비건", "채식 가능", "두부", "채소 듬뿍", "맵지 않은 음식", "유제품 없음", "글루텐 없음"] }
  ]
};

const preferenceOptions = {
  destination: {
    likes: ["바다", "자연", "맛집", "카페", "휴식", "액티비티", "문화·전통", "기차 이동", "드라이브", "한적함", "실내 코스", "사진 명소"],
    dislikes: ["장거리 이동", "직접 운전", "사람 많은 곳", "비싼 숙소", "많이 걷기", "촘촘한 일정", "해산물 메뉴", "야외 활동"]
  },
  food: {
    likes: ["한식", "일식", "중식", "이탈리안", "멕시칸", "태국식", "비건", "소고기", "닭고기", "해산물", "면 요리", "국물 요리", "밥과 함께", "채소 듬뿍", "매콤한 맛", "맵지 않은 음식", "따뜻한 음식", "가성비", "글루텐 없음", "유제품 없음"],
    dislikes: ["매콤한 맛", "날음식", "해산물", "돼지고기", "소고기", "닭고기", "견과류 포함", "글루텐 포함", "유제품 포함", "튀김", "국물 요리", "차가운 음식", "치즈", "달걀", "고수", "고가 메뉴"]
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
  createPerson("민지", { destination: { likes: ["문화·전통", "카페", "기차 이동", "실내 코스"], dislikes: ["사람 많은 곳", "많이 걷기"] }, food: { likes: ["한식", "국물 요리", "맵지 않은 음식", "따뜻한 음식"], dislikes: ["날음식", "매콤한 맛"] } }),
  createPerson("도윤", { destination: { likes: ["자연", "액티비티", "드라이브", "야외 활동"], dislikes: ["장거리 이동", "직접 운전"] }, food: { likes: ["일식", "해산물", "면 요리", "매콤한 맛"], dislikes: ["돼지고기", "유제품 포함"] } }),
  createPerson("서연", { destination: { likes: ["맛집", "사진 명소", "휴식", "도시 여행"], dislikes: ["비싼 숙소", "촘촘한 일정"] }, food: { likes: ["비건", "채소 듬뿍", "가성비", "유제품 없음"], dislikes: ["해산물", "견과류 포함"] } })
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
  moreButton.textContent = showAllCandidates ? "추천 상위 8개만 보기" : `후보 ${ranked.length}개 모두 보기`;
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
    const oppositeGroup = group === "likes" ? "dislikes" : "likes";
    const oppositeSelection = people[index].preferences[currentType][oppositeGroup];
    const oppositeIndex = oppositeSelection.indexOf(choice.dataset.tag);
    if (oppositeIndex !== -1) {
      oppositeSelection.splice(oppositeIndex, 1);
      const oppositeButton = choice.closest(".person-card").querySelector(`[data-pref="${oppositeGroup}"][data-tag="${CSS.escape(choice.dataset.tag)}"]`);
      if (oppositeButton) {
        oppositeButton.setAttribute("aria-pressed", "false");
        oppositeButton.classList.remove(`is-selected-${oppositeGroup === "likes" ? "like" : "dislike"}`);
        oppositeButton.closest(".preference-group").querySelector(".preference-label span").textContent = `${oppositeSelection.length}개 선택`;
      }
    }
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
  const titles = { destination: "우리의 다음 여행", food: "우리 모두의 메뉴" };
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
    people = saved.people.map(normalizeBackupPerson);
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