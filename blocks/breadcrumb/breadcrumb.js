/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, plain, link, href, finish, instrument } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    nav = el("nav", "toranja-breadcrumb-nav"),
    list = el("ol", "toranja-breadcrumb-list");
  nav.setAttribute("aria-label", "Trilha de navegação");
  if (
    block.classList.contains("show-home") &&
    !items.some((i) => href(i.link) === "/")
  ) {
    const li = el("li", "toranja-breadcrumb-item"),
      a = el("a", "toranja-breadcrumb-link", "Início");
    a.href = "/";
    li.append(a);
    list.append(li);
  }
  items.forEach((item, i) => {
    const li = instrument(item.row, el("li", "toranja-breadcrumb-item")),
      a = plain(
        item.label,
        i === items.length - 1 ? "span" : "a",
        i === items.length - 1
          ? "toranja-breadcrumb-current"
          : "toranja-breadcrumb-link",
      );
    if (a.tagName === "A") a.href = href(item.link);
    else a.setAttribute("aria-current", "page");
    li.append(a);
    list.append(li);
  });
  [...list.children].slice(1).forEach((li) => {
    const sep = el(
      "span",
      "toranja-breadcrumb-separator",
      text(f.separator, "/"),
    );
    sep.setAttribute("aria-hidden", "true");
    li.prepend(sep);
  });
  nav.append(list);
  finish(block, nav);
}
