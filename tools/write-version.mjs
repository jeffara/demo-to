import fs from 'node:fs';import crypto from 'node:crypto';
const {version,contentVersion}=JSON.parse(fs.readFileSync('package.json')),files={};
const paths=['head.html','favicon.svg','component-definition.json','component-models.json','component-filters.json'];
for(const dir of ['blocks','scripts','styles','fonts','assets'])for(const entry of fs.readdirSync(dir,{recursive:true})){const file=dir+'/'+entry;if(entry.split('/').some(s=>s.startsWith('.'))||!fs.statSync(file).isFile()||/^assets\/brand\/.*\.png$/.test(file))continue;paths.push(file);}
for(const file of paths.sort())files[file]=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
fs.writeFileSync('version.json',JSON.stringify({version,contentVersion:contentVersion||version,designSystem:'@interco/inter-toranja 2.0.1',upgradeFrom:'5.0.0',packageName:'inter-aem-eds-toranja-react',contentPackage:'inter-aem-eds-showcase-toranja-react',blockPrefix:'ds-react-',contentReimportRequired:true,contentRepublishRequired:true,contentRequirement:'Deploy the 5.1.0 code and content together. This release contains only ds-react-* blocks. Retire old showcase/custom pages as documented in docs/react-scope-migration.json. Upgrade from 4.0.0 also requires ds-* identifier migration.',files},null,2)+'\n');
console.log('Release '+version+': '+Object.keys(files).length+' published resource hashes.');
