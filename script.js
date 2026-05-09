// =========================================================
// Portfolio interactions — nav, theme, scroll reveals
// =========================================================

(() => {
  // --- Nav scroll state ---
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // --- Theme toggle (persists in localStorage) ---
  const themeToggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) document.documentElement.dataset.theme = stored;
  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  // --- Scroll reveal via IntersectionObserver ---
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach(el => io.observe(el));

  // --- Smooth scroll for in-page anchors (extra easing on top of CSS) ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const targetId = a.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // --- Footer year ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Subtle parallax on hero terminal ---
  const terminal = document.querySelector('.terminal');
  if (terminal && window.matchMedia('(min-width: 968px)').matches) {
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', e => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      terminal.style.transform = `rotateY(${-6 + x * 6}deg) rotateX(${4 - y * 6}deg)`;
    });
    hero.addEventListener('mouseleave', () => {
      terminal.style.transform = 'rotateY(-6deg) rotateX(4deg)';
    });
  }
})();
