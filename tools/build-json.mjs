import fs from "node:fs";
import path from "node:path";
const root = process.cwd();
const partials = [
  ...fs
    .readdirSync("models")
    .filter((n) => n.startsWith("_") && n.endsWith(".json"))
    .map((n) => "models/" + n),
  ...fs.readdirSync("blocks").flatMap((n) =>
    fs
      .readdirSync("blocks/" + n)
      .filter((f) => f.startsWith("_") && f.endsWith(".json"))
      .map((f) => "blocks/" + n + "/" + f),
  ),
];
const definitions = [],
  models = [],
  filters = [];
for (const p of partials) {
  const json = JSON.parse(fs.readFileSync(p));
  definitions.push(...(json.definitions || []));
  models.push(...(json.models || []));
  filters.push(...(json.filters || []));
}
for (const [label, arr] of [
  ["definitions", definitions],
  ["models", models],
  ["filters", filters],
]) {
  const ids = new Set();
  for (const e of arr) {
    if (ids.has(e.id)) throw Error(`ID duplicado em ${label}: ${e.id}`);
    ids.add(e.id);
  }
}
const groups = [
  {
    id: "default",
    title: "Estrutura e conteúdo",
    components: definitions.filter((d) =>
      ["text", "title", "image", "button", "section"].includes(d.id),
    ),
  },
  {
    id: "toranja",
    title: "Toranja — composições de página",
    components: definitions.filter(
      (d) =>
        !["text", "title", "image", "button", "section"].includes(d.id) &&
        !d.plugins?.xwalk?.page?.resourceType?.endsWith("/item") && !d.id.startsWith("ds-"),
    ),
  },
  {
    id: "toranja-items",
    title: "Toranja — itens",
    components: definitions.filter((d) => d.plugins?.xwalk?.page?.resourceType?.endsWith("/item")),
  },
];
groups.splice(1,0,{id:"toranja-official",title:"Toranja oficial — 64 componentes",components:definitions.filter(d=>d.id.startsWith("ds-")&&!d.plugins?.xwalk?.page?.resourceType?.endsWith("/item"))});
const cells = {},
  containers = {};
for (const m of models) {
  const names = m.fields.map((f) => f.name);
  cells[m.id] = names.filter(
    (n) =>
      !n.startsWith("classes") &&
      !["MimeType", "Text", "Type", "Alt", "Title"].some(
        (s) => n.endsWith(s) && names.includes(n.slice(0, -s.length)),
      ),
  );
}
for (const d of definitions) {
  const t = d.plugins?.xwalk?.page?.template;
  if (t?.filter && d.id !== "section") {
    const filter = filters.find((f) => f.id === t.filter);
    if (filter?.components.length === 1)
      containers[d.id] = filter.components[0];
  }
}
for (const [name, data] of [
  ["component-definition.json", { groups }],
  ["component-models.json", models],
  ["component-filters.json", filters],
  ["content/contracts.json", { cells, containers }],
])
  fs.writeFileSync(path.join(root, name), JSON.stringify(data, null, 2) + "\n");
fs.writeFileSync(
  "scripts/contracts.js",
  "// Gerado por npm run build:json.\nexport const cells = " +
    JSON.stringify(cells) +
    ";\nexport const containers = " +
    JSON.stringify(containers) +
    ";\n",
);
console.log(
  `${definitions.filter(d=>d.id.startsWith("ds-")&&!d.plugins?.xwalk?.page?.resourceType?.endsWith("/item")).length} componentes oficiais; ${models.length} modelos.`,
);
