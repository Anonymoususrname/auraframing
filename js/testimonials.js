/**
 * testimonials.js
 * Auto-rotating testimonial carousel.
 * Auto-advances every 4.8s; dots reset timer on click.
 */
(function initTestimonials() {

  const TESTI = [
    {
      q: '"Aura Framing captured our wedding beautifully — every frame told our story perfectly. The team was professional, warm, and made us feel completely at ease throughout the day."',
      a: '— Kavitha &amp; Murugan, Coimbatore 2024'
    },
    {
      q: '"The candid shots are absolutely stunning. They captured emotions we didn\'t even know were happening. Our families were in tears when they saw the album. Truly exceptional work."',
      a: '— Meenakshi &amp; Vijay, Erode 2024'
    },
    {
      q: '"We booked Aura Framing for our pre-wedding shoot and were blown away. Creative, patient, and incredibly talented. The photos look like they belong in a magazine!"',
      a: '— Divya &amp; Arun, Tiruppur 2023'
    }
  ];

  const tq   = document.getElementById('tq');
  const ta   = document.getElementById('ta');
  const dots = document.querySelectorAll('.tdot');

  if (!tq || !ta) return;

  let current = 0;
  let timer;

  function show(n) {
    current = n;
    tq.textContent = TESTI[n].q;
    ta.innerHTML   = TESTI[n].a;
    dots.forEach((d, i) => d.classList.toggle('on', i === n));
  }

  function startAutoplay() {
    timer = setInterval(() => show((current + 1) % TESTI.length), 4800);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      show(parseInt(dot.dataset.t, 10));
      startAutoplay();
    });
  });

  startAutoplay();

})();
