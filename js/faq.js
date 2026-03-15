/**
 * faq.js
 * Click-to-expand FAQ accordion.
 * Uses event delegation — works on all .faq elements.
 */
(function initFaq() {

  document.addEventListener('click', (e) => {
    const faq = e.target.closest('.faq');
    if (faq) faq.classList.toggle('open');
  });

})();
