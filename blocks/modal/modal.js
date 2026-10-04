/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, take, plain, heading, href, finish, uid, editing, listen } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block),
    dialog = el("dialog", "toranja-dialog"),
    id = text(f.modalId) || uid("modal"),
    trigger = plain(f.trigger, "button", "button secondary"),
    head = el("div", "dialog-header"),
    close = el("button", "dialog-close-btn", "×"),
    title = heading(f.title, "dialog-title");
  dialog.id = document.getElementById(id) ? uid(id) : id;
  title.id = uid("dialog-title");
  dialog.setAttribute("aria-labelledby", title.id);
  trigger.type = "button";
  if (!trigger.textContent.trim()) trigger.textContent = "Abrir detalhes";
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-controls", dialog.id);
  close.type = "button";
  close.setAttribute("aria-label", "Fechar");
  head.append(title, close);
  dialog.append(head, take(f.content, "dialog-content"));
  close.onclick = () => dialog.close();
  trigger.onclick = () => dialog.showModal();
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    }
  });
  finish(block, trigger, dialog);
  listen(block, document, "click", (e) => {
    const a = e.target.closest("a[href]");
    if (a && a.getAttribute("href") === "#" + dialog.id) {
      e.preventDefault();
      if (!dialog.open) dialog.showModal();
    }
  });
  if (editing()) {
    dialog.setAttribute("open", "");
    block.classList.add("authoring-modal");
    trigger.disabled = true;
    close.hidden = true;
  }
}
