/* ───────────────────────────────────────────────────────────────
   필터 데이터

   성격(types)    : ux / service / brand / ai   — 한 프로젝트가 여러 개 가질 수 있다
   결과물(outputs): report / proposal / storyboard / plan

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
    name: 'CHECKMATE | AI를 활용한 포트폴리오 웹사이트 기획·제작',
    description: '문제를 확인하고 근거를 쌓아 방향을 결정하는 기획 과정을 보여주기 위해 포트폴리오 웹사이트를 직접 기획하고 구현한 프로젝트입니다.',
    types: ['ai', 'brand'],
    outputs: ['storyboard', 'proposal'],
    period: '2026.09 — 12',
    order: 3,
  },
  {
    id: 'dmd-graduation',
    name: 'DMD Graduation Exhibition | 디지털미디어디자인과 졸업전시 브랜딩',
    description: '학과의 다양한 작업을 하나의 브랜드 경험으로 연결하고, 관람 목적에 맞게 웹과 전시 현장을 탐색할 수 있도록 설계한 프로젝트입니다.',
    types: ['brand'],
    outputs: ['plan', 'storyboard'],
    period: '2026.09 — 12',
    order: 4,
  },
  {
    id: 'mould',
    name: 'MOULD | 공간을 개인화하는 몰입형 미디어 기반 주거 경험 서비스',
    description: '사용자 요구와 기술의 적용·운영 조건을 검토하고, 서비스 콘셉트를 공간별 경험과 태블릿 UX, 영상 시나리오로 구체화한 프로젝트입니다.',
    types: ['service', 'brand'],
    outputs: ['proposal', 'plan'],
    period: '2026.03 — 07',
    order: 2,
  },
  {
    id: 'korail-talk',
    name: '코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선',
    description: '사용성 평가와 아이트래킹을 통해 예약 승차권의 반복 탐색 문제를 검증하고, 조회 구조와 사용자 경로를 개선한 프로젝트입니다.',
    types: ['ux'],
    outputs: ['report', 'storyboard'],
    period: '2026.03 — 07',
    order: 1,
  },
  {
    id: 'lotte-cinema',
    name: '롯데시네마 | 특별관 탐색 경험 개선',
    description: '결제 단계에서 UX로 풀 수 있는 부분이 없다고 판단해 결제를 범위에서 덜어내고, 사용자가 한 번에 수행하는 탐색과 예매를 하나의 흐름으로 합쳐 다루자고 제안했습니다. 특별관을 같은 기준으로 비교하고 그 자리에서 예매로 이어지도록 탐색 구조를 개선했습니다.',
    types: ['ux'],
    outputs: ['proposal', 'storyboard'],
    period: '2026.09 — 12',
    order: 5,
  },
];

const state = { type: 'all', output: 'all', sort: 'newest' };
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
  const filtered = projects.filter((project) => matches(project, state.type, state.output));

  return filtered.sort((a, b) => {
    if (state.sort === 'oldest') return a.order - b.order;
    if (state.sort === 'name') return a.name.localeCompare(b.name, 'ko');
    return b.order - a.order;
  });
}

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
            <span class="project-card__index">${String(index + 1).padStart(2, '0')}</span>
            <span class="project-card__ph">이미지 준비 중입니다</span>
            <span class="project-card__view">VIEW PROJECT ↗</span>
          </div>
          <div class="project-card__body">
            <div class="project-card__heading">
              <h2>${project.name}</h2>
              <time>${project.period}</time>
            </div>
            <p class="project-card__description">${project.description}</p>
            <p class="project-card__tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</p>
          </div>
        </a>
      </article>
    `;
  }).join('');

  grid.hidden = visible.length === 0;
  resultCount.textContent = String(visible.length).padStart(2, '0');
  emptyState.hidden = visible.length !== 0;
  syncAvailability();
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

document.querySelector('#project-sort').addEventListener('change', (event) => {
  state.sort = event.target.value;
  render();
});

buildOptions(typeGroup, TYPES);
buildOptions(outputGroup, OUTPUTS);
render();
