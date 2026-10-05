/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, plain, link, href, finish, instrument, cleanup } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    nav = el(
      "nav",
      "quick-moment-rail" === "quick-moment-rail"
        ? "quick-moment-bar"
        : "toranja-in-page-nav",
    ),
    list = el(
      "div",
      "quick-moment-rail" === "quick-moment-rail"
        ? "rail-items"
        : "in-page-nav-links",
    );
  nav.setAttribute(
    "aria-label",
    text(f.label || f.title, "Navegação nesta página"),
  );
  nav.append(plain(f.label || f.title, "span", "rail-label"));
  items.forEach((item) => {
    const a = instrument(
      item.row,
      plain(
        item.label,
        "a",
        "quick-moment-rail" === "quick-moment-rail"
          ? "rail-item"
          : "in-page-nav-item",
      ),
    );
    a.href = href(item.link);
    if (item.linkTarget?.textContent.trim() === "_blank") { a.target="_blank"; a.rel="noopener noreferrer"; }
    list.append(a);
  });
  nav.append(list);
  finish(block, nav);
  const spy =
    "quick-moment-rail" === "quick-moment-rail" ||
    block.classList.contains("scroll-spy");
  if (spy) {
    const links = [...list.querySelectorAll("a")];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            links.forEach((a) =>
              a.classList.toggle("active", a.hash === "#" + entry.target.id),
            );
        }),
      { rootMargin: "-10% 0px -60% 0px" },
    );
    links.forEach((a) => {
      if (a.hash) {
        const target = document.getElementById(
          decodeURIComponent(a.hash.slice(1)),
        );
        if (target) observer.observe(target);
      }
    });
    cleanup(block, () => observer.disconnect());
  }
}
