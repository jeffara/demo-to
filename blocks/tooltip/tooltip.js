/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, plain, finish, uid } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block),
    box = el("div", "toranja-tooltip-container"),
    trigger = el("span", "toranja-tooltip-trigger"),
    popup = plain(f.definition, "span", "toranja-tooltip-popup");
  trigger.tabIndex = 0;
  popup.id = uid("tooltip");
  popup.setAttribute("role", "tooltip");
  trigger.setAttribute("aria-describedby", popup.id);
  trigger.append(
    plain(f.term, "span", "tooltip-term"),
    el("span", "tooltip-badge", "?"),
    popup,
  );
  box.append(trigger);
  finish(block, box);
}
