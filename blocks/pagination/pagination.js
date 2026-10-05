/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, number, link, href, safeURL, finish } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block),
    nav = el("nav", "toranja-pagination"),
    list = el("ul", "pagination-list");
  nav.setAttribute("aria-label", "Paginação");
  const total = Math.max(1, Math.round(number(f.totalPages, 5))),
    current = Math.max(
      1,
      Math.min(total, Math.round(number(f.currentPage, 1))),
    ),
    base = href(f.baseUrl, "?pagina=");
  const add = (label, page, disabled = false) => {
    const li = el("li"),
      a = el("a", "page-link", label);
    a.href = safeURL(base + page);
    a.target=f.baseUrlTarget?.textContent.trim() || "_self";
    if(a.target==="_blank")a.rel="noopener noreferrer";
    if (disabled) {
      a.setAttribute("aria-disabled", "true");
      a.tabIndex = -1;
      a.onclick = (e) => e.preventDefault();
    }
    if (page === current && !disabled) a.setAttribute("aria-current", "page");
    li.append(a);
    list.append(li);
  };
  add("Anterior", Math.max(1, current - 1), current === 1);
  if (block.classList.contains("compact"))
    list.append(el("li", "page-link", `${current} / ${total}`));
  else {
    const pages =
      total <= 9
        ? Array.from({ length: total }, (_, i) => i + 1)
        : [...new Set([1, current - 1, current, current + 1, total])].filter(
            (i) => i > 0 && i <= total,
          );
    pages.forEach((i) =>
      add(block.classList.contains("dots") ? "●" : String(i), i),
    );
  }
  add("Próximo", Math.min(total, current + 1), current === total);
  nav.append(list);
  finish(block, nav);
}
