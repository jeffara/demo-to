import fs from 'node:fs';
for(const name of fs.readdirSync('scripts').filter(n=>/^page-.*\.js$/.test(n)))fs.unlinkSync('scripts/'+name);
