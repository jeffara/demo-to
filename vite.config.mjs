import {defineConfig} from 'vite';
import path from 'node:path';
import {toranjaDateCompat} from './tools/toranja-date-compat.mjs';
export default defineConfig({plugins:[toranjaDateCompat()],base:'./',resolve:{dedupe:['react','react-dom']},define:{'process.env.NODE_ENV':JSON.stringify('production')},build:{outDir:'scripts/ds-runtime',emptyOutDir:true,minify:true,cssMinify:true,lib:{entry:path.resolve('src/ds-runtime.jsx'),formats:['es'],fileName:()=> 'toranja-runtime.js',cssFileName:'toranja-runtime'},rollupOptions:{output:{inlineDynamicImports:true}}}});
