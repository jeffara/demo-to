/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, number, take, plain, finish, instrument, initTabs } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    nav = el("div", "toranja-tablist"),
    body = el("div", "toranja-tabpanels"),
    buttons = [],
    panels = [];
  nav.setAttribute("role", "tablist");
  items.forEach((item) => {
    const button = plain(item.label, "button", "toranja-tab-btn"),
      panel = instrument(item.row, take(item.content, "toranja-tabpanel"));
    buttons.push(button);
    panels.push(panel);
    nav.append(button);
    body.append(panel);
  });
  initTabs(block, buttons, panels, number(f.defaultTab, 1) - 1);
  finish(block, nav, body);
}
