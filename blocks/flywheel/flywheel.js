/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, number, take, plain, heading, link, finish, instrument } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    grid = el("div", "flywheel-grid"),
    info = el("div", "flywheel-info"),
    cycle = el("div", "flywheel-cycle");
  info.append(
    plain(f.eyebrow, "p", "eyebrow"),
    heading(f.title, "font-display"),
    take(f.description),
    link(f.cta),
  );
  items.forEach((item, i) => {
    const card = instrument(item.row, el("div", "flywheel-step"));
    card.append(
      plain(item.number, "div", "step-num"),
      plain(item.title, "h3", "step-title"),
      take(item.description, "step-desc"),
    );
    cycle.append(card);
  });
  grid.append(info, cycle);
  finish(block, grid);
}
