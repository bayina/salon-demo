// Minimal interactivity for demo site.
(function () {
  // Highlight active nav link on scroll.
  const links = document.querySelectorAll('.nav a[href^="#"]');
  const sections = Array.from(links)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  function onScroll() {
    const y = window.scrollY + 120;
    let current = null;
    for (const s of sections) {
      if (s.offsetTop <= y) current = s.id;
    }
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
