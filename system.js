/* HOW I PLAY — 지금 읽는 수 한 칸을 짚는다.
   앞 두 칸은 외곽선만, 마지막 CHECKMATE 칸은 바탕까지 (가르는 일은 CSS 가 한다).
   나머지(호버 · 행 짚기 · 목차)는 CSS 만으로 된다. */
(() => {
  const steps = [...document.querySelectorAll('.play__step')];
  if (!steps.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* 지금 읽는 수 한 칸만 짚는다.
     앞 두 칸은 외곽선만, 마지막 칸은 바탕까지 — 가르는 일은 CSS 가 한다 */
  const tick = () => {
    const eye = innerHeight * 0.45;
    let now = null, near = Infinity;
    steps.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;      /* 화면 밖은 건너뛴다 */
      const d = Math.abs(r.top + r.height / 2 - eye);
      if (d < near) { near = d; now = s; }
    });
    steps.forEach((s) => s.classList.toggle('is-mate', s === now));
  };

  addEventListener('scroll', tick, { passive: true });
  addEventListener('resize', tick);
  tick();
})();
