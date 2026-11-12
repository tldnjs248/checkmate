/* ══════════════════════════════════════════════════════════════
   역량 카드 — 2×2 네 장 (시안 470:1813)
   메인(index.html) ABOUT 미리보기와 소개(about.html) SKILLS 가
   같은 카드를 써야 하므로 이 파일 하나로 두고 양쪽에서 불러온다.
   그릴 자리는 두 페이지 모두 #skill-list 다.

   항목 형식 (2026-11-11 사용자 지정)
     · AI · TOOL 은 도구마다 어떻게 쓰는지 한 줄씩 — `이름 — 사용 방법`
     · UX · UI RESEARCH · 협업 역량 은 항목 이름만
       (사용 방법은 소개 페이지가 아니라 이력서에서 보여 준다)
   ══════════════════════════════════════════════════════════════ */
const skills = [
  {
    title: 'UX · UI RESEARCH',
    items: [
      { name: '심층인터뷰(FGI) · 에스노그라피' },
      { name: '사용성 테스트(UT) · 아이트래킹' },
      { name: '트렌드 분석 · 벤치마킹' },
      { name: '페르소나 · 시나리오 · 스토리보드' },
      { name: '정보구조도(IA) · 화면설계' },
    ],
  },
  {
    title: 'AI',
    items: [
      { name: 'Claude', use: 'AI 기반 장표 제작 · 웹 프로토타입 구현' },
      { name: 'ChatGPT', use: '리서치 보조 · 생성형 이미지 제작 · 장표 제작' },
      { name: 'Gemini', use: '문서 요약 및 정보 비교' },
      { name: 'NotebookLM', use: '리서치 및 정보 문서화' },
    ],
  },
  {
    title: 'TOOL',
    items: [
      { name: 'Figma', use: '와이어프레임 · 프로토타입 제작, 문서 제작' },
      { name: 'PowerPoint', use: '정보구조도 · 화면설계서 작성, 발표 장표 제작' },
      { name: 'Excel', use: '사용성 평가 데이터 정리, 설문 결과 기초 분석' },
    ],
  },
  {
    title: '협업 역량',
    items: [
      { name: '경청 · 의견 조율' },
      { name: '역할 분담 · 일정 관리' },
      { name: '근거 기반 의사결정' },
      { name: '문서화 · 산출물 공유' },
    ],
  },
];

/* 카드 오른쪽 아래 그래픽 — 시안(470:1813) 그대로, 체스 말이 지나가는 칸을 그린다.
   칸마다 네모를 따로 그리면 맞닿은 변에 선이 두 번 겹쳐 그 자리만 진해진다.
   그래서 칸을 '변'으로 풀어 놓고 같은 변은 한 번만 그린다. 선 굵기는 카드 테두리와 같은 1px. */
const U = 55;                      /* 칸 한 변 */
const HALF = 0.5;                  /* 선이 화소 한가운데 오도록 좌표를 반 칸 민다 (아래 설명) */

const cellLines = (cells) => {
  const seen = new Set();
  const out = [];
  /* vector-effect 는 물려받지 않는 성질이라 선마다 따로 적는다 — 크기가 줄어도 1px 을 지킨다 */
  const add = (key, d) => { if (seen.has(key)) return; seen.add(key); out.push(`<path d="${d}" vector-effect="non-scaling-stroke"/>`); };
  cells.forEach(([cx, cy]) => {
    const x = cx * U + HALF, y = cy * U + HALF;
    add('h' + x + ',' + y, `M${x} ${y}h${U}`);                 /* 윗변 */
    add('h' + x + ',' + (y + U), `M${x} ${y + U}h${U}`);       /* 아랫변 */
    add('v' + x + ',' + y, `M${x} ${y}v${U}`);                 /* 왼변 */
    add('v' + (x + U) + ',' + y, `M${x + U} ${y}v${U}`);       /* 오른변 */
  });
  return out.join('');
};

/* 1px 선은 좌표에 그대로 그리면 화소 경계에 반씩 걸쳐 흐려진다. 그래서 좌표를 0.5 밀어
   선이 화소 한가운데를 지나게 한다 (그만큼 viewBox 도 1 늘린다).
   shape-rendering="crispEdges" 로도 또렷해지지만, 격자에 맞추다가 선이 통째로
   사라지는 일이 있어 쓰지 않는다. */
const skillArt = (cols, rows, cells) => {
  const w = cols * U + 1, h = rows * U + 1;
  return `<svg class="skill-card__art" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" focusable="false">${cellLines(cells)}</svg>`;
};

const SKILL_ART = [
  /* 리서치 — 비숍처럼 대각선으로 올라가는 세 칸 */
  skillArt(3, 3, [[0, 2], [1, 1], [2, 0]]),
  /* AI — 나이트의 L자 이동 */
  skillArt(2, 3, [[0, 2], [0, 1], [1, 0]]),
  /* 도구 — 룩처럼 상하좌우로 뻗는 십자 */
  skillArt(3, 3, [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]]),
  /* 협업 — 킹이 닿는 아홉 칸 */
  skillArt(3, 3, [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]]),
];

/* 이름만 있는 항목과 `이름 — 사용 방법` 항목을 한 틀에서 그린다 */
const skillItem = (item) => (item.use
  ? `<li><b>${item.name}</b> — ${item.use}</li>`
  : `<li>${item.name}</li>`);

const skillHost = document.querySelector('#skill-list');
if (skillHost) {
  skillHost.innerHTML = skills.map((skill, index) => `
  <article class="skill-card">
    <p class="skill-card__no">/ ${String(index + 1).padStart(3, '0')}</p>
    <h3>${skill.title}</h3>
    <ul>${skill.items.map(skillItem).join('')}</ul>
    ${SKILL_ART[index]}
  </article>
`).join('');
}
