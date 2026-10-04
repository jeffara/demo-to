/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, take, heading, link, finish } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block);
  const box = el("div", "cta-banner-inner container"),
    body = el("div", "cta-banner-content"),
    actions = el("div", "cta-banner-actions");
  body.append(
    heading(f.headline, "cta-banner-title"),
    take(f.description, "cta-banner-desc"),
  );
  actions.append(link(f.primaryCta), link(f.secondaryCta, "button secondary"));
  body.append(actions);
  box.append(body);
  finish(block, box);
}
