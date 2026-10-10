import fs from 'node:fs';import crypto from 'node:crypto';
const {version,contentVersion}=JSON.parse(fs.readFileSync('package.json')),files={};
const paths=['head.html','favicon.svg','component-definition.json','component-models.json','component-filters.json'];
for(const dir of ['blocks','scripts','styles','fonts','assets'])for(const entry of fs.readdirSync(dir,{recursive:true})){const file=dir+'/'+entry;if(entry.split('/').some(s=>s.startsWith('.'))||!fs.statSync(file).isFile()||/^assets\/brand\/.*\.png$/.test(file))continue;paths.push(file);}
for(const file of paths.sort())files[file]=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
fs.writeFileSync('version.json',JSON.stringify({version,contentVersion:contentVersion||version,designSystem:'@interco/inter-toranja 2.0.1',upgradeFrom:'3.1.8',contentReimportRequired:true,contentRepublishRequired:true,contentRequirement:'Import and publish the 4.0.0 catalogue for new components and migrated examples. Back up authored content before package replacement.',files},null,2)+'\n');
console.log('Release '+version+': '+Object.keys(files).length+' published resource hashes.');
