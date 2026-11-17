/* ══════════════════════════════════════════════════════════════
   움직임 — 언제 나타낼지 정하는 곳 (2026-11-18 사용자 지정)

   숨기는 일은 motion.css 가 먼저 해 둔다. 여기서는 화면에 들어온 것에
   `is-in` 을 붙여 띄우기만 한다. 아래 SEQ · SOLO 의 선택자는
   motion.css 의 목록과 **같아야 한다**.

   넣지 않은 곳과 그 이유
     메인 프로젝트   스크롤 멈춤 · 탭 표시 · 호버 영상이 이미 있다. 더 넣으면 서로 싸운다
     역량 · 경력 카드 읽기만 하는 표다. 움직이면 읽기를 방해한다
     목록 첫 진입    훑어보러 오는 곳이라 기다리게 하면 안 된다 (거를 때만 알려 준다)
     상세 본문 이미지 자료 자체가 무겁다. 움직이면 보기 힘들어진다
     푸터 · GNB      색이 바뀌는 것으로 충분하다
     페이지 전환      파일 기반 다중 페이지라 깜빡임만 늘어난다
   ══════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  /* <head> 의 한 줄에게 "나 살아 있다"고 알린다 —
     이게 없으면 3초 뒤에 표시가 떨어지고 글이 그냥 보인다 */
  window.__motion = true;

  const root = document.documentElement;
  if (!root.classList.contains('js-motion')) return;

  const STEP = 90;   /* 한 덩이 안에서 다음 것이 뜨기까지 (ms) — 2026-11-18 60 에서 늘림 */

  /* 차례대로 뜨는 덩이 — [선택자, 차례 간격]. 간격을 적지 않으면 STEP 을 쓴다 */
  const SEQ = [
    /* 메인 히어로 — 첫 3초. 읽는 순서를 눈으로 알려 준다 */
    ['.hero__role, .hero h1, .hero__intro, .hero__actions, .hero__steps li'],
    /* 메인 HOW I PLAY — 큰 칸 셋을 하나씩 천천히. 거리와 시간은 motion.css 가 늘린다 */
    ['.play__step', 160],
    /* 소개 — 머리와 프로필 */
    ['.about-hero__head, .profile__side, .profile__copy'],
    /* 소개 — 수행 스타일 세 칸 */
    ['.playstyle__cards .skill-card'],
  ];

  /* 하나씩 따로 뜨는 것 — 긴 글이라 "여기부터 새 절"을 알려 준다 */
  const SOLO = '.detail-cover, .case-section';

  const all = [];

  SEQ.forEach(([selector, step]) => {
    const gap = step || STEP;
    [...document.querySelectorAll(selector)].forEach((el, i) => {
      /* 여덟 개를 넘기면 기다림이 길어진다 — 거기서부터 다시 센다 */
      el.style.setProperty('--reveal-delay', (i % 8) * gap + 'ms');
      all.push(el);
    });
  });
  document.querySelectorAll(SOLO).forEach((el) => all.push(el));

  const show = (el) => el.classList.add('is-in');

  /* 움직임을 줄이는 설정이거나 관찰 기능이 없으면 그냥 다 보여 준다 */
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    all.forEach(show);
    return;
  }

  /* 화면 아래쪽 10% 는 아직 '들어왔다'고 보지 않는다 —
     눈이 닿기 직전에 떠야 나타나는 것이 보인다 */
  const watcher = new IntersectionObserver((rows) => {
    rows.forEach((row) => {
      if (!row.isIntersecting) return;
      show(row.target);
      watcher.unobserve(row.target);   /* 한 번만. 오르내릴 때마다 깜빡이면 안 된다 */
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.01 });

  all.forEach((el) => watcher.observe(el));
})();
