const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? 'Cerrar' : 'Menú';
  });
}

// Funcionalidad Carrusel de Historias
const carousel = document.getElementById('storiesCarousel');
const prevBtn = document.getElementById('prevStory');
const nextBtn = document.getElementById('nextStory');

if (carousel && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -260, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 260, behavior: 'smooth' });
  });
}
