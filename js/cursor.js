/**
 * cursor.js
 * Custom gold dot + lagged ring cursor.
 * Dot snaps instantly; ring follows with lerp smoothing.
 */
(function initCursor() {

  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');

  let mx = 0, my = 0;   // current mouse position
  let rx = 0, ry = 0;   // ring's smoothed position

  const LERP = 0.12; // 0–1 — higher = snappier ring

  /* Track mouse — move dot instantly */
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });

  /* Enlarge ring on interactive elements */
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, [data-page], .faq, .tdot')) {
      ring.style.width = ring.style.height = '54px';
      ring.style.opacity = '.5';
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, [data-page], .faq, .tdot')) {
      ring.style.width = ring.style.height = '38px';
      ring.style.opacity = '1';
    }
  });

  /* Ring lerp animation loop */
  (function animateRing() {
    rx += (mx - rx) * LERP;
    ry += (my - ry) * LERP;
    ring.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`;
    requestAnimationFrame(animateRing);
  })();

})();
