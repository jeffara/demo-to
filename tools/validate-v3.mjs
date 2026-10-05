/** Two sequential regression rounds over identical built files. Suites use distinct ports. */
import {spawn} from 'node:child_process';import fs from 'node:fs';
const suites=['baseline','ds-browser','acceptance','v3','v3-content'];
for(const [round,width] of [[1,1280],[2,390]]){
 const env={...process.env,QA_ROUND:'baseline-final-'+round,QA_WIDTH:String(width)};
 const results=await Promise.all(suites.map(suite=>new Promise(resolve=>{const log=fs.openSync('docs/'+suite+'-v3-final-'+round+'.log','w');const child=spawn(process.execPath,['tests/'+suite+'.mjs'],{env,stdio:['ignore',log,log]});child.on('exit',code=>{fs.closeSync(log);console.log('Round',round,suite,code===0?'PASS':'FAIL');resolve({suite,code})})})));
 if(results.some(r=>r.code!==0))process.exit(1);
}
