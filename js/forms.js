/**
 * forms.js
 * Form submit feedback animation.
 *
 * Replace the button click handler body with a real
 * fetch() call to your backend or Formspree/EmailJS.
 */
(function initForms() {

  ['careerSubmit', 'bookingSubmit', 'contactSubmit'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;

    const orig = btn.textContent;

    btn.addEventListener('click', () => {

      /* ── TODO: Add real submission here ──────────────
         Example (Formspree):

         const form  = btn.closest('section');
         const data  = new FormData();
         // Add fields manually or use a <form> wrapper
         fetch('https://formspree.io/f/YOUR_ID', {
           method: 'POST', body: data,
           headers: { 'Accept': 'application/json' }
         }).then(r => r.ok ? success() : alert('Error'));
      ─────────────────────────────────────────────── */

      btn.textContent       = '✦  Sent — we\'ll be in touch soon!';
      btn.style.background  = 'var(--gk)';

      setTimeout(() => {
        btn.textContent      = orig;
        btn.style.background = '';
      }, 4000);
    });
  });

})();
