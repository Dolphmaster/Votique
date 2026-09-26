const navLinksBar = document.getElementById('navLinksBar');
const navLinks = document.getElementById('nav-links');

navLinksBar.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
  navLinks.classList.toggle('flex');
});