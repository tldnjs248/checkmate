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

/* 큰 블록에서 저절로 재생되는 영상 — 화면에 들어오면 틀고 나가면 멈춘다.
   커버 이미지를 깔고 그 위에 겹쳐서, 재생이 시작되면 서서히 나타난다.
   값은 images/ 안의 파일 이름. */
const VIDEO = { mould: 'mould.mp4' };

/* 옆 블록을 아이폰 목업으로 바꾸는 프로젝트 — 그 안에서 To-Be 프로토타입 영상이 돈다.
   영상은 프로토타입(hangnar.github.io/lotte-asis-tobe/tobe.html)을 실제로 눌러가며 찍은 것이다.
   홈 → 영화 찾기 · 스페셜관 → 특별관 바꿔 비교 → 영화 상세 → 상영관별 회차. 17초 · 반복. */
const PHONE = { 'lotte-cinema': { video: 'lotte-tobe.mp4', poster: 'lotte-tobe-poster.jpg' } };

const chevron = '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="5 9 12 16 19 9"/></svg>';

/* 상세 네 줄은 처음부터 펼쳐 둔다 — 근거를 먼저 보여 주고, 접는 것은 선택으로 남긴다 */
document.querySelector('#project-list').innerHTML = projects.map((project, index) => `
  <article class="project is-open" id="project-${index + 1}">
    <a class="project__media${COVER.has(project.id) ? ' has-image' : ' placeholder'}${VIDEO[project.id] ? ' has-video' : ''}" href="project-detail.html?project=${project.id}" aria-label="${project.title} 상세 페이지로 이동">${COVER.has(project.id) ? `<img src="images/${project.id}-wide.jpg" alt="" loading="lazy" decoding="async">` : ''}${VIDEO[project.id] ? `<video class="project__video" data-autoplay src="images/${VIDEO[project.id]}" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1"></video>` : ''}</a>
    ${PHONE[project.id] ? `
    <div class="project__side project__side--phone" aria-hidden="true">
      <div class="phone">
        <i class="phone__key phone__key--action"></i><i class="phone__key phone__key--volup"></i><i class="phone__key phone__key--voldown"></i><i class="phone__key phone__key--power"></i><i class="phone__key phone__key--camera"></i>
        <div class="phone__screen"><video class="phone__video" data-autoplay src="images/${PHONE[project.id].video}" poster="images/${PHONE[project.id].poster}" muted loop playsinline preload="none" tabindex="-1"></video></div>
      </div>
    </div>` : `
    <div class="project__side${COVER.has(project.id) ? ' has-image' : ' placeholder'}" aria-hidden="true">${COVER.has(project.id) ? `<img src="images/${project.id}-side.jpg" alt="" loading="lazy" decoding="async">` : ''}</div>`}
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

/* ── 스크롤 자동 재생 ───────────────────────────────────────────────
   화면 가운데쯤 들어오면 틀고(처음 들어올 때 비로소 내려받는다),
   벗어나면 멈춘다. 끝나면 처음으로 돌아가 계속 반복된다.
   · 소리는 없다 — 소리가 있으면 브라우저가 자동 재생을 막는다
   · 움직임을 줄이도록 설정한 사람에게는 틀지 않고 커버 이미지만 보여 준다 */
const motionOff = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const videos = document.querySelectorAll('video[data-autoplay]');

if (videos.length && !motionOff && 'IntersectionObserver' in window) {
  const watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        if (video.preload !== 'auto') video.preload = 'auto';
        video.play().catch(() => { /* 자동 재생이 막히면 커버 이미지를 그대로 둔다 */ });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.45 });

  videos.forEach((video) => {
    /* 첫 프레임이 실제로 그려진 뒤에 커버 이미지 위로 떠오르게 한다 */
    video.addEventListener('playing', () => video.classList.add('is-playing'));
    watcher.observe(video);
  });
}
