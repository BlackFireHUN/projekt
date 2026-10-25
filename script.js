const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
const toTop = document.querySelector('#toTop');
const feedbackForm = document.querySelector('#feedbackForm');
const formMessage = document.querySelector('#formMessage');

// Mobilon a menü a hivatkozás kiválasztása után bezárul.
function closeMenu() {
  mainNav.classList.remove('mobile-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Menü megnyitása');
}

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('mobile-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Menü bezárása' : 'Menü megnyitása');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

// A vissza gomb csak akkor látszik, ha már lejjebb görgettünk.
window.addEventListener('scroll', () => toTop.classList.toggle('visible', window.scrollY > 450));
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.querySelector('#year').textContent = new Date().getFullYear();

// Bemutató űrlap: ellenőrzi a kötelező mezőket, de nem küld adatot szerverre.
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!feedbackForm.reportValidity()) return;
  formMessage.textContent = 'Köszönjük a visszajelzést! A bemutató verzióban a válaszok nem kerülnek mentésre.';
  feedbackForm.reset();
});
