/* ── 메인 프로젝트 블록 ───────────────────────────────────────────
   왼쪽 탭은 화면에 붙어 따라오고, 오른쪽은 세로로 흐른다.
   그냥 스크롤하면 오른쪽이 지나가면서 왼쪽 탭의 짚는 자리가 저절로 옮겨 간다.
   스크롤을 가로채지 않으므로 급한 사람은 그대로 지나가면 된다.
   탭을 누르면 그 프로젝트 자리로 건너뛴다.

   왼쪽 탭  번호 · 이름(작은 라벨) + 한 줄 정의 두 줄 (둘은 같은 위계)
   오른쪽   썸네일 → 제목 한 줄 · 산출물 · 기간 → 설명 → 네 블록 → 자세히 보기

   글은 예전 메인에 있던 것을 그대로 가져왔다 (git HEAD:app.js). */

const WORK = [
  {
    "id": "korail-talk",
    "no": "01",
    "name": "코레일톡",
    "goal": "예약 승차권을 찾느라 앱 안을 헤매지 않게",
    "move": "여러 메뉴에 흩어진 조회 경로를 ‘나의 티켓’으로 통합",
    "title": "코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선",
    "meta": "UX 개선 보고서 · 사용성 평가 · 화면설계서",
    "period": "2026.03 — 07 · Team Project",
    "description": "코레일톡 내 예약 승차권 정보가 여러 메뉴에 분산되어 발생하는 탐색 문제를 사용성 평가로 검증하고, 조회 구조와 사용자 경로를 개선한 프로젝트입니다.",
    "blocks": [
      [
        "POSITION",
        "담당 역할",
        [
          "문헌 조사 · 아이트래킹 · 사용성 평가 분석 · 범위 확장 제안"
        ]
      ],
      [
        "CHECK",
        "확인한 문제",
        [
          "코레일톡 앱의 좌석 자동배정 불편을 검토하는 과정에서 분석 범위를 예매 이후의 사용자 흐름까지 확장했습니다.",
          "사용성 평가와 아이트래킹 결과, 사용자가 예약 승차권의 위치를 예측하지 못해 여러 화면을 반복적으로 탐색하는 행동을 확인했습니다."
        ]
      ],
      [
        "MOVE",
        "결정적인 수",
        [
          "예약 승차권 조회 문제를 검증한 결과를 바탕으로, 개선 우선순위를 좌석 자동배정에서 승차권 조회 과정으로 전환했습니다.",
          "이후 벤치마킹 결과를 참고해 팀과 함께 조회 경로와 화면 구조를 재설계하고, 프로토타입을 제작해 개선안의 사용성을 검증했습니다."
        ]
      ],
      [
        "CHECKMATE",
        "확인된 결과",
        [
          "예약 승차권 조회 과업의 평균 수행 시간 24.5초 → 6.4초 단축 · 과목 우수작 선정"
        ]
      ]
    ]
  },
  {
    "id": "mould",
    "no": "02",
    "name": "MOULD",
    "goal": "인테리어를 바꾸지 않고도 공간의 분위기를 바꿀 수 있게",
    "move": "조명 · 디스플레이 · 프로젝션을 묶어 테마 콘텐츠로 제공",
    "title": "MOULD | 공간을 개인화하는 몰입형 미디어 기반 주거 경험 서비스",
    "meta": "서비스 기획서 · 공간 경험 설계 · 영상 기획",
    "period": "2026.03 — 07 · Team Project",
    "description": "물리적 인테리어 변경 없이 공간 경험을 상황에 따라 전환할 수 있는 서비스를 영상 광고를 통해 제안한 프로젝트입니다.",
    "blocks": [
      [
        "POSITION",
        "담당 범위",
        [
          "팀장 · 사용자 조사 · 서비스 구조 설계 · 공간 경험 · 영상 시나리오"
        ]
      ],
      [
        "CHECK",
        "확인한 조건",
        [
          "시각적으로 화려한 기술만으로는 실제 주거 환경에서 지속 가능한 경험을 만들기 어려웠습니다.",
          "사용자가 일상에서 자연스럽게 이용할 수 있는지, 콘텐츠를 지속해서 제작 · 교체 · 운영할 수 있는지를 검토하고, 서비스의 가치를 영상 안에서 설득력 있게 전달해야 했습니다."
        ]
      ],
      [
        "MOVE",
        "결정적인 수",
        [
          "팀장으로서 기술의 화려함보다 적용 가능성과 운영 지속성을 우선 기준으로 삼자고 제안해 기술 범위를 좁혔습니다.",
          "사용자 요구를 공간 룸 콘셉트와 이용 시나리오로 구체화하고, 서비스의 핵심 경험이 장면과 흐름으로 전달되도록 영상 스토리보드를 설계했습니다."
        ]
      ],
      [
        "CHECKMATE",
        "확인된 결과",
        [
          "커뮤니케이션 국제 어워드 특별상 수상"
        ]
      ]
    ]
  },
  {
    "id": "lotte-cinema",
    "no": "03",
    "name": "롯데시네마",
    "goal": "의도에 맞는 예매 흐름으로 특별관을 제안할 수 있도록",
    "move": "유형별 예매 흐름을 정리하고 특별관 비교 기능을 제공",
    "title": "롯데시네마 | 특별관 탐색 경험 개선",
    "meta": "UXUI 개선 제안서 · 현장 관찰 · 화면설계서",
    "period": "2026.09 — 12 · Team Project",
    "description": "롯데시네마의 특별관을 더 쉽고 편하게 선택할 수 있도록 예매 흐름을 개선한 프로젝트입니다.",
    "blocks": [
      [
        "POSITION",
        "담당 범위",
        [
          "일정 관리 · 사용성 평가 · 요구사항 정의 · 프로토타입 · 화면설계서"
        ]
      ],
      [
        "CHECK",
        "확인한 문제",
        [
          "1년치 리뷰를 불편 주제 여덟 가지로 나눈 결과, 예매 · 결제 항목은 해결책이 결제 정책과 시스템에 달려 있어 화면 설계로 바꿀 수 있는 것이 거의 없었습니다.",
          "같은 기간 전체 관객 수는 13.8% 줄었지만 특수상영 매출은 46.3% 늘었고, 늘어난 특별관 수요는 경쟁사로 쏠리고 있었습니다. 특별관을 강화하는 사업 방향과 그것이 예매로 이어지지 않는 앱 사이에 간극이 있었습니다."
        ]
      ],
      [
        "MOVE",
        "결정적인 수",
        [
          "결제를 범위에서 빼고 탐색과 예매를 하나의 흐름으로 합쳐 다루자고 제안했습니다. 이 결정은 팀의 Decision Log에 9월 24일자로 남아 있습니다.",
          "관마다 제각각이던 특별관 소개 글을 다섯 항목으로 맞춰 같은 기준으로 견주게 하고, 비교한 자리에서 그대로 예매로 넘어가도록 예매 화면 안에 특별관 칩과 정보 시트를 넣었습니다."
        ]
      ],
      [
        "CHECKMATE",
        "현재 단계",
        [
          "요구사항 정의 · 정보구조 · 사용자 흐름 설계 완료 · 프로토타입 제작 중 · 2차 사용성 평가로 1차와 같은 과업의 성공률 · 소요 시간 비교 예정"
        ]
      ]
    ]
  }
];

/* 썸네일 위에 겹쳐 두는 움직이는 자료 — 올리면 커버 위로 떠오른다.
   소리는 넣지 않는다. 소리가 있으면 브라우저가 자동 재생을 막는다.
   움직임 줄이기를 켠 사람에게는 틀지 않고 커버만 보여 준다.
     video  영상 한 편을 꽉 채워 재생
     strip  세로 화면 여러 장을 가로로 늘어놓고 천천히 훑는다 */
const MOTION = {
  mould: { video: "mould.mp4" },
  /* 코레일톡 · 롯데시네마는 영상 준비 중 — 파일이 오면 아래 두 줄을 살리면 된다
     "korail-talk": { video: "korail-tobe.mp4" },
     "lotte-cinema": { video: "lotte-tobe.mp4" }, */
};

const motion = (id) => {
  const m = MOTION[id];
  if (!m) return "";
  if (m.video) return `<video class="work__motion work__motion--video" src="images/${m.video}" muted loop playsinline preload="none" tabindex="-1" aria-hidden="true"></video>`;
  return `<div class="work__motion work__motion--strip" aria-hidden="true">${m.strip.map((f) => `<img src="images/${f}" alt="" loading="lazy" decoding="async">`).join("")}</div>`;
};

const href = (id) => `project-detail.html?project=${id}`;

document.querySelector('#work').innerHTML = `
  <nav class="work__nav" aria-label="메인 프로젝트">
    <ol class="work__list">
      ${WORK.map((w, i) => `
      <li class="work__item${i === 0 ? ' is-current' : ''}">
        <button class="work__trigger" type="button" data-index="${i}" aria-current="${i === 0 ? 'true' : 'false'}">
          <span class="work__item-head"><b>${w.no}</b>${w.name}</span>
          <span class="work__item-line">${w.goal}</span>
          <span class="work__item-line">${w.move}</span>
        </button>
      </li>`).join('')}
    </ol>
  </nav>

  <div class="work__flow">
    ${WORK.map((w, i) => `
    <article class="work__entry" id="work-${i}">
      <a class="work__media" href="${href(w.id)}" tabindex="-1" aria-hidden="true">
        <img src="images/${w.id}-wide.jpg" alt=""${i === 0 ? '' : ' loading="lazy"'} decoding="async">
        ${motion(w.id)}
      </a>
      <div class="work__head">
        <h3 class="work__title"><a href="${href(w.id)}">${w.title}</a></h3>
        <p class="work__spec">${w.meta} · ${w.period}</p>
      </div>
      <p class="work__desc">${w.description}</p>
      <dl class="work__blocks">
        ${w.blocks.map(([key, label, lines]) => `
        <div>
          <dt><b>${key}</b><span>${label}</span></dt>
          <dd>${lines.map((t) => `<p>${t}</p>`).join('')}</dd>
        </div>`).join('')}
      </dl>
    </article>`).join('')}
  </div>`;

/* ── 머리말을 왼쪽 탭 안으로 ──
   `01 / MAIN PROJECTS / 결정적인 수를 만든 프로젝트` 가 탭과 같이 따라붙어야 한다.
   글은 index.html 에 그대로 두고 자리만 옮긴다 — 자바스크립트가 안 돌아도 글은 보인다.
   (2026-11-18 사용자 지정) */
const workHead = document.querySelector('#projects .section-head');
const workNav = document.querySelector('.work__nav');
if (workHead && workNav) workNav.prepend(workHead);

/* ── 썸네일 윗변을 첫 탭 윗변에 맞춘다 ──
   맨 위에서는 머리말만 혼자 위에 있고, 썸네일은 `01 코레일톡` 칸과 같은 줄에 선다.
   스크롤해서 걸리면 머리말과 프로젝트가 둘 다 화면 위 112 가 되어 그때 서로 맞는다.
   내리는 양은 머리말 덩어리 높이 그대로다 — 글이 한 줄 늘어도 따라가야 하므로
   숫자로 박지 않고 잰 값을 --head-h 로 넘긴다. 좁은 화면은 main.css 가 0 으로 되돌린다.
   (2026-11-18 사용자 지정) */
const workBox = document.querySelector('.work');
const setHeadOffset = () => {
  if (!workHead || !workBox) return;
  /* getBoundingClientRect 는 html{zoom:.9} 가 곱해진 값을 준다 — 124.
     안여백은 줄이기 전 좌표계라 138 이 필요하다. offsetHeight 가 그 값이다. */
  workBox.style.setProperty('--head-h', workHead.offsetHeight + 'px');
};
if (workHead && workBox) {
  setHeadOffset();
  addEventListener('resize', setHeadOffset);
  /* 글꼴이 늦게 와서 줄 수가 바뀌면 다시 잰다 */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setHeadOffset);
}

/* ── 지금 보는 프로젝트를 왼쪽 탭에 짚는다 ──
   화면 위에서 40% 지점을 지나는 블록을 '지금'으로 본다.
   스크롤을 막지 않으므로 빨리 내리면 그냥 지나간다. */
const items = [...document.querySelectorAll('.work__item')];
const triggers = [...document.querySelectorAll('.work__trigger')];
const entries = [...document.querySelectorAll('.work__entry')];

const mark = (index) => {
  items.forEach((item, i) => item.classList.toggle('is-current', i === index));
  triggers.forEach((t, i) => t.setAttribute('aria-current', i === index ? 'true' : 'false'));
};

if ('IntersectionObserver' in window) {
  const seen = new Map();
  const watcher = new IntersectionObserver((rows) => {
    rows.forEach((row) => seen.set(row.target, row.isIntersecting));
    const now = entries.findIndex((el) => seen.get(el));
    if (now >= 0) mark(now);
  }, { rootMargin: '-40% 0px -55% 0px' });
  entries.forEach((el) => watcher.observe(el));
}

/* ── 스크롤이 얼라인에서 확실히 멈추게 ──
   CSS 의 scroll-snap-type:proximity 는 '가까우면 붙인다' 는 브라우저 어림짐작이라,
   붙는 거리를 정할 수가 없다. 프로젝트 한 칸이 화면보다 훨씬 길어서
   붙을 자리가 멀다고 판단되면 그냥 지나친다 — 그래서 될 때도 있고 안 될 때도 있었다.

   그래서 손을 멈춘 뒤에 한 번만 거든다. 스크롤이 끝났을 때 가장 가까운 칸의
   윗변이 112(머리말 80 + 32) 에서 TOL 안쪽이면 그 자리로 부드럽게 당긴다.
   TOL 밖이면 아무것도 하지 않는다 — 스크롤을 가로채지 않는다는 규칙은 그대로다.
   (2026-11-18 사용자 지정) */
const SNAP_TOP = 112;      /* 머리말 80 + 32 — CSS 의 scroll-margin-top 과 같은 값 */
const SNAP_TOL = 280;      /* 이 안쪽이면 당긴다 — 2026-11-18 180 에서 키움 */
let snapLock = false;      /* 내가 움직인 스크롤에 내가 다시 반응하지 않도록 */

const snapNearest = () => {
  if (snapLock) { snapLock = false; return; }
  if (innerWidth <= 1100) return;                 /* 좁은 화면은 손대지 않는다 */
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  /* getBoundingClientRect 는 zoom 이 곱해진 값이라 화면 좌표끼리만 견준다 */
  /* html{zoom:.9} 가 걸려 있어 화면 좌표는 0.9 가 곱해진 값이다.
     scrollY 와 getBoundingClientRect 는 같은 자(字)를 쓰므로 목표도 거기에 맞춘다. */
  const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
  const target = SNAP_TOP * zoom;
  let best = null;
  entries.forEach((el) => {
    const d = el.getBoundingClientRect().top - target;
    if (best === null || Math.abs(d) < Math.abs(best)) best = d;
  });
  if (best === null || Math.abs(best) < 2 || Math.abs(best) > SNAP_TOL) return;
  snapLock = true;
  scrollBy({ top: best, behavior: 'smooth' });
};

if ('onscrollend' in window) {
  addEventListener('scrollend', snapNearest);
} else {
  /* scrollend 가 없는 브라우저 — 멈춘 지 140ms 뒤를 끝으로 본다 */
  let timer = 0;
  addEventListener('scroll', () => { clearTimeout(timer); timer = setTimeout(snapNearest, 140); }, { passive: true });
}

triggers.forEach((trigger) => {
  const index = Number(trigger.dataset.index);
  trigger.addEventListener('click', () => {
    mark(index);
    entries[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── 썸네일에 올리면 영상이 돈다 ───────────────────────────────
   올릴 때 비로소 내려받는다(preload="none"). 벗어나면 멈추고 처음으로 돌아간다.
   움직임을 줄이도록 설정한 사람에게는 아무 일도 일어나지 않는다. */
const motionOff = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!motionOff) {
  document.querySelectorAll(".work__media").forEach((media) => {
    const video = media.querySelector("video");
    if (!video) return;
    const play = () => {
      if (video.preload !== "auto") video.preload = "auto";
      video.play().catch(() => { /* 막히면 커버 이미지를 그대로 둔다 */ });
    };
    const stop = () => { video.pause(); video.currentTime = 0; };
    media.addEventListener("pointerenter", play);
    media.addEventListener("pointerleave", stop);
    /* 키보드로 제목에 초점이 가도 같이 돈다 */
    const entry = media.closest(".work__entry");
    entry.addEventListener("focusin", play);
    entry.addEventListener("focusout", stop);
  });
}
