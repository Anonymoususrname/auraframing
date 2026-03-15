/**
 * mobile.js
 * Ensures service row images always appear above text
 * on mobile devices (image-first layout regardless of
 * the HTML column order).
 */
(function initMobileLayout() {

  function fixServiceRows() {
    const rows = document.querySelectorAll('.svc-row');
    const isMobile = window.innerWidth <= 960;

    rows.forEach(row => {
      const img = row.querySelector('.svc-row-img');
      const txt = row.querySelector('.svc-txt');
      if (!img || !txt) return;

      if (isMobile) {
        row.style.display        = 'flex';
        row.style.flexDirection  = 'column';
        img.style.order          = '-1'; // always first
        txt.style.order          = '1';
      } else {
        row.style.display        = '';
        row.style.flexDirection  = '';
        img.style.order          = '';
        txt.style.order          = '';
      }
    });
  }

  /* Expose globally so router.js can call after page switch */
  window.fixServiceRows = fixServiceRows;

  window.addEventListener('resize', fixServiceRows);
  fixServiceRows(); // run on load

})();
