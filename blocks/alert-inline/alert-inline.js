/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, take, plain, finish, option, editing } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block);
  const box = el(
      "div",
      "toranja-alert-box alert-" +
        option(block, ["warning", "success", "error", "info"], "info"),
    ),
    body = el("div", "alert-content");
  box.setAttribute("role", "status");
  body.append(plain(f.title, "strong"), take(f.message));
  box.append(body);
  if (block.classList.contains("dismissible") && !editing()) {
    const close = el("button", "alert-close-btn", "×");
    close.type = "button";
    close.setAttribute("aria-label", "Fechar alerta");
    close.onclick = () => {
      block.hidden = true;
    };
    box.append(close);
  }
  finish(block, box);
}
