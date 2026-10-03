/**
 * Bloco: Comparison Table (Tabela Comparativa de Tarifas e Produtos)
 * Toranja Design System - Banco Inter
 * Transforma tabelas brutas do Google Docs/Word em matriz comparativa moderna,
 * com rolagem horizontal touch, destaque na coluna Inter e ícones de status.
 */
export default function decorate(block) {
  const table = document.createElement('table');
  table.className = 'toranja-comparison-table';

  const rows = [...block.children];
  if (!rows.length) return;

  // Cabeçalho (primeira linha)
  const headerRow = rows[0];
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');

  [...headerRow.children].forEach((col, idx) => {
    const th = document.createElement('th');
    th.innerHTML = col.innerHTML;
    if (idx === 1 || col.textContent.toLowerCase().includes('inter')) {
      th.classList.add('col-highlight');
      const badge = document.createElement('span');
      badge.className = 'toranja-table-badge';
      badge.textContent = 'Mais Escolhido';
      th.prepend(badge);
    }
    trHead.append(th);
  });
  thead.append(trHead);
  table.append(thead);

  // Corpo da tabela
  const tbody = document.createElement('tbody');
  rows.slice(1).forEach((row) => {
    const tr = document.createElement('tr');
    [...row.children].forEach((col, idx) => {
      const td = document.createElement('td');
      let text = col.textContent.trim().toLowerCase();

      if (text === '[check]' || text === 'sim' || text === 'yes' || text === 'incluso') {
        td.innerHTML = `<span class="icon-status is-checked" aria-label="Incluso">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </span>`;
      } else if (text === '[x]' || text === 'nao' || text === 'não' || text === 'no' || text === '-') {
        td.innerHTML = `<span class="icon-status is-cross" aria-label="Não incluso">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </span>`;
      } else {
        td.innerHTML = col.innerHTML;
      }

      if (idx === 1) {
        td.classList.add('col-highlight');
      }
      tr.append(td);
    });
    tbody.append(tr);
  });
  table.append(tbody);

  // Container com rolagem e dica de swipe mobile
  const scrollWrapper = document.createElement('div');
  scrollWrapper.className = 'toranja-table-scroll-wrapper';
  scrollWrapper.append(table);

  const scrollHint = document.createElement('div');
  scrollHint.className = 'toranja-table-scroll-hint';
  scrollHint.innerHTML = '<span>Arraste para os lados para comparar</span> &rarr;';

  block.textContent = '';
  block.append(scrollHint);
  block.append(scrollWrapper);
}
