/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, take, plain, finish, instrument } from "../../scripts/toranja.js";
import { getMetadata } from "../../scripts/aem.js";
export default async function decorate(block) {
  if (!block.textContent.trim() && !block.querySelector("img")) {
    if (document.querySelector("main .footer")) {
      block.remove();
      return;
    }
    const path = getMetadata("footer") || "/footer";
    if (path === "none") {
      block.remove();
      return;
    }
    try {
      const response = await fetch(path.replace(/\.html$/, "") + ".plain.html");
      if (!response.ok) throw Error("Rodapé indisponível");
      const doc = new DOMParser().parseFromString(
          await response.text(),
          "text/html",
        ),
        source = doc.querySelector(".footer");
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
    box = el("div", "footer-inner container"),
    top = el("div", "footer-top"),
    brand = el("div", "footer-col footer-brand-col"),
    bottom = el("div", "footer-bottom");
  brand.append(take(f.description, "footer-desc"));
  if (block.classList.contains("show-regulatory-seals"))
    brand.append(take(f.seals, "footer-badges-list"));
  top.append(brand);
  items.forEach((item) => {
    const col = instrument(item.row, el("div", "footer-col"));
    col.append(plain(item.title, "h3"), take(item.links));
    top.append(col);
  });
  bottom.append(plain(f.copyright, "p"));
  box.append(top, bottom);
  finish(block, box);
}
