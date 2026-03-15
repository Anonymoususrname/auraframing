/**
 * router.js
 * SPA navigation with a gold curtain page transition.
 *
 * Flow:
 * 1. Click [data-page="X"]
 * 2. Gold curtain rises from bottom (scaleY 0→1)
 * 3. Old page hidden, new page shown, scroll reset to top
 * 4. Nav active links + navbar colour updated
 * 5. Scroll-reveal re-triggered on new page
 * 6. Curtain falls from top (scaleY 1→0)
 */
(function initRouter() {

  const curtain = document.getElementById('curtain');
  const navbar  = document.getElementById('navbar');

  let currentPage   = 'home';
  let transitioning = false;

  function navigateTo(id) {
    if (transitioning || id === currentPage) return;
    transitioning = true;

    /* Curtain rises from bottom */
    curtain.style.transition      = 'transform .45s cubic-bezier(.77,0,.175,1)';
    curtain.style.transformOrigin = 'bottom';
    curtain.style.transform       = 'scaleY(1)';

    setTimeout(() => {
      /* Swap pages */
      document.getElementById('page-' + currentPage).classList.remove('active');
      document.getElementById('page-' + id).classList.add('active');
      document.getElementById('page-' + id).scrollTop = 0;
      currentPage = id;

      /* Update nav active state */
      document.querySelectorAll('.nav-links a')
        .forEach(a => a.classList.toggle('active', a.dataset.page === id));

      /* Navbar colour: dark on home (over hero), light on inner pages */
      navbar.className = (id === 'home') ? 'solid' : 'light';

      /* Re-trigger scroll-reveal on new page */
      if (window.ScrollReveal) window.ScrollReveal.observe();

      /* Fix service row layout on mobile */
      if (window.fixServiceRows) window.fixServiceRows();

      /* Curtain falls from top */
      curtain.style.transformOrigin = 'top';
      curtain.style.transform       = 'scaleY(0)';
      setTimeout(() => { transitioning = false; }, 460);

    }, 450);
  }

  /* Global click delegation — handles ALL [data-page] links */
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-page]');
    if (!el) return;
    e.preventDefault();
    navigateTo(el.dataset.page);
    document.body.classList.remove('mobile-open');
  });

  /* Mobile nav toggle */
  document.getElementById('hamburger').addEventListener('click', () =>
    document.body.classList.toggle('mobile-open')
  );
  document.getElementById('closeNav').addEventListener('click', () =>
    document.body.classList.remove('mobile-open')
  );

  window.Router = { navigateTo };

})();
