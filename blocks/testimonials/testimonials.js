/**
 * Bloco: Testimonials (Depoimentos e Prova Social de Clientes)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'toranja-testimonials-grid';

  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 2) {
      const quote = cols[0].textContent.trim();
      const author = cols[1].textContent.trim();
      const role = cols.length > 2 ? cols[2].textContent.trim() : 'Cliente Inter';

      const card = document.createElement('div');
      card.className = 'toranja-testimonial-card';
      card.innerHTML = `
        <div class="testimonial-stars" aria-label="Avaliação 5 estrelas">★★★★★</div>
        <p class="testimonial-quote">“${quote}”</p>
        <div class="testimonial-author-box">
          <div class="author-avatar">${author.charAt(0)}</div>
          <div>
            <strong class="author-name">${author}</strong>
            <span class="author-role">${role}</span>
          </div>
        </div>
      `;
      container.append(card);
    }
  });

  block.textContent = '';
  block.append(container);
}
