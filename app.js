const projects = [
  {
    id: 'lotte-cinema',
    title: '롯데시네마 | 특별관 탐색 경험 개선',
    meta: 'UXUI 개선 제안서 · 현장 관찰 · 화면설계서',
    period: '2026.09 — 12 · Team Project',
    description: '결제 단계에서 UX로 풀 수 있는 부분이 없다고 판단해 결제를 범위에서 덜어내고, 사용자가 한 번에 수행하는 탐색과 예매를 하나의 흐름으로 합쳐 다루자고 제안했습니다. 특별관을 같은 기준으로 비교하고 그 자리에서 예매로 이어지도록 탐색 구조를 개선했습니다.',
    blocks: [
      ['POSITION', '담당 범위', ['일정 관리 · 사용성 평가 · 요구사항 정의 · 프로토타입 · 화면설계서']],
      ['CHECK', '확인한 문제', [
        '1년치 리뷰를 불편 주제 여덟 가지로 나눈 결과, 예매 · 결제 항목은 해결책이 결제 정책과 시스템에 달려 있어 화면 설계로 바꿀 수 있는 것이 거의 없었습니다.',
        '같은 기간 전체 관객 수는 13.8% 줄었지만 특수상영 매출은 46.3% 늘었고, 늘어난 특별관 수요는 경쟁사로 쏠리고 있었습니다. 특별관을 강화하는 사업 방향과 그것이 예매로 이어지지 않는 앱 사이에 간극이 있었습니다.',
      ]],
      ['MOVE', '결정적인 수', [
        '결제를 범위에서 빼고 탐색과 예매를 하나의 흐름으로 합쳐 다루자고 제안했습니다. 이 결정은 팀의 Decision Log에 9월 24일자로 남아 있습니다.',
        '관마다 제각각이던 특별관 소개 글을 다섯 항목으로 맞춰 같은 기준으로 견주게 하고, 비교한 자리에서 그대로 예매로 넘어가도록 예매 화면 안에 특별관 칩과 정보 시트를 넣었습니다.',
      ]],
      ['CHECKMATE', '현재 단계', ['요구사항 정의 · 정보구조 · 사용자 흐름 설계 완료 · 프로토타입 제작 중 · 2차 사용성 평가로 1차와 같은 과업의 성공률 · 소요 시간 비교 예정']],
    ],
  },
  {
    id: 'korail-talk',
    title: '코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선',
    meta: 'UX 개선 보고서 · 사용성 평가 · 화면설계서',
    period: '2026.03 — 07 · Team Project',
    description: '코레일톡 내 예약 승차권 정보가 여러 메뉴에 분산되어 발생하는 탐색 문제를 사용성 평가로 검증하고, 조회 구조와 사용자 경로를 개선한 프로젝트입니다.',
    blocks: [
      ['POSITION', '담당 역할', ['문헌 조사 · 아이트래킹 · 사용성 평가 분석 · 범위 확장 제안']],
      ['CHECK', '확인한 문제', [
        '코레일톡 앱의 좌석 자동배정 불편을 검토하는 과정에서 분석 범위를 예매 이후의 사용자 흐름까지 확장했습니다.',
        '사용성 평가와 아이트래킹 결과, 사용자가 예약 승차권의 위치를 예측하지 못해 여러 화면을 반복적으로 탐색하는 행동을 확인했습니다.',
      ]],
      ['MOVE', '결정적인 수', [
        '예약 승차권 조회 문제를 검증한 결과를 바탕으로, 개선 우선순위를 좌석 자동배정에서 승차권 조회 과정으로 전환했습니다.',
        '이후 벤치마킹 결과를 참고해 팀과 함께 조회 경로와 화면 구조를 재설계하고, 프로토타입을 제작해 개선안의 사용성을 검증했습니다.',
      ]],
      ['CHECKMATE', '확인된 결과', ['예약 승차권 조회 과업의 평균 수행 시간 24.5초 → 6.4초 단축 · 과목 우수작 선정']],
    ],
  },
  {
    id: 'mould',
    title: 'MOULD | 공간을 개인화하는 몰입형 미디어 기반 주거 경험 서비스',
    meta: '서비스 제안서 · 공간 경험 설계 · 영상 스토리보드',
    period: '2026.03 — 07 · Team Project · Project Leader',
    description: '사용자 요구와 기술의 적용 · 운영 조건을 함께 검토해 개인화 주거 서비스의 구조를 설계했습니다. 서비스 콘셉트를 공간별 경험과 태블릿 UX, 영상 시나리오로 연결해 구현 가능성과 전달력을 갖춘 제안으로 구체화했습니다.',
    blocks: [
      ['POSITION', '담당 범위', ['팀장 · 사용자 조사 · 서비스 구조 설계 · 공간 경험 · 영상 시나리오']],
      ['CHECK', '확인한 조건', [
        '시각적으로 화려한 기술만으로는 실제 주거 환경에서 지속 가능한 경험을 만들기 어려웠습니다.',
        '사용자가 일상에서 자연스럽게 이용할 수 있는지, 콘텐츠를 지속해서 제작 · 교체 · 운영할 수 있는지를 검토하고, 서비스의 가치를 영상 안에서 설득력 있게 전달해야 했습니다.',
      ]],
      ['MOVE', '결정적인 수', [
        '팀장으로서 기술의 화려함보다 적용 가능성과 운영 지속성을 우선 기준으로 삼자고 제안해 기술 범위를 좁혔습니다.',
        '사용자 요구를 공간 룸 콘셉트와 이용 시나리오로 구체화하고, 서비스의 핵심 경험이 장면과 흐름으로 전달되도록 영상 스토리보드를 설계했습니다.',
      ]],
      ['CHECKMATE', '확인된 결과', ['커뮤니케이션 국제 어워드 특별상 수상']],
    ],
  },
];

/* 커버 이미지가 있는 프로젝트 — 파일은 images/<id>-wide|side|band.jpg */
const COVER = new Set(['lotte-cinema', 'korail-talk', 'mould', 'dmd-graduation']);

const chevron = '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="5 9 12 16 19 9"/></svg>';

/* 상세 네 줄은 처음부터 펼쳐 둔다 — 근거를 먼저 보여 주고, 접는 것은 선택으로 남긴다 */
document.querySelector('#project-list').innerHTML = projects.map((project, index) => `
  <article class="project is-open" id="project-${index + 1}">
    <a class="project__media${COVER.has(project.id) ? ' has-image' : ' placeholder'}" href="project-detail.html?project=${project.id}" aria-label="${project.title} 상세 페이지로 이동">${COVER.has(project.id) ? `<img src="images/${project.id}-wide.jpg" alt="" loading="lazy" decoding="async">` : ''}</a>
    <div class="project__side${COVER.has(project.id) ? ' has-image' : ' placeholder'}" aria-hidden="true">${COVER.has(project.id) ? `<img src="images/${project.id}-side.jpg" alt="" loading="lazy" decoding="async">` : ''}</div>
    <div class="project__copy">
      <h3><a href="project-detail.html?project=${project.id}">${project.title}</a></h3>
      <p class="project__meta">${project.meta}</p>
      <p class="project__desc">${project.description}</p>
    </div>
    <button class="detail-toggle" type="button" aria-expanded="true" aria-controls="project-detail-${index + 1}" aria-label="${project.title} 상세 정보 접기">${chevron}</button>
    <dl class="project__details is-open" id="project-detail-${index + 1}">
      <div><dt><b>기간</b></dt><dd><p>${project.period}</p></dd></div>
      ${project.blocks.map(([key, label, lines]) => `
      <div><dt><b>${key}</b><span>${label}</span></dt><dd><p>${lines.join(' ')}</p></dd></div>`).join('')}
    </dl>
  </article>
`).join('');

document.querySelectorAll('.detail-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const details = document.getElementById(button.getAttribute('aria-controls'));
    const open = button.getAttribute('aria-expanded') !== 'true';

    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', button.getAttribute('aria-label')
      .replace(open ? '펼치기' : '접기', open ? '접기' : '펼치기'));
    button.closest('.project').classList.toggle('is-open', open);
    details.classList.toggle('is-open', open);
  });
});

/* ABOUT 미리보기의 역량 — 시안 470:1813 의 2×2 카드.
   항목 설명(사용 업무)은 소개 페이지 역량표에 그대로 두고, 여기서는 항목만 짧게 보여 준다. */
const skills = [
  {
    title: 'UX · UI RESEARCH',
    items: [
      '심층인터뷰(FGI) · 에스노그라피',
      '사용성 테스트(UT) · 아이트래킹',
      '트렌드 분석 · 벤치마킹',
      '페르소나 · 시나리오 · 스토리보드',
      '정보구조도(IA) · 화면설계',
    ],
  },
  {
    title: 'AI',
    items: [
      '리서치 보조 · 자료 탐색',
      '생성형 이미지 제작',
      '웹 프로토타입 구현',
      '문서 요약 · 정보 비교',
    ],
  },
  {
    title: 'TOOL',
    items: ['Figma', 'PowerPoint', 'Excel'],
  },
  {
    title: '협업 역량',
    items: [
      '경청 · 의견 조율',
      '역할 분담 · 일정 관리',
      '근거 기반 의사결정',
      '문서화 · 산출물 공유',
    ],
  },
];

/* 카드 오른쪽 아래 선 그래픽 — 네 장이 서로 다른 도형 하나씩을 쓴다 */
const svg = (body) => `<svg class="skill-card__art" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" focusable="false">${body}</svg>`;
const ray = (i, total) => {
  const a = (Math.PI * 2 * i) / total;
  const r1 = 24 + (i % 3) * 7;
  const r2 = 58 + (i % 4) * 8;
  const p = (r) => [(80 + Math.cos(a) * r).toFixed(1), (80 + Math.sin(a) * r).toFixed(1)];
  return `<line x1="${p(r1)[0]}" y1="${p(r1)[1]}" x2="${p(r2)[0]}" y2="${p(r2)[1]}"/>`;
};
const ART = [
  /* 리서치 — 안으로 좁혀 들어가는 사각형 */
  svg('<rect x="22" y="6" width="104" height="148"/><rect x="2" y="38" width="156" height="84"/><rect x="50" y="46" width="48" height="68"/><rect x="67" y="73" width="14" height="14"/>'),
  /* AI — 사방으로 뻗는 선 */
  svg(Array.from({ length: 28 }, (_, i) => ray(i, 28)).join('')),
  /* 도구 — 겹쳐 돌아간 사각형 */
  svg('<rect x="32" y="32" width="96" height="96"/><rect x="32" y="32" width="96" height="96" transform="rotate(9 80 80)"/><rect x="32" y="32" width="96" height="96" transform="rotate(-12 80 80)"/>'),
  /* 협업 — 서로 이어진 원 */
  svg('<circle cx="50" cy="50" r="30"/><circle cx="110" cy="50" r="30"/><circle cx="50" cy="110" r="30"/><circle cx="110" cy="110" r="30"/><line x1="50" y1="50" x2="110" y2="110"/><line x1="110" y1="50" x2="50" y2="110"/>'),
];

document.querySelector('#skill-list').innerHTML = skills.map((skill, index) => `
  <article class="skill-card">
    <p class="skill-card__no">/ ${String(index + 1).padStart(3, '0')}</p>
    <h3>${skill.title}</h3>
    <ul>${skill.items.map((item) => `<li>${item}</li>`).join('')}</ul>
    ${ART[index]}
  </article>
`).join('');
