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
// Identifica o contrato da baseline V3.
for(const d of definitions){if(d.plugins?.xwalk?.page?.resourceType==='core/franklin/components/block/v1/block'){
 const id=d.plugins.xwalk.page.template.model;const model=models.find(m=>m.id===id);
 if(model&&!model.fields.some(f=>f.name==='schemaVersion'))model.fields.unshift({component:'text',name:'schemaVersion',label:'Versão do conteúdo',valueType:'string',value:'toranja-v3',hidden:true});
 d.plugins.xwalk.page.template.schemaVersion='toranja-v3';
}}
const groups = [
  {
    id: "default",
    title: "Estrutura e conteúdo",
    components: definitions.filter((d) =>
      ["text", "title", "image", "button", "section"].includes(d.id),
    ),
  },
  {
    id: "v3-items",
    title: "Toranja — itens dos componentes",
    components: definitions.filter((d) => d.plugins?.xwalk?.page?.resourceType?.endsWith("/item")),
  },
];
groups.splice(1,0,{id:"toranja-official",title:"Toranja — componentes oficiais",components:definitions.filter(d=>d.id.startsWith("ds-")&&!d.plugins?.xwalk?.page?.resourceType?.endsWith("/item"))});
groups.splice(2,0,{id:'toranja-custom',title:'DS Toranja Custom',components:definitions.filter(d=>['v3-form','v3-search','v3-video','v3-simulator'].includes(d.id))});
// Infrastructure field: placement within section columns, not a Toranja component prop.
for(const d of definitions.filter(d=>(d.id.startsWith('ds-')||['v3-form','v3-search','v3-video','v3-simulator'].includes(d.id))&&!d.plugins.xwalk.page.resourceType.endsWith('/item'))){
 const m=models.find(m=>m.id===d.plugins.xwalk.page.template.model);
 m.fields.push({component:'select',name:'classes_layoutColumn',label:'Layout — coluna na seção',valueType:'string',value:'',description:'Usado no modo Colunas independentes. O conteúdo continua pertencendo à seção.',options:[{name:'Automática',value:''},...[1,2,3,4].map(n=>({name:'Coluna '+n,value:'col-'+n}))]});
}
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

const site=JSON.parse(fs.readFileSync('content/aem-config.json'));
fs.writeFileSync('scripts/site-config.js',`export const siteConfig = ${JSON.stringify({contentRoot:site.siteRoot,searchIndex:'/query-index.json',searchExclude:['/nav','/header','/footer','/demo-toranja','/showcase','/qa']})};\n`);
