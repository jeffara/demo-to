/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, take, plain, link, href, finish, instrument, uid, listen } from "../../scripts/toranja.js";
import { getMetadata } from "../../scripts/aem.js";
export default async function decorate(block) {
  if (!block.textContent.trim() && !block.querySelector("img")) {
    if (document.querySelector("main .header")) {
      block.remove();
      return;
    }
    const path = getMetadata("nav") || "/nav";
    if (path === "none") {
      block.remove();
      return;
    }
    try {
      const response = await fetch(path.replace(/\.html$/, "") + ".plain.html");
      if (!response.ok) throw Error("Navegação indisponível");
      const doc = new DOMParser().parseFromString(
          await response.text(),
          "text/html",
        ),
        source = doc.querySelector(".header");
      if (source) {
        block.replaceChildren(...source.children);
        block.classList.add(...source.classList);
        instrument(source, block);
      } else throw Error("Bloco de conteúdo compartilhado ausente");
    } catch (error) {
      console.warn(error.message);
      return;
    }
  }
  const { fields: f, items } = read(block),
    inner = el("div", "header-inner container"),
    brand = el("div", "header-brand"),
    home = el("a"),
    nav = el("nav", "main-nav"),
    actions = el("div", "header-actions"),
    toggle = el("button", "mobile-toggle", "☰");
  home.href = "/";
  home.setAttribute("aria-label", "Página inicial");
  const img = f.logo?.querySelector("img");
  if (img) {
    img.classList.add("brand-logo");
    instrument(f.logo, img);
    home.append(img);
  } else home.textContent = "Inter";
  brand.append(home, plain(f.brandTag, "span", "brand-tag"));
  nav.id = uid("nav");
  nav.setAttribute("aria-label", "Navegação principal");
  items.forEach((item) => {
    const node = instrument(item.row, el("div", "nav-item")),
      a = plain(item.label, "a", "nav-link");
    a.href = href(item.link);
    if (item.linkTarget?.textContent.trim() === "_blank") { a.target="_blank"; a.rel="noopener noreferrer"; }
    node.append(a);
    if (item.children?.querySelector("a")) {
      node.classList.add("nav-dropdown");
      const disclosure = el("button", "nav-dropdown-trigger", "⌄"),
        submenu = take(item.children, "nav-dropdown-menu");
      disclosure.type = "button";
      disclosure.setAttribute("aria-label", "Abrir submenu " + a.textContent);
      submenu.id = uid("submenu");
      disclosure.setAttribute("aria-controls", submenu.id);
      disclosure.setAttribute("aria-expanded", "false");
      submenu.hidden = true;
      disclosure.onclick = () => {
        submenu.hidden = !submenu.hidden;
        disclosure.setAttribute("aria-expanded", String(!submenu.hidden));
      };
      node.append(disclosure, submenu);
    }
    nav.append(node);
  });
  const login = link(f.loginUrl, "btn btn-outline login-btn", "Acessar conta");
  login.textContent = "Acessar conta";
  actions.append(login, link(f.cta, "btn btn-primary cta-btn"));
  if (block.classList.contains("show-country-selector"))
    actions.append(take(f.countries, "country-selector"));
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Abrir menu");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", nav.id);
  toggle.onclick = () => {
    const open = block.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  };
  actions.append(toggle);
  inner.append(brand, nav, actions);
  finish(block, inner);
  listen(block, document, "keydown", (e) => {
    if (e.key === "Escape") {
      block.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      nav.querySelectorAll(".nav-dropdown-menu").forEach((s) => {
        s.hidden = true;
      });
      nav
        .querySelectorAll("[aria-expanded]")
        .forEach((b) => b.setAttribute("aria-expanded", "false"));
    }
  });
}
