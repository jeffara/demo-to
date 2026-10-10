/** Utilitários EDS: preservam os nós autorados e seus atributos do Universal Editor. */
import { resolveLink } from "./links.js";
let sequence = 0;
export const uid = (prefix = "toranja") => `${prefix}-${++sequence}`;
export const editing = () =>
  !!document.querySelector("main[data-aue-resource]");
export function el(tag, cls = "", text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}
export function instrument(from, to) {
  if (!from || !to) return to;
  [...from.attributes]
    .filter(
      (a) =>
        a.name.startsWith("data-aue-") || a.name.startsWith("data-richtext-"),
    )
    .forEach((a) => {
      to.setAttribute(a.name, a.value);
      from.removeAttribute(a.name);
    });
  return to;
}
export function read(
  block,
  name = block.dataset.blockName || block.classList[0],
  fieldKeys, itemKeys,
) {
  // Explicita o recurso proprietário antes de mover campos para outra área visual.
  block.querySelectorAll("[data-aue-prop]").forEach((node) => {
    const owner = node.closest("[data-aue-resource]");
    if (owner && !node.hasAttribute("data-aue-resource"))
      node.setAttribute(
        "data-aue-resource",
        owner.getAttribute("data-aue-resource"),
      );
  });
  const rows = [...block.children];
  const fieldNames=fieldKeys||[];
  const fields = Object.fromEntries(
    fieldNames.map((key, i) => [
      key,
      rows[i]?.firstElementChild || rows[i] || el("div"),
    ]),
  );
  const itemNames = itemKeys||[];
  const items = rows
    .slice(fieldNames.length)
    .map((row) => ({
      row,
      ...Object.fromEntries(
        itemNames.map((key, i) => [key, row.children[i] || el("div")]),
      ),
    }));
  for (const record of [fields, ...items]) for (const key of Object.keys(record)) {
    if (key.endsWith("Target") && record[key.slice(0,-6)]) record[key.slice(0,-6)].dataset.linkTarget = record[key]?.textContent.trim();
  }
  return { fields, items };
}
export const text = (cell, fallback = "") =>
  cell?.textContent?.trim() || fallback;
export const safeURL = (value, fallback = "#") => {
  const s = String(value || "").trim();
  try {
    const u = new URL(s, location.href);
    return ["http:", "https:", "mailto:", "tel:"].includes(u.protocol) && s
      ? s
      : fallback;
  } catch {
    return fallback;
  }
};
export const href = (cell, fallback = "#") =>
  safeURL(
    cell?.querySelector("a")?.getAttribute("href") || text(cell),
    fallback,
  );
export function take(cell, cls = "", tag = "div") {
  const node = instrument(cell, el(tag, cls));
  if (cell) node.append(...cell.childNodes);
  return node;
}
export function plain(cell, tag, cls = "") {
  const node = instrument(cell, el(tag, cls, text(cell)));
  return node;
}
export function link(cell, cls = "button primary", label) {
  const a = cell?.querySelector("a") || el("a");
  a.href = resolveLink(href(cell));
  if (cell?.dataset.linkTarget === "_blank") { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  if (!a.textContent.trim()) a.textContent = label || "Saiba mais";
  if (!text(cell) && !editing()) a.hidden = true;
  a.className = cls;
  instrument(cell, a);
  return a;
}
export function finish(block, ...children) {
  block.replaceChildren(...children.filter(Boolean));
  block.querySelectorAll("a[href]").forEach(a => {const url=resolveLink(a.getAttribute("href"));if(url)a.setAttribute("href",url);});
  block.dataset.toranjaReady = "true";
}
export function media(cell, cls = "v3-media") {
  const box = take(cell, cls);
  box.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("alt")) img.alt = "";
    if (!img.hasAttribute("loading")) img.loading = "lazy";
  });
  return box;
}
/** Listeners globais e timers são removidos quando o editor substitui o bloco. */
const cleanups = new Map();
let observer;
export function cleanup(block, fn) {
  if (!observer) {
    observer = new MutationObserver(() => {
      for (const [b, fns] of cleanups)
        if (!b.isConnected) {
          fns.forEach((f) => f());
          cleanups.delete(b);
        }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
  if (!cleanups.has(block)) cleanups.set(block, []);
  cleanups.get(block).push(fn);
}
