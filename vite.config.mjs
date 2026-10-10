import {defineConfig} from 'vite';
import path from 'node:path';
export default defineConfig({
 base:'./',resolve:{dedupe:['react','react-dom']},
 define:{'process.env.NODE_ENV':JSON.stringify('production')},
 build:{outDir:'scripts/ds-runtime',emptyOutDir:true,minify:true,cssMinify:false,cssCodeSplit:true,manifest:true,
  lib:{entry:path.resolve('src/ds-runtime.jsx'),formats:['es'],fileName:()=> 'toranja-runtime.js',cssFileName:'toranja-runtime'},
  rollupOptions:{external:id=>id.endsWith('/ds-behaviors.js'),output:{paths:id=>id.endsWith('/ds-behaviors.js')?'/scripts/ds-behaviors.js':id,manualChunks(id){
   const name=path.basename(id);
   if (/\/scripts\/(links|site-config|integrations)\.js$/.test(id)) return 'toranja-core';
   // Keep the first-screen dependency graph in one shared chunk.
   if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)
       || /\/dist\/components\/(Atoms\/(Text|Image|Icon|Card|Divider|ProgressIndicator\/Spinner)|Molecules\/(Button|Link))\//.test(id)
       || /\/dist\/utils\/(pattern|classNamesMerge|useToranjaTheme)/.test(id)) return 'toranja-core';
   if(/\/dist\/ic_[^/]+\.js$/.test(id)){
    let bucket=0;for(const char of name)bucket=(bucket*31+char.charCodeAt(0))%24;
    return 'icons-'+bucket;
   }
  }}}
 }
});
