/** Isolate component names from EDS block names without changing selector specificity. */
import fs from 'node:fs';import postcss from 'postcss';
for(const name of fs.readdirSync('scripts/ds-runtime').filter(n=>n.endsWith('.css'))){
 const file='scripts/ds-runtime/'+name,root=postcss.parse(fs.readFileSync(file,'utf8'));
 root.walkAtRules('font-face',rule=>rule.remove());
 root.walkRules(rule=>{let p=rule.parent;while(p){if(p.type==='atrule'&&/keyframes$/i.test(p.name))return;p=p.parent;}
  rule.selectors=rule.selectors.map(selector=>selector.includes(':root')||selector.startsWith('html')||selector.startsWith('body')||selector.includes('.ds-official')||/^\.(modal-dialog|menu-popup__|tooltip-description__|overlay(?:--|$))/.test(selector)||/^\.ds-/.test(selector)?selector:':where(.ds-official, .modal-dialog, .menu-popup__panel, .tooltip-description__panel) '+selector);
 });fs.writeFileSync(file,root.toString());
}
