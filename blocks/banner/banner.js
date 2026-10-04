/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, take, plain, link, finish, icon, editing } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block);
  const box = el("div", "toranja-banner-container"),
    graphic = el("div", "toranja-banner-icon"),
    body = el("div", "toranja-banner-content"),
    actions = el("div", "toranja-banner-action");
  graphic.append(icon(text(f.icon, "sparkle")));
  body.append(plain(f.title, "h3"), take(f.description));
  actions.append(link(f.cta, "button secondary"));
  box.append(graphic, body, actions);
  if (block.classList.contains("dismissible") && !editing()) {
    const close = el("button", "toranja-banner-close", "×");
    close.type = "button";
    close.setAttribute("aria-label", "Fechar aviso");
    close.onclick = () => {
      block.hidden = true;
    };
    box.append(close);
  }
  finish(block, box);
}
