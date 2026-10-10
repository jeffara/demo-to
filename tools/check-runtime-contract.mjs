import fs from 'node:fs';import assert from 'node:assert/strict';
const contract=JSON.parse(fs.readFileSync('docs/toranja-contract.json'));
const registry=fs.readFileSync('src/component-registry.js','utf8');
for(const c of contract.components)assert.ok(registry.includes(`${c.name}: () => import('../vendor/@interco/inter-toranja/dist/${c.source.replace('.d.ts','.js')}')`),`Atualize o registry para ${c.name}`);
const lock=JSON.parse(fs.readFileSync('vendor/@interco/inter-toranja/package.json'));
assert.equal(lock.version,'2.0.1','Revise contratos, modelos e o registry ao atualizar o Toranja');
console.log('73 componentes preservados no registry; snapshot Toranja 2.0.1.');
