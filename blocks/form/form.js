/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, take, plain, heading, safeURL, finish, option, instrument, uid, editing } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    form = el("form", "toranja-form"),
    head = el("div", "form-header"),
    grid = el("div", "form-grid"),
    status = el("div", "form-status"),
    button = plain(f.submitLabel, "button", "button primary");
  button.type = "submit";
  status.setAttribute("role", "status");
  head.append(
    heading(f.title, "form-title"),
    take(f.subtitle, "form-subtitle"),
  );
  items.forEach((item, i) => {
    const group = instrument(item.row, el("div", "form-group")),
      type = text(item.kind, "text"),
      input = el(
        type === "textarea"
          ? "textarea"
          : type === "select"
            ? "select"
            : "input",
      ),
      label = plain(item.label, "label");
    input.id = uid("lead");
    input.name = text(item.fieldName) || "field" + i;
    input.required = text(item.required) === "true";
    input.placeholder = text(item.placeholder);
    label.htmlFor = input.id;
    if (input.tagName === "INPUT") input.type = type === "cpf" ? "text" : type;
    if (type === "cpf" || type === "tel")
      input.addEventListener("input", () => {
        const digits = input.value.replace(/\D/g, "").slice(0, 11);
        input.value =
          type === "cpf"
            ? digits
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
            : digits
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
      });
    if (type === "select") {
      const empty = el("option", "", text(item.placeholder, "Selecione"));
      empty.value = "";
      input.append(empty);
      item.options?.querySelectorAll("li").forEach((li) => {
        const o = el("option", "", li.textContent.trim());
        o.value = li.textContent.trim();
        input.append(o);
      });
    }
    group.append(label, input);
    grid.append(group);
  });
  if (text(f.consent)) {
    const consent = el("label", "checkbox-label"),
      check = el("input");
    check.type = "checkbox";
    check.name = "consent";
    check.required = true;
    consent.append(check, take(f.consent));
    grid.append(consent);
  }
  form.append(head, grid, button, status);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (editing()) {
      status.textContent = "Envio desabilitado durante a edição.";
      return;
    }
    if (!form.reportValidity()) return;
    const endpoint = text(f.endpoint);
    if (!endpoint) {
      status.textContent =
        "Formulário demonstrativo: integração de envio ainda não configurada.";
      return;
    }
    const url = safeURL(endpoint, "");
    if (!url) {
      status.textContent = "Destino de envio inválido.";
      return;
    }
    button.disabled = true;
    status.textContent = "Enviando…";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        credentials: "omit",
      });
      if (!response.ok) throw Error("Envio recusado");
      status.textContent = text(f.successMessage, "Solicitação recebida.");
      form.reset();
    } catch {
      status.textContent = "Não foi possível enviar. Tente novamente.";
    } finally {
      button.disabled = false;
    }
  });
  finish(block, form);
}
