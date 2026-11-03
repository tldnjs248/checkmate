const projects = [
  {
    id: 'korail-talk',
    title: '코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선',
    meta: 'UX 개선 보고서 · 사용성 평가 · 화면설계서',
    period: '2026.03 — 07 · Team Project',
    description: '코레일톡 내 예약 승차권 정보가 여러 메뉴에 분산되어 발생하는 탐색 문제를 사용성 평가로 검증하고, 조회 구조와 사용자 경로를 개선한 프로젝트입니다.',
    blocks: [
      ['POSITION', '담당 역할', ['철도 이용 환경 및 관련 문헌 조사 · 아이트래킹 및 사용성 평가 결과 분석 · 평가 범위 확장 제안과 개선 우선순위 재설정']],
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
      ['POSITION', '담당 범위', ['팀장 · 사용자 및 트렌드 조사 · 서비스 구조 설계 · 공간별 경험 및 영상 시나리오 기획']],
      ['CHECK', '확인한 조건', [
        '시각적으로 화려한 기술만으로는 실제 주거 환경에서 지속 가능한 경험을 만들기 어려웠습니다.',
        '사용자가 일상에서 자연스럽게 이용할 수 있는지, 콘텐츠를 지속해서 제작 · 교체 · 운영할 수 있는지를 검토하고, 서비스의 가치를 영상 안에서 설득력 있게 전달해야 했습니다.',
      ]],
      ['MOVE', '결정적인 수', [
        '기술의 화려함보다 적용 가능성과 운영 지속성을 우선 기준으로 설정해 기술 범위를 좁혔습니다.',
        '사용자 요구를 공간 룸 콘셉트와 이용 시나리오로 구체화하고, 서비스의 핵심 경험이 장면과 흐름으로 전달되도록 영상 스토리보드를 설계했습니다.',
      ]],
      ['CHECKMATE', '확인된 결과', ['커뮤니케이션 국제 어워드 특별상 수상']],
    ],
  },
  {
    id: 'lotte-cinema',
    title: '롯데시네마 | 특별관 탐색 경험 개선',
    meta: 'UXUI 개선 제안서 · 현장 관찰 · 화면설계서',
    period: '2026.09 — 12 · Team Project',
    description: '영화 산업과 롯데시네마의 사업 전략을 조사하고, 특별관 이용을 유도하려는 오프라인 경험이 앱의 탐색 과정까지 연결되지 않는 문제를 구체화했습니다. 사용자가 관람 목적에 맞는 특별관을 쉽게 발견하고 비교 · 선택할 수 있도록 탐색 구조를 개선했습니다.',
    blocks: [
      ['POSITION', '담당 범위', ['영화 산업 및 기업 분석 · 서비스 문제 정의 · 정보구조 설계 · 산업 · 현장 조사와 개선 방향을 잇는 논거 구성']],
      ['CHECK', '확인한 문제', [
        '롯데시네마는 OTT와 차별화되는 극장 경험을 강화하고, 이를 통해 특별관 이용을 확대하는 사업 방향을 추진하고 있었습니다.',
        '현장에서도 특별관을 적극적으로 홍보하고 있었지만, 앱에서는 관련 정보가 여러 경로에 분산돼 있었고 메뉴 체계도 사용자가 예상하기 어려운 구조였습니다. 이로 인해 특별관의 발견과 비교, 선택까지 이어지는 탐색 경험이 단절되어 있었습니다.',
      ]],
      ['MOVE', '결정적인 수', [
        '특별관을 개별적으로 소개하는 방식에서 벗어나, 사용자의 관람 목적과 선택 기준에 따라 특별관을 탐색하고 비교할 수 있도록 개선 방향을 설정했습니다.',
        '오프라인에서 강조되는 특별관 경험이 앱 안의 실제 선택으로 이어지도록 정보구조와 레이블링을 재설계하고 있습니다.',
      ]],
      ['CHECKMATE', '현재 단계', ['특별관 탐색 정보구조 및 화면설계서 제작 중 · 프로토타입을 통한 사용성 검증 예정']],
    ],
  },
];

const chevron = '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="5 9 12 16 19 9"/></svg>';

/* 상세 네 줄은 처음부터 펼쳐 둔다 — 근거를 먼저 보여 주고, 접는 것은 선택으로 남긴다 */
document.querySelector('#project-list').innerHTML = projects.map((project, index) => `
  <article class="project is-open" id="project-${index + 1}">
    <a class="project__media placeholder" href="project-detail.html?project=${project.id}" aria-label="${project.title} 상세 페이지로 이동"></a>
    <div class="project__side placeholder" aria-hidden="true"></div>
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

/* ABOUT 미리보기의 SKILLS — 소개 페이지 역량표와 같은 세 분류 · 같은 순서를 쓴다 */
const skills = [
  {
    label: '도구',
    rows: [
      ['Figma', '와이어프레임 · 프로토타입 제작, 문서 제작'],
      ['PowerPoint', '정보구조도 · 화면설계서 작성, 발표 장표 제작'],
      ['Excel', '사용성 평가 데이터 정리, 설문 결과 취합 및 기초 분석'],
    ],
  },
  {
    label: 'AI 활용',
    rows: [
      ['ChatGPT · Claude', '리서치 보조, 생성형 이미지 제작, AI 기반 웹 프로토타입 구현'],
      ['Gemini · NotebookLM', '사례조사 자료 탐색, 문서 요약 및 정보 비교'],
    ],
  },
  {
    label: 'UX · UI 리서치 · 설계',
    rows: [
      ['심층인터뷰(FGI) · 에스노그라피', '타운왓칭 · 인터뷰 기반 사용자 니즈 도출, 조사 보고서 작성'],
      ['사용성 테스트(UT) · 아이트래킹', '평가 시나리오 설계 · 진행, 결과 분석 및 개선 우선순위 도출'],
      ['트렌드 분석 · 벤치마킹', '사례조사 기반 구현 방식 검토 및 개선안 도출'],
      ['페르소나 · 시나리오 · 스토리보드', '사용자 정의, 서비스 · 영상 흐름 구체화'],
      ['정보구조도(IA) · 화면설계', '분산된 기능 재구조화 및 개선 화면 설계'],
    ],
  },
];

document.querySelector('#skill-list').innerHTML = skills.map((skill, index) => `
  <div class="skill is-open">
    <button class="skill-toggle" type="button" aria-expanded="true" aria-controls="skill-detail-${index + 1}">
      <strong>${skill.label}</strong>
      <i aria-hidden="true">−</i>
    </button>
    <div class="skill-detail is-open" id="skill-detail-${index + 1}">
      ${skill.rows.map(([name, use]) => `<div class="skill-row"><strong>${name}</strong><p>${use}</p></div>`).join('')}
    </div>
  </div>
`).join('');

document.querySelectorAll('.skill-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.closest('.skill').classList.toggle('is-open', open);
    document.getElementById(button.getAttribute('aria-controls')).classList.toggle('is-open', open);
    button.querySelector('i').textContent = open ? '−' : '＋';   /* 소개 페이지와 같은 기호 */
  });
});
