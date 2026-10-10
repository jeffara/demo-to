/** Local release gates; historical adapter replacement tests are archived under docs/. */
import {spawnSync} from 'node:child_process';
for(const [suite,width] of [['ds-browser',393],['acceptance',1280],['adapter-integration',393],['baseline',393],['v3-content',393],['typography',1280],['toranja-v2',393],['toranja-v2',1440]]){
 const result=spawnSync(process.execPath,['tests/'+suite+'.mjs'],{stdio:'inherit',env:{...process.env,QA_ROUND:'v4.0.0-'+width,QA_WIDTH:String(width)}});if(result.status!==0)process.exit(result.status||1);
}
