/** Encode editorial photos for delivery; dimensions and crop are retained. Originals remain available. */
import fs from 'node:fs';import sharp from 'sharp';
const report=[];
for(const name of fs.readdirSync('assets/demo').filter(n=>n.endsWith('.jpg'))){const input='assets/demo/'+name,output=input.replace(/\.jpg$/,'.webp');const meta=await sharp(input).metadata();await sharp(input).webp({quality:85,effort:6}).toFile(output);report.push({input,output,width:meta.width,height:meta.height,before:fs.statSync(input).size,after:fs.statSync(output).size});}
fs.writeFileSync('docs/image-delivery-v4.0.0.json',JSON.stringify(report,null,2));console.log(report);
