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
   칸은 56×56, 한 칸씩 55 간격으로 놓아 테두리가 맞물린다. */
const sq = (x, y) => `<rect x="${x}" y="${y}" width="56" height="56" vector-effect="non-scaling-stroke"/>`;
const skillArt = (w, h, body) => `<svg class="skill-card__art" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" focusable="false">${body}</svg>`;
const grid3 = () => [0, 55, 110].map((y) => [0, 55, 110].map((x) => sq(x, y)).join('')).join('');

const SKILL_ART = [
  /* 리서치 — 비숍처럼 대각선으로 올라가는 세 칸 */
  skillArt(166, 166, sq(0, 110) + sq(55, 55) + sq(110, 0)),
  /* AI — 나이트의 L자 이동 */
  skillArt(111, 166, sq(0, 110) + sq(0, 55) + sq(55, 0)),
  /* 도구 — 룩처럼 상하좌우로 뻗는 십자 */
  skillArt(166, 166, sq(55, 0) + sq(0, 55) + sq(55, 55) + sq(110, 55) + sq(55, 110)),
  /* 협업 — 킹이 닿는 아홉 칸 */
  skillArt(166, 166, grid3()),
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
