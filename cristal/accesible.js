// Penumbra: lo que abre algo con clic tambien se abre con el teclado
(function () {
  const SEL = '.item, .tarjeta, .ax, .salto', marcar = () => document.querySelectorAll(SEL).forEach(e => { if (!e.hasAttribute('tabindex')) { e.tabIndex = 0; e.setAttribute('role', 'button'); } });
  addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches(SEL)) { e.preventDefault(); e.target.click(); } });
  new MutationObserver(marcar).observe(document.body, { childList: true, subtree: true }); marcar();
  if (/[?&]diag=1/.test(location.search)) document.body.classList.add('diag');
})();
