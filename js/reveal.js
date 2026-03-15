/**
 * reveal.js
 * IntersectionObserver-based scroll-reveal.
 *
 * Elements with class="reveal" fade up when they
 * enter the viewport. Called on load + after every
 * page navigation via window.ScrollReveal.observe().
 */
window.ScrollReveal = (function () {

  let observer;

  function createObserver() {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold:   0.1,
      rootMargin: '0px 0px -50px 0px'
    });
  }

  function observe() {
    if (observer) observer.disconnect();
    observer = createObserver();
    const page = document.querySelector('.page.active');
    if (page) {
      page.querySelectorAll('.reveal:not(.visible)')
          .forEach(el => observer.observe(el));
    }
  }

  observe(); // initial call on page load

  return { observe };

})();
