/**
 * Bloco: Search Bar (Busca Instantânea no Portal via query-index.json)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'toranja-search-box';

  container.innerHTML = `
    <div class="search-input-wrapper">
      <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="search" class="toranja-search-input" placeholder="O que você procura no Inter? (ex: Pix, Cartão Black, Financiamento)" aria-label="Buscar no portal Inter" />
      <button class="search-clear-btn" aria-label="Limpar busca" style="display:none;">&times;</button>
    </div>
    <div class="search-results-dropdown" style="display:none;" role="region" aria-live="polite"></div>
  `;

  const input = container.querySelector('.toranja-search-input');
  const clearBtn = container.querySelector('.search-clear-btn');
  const dropdown = container.querySelector('.search-results-dropdown');

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = input.value.trim().toLowerCase();
    clearBtn.style.display = query ? 'block' : 'none';

    if (!query) {
      dropdown.style.display = 'none';
      return;
    }

    debounceTimer = setTimeout(async () => {
      try {
        const resp = await fetch('/query-index.json');
        if (!resp.ok) throw new Error('Falha ao carregar índice');
        const json = await resp.json();
        const matches = (json.data || []).filter((item) =>
          (item.title && item.title.toLowerCase().includes(query)) ||
          (item.description && item.description.toLowerCase().includes(query))
        ).slice(0, 5);

        if (matches.length > 0) {
          dropdown.innerHTML = matches.map((m) => `
            <a href="${m.path}" class="search-result-item">
              <span class="search-result-title">${m.title}</span>
              <span class="search-result-desc">${m.description || ''}</span>
            </a>
          `).join('');
        } else {
          dropdown.innerHTML = `<div class="search-empty">Nenhum resultado encontrado para "<strong>${query}</strong>"</div>`;
        }
        dropdown.style.display = 'block';
      } catch (e) {
        dropdown.innerHTML = `<div class="search-empty">Pressione Enter para buscar no portal</div>`;
        dropdown.style.display = 'block';
      }
    }, 250);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    dropdown.style.display = 'none';
    input.focus();
  });

  block.textContent = '';
  block.append(container);
}
