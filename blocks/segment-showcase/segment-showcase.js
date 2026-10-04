/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, take, plain, heading, link, finish, instrument, initTabs } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    nav = el("div", "segment-tabs-nav"),
    body = el("div", "segment-showcase-panel"),
    buttons = [],
    panels = [];
  nav.setAttribute("role", "tablist");
  items.forEach((item) => {
    const b = plain(item.label, "button", "seg-tab"),
      panel = instrument(item.row, el("div", "seg-card-view")),
      visual = el("div", "card-visual-box"),
      card = el(
        "div",
        "metallic-card card-" +
          text(item.segmentId).replace(/[^a-z0-9-]/gi, ""),
      ),
      detail = el("div", "seg-details");
    card.append(
      el("span", "card-brand-tag", "Inter"),
      plain(item.tier, "span", "card-tier-label"),
    );
    visual.append(card);
    detail.append(
      plain(item.criteria, "p", "seg-criteria"),
      take(item.perks, "seg-perks-list"),
      link(item.cta),
    );
    panel.append(visual, detail);
    b.dataset.segment = text(item.segmentId);
    nav.append(b);
    body.append(panel);
    buttons.push(b);
    panels.push(panel);
  });
  const selected = items.findIndex(
    (i) => text(i.segmentId) === text(f.defaultSegment),
  );
  initTabs(block, buttons, panels, selected);
  finish(block, heading(f.title), take(f.subtitle), nav, body);
}
