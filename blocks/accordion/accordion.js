/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, take, plain, finish, icon, instrument, uid } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { items } = read(block),
    list = el("div", "accordion-list"),
    group = uid("accordion");
  items.forEach((item) => {
    const detail = instrument(item.row, el("details", "accordion-item")),
      summary = el("summary", "accordion-summary");
    if (!block.classList.contains("multi-open")) detail.name = group;
    summary.append(
      plain(item.question, "span", "accordion-title"),
      el("span", "accordion-icon", "+"),
    );
    detail.append(summary, take(item.answer, "accordion-body"));
    list.append(detail);
  });
  finish(block, list);
}
