/* ───────────────────────────────────────────────────────────────
   필터 데이터

   성격(types)    : ux / service / brand / ai   — 한 프로젝트가 여러 개 가질 수 있다
   결과물(outputs): report / proposal / storyboard / plan
   차례(featured) : 1이 맨 앞 — 목록은 늘 이 차례로만 보여 준다
                    (2026-11-18 사용자 지정: 추천순 · 최신순 고르는 칸을 뺐다)

   필터 버튼은 아래 TYPES · OUTPUTS · projects 에서 만들어진다. 그래서
     · 해당 프로젝트가 하나도 없는 옵션  → 버튼이 아예 안 보인다
     · 지금 고른 조건과 겹치는 게 0개인 옵션 → 버튼이 꺼진다(회색)
   결과가 0개인 조합은 누를 수 없으므로 빈 화면이 나오는 경로가 없다.
   프로젝트를 추가·수정할 때 손댈 곳은 projects 배열 하나뿐이다.
   ─────────────────────────────────────────────────────────────── */

const TYPES = [
  ['ux', 'UX 개선'],
  ['service', '서비스 기획'],
  ['brand', '브랜드 / 경험'],
  ['ai', 'AI'],
];

const OUTPUTS = [
  ['report', '보고서'],
  ['proposal', '제안서'],
  ['storyboard', '스토리보드'],
  ['plan', '기획서'],
];

const TYPE_LABEL = Object.fromEntries(TYPES);
const OUTPUT_LABEL = Object.fromEntries(OUTPUTS);

const projects = [
  {
    id: 'portfolio-site',
    featured: 5,
    name: 'CHECKMATE | 포트폴리오 웹사이트 기획·제작',
    description: '문제를 확인하고 근거를 쌓아 방향을 결정하는 기획 과정을 보여주기 위해 포트폴리오 웹사이트를 직접 기획하고 구현한 프로젝트입니다.',
    types: ['ai', 'brand'],
    outputs: ['storyboard'],
    period: '2026.09 — 12',
  },
  {
    id: 'dmd-graduation',
    featured: 4,
    name: "Delight Insight 2026 | LET'S SYNC 브랜딩",
    description: '학과의 다양한 작업을 하나의 브랜드 경험으로 연결하고, 관람 목적에 맞게 웹과 전시 현장을 탐색할 수 있도록 설계한 프로젝트입니다.',
    types: ['brand'],
    outputs: ['plan', 'storyboard'],
    period: '2026.09 — 12',
  },
  {
    id: 'mould',
    featured: 3,
    name: 'MOULD | 공간을 개인화하는 몰입형 미디어 기반 주거 경험 서비스',
    description: '사용자 요구와 기술의 적용·운영 조건을 검토하고, 서비스 콘셉트를 공간별 경험과 태블릿 UX, 영상 시나리오로 구체화한 프로젝트입니다.',
    types: ['service', 'brand'],
    outputs: ['plan'],
    period: '2026.03 — 07',
  },
  {
    id: 'korail-talk',
    featured: 1,
    name: '코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선',
    description: '사용성 평가와 아이트래킹을 통해 예약 승차권의 반복 탐색 문제를 검증하고, 조회 구조와 사용자 경로를 개선한 프로젝트입니다.',
    types: ['ux'],
    outputs: ['report', 'storyboard'],
    period: '2026.03 — 07',
  },
  {
    id: 'lotte-cinema',
    featured: 2,
    name: '롯데시네마 | 특별관 탐색 경험 개선',
    description: '결제 단계에서 UX로 풀 수 있는 부분이 없다고 판단해 결제를 범위에서 덜어내고, 사용자가 한 번에 수행하는 탐색과 예매를 하나의 흐름으로 합쳐 다루자고 제안했습니다. 특별관을 같은 기준으로 비교하고 그 자리에서 예매로 이어지도록 탐색 구조를 개선했습니다.',
    types: ['ux'],
    outputs: ['proposal', 'storyboard'],
    period: '2026.09 — 12',
  },
];

/* 커버 이미지가 있는 프로젝트 — 파일은 images/<id>-wide|side|band.jpg */
const COVER = new Set(['lotte-cinema', 'korail-talk', 'mould', 'dmd-graduation']);

/* 목록 카드 칸은 4:3 이라 16:9 사진을 넣으면 좌우가 25% 잘린다(= 그만큼 확대돼 보인다).
   아래 프로젝트는 4:3 로 따로 만든 사진이 있어 잘리지 않고 제 크기로 들어간다.
   없는 프로젝트는 메인과 같은 -wide.jpg 를 그대로 쓴다. (2026-11-18 사용자 지정) */
const CARD = new Set(['korail-talk']);
const cover = (id) => `images/${id}${CARD.has(id) ? '-card' : '-wide'}.jpg`;

const state = { type: 'all', output: 'all' };
const grid = document.querySelector('#project-grid');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const typeGroup = document.querySelector('[data-filter-group="type"] .filter-options');
const outputGroup = document.querySelector('[data-filter-group="output"] .filter-options');

/* 어떤 조합에 몇 개가 걸리는지 — 버튼 on/off 판단에도 같은 함수를 쓴다 */
const matches = (project, type, output) =>
  (type === 'all' || project.types.includes(type)) &&
  (output === 'all' || project.outputs.includes(output));

const countFor = (type, output) => projects.filter((p) => matches(p, type, output)).length;

/* 필터 버튼 만들기 (전체 + 각 옵션) */
function buildOptions(container, options) {
  container.innerHTML = [['all', '전체'], ...options]
    .map(([value, label], index) => `
      <button type="button" data-value="${value}"
        class="${index === 0 ? 'is-active' : ''}"
        aria-pressed="${index === 0 ? 'true' : 'false'}">${label}</button>
    `)
    .join('');
}

/* 지금 상태에서 누를 수 있는 버튼만 켜 둔다 */
function syncAvailability() {
  typeGroup.querySelectorAll('button').forEach((button) => {
    const value = button.dataset.value;
    if (value === 'all') return;
    button.hidden = countFor(value, 'all') === 0;        // 프로젝트가 없는 성격은 숨김
    button.disabled = countFor(value, state.output) === 0; // 조합이 0개면 비활성화
  });

  outputGroup.querySelectorAll('button').forEach((button) => {
    const value = button.dataset.value;
    if (value === 'all') return;
    button.hidden = countFor('all', value) === 0;
    button.disabled = countFor(state.type, value) === 0;
  });
}

function getVisibleProjects() {
  return projects
    .filter((project) => matches(project, state.type, state.output))
    .sort((a, b) => a.featured - b.featured);
}

/* 처음 그릴 때는 움직이지 않는다 — 목록은 훑어보러 오는 곳이라 기다리게 하면 안 된다 */
let painted = false;

function render() {
  const visible = getVisibleProjects();

  grid.innerHTML = visible.map((project, index) => {
    const tags = [
      ...project.types.map((type) => TYPE_LABEL[type]),
      ...project.outputs.map((output) => OUTPUT_LABEL[output]),
    ];
    return `
      <article class="project-card">
        <a class="project-card__link" href="project-detail.html?project=${project.id}" aria-label="${project.name} 상세 페이지로 이동">
          <div class="project-card__thumb">
            ${COVER.has(project.id) ? `<img class="project-card__img" src="${cover(project.id)}" alt="" loading="lazy" decoding="async">` : '<span class="project-card__ph">이미지 준비 중입니다</span>'}
            <span class="project-card__index">${String(index + 1).padStart(2, '0')}</span>
            <span class="project-card__view">VIEW PROJECT ↗</span>
          </div>
          <div class="project-card__body">
            <div class="project-card__heading">
              <h2>${project.name}</h2>
            </div>
            <p class="project-card__description">${project.description}</p>
            <!-- 기간은 맨 아래 칩 줄 오른쪽 끝에 — 2026-11-18 (사용자 지정) -->
            <p class="project-card__tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}<time>${project.period}</time></p>
          </div>
        </a>
      </article>
    `;
  }).join('');

  grid.hidden = visible.length === 0;
  resultCount.textContent = String(visible.length).padStart(2, '0');
  emptyState.hidden = visible.length !== 0;
  syncAvailability();

  /* 눌렀는데 아무 일도 안 일어난 것처럼 보이면 안 된다 — 150ms 로 한 번 밝아진다.
     차례를 두지 않는 이유: 결과를 빨리 보려고 누른 것이라 기다림이 생기면 안 된다.
     (2026-11-18 사용자 지정) */
  if (painted && grid.animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    grid.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, easing: 'cubic-bezier(.2, 0, 0, 1)' });
  }
  painted = true;
}

/* 버튼 클릭 */
[['type', typeGroup], ['output', outputGroup]].forEach(([key, container]) => {
  container.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button || button.disabled) return;
    state[key] = button.dataset.value;
    container.querySelectorAll('button').forEach((option) => {
      const active = option === button;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-pressed', String(active));
    });
    render();
  });
});

buildOptions(typeGroup, TYPES);
buildOptions(outputGroup, OUTPUTS);
render();
