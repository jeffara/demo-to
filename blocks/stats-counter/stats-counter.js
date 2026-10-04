/** Números autorados, com animação opcional sem alterar o valor persistido. */
import { read, el, plain, take, instrument, finish, editing, cleanup } from '../../scripts/toranja.js';
export default function decorate(block) {
  const { items } = read(block);
  const grid = el('div', 'toranja-stats-grid');
  for (const item of items) {
    const card = instrument(item.row, el('div', 'toranja-stat-card'));
    card.append(plain(item.value, 'div', 'stat-number'), take(item.label, 'stat-label'));
    grid.append(card);
  }
  finish(block, grid);
  if (!block.classList.contains('animated') || editing() || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const frames = new Set();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      const target = entry.target.querySelector('.stat-number');
      const original = target.textContent;
      const match = original.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/);
      if (!match) continue;
      const value = Number(match[2].replace(',', '.'));
      const precision = match[2].split(/[.,]/)[1]?.length || 0;
      const start = performance.now();
      let frame;
      const tick = now => {
        frames.delete(frame);
        const progress = Math.min(1, (now - start) / 700);
        target.textContent = progress === 1 ? original : match[1] + (value * (1 - (1-progress)**3)).toLocaleString('pt-BR', { minimumFractionDigits: precision, maximumFractionDigits: precision }) + match[3];
        if (progress < 1) { frame = requestAnimationFrame(tick); frames.add(frame); }
      };
      frame = requestAnimationFrame(tick);
      frames.add(frame);
    }
  });
  [...grid.children].forEach(card => observer.observe(card));
  cleanup(block, () => { observer.disconnect(); frames.forEach(cancelAnimationFrame); });
}
