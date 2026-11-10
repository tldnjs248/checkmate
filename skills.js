/* ══════════════════════════════════════════════════════════════
   역량 카드 — 2×2 네 장 (시안 470:1813)
   메인(index.html) ABOUT 미리보기와 소개(about.html) SKILLS 가
   같은 카드를 써야 하므로 이 파일 하나로 두고 양쪽에서 불러온다.
   그릴 자리는 두 페이지 모두 #skill-list 다.

   항목 형식 (2026-11-11 사용자 지정)
     · AI 는 도구마다 어떻게 쓰는지 한 줄씩 — `이름 — 사용 방법`
     · TOOL · UX · UI RESEARCH · 협업 역량 은 항목 이름만
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
    items: [{ name: 'Figma' }, { name: 'PowerPoint' }, { name: 'Excel' }],
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

/* 카드 오른쪽 아래 선 그래픽 — 네 장이 서로 다른 도형 하나씩을 쓴다 */
const skillArt = (body) => `<svg class="skill-card__art" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" focusable="false">${body}</svg>`;
const skillRay = (i, total) => {
  const a = (Math.PI * 2 * i) / total;
  const r1 = 24 + (i % 3) * 7;
  const r2 = 58 + (i % 4) * 8;
  const p = (r) => [(80 + Math.cos(a) * r).toFixed(1), (80 + Math.sin(a) * r).toFixed(1)];
  return `<line x1="${p(r1)[0]}" y1="${p(r1)[1]}" x2="${p(r2)[0]}" y2="${p(r2)[1]}"/>`;
};
const SKILL_ART = [
  /* 리서치 — 안으로 좁혀 들어가는 사각형 */
  skillArt('<rect x="22" y="6" width="104" height="148"/><rect x="2" y="38" width="156" height="84"/><rect x="50" y="46" width="48" height="68"/><rect x="67" y="73" width="14" height="14"/>'),
  /* AI — 사방으로 뻗는 선 */
  skillArt(Array.from({ length: 28 }, (_, i) => skillRay(i, 28)).join('')),
  /* 도구 — 겹쳐 돌아간 사각형 */
  skillArt('<rect x="32" y="32" width="96" height="96"/><rect x="32" y="32" width="96" height="96" transform="rotate(9 80 80)"/><rect x="32" y="32" width="96" height="96" transform="rotate(-12 80 80)"/>'),
  /* 협업 — 서로 이어진 원 */
  skillArt('<circle cx="50" cy="50" r="30"/><circle cx="110" cy="50" r="30"/><circle cx="50" cy="110" r="30"/><circle cx="110" cy="110" r="30"/><line x1="50" y1="50" x2="110" y2="110"/><line x1="110" y1="50" x2="50" y2="110"/>'),
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
