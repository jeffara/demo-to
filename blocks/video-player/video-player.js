/**
 * Bloco: Video Player (Vídeo Institucional com Portal Toranja)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const link = block.querySelector('a');
  const videoUrl = link ? link.getAttribute('href') : '';
  const img = block.querySelector('img');
  const posterUrl = img ? img.getAttribute('src') : '';

  const frame = document.createElement('div');
  const portalVariant = ['arch', 'asymmetric', 'pill', 'rounded'].find((v) => block.classList.contains(v)) || 'arch';
  frame.className = ;

  frame.innerHTML = `
    <div class="video-poster-wrapper" style="background-image: url('${posterUrl}')">
      <button class="toranja-play-btn" aria-label="Assistir ao vídeo">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      </button>
    </div>
  `;

  const playBtn = frame.querySelector('.toranja-play-btn');
  playBtn.addEventListener('click', () => {
    let embedUrl = videoUrl;
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      const vidId = videoUrl.split('v=')[1] || videoUrl.split('/').pop();
      embedUrl = `https://www.youtube.com/embed/${vidId}?autoplay=1`;
    }
    frame.innerHTML = `<iframe src="${embedUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="video-iframe"></iframe>`;
  });

  block.textContent = '';
  block.append(frame);
}
