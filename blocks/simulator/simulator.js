/**
 * Bloco: Simulator (Calculadora Financeira Reativa - 102% CDI vs Poupança)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const rows = [...block.children];
  let title = 'Simule seu Rendimento no Meu Porquinho';
  let subtitle = 'Rendimento automático a 102% do CDI com liquidez diária.';
  let min = 500;
  let max = 100000;
  let defVal = 10000;
  let cdiRate = 0.1075; // 10.75% a.a.

  if (rows[0] && rows[0].textContent.trim()) title = rows[0].textContent.trim();
  if (rows[1] && rows[1].textContent.trim()) subtitle = rows[1].textContent.trim();

  // Permite configuração de valores de simulação na 3ª linha: [default, min, max, taxaCDI]
  if (rows[2]) {
    const cols = [...rows[2].children];
    if (cols[0]) {
      const v = parseFloat(cols[0].textContent.replace(/[^\d.,]/g, '').replace(',', '.'));
      if (!Number.isNaN(v) && v > 0) defVal = v;
    }
    if (cols[1]) {
      const v = parseFloat(cols[1].textContent.replace(/[^\d.,]/g, '').replace(',', '.'));
      if (!Number.isNaN(v) && v > 0) min = v;
    }
    if (cols[2]) {
      const v = parseFloat(cols[2].textContent.replace(/[^\d.,]/g, '').replace(',', '.'));
      if (!Number.isNaN(v) && v > 0) max = v;
    }
    if (cols[3]) {
      const v = parseFloat(cols[3].textContent.replace(/[^\d.,]/g, '').replace(',', '.'));
      if (!Number.isNaN(v) && v > 0) cdiRate = v > 1 ? v / 100 : v;
    }
  }

  const cta = block.querySelector('.button-container, a.button');

  const container = document.createElement('div');
  container.className = 'mini-simulator';

  const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const initialInter = defVal * (1 + (cdiRate * 1.02));
  const initialPoup = defVal * (1 + 0.0617);
  const initialDiff = initialInter - initialPoup;

  container.innerHTML = `
    <div class="sim-header">
      <h3 class="sim-title">${title}</h3>
      <p class="sim-subtitle">${subtitle}</p>
    </div>

    <div class="sim-controls">
      <div class="sim-row">
        <span>Quanto você quer guardar?</span>
        <strong id="sim-display-val">${fmt(defVal)}</strong>
      </div>
      <input type="range" class="sim-slider" min="${min}" max="${max}" step="500" value="${defVal}" aria-label="Valor a guardar" />
    </div>

    <div class="sim-results">
      <div class="sim-res-col highlight">
        <span>No Inter (102% CDI em 1 ano):</span>\n        <strong id="sim-inter-res">${fmt(initialInter)}</strong>\n        <small class="sim-badge">+ ${fmt(initialInter - defVal)} de rendimento</small>
      </div>
      <div class="sim-res-col">
        <span>Na Poupança tradicional:</span>\n        <strong id="sim-poup-res">${fmt(initialPoup)}</strong>\n        <small class="sim-diff-note">Você ganha ${fmt(initialDiff)} a mais no Inter</small>
      </div>
    </div>
  `;

  if (cta) {
    container.append(cta);
  }

  block.innerHTML = '';
  block.append(container);

  const slider = container.querySelector('.sim-slider');
  const displayVal = container.querySelector('#sim-display-val');
  const interRes = container.querySelector('#sim-inter-res');
  const poupRes = container.querySelector('#sim-poup-res');
  const badgeNote = container.querySelector('.sim-badge');
  const diffNote = container.querySelector('.sim-diff-note');

  function updateCalc(val) {
    const interYield = val * (1 + (cdiRate * 1.02));
    const poupYield = val * (1 + 0.0617);
    const diff = interYield - poupYield;

    displayVal.textContent = fmt(val);
    interRes.textContent = fmt(interYield);
    poupRes.textContent = fmt(poupYield);
    badgeNote.textContent = `+ ${fmt(interYield - val)} de rendimento`;
    diffNote.textContent = `Você ganha ${fmt(diff)} a mais no Inter`;
  }

  slider.addEventListener('input', (e) => {
    updateCalc(Number(e.target.value));
  });
}
