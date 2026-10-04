/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, take, plain, heading, finish, instrument } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    grid = el("div", "toranja-contacts-grid");
  items.forEach((item) => {
    const card = instrument(item.row, el("article", "toranja-contact-card"));
    card.append(
      plain(item.channel, "h3", "contact-name"),
      take(item.info, "contact-info"),
      plain(item.hours, "p", "contact-hours"),
    );
    grid.append(card);
  });
  finish(block, heading(f.title), take(f.subtitle), grid);
}
