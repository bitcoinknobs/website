// Minimal JS for smooth scrolling and active nav link
(() => {
  const links = document.querySelectorAll('header nav a[href^="#"]');
  for (const a of links) {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();