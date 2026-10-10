/** Reproducible headless audit on the published target. No score bypasses. */
import fs from 'node:fs';import path from 'node:path';import lighthouse from 'lighthouse';import * as launcher from 'chrome-launcher';import desktop from 'lighthouse/core/config/desktop-config.js';
const base=process.argv[2]||process.env.AUDIT_URL;if(!base){console.error('Uso: npm run test:performance -- https://seu-dominio/');process.exit(2)}
const routes=(process.env.AUDIT_ROUTES||'/,/demo-toranja,/showcase/layouts').split(','),runs=Number(process.env.AUDIT_RUNS||3),threshold=Number(process.env.MIN_PERFORMANCE||98),out=path.resolve(process.env.AUDIT_OUTPUT||'docs/lighthouse-published');fs.mkdirSync(out,{recursive:true});const results=[];
const median=values=>{const sorted=values.toSorted((a,b)=>a-b),i=Math.floor(sorted.length/2);return sorted.length%2?sorted[i]:(sorted[i-1]+sorted[i])/2};
for(const route of routes)for(const profile of (process.env.AUDIT_PROFILES||'desktop,mobile').split(',')){
 const measured=[];
 for(let run=1;run<=runs;run++){
  const chrome=await launcher.launch({chromePath:process.env.CHROME_PATH||undefined,chromeFlags:['--headless','--disable-extensions',...(process.env.CHROME_NO_SANDBOX==='1'?['--no-sandbox']:[])]});
  try{const result=await lighthouse(new URL(route,base).href,{port:chrome.port,output:['json','html'],logLevel:'error',onlyCategories:['performance','accessibility','best-practices','seo']},profile==='desktop'?desktop:undefined);if(result.lhr.runtimeError)throw Error(result.lhr.runtimeError.message);if(result.lhr.runWarnings.some(w=>/too slowly|time limit|incomplete/i.test(w)))throw Error('Medição incompleta: '+result.lhr.runWarnings.join('; '));
   const name=(route==='/'?'home':route.slice(1).replaceAll('/','-'))+'-'+profile+'-'+run;fs.writeFileSync(path.join(out,name+'.json'),result.report[0]);fs.writeFileSync(path.join(out,name+'.html'),result.report[1]);
   measured.push({scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,v.score*100])),lcp:result.lhr.audits['largest-contentful-paint'].numericValue,cls:result.lhr.audits['cumulative-layout-shift'].numericValue,tbt:result.lhr.audits['total-blocking-time'].numericValue,warnings:result.lhr.runWarnings});
  }finally{await chrome.kill()}
 }
 const scores=Object.fromEntries(Object.keys(measured[0].scores).map(k=>[k,median(measured.map(r=>r.scores[k]))]));const row={route,profile,runs:measured,scores,passesPerformanceGoal:scores.performance>=threshold};results.push(row);console.log(route,profile,JSON.stringify(scores));
}
fs.writeFileSync(path.join(out,'summary.json'),JSON.stringify({lighthouseVersion:'13.5.0',threshold,results},null,2));if(results.some(r=>!r.passesPerformanceGoal))process.exitCode=1;
