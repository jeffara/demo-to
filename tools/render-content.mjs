/** Fixture semântica para desenvolvimento local. Não substitui o renderizador AEM. */
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
const pages = JSON.parse(fs.readFileSync("content/pages.json"));
const models = Object.fromEntries(
  JSON.parse(fs.readFileSync("component-models.json")).map((m) => [m.id, m]),
);
const { cells, containers } = JSON.parse(
  fs.readFileSync("content/contracts.json"),
);
export const esc = (v) =>
  String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
export function valueHTML(model, name, values) {
  const f = models[model].fields.find((x) => x.name === name),
    v = values[name] ?? f?.value ?? "";
  if(f?.multi){let values=v;if(!Array.isArray(values)){try{values=JSON.parse(v)}catch{values=String(v||'').split(/\r?\n|,\s*/).filter(Boolean)}}return '<ul>'+values.map(x=>'<li>'+esc(typeof x==='object'?JSON.stringify(x):x)+'</li>').join('')+'</ul>';}
  if (f?.component === "reference")
    return v
      ? `<picture><img src="${esc(v)}" alt="${esc(values[name + "Alt"] || "")}" loading="lazy"></picture>`
      : "";
  if (f?.component === "aem-content")
    return v
      ? `<p><a href="${esc(v)}">${esc(values[name + "Text"] || v)}</a></p>`
      : "";
  if (f?.component === "richtext") return v || "";
  if (values[name + "Type"] && /^h[1-6]$/.test(values[name + "Type"]))
    return `<${values[name + "Type"]}>${esc(v)}</${values[name + "Type"]}>`;
  return `<p>${esc(typeof v==="object"?JSON.stringify(v):v)}</p>`;
}
export function blockHTML(b, instrument = false, resource = "") {
  const attrs = instrument
    ? ` data-aue-resource="${esc(resource)}" data-aue-type="${containers[b.block] ? "container" : "component"}" data-aue-model="${b.block}" data-aue-label="${b.block}"${containers[b.block] ? ` data-aue-filter="${b.block}"` : ""}`
    : "";
  const options = models[b.block].fields
    .filter((f) => f.name.startsWith("classes_"))
    .flatMap((f) => {
      const v = b.properties[f.name] ?? f.value;
      return typeof v === "boolean"
        ? v
          ? [f.name.slice(8)]
          : []
        : v
          ? [String(v)]
          : [];
    });
  const cell = (id, name, values, owner) =>
    `<div${instrument ? ` data-aue-prop="${name}" data-aue-type="${models[id].fields.find((f) => f.name === name)?.component === "richtext" ? "richtext" : "text"}" data-aue-resource="${esc(owner)}"` : ""}>${valueHTML(id, name, values)}</div>`;
  const rows = (cells[b.block] || [])
    .map((name) => `<div>${cell(b.block, name, b.properties, resource)}</div>`)
    .join("");
  const itemModel = containers[b.block];
  const items = (b.items || [])
    .map(
      (item, i) =>
        `<div${instrument ? ` data-aue-resource="${esc(resource + "/item_" + i)}" data-aue-model="${itemModel}" data-aue-type="component"` : ""}>${(cells[itemModel] || []).map((n) => cell(itemModel, n, item, resource + "/item_" + i)).join("")}</div>`,
    )
    .join("");
  return `<div class="${esc([b.block, ...options].join(" "))}"${attrs}>${rows}${items}</div>`;
}
export function renderPages(){
for (const [name, page] of Object.entries(pages)) {
  const main = page.sections
    .map(
      (s) =>
        `<div${s.id ? ` id="${esc(s.id)}"` : ""}>${s.content.map((c) => (c.block ? blockHTML(c) : c.text || "")).join("\n")}${Object.entries(s).filter(([k,v])=>!["id","content"].includes(k)&&v).length ? `<div class="section-metadata">${Object.entries(s).filter(([k,v])=>!["id","content"].includes(k)&&v).map(([k,v])=>`<div><div>${esc(k.replace(/[A-Z]/g,c=>"-"+c.toLowerCase()))}</div><div>${esc(v)}</div></div>`).join("")}</div>` : ""}</div>`,
    )
    .join("\n");
  const doc = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(page.title)}</title><meta name="description" content="${esc(page.description || "")}"><meta name="nav" content="${["nav", "footer"].includes(name) ? "none" : "/nav"}"><meta name="footer" content="${["nav", "footer"].includes(name) ? "none" : "/footer"}"><link rel="stylesheet" href="/styles/styles.css"><script type="module" src="/scripts/page.js"></script><link rel="modulepreload" href="/scripts/ds-runtime/toranja-runtime.js"><link rel="icon" type="image/svg+xml" href="/favicon.svg"></head><body><header></header><main>${main}</main><footer></footer></body></html>`;
  fs.mkdirSync(`drafts/${name.split("/").slice(0,-1).join("/")}`, { recursive:true });
  fs.writeFileSync(`drafts/${name}.html`, doc);
  fs.writeFileSync(`drafts/${name}.plain.html`, main);
}
console.log("Fixtures geradas: index, demo-toranja, nav e footer.");

}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))renderPages();
