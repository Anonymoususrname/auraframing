/**
 * loader.js
 * Hides the intro loader after page load,
 * then triggers the hero background zoom animation.
 */
(function initLoader() {

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
      const bg = document.getElementById('heroBg');
      if (bg) bg.classList.add('zoom');
    }, 2600); // minimum loader display time (ms)
  });

})();
