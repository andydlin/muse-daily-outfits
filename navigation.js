(() => {
  const menu = document.querySelector('.page-menu');
  if (!menu) return;
  const current = location.pathname.split('/').pop() || 'index.html';
  for (const link of menu.querySelectorAll('a')) {
    if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
  }
  document.addEventListener('pointerdown', event => {
    if (!menu.contains(event.target)) menu.open = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      event.preventDefault();
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  menu.addEventListener('focusout', event => {
    // Touch browsers can blur the summary with no next focus target before
    // dispatching the link click. Keep the links visible until that tap finishes.
    if (event.relatedTarget && !menu.contains(event.relatedTarget)) menu.open = false;
  });
})();
