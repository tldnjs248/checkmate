/* ══════════════════════════════════════════════════════════════════════
   MY BOARD — 판 움직이기 · 미니 판 그리기 (2026-11-24)

   이 파일이 죽어도 페이지는 그대로 쓸 수 있다.
     · 판은 overflow:auto 라 손가락 · 휠 · 방향키로 움직인다
     · 색이 차오르는 것은 전부 CSS (:hover · :focus-within)
   여기서 더해 주는 것은 네 가지다.
     1 미니 판 — 그 말이 갈 수 있는 칸
     2 줄 · 칸 이름 (a~h · 1~5)
     3 끌어서 움직이기 · 말로 바로 가기 · 지금 보는 자리
     4 손가락만 쓰는 기기에서 눌러 색 채우기
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var view = document.getElementById('bd-view');
  var canvas = document.getElementById('bd-canvas');
  if (!view || !canvas) return;

  var CW = 2880, CH = 1800, CELL = 360;   /* 판 크기와 칸 크기 — board.css 와 같은 값 */
  var pieces = [].slice.call(canvas.querySelectorAll('.bd-piece'));

  /* ── 1 · 미니 판 ────────────────────────────────────────────────
     말은 늘 (가로 3, 세로 4) 칸에 세운다. 거기서 갈 수 있는 칸을 센다.
     d 는 차는 차례다 — 가까운 칸부터 켜진다. */
  var AT = { c: 3, r: 4 };
  var GLYPH = { rook: '♜', knight: '♞', bishop: '♝' };

  function movesOf(kind) {
    var out = {}, i, c, r;
    function put(c, r, d) {
      if (c < 0 || c > 7 || r < 0 || r > 7) return;
      var k = c + ',' + r;
      if (out[k] === undefined || out[k] > d) out[k] = d;
    }
    if (kind === 'rook') {
      for (i = 1; i <= 7; i++) {
        put(AT.c + i, AT.r, i); put(AT.c - i, AT.r, i);
        put(AT.c, AT.r + i, i); put(AT.c, AT.r - i, i);
      }
    } else if (kind === 'bishop') {
      for (i = 1; i <= 7; i++) {
        put(AT.c + i, AT.r + i, i); put(AT.c - i, AT.r - i, i);
        put(AT.c + i, AT.r - i, i); put(AT.c - i, AT.r + i, i);
      }
    } else {                                   /* knight — 여덟 칸을 시계 방향으로 */
      var L = [[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]];
      for (i = 0; i < L.length; i++) put(AT.c + L[i][0], AT.r + L[i][1], i + 1);
    }
    return out;
  }

  [].slice.call(document.querySelectorAll('.bd-mini')).forEach(function (mini) {
    var kind = mini.getAttribute('data-piece');
    var mv = movesOf(kind), r, c, cell, key;
    for (r = 0; r < 8; r++) {
      for (c = 0; c < 8; c++) {
        cell = document.createElement('i');
        if ((r + c) % 2) cell.className = 'dk';
        key = c + ',' + r;
        if (c === AT.c && r === AT.r) {
          cell.className = 'pc';
          cell.textContent = GLYPH[kind] || '';
        } else if (mv[key] !== undefined) {
          cell.className += (cell.className ? ' ' : '') + 'mv';
          cell.style.setProperty('--d', mv[key]);
        }
        mini.appendChild(cell);
      }
    }
  });

  /* ── 2 · 줄 · 칸 이름 ──────────────────────────────────────────── */
  var FILES = 'abcdefgh', ranks = CH / CELL;      /* 가로 8칸 · 세로 5칸 */
  (function () {
    var i, el;
    for (i = 0; i < CW / CELL; i++) {
      el = document.createElement('span');
      el.className = 'bd-lab';
      el.textContent = FILES.charAt(i);
      el.style.left = (i * CELL) + 'px';
      el.style.top = '14px';
      el.style.width = CELL + 'px';
      el.style.textAlign = 'center';
      canvas.appendChild(el);
    }
    for (i = 0; i < ranks; i++) {
      el = document.createElement('span');
      el.className = 'bd-lab';
      el.textContent = String(ranks - i);            /* 체스처럼 아래가 1 */
      el.style.left = '16px';
      el.style.top = (i * CELL) + 'px';
      el.style.height = CELL + 'px';
      el.style.lineHeight = CELL + 'px';
      canvas.appendChild(el);
    }
  })();

  /* 좁은 화면에서는 판을 세로로 펴기 때문에 아래 기능이 모두 뜻을 잃는다 */
  function isCanvas() {
    return view.scrollWidth - view.clientWidth > 4;
  }

  /* 말 하나하나의 offset 값은 줄이기 전(2880×1800) 자리다.
     스크롤 값은 줄인 뒤 자리라서, 둘을 섞어 쓸 때는 늘 k 를 곱해 준다. */
  var k = 1;
  function readK() {
    var v = parseFloat(getComputedStyle(view).getPropertyValue('--k'));
    k = v > 0 ? v : 1;
  }
  readK();

  /* 판 높이 — 머리말이 차지한 높이를 실제로 재서 창 안에 딱 맞춘다.
     css 의 clamp() 는 머리말 길이를 모르니 늘 조금 모자라거나 넘친다. */
  function fitHeight() {
    if (window.innerWidth <= 900) { view.style.height = ''; return; }
    var y = 0, el = view;
    while (el) { y += el.offsetTop; el = el.offsetParent; }
    var h = window.innerHeight - y - 24;
    view.style.height = Math.max(440, Math.min(940, h)) + 'px';
  }
  fitHeight();

  /* ── 3 · 끌어서 움직이기 ───────────────────────────────────────
     손가락은 브라우저가 이미 잘 굴려 주니 쥐 · 펜만 받는다. */
  var drag = null;
  view.addEventListener('pointerdown', function (e) {
    if (e.button !== 0 || e.pointerType === 'touch' || !isCanvas()) return;
    if (e.target.closest('a,button')) return;
    drag = { x: e.clientX, y: e.clientY, sl: view.scrollLeft, st: view.scrollTop, id: e.pointerId, on: false };
  });
  view.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.on) {
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;   /* 누르기와 끌기를 가른다 */
      drag.on = true;
      view.classList.add('is-drag');
      try { view.setPointerCapture(drag.id); } catch (err) {}
    }
    view.scrollLeft = drag.sl - dx;
    view.scrollTop = drag.st - dy;
    e.preventDefault();
  });
  function endDrag(e) {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    if (drag.on) {
      view.classList.remove('is-drag');
      try { view.releasePointerCapture(drag.id); } catch (err) {}
    }
    drag = null;
  }
  view.addEventListener('pointerup', endDrag);
  view.addEventListener('pointercancel', endDrag);
  window.addEventListener('blur', endDrag);

  /* ── 말로 바로 가기 ────────────────────────────────────────────── */
  var slow = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goTo(el, smooth) {
    if (!isCanvas()) { el.scrollIntoView({ block: 'start', behavior: smooth && !slow ? 'smooth' : 'auto' }); return; }
    var w = el.offsetWidth * k, h = el.offsetHeight * k;
    var left = el.offsetLeft * k - (view.clientWidth - w) / 2;
    var top = h > view.clientHeight - 48
      ? el.offsetTop * k - 24                              /* 머리말이 잘리지 않게 위를 맞춘다 */
      : el.offsetTop * k - (view.clientHeight - h) / 2;
    view.scrollTo({ left: left, top: top, behavior: smooth && !slow ? 'smooth' : 'auto' });
  }

  var jumps = [].slice.call(document.querySelectorAll('.bd-jump button'));
  jumps.forEach(function (b) {
    b.addEventListener('click', function () {
      var el = document.getElementById(b.getAttribute('data-go'));
      if (!el) return;
      goTo(el, true);
      /* 눌러서 간 말은 색을 채워 둔다 — 쥐가 없어도 단추만으로 다 볼 수 있다 */
      pieces.forEach(function (p) { p.classList.toggle('is-on', p === el); });
    });
  });
  /* 판을 손으로 움직이면 채워 둔 색은 거둔다 (쥐로는 올려 보는 것이 기본이다).
     손가락 기기는 눌러서 켜고 끄는 쪽이라 건드리지 않는다. */
  view.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'touch') return;
    pieces.forEach(function (p) { p.classList.remove('is-on'); });
  });

  /* ── 지금 보는 자리 ────────────────────────────────────────────── */
  var map = document.getElementById('bd-map'), box = null, K = 0;
  if (map) {
    K = 180 / CW;
    map.style.height = Math.round(CH * K) + 'px';
    pieces.concat([].slice.call(canvas.querySelectorAll('.bd-next'))).forEach(function (p) {
      var d = document.createElement('span');
      d.className = 'bd-map__p';
      d.style.left = (p.offsetLeft * K) + 'px';
      d.style.top = (p.offsetTop * K) + 'px';
      d.style.width = Math.max(3, p.offsetWidth * K) + 'px';
      d.style.height = Math.max(3, p.offsetHeight * K) + 'px';
      map.appendChild(d);
    });
    box = document.createElement('span');
    box.className = 'bd-map__v';
    map.appendChild(box);

    map.addEventListener('click', function (e) {
      if (!isCanvas()) return;
      var r = map.getBoundingClientRect(), s = K / k;   /* 스크롤 자리 → 작은 판 자리 */
      view.scrollTo({
        left: (e.clientX - r.left) / s - view.clientWidth / 2,
        top: (e.clientY - r.top) / s - view.clientHeight / 2,
        behavior: slow ? 'auto' : 'smooth'
      });
    });
  }

  function paint() {
    if (box) {
      var s = K / k;
      box.style.left = (view.scrollLeft * s) + 'px';
      box.style.top = (view.scrollTop * s) + 'px';
      box.style.width = Math.min(view.clientWidth, CW * k) * s + 'px';
      box.style.height = Math.min(view.clientHeight, CH * k) * s + 'px';
    }
    /* 지금 한가운데에 가장 가까운 말을 조작 줄에서도 짚어 준다 */
    var cx = view.scrollLeft + view.clientWidth / 2, cy = view.scrollTop + view.clientHeight / 2;
    var best = null, bd = Infinity;
    pieces.forEach(function (p) {
      var dx = (p.offsetLeft + p.offsetWidth / 2) * k - cx;
      var dy = (p.offsetTop + p.offsetHeight / 2) * k - cy;
      var d = dx * dx + dy * dy;
      if (d < bd) { bd = d; best = p.id; }
    });
    jumps.forEach(function (b) {
      b.classList.toggle('is-near', b.getAttribute('data-go') === best);
    });
  }

  var tick = 0;
  view.addEventListener('scroll', function () {
    if (tick) return;
    tick = requestAnimationFrame(function () { tick = 0; paint(); });
  }, { passive: true });
  window.addEventListener('resize', function () { readK(); fitHeight(); paint(); });

  /* ── 4 · 손가락만 쓰는 기기 — 눌러서 색 채우기 ──────────────────── */
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
    var hint = document.querySelector('.bd-hint');
    if (hint) hint.textContent = '눌러서 색을 채워 보세요';
    pieces.forEach(function (p) {
      p.addEventListener('click', function () {
        var on = p.classList.contains('is-on');
        pieces.forEach(function (q) { q.classList.remove('is-on'); });
        if (!on) p.classList.add('is-on');
      });
    });
  }

  /* ── 처음 자리 — 첫 말을 가운데 놓고 연다 ───────────────────────── */
  if (pieces.length) goTo(pieces[0], false);
  paint();
})();
