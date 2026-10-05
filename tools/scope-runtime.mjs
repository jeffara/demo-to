/** Evita colisão entre classes privadas do pacote React e nomes dos blocos EDS. */
import fs from 'node:fs';import postcss from 'postcss';
const file='scripts/ds-runtime/toranja-runtime.css',root=postcss.parse(fs.readFileSync(file,'utf8'));
root.walkRules(rule=>{let p=rule.parent;while(p){if(p.type==='atrule'&&/keyframes$/i.test(p.name))return;p=p.parent;}
 rule.selectors=rule.selectors.map(selector=>{
  if(selector.includes(':root')||selector.startsWith('html')||selector.startsWith('body')||selector.includes('.ds-official')||/^\.ds-/.test(selector))return selector;
  return '.ds-official '+selector;
 });
});fs.writeFileSync(file,root.toString());
