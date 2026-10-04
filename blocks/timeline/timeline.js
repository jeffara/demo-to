/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, number, take, plain, finish, option, instrument } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { items } = read(block),
    track = el(
      "div",
      "toranja-timeline-track " +
        option(block, ["horizontal", "vertical"], "vertical"),
    );
  items.forEach((item, i) => {
    const row = instrument(item.row, el("div", "toranja-timeline-item")),
      node = el("div", "timeline-node"),
      body = el("div", "timeline-content");
    node.append(el("span", "timeline-number", String(i + 1).padStart(2, "0")));
    body.append(
      plain(item.title, "h3", "timeline-step-title"),
      take(item.description, "timeline-step-desc"),
    );
    row.append(node, body);
    track.append(row);
  });
  finish(block, track);
}
