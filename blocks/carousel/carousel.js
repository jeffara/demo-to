/**
 * Bloco: Carousel (Slider Horizontal com Suporte a Swipe e Teclado)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'toranja-carousel-container';

  const track = document.createElement('div');
  track.className = 'toranja-carousel-track';
  track.setAttribute('tabindex', '0');
  track.setAttribute('aria-label', 'Vitrines em Carrossel');

  const slides = [...block.children];
  slides.forEach((slide, i) => {
    slide.className = 'toranja-carousel-slide';
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} de ${slides.length}`);
    track.append(slide);
  });

  // Controles de Navegação
  const controls = document.createElement('div');
  controls.className = 'toranja-carousel-controls';
  controls.innerHTML = `
    <button class="carousel-btn prev-btn" aria-label="Slide anterior">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <div class="carousel-dots" role="tablist"></div>
    <button class="carousel-btn next-btn" aria-label="Próximo slide">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
  `;

  wrapper.append(track);
  wrapper.append(controls);
  block.textContent = '';
  block.append(wrapper);

  // Eventos de Navegação
  const prevBtn = controls.querySelector('.prev-btn');
  const nextBtn = controls.querySelector('.next-btn');

  const scrollSlide = (direction) => {
    const slideWidth = track.querySelector('.toranja-carousel-slide')?.offsetWidth || 300;
    track.scrollBy({ left: direction * (slideWidth + 24), behavior: 'smooth' });
  };

  prevBtn.addEventListener('click', () => scrollSlide(-1));
  nextBtn.addEventListener('click', () => scrollSlide(1));
}
