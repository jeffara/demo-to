/**
 * Bloco: Pagination (Paginação de Notícias e Comunicados de RI)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const nav = document.createElement('nav');
  nav.className = 'toranja-pagination';
  nav.setAttribute('aria-label', 'Paginação de páginas');

  const ul = document.createElement('ul');
  ul.className = 'pagination-list';

  // Lógica de parâmetros: permite configuração via tabela de autoria ou query string
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get('pagina') || '1', 10);
  let totalPages = 5;
  let baseUrl = '?pagina=';

  const rows = [...block.children];
  if (rows[0]) {
    const cols = [...rows[0].children];
    if (cols[0] && cols[0].textContent.trim()) {
      const p = parseInt(cols[0].textContent.trim(), 10);
      if (!Number.isNaN(p)) currentPage = p;
    }
    if (cols[1] && cols[1].textContent.trim()) {
      const t = parseInt(cols[1].textContent.trim(), 10);
      if (!Number.isNaN(t)) totalPages = t;
    }
    if (cols[2] && cols[2].textContent.trim()) {
      baseUrl = cols[2].textContent.trim();
    }
  }

  // Botão Anterior
  const prevLi = document.createElement('li');
  prevLi.innerHTML = `<a href="${baseUrl}${Math.max(1, currentPage - 1)}" class="page-link prev-link ${currentPage === 1 ? 'disabled' : ''}" aria-label="Página anterior">&lsaquo;</a>`;
  ul.append(prevLi);

  for (let i = 1; i <= totalPages; i += 1) {
    const li = document.createElement('li');
    const isActive = i === currentPage;
    li.innerHTML = `<a href="${baseUrl}${i}" class="page-link ${isActive ? 'active' : ''}" ${isActive ? 'aria-current="page"' : ''}>${i}</a>`;
    ul.append(li);
  }

  // Botão Próximo
  const nextLi = document.createElement('li');
  nextLi.innerHTML = `<a href="${baseUrl}${Math.min(totalPages, currentPage + 1)}" class="page-link next-link ${currentPage === totalPages ? 'disabled' : ''}" aria-label="Próxima página">&rsaquo;</a>`;
  ul.append(nextLi);

  nav.append(ul);
  block.textContent = '';
  block.append(nav);
}
