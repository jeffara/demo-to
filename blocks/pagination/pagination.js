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

  // Lógica padrão: página anterior, números 1 a 5, próxima página
  const urlParams = new URLSearchParams(window.location.search);
  const currentPage = parseInt(urlParams.get('pagina') || '1', 10);
  const totalPages = 5;

  // Botão Anterior
  const prevLi = document.createElement('li');
  prevLi.innerHTML = `<a href="?pagina=${Math.max(1, currentPage - 1)}" class="page-link prev-link ${currentPage === 1 ? 'disabled' : ''}" aria-label="Página anterior">&lsaquo;</a>`;
  ul.append(prevLi);

  for (let i = 1; i <= totalPages; i += 1) {
    const li = document.createElement('li');
    const isActive = i === currentPage;
    li.innerHTML = `<a href="?pagina=${i}" class="page-link ${isActive ? 'active' : ''}" ${isActive ? 'aria-current="page"' : ''}>${i}</a>`;
    ul.append(li);
  }

  // Botão Próximo
  const nextLi = document.createElement('li');
  nextLi.innerHTML = `<a href="?pagina=${Math.min(totalPages, currentPage + 1)}" class="page-link next-link ${currentPage === totalPages ? 'disabled' : ''}" aria-label="Próxima página">&rsaquo;</a>`;
  ul.append(nextLi);

  nav.append(ul);
  block.textContent = '';
  block.append(nav);
}
