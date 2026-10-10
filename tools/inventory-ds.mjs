/** Extrai o contrato público diretamente dos .d.ts do snapshot oficial. */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require(process.env.TORANJA_TYPESCRIPT || 'typescript');
const base = path.resolve('vendor/@interco/inter-toranja/dist');
const entry = path.join(base, 'components.d.ts');
const program = ts.createProgram([entry], {esModuleInterop: true, allowSyntheticDefaultImports: true, strict: true, skipLibCheck: true, target: ts.ScriptTarget.ES2022, moduleResolution: ts.ModuleResolutionKind.Node10,
  baseUrl: '.', paths: {react: [process.env.TORANJA_REACT_TYPES || 'node_modules/@types/react/index.d.ts']}});
const checker = program.getTypeChecker();
const module = checker.getSymbolAtLocation(program.getSourceFile(entry));
const isLocal = (s) => (s.declarations || []).some(d => d.getSourceFile().fileName.startsWith(base));
const allProps = t => {
  const arr = t.isUnion() ? t.types.flatMap(x=>checker.getPropertiesOfType(x)) : checker.getPropertiesOfType(t);
  const map = new Map();
  for (const s of arr) { if(!map.has(s.name)) map.set(s.name,[]); map.get(s.name).push(s); }
  return [...map.values()].map(ss=>({name:ss[0].name, flags:ss[0].flags, declarations:ss.flatMap(s=>s.declarations||[]), sources:ss}));
};
const stringOf = t => checker.typeToString(t,undefined,ts.TypeFormatFlags.NoTruncation);
function describe(t, name, depth=0, seen=new Set()) {
  const type=stringOf(t); const clean=t.isUnion()?t.types.filter(x=>!(x.flags&(ts.TypeFlags.Undefined|ts.TypeFlags.Null|ts.TypeFlags.Never))):[t];
  if (/^on[A-Z]|^handle[A-Z]|OnClick$/.test(name)) return {kind:'event',type};
  if (/Ref$|^ref$|scrollContainer/.test(name)||/RefObject|CSSProperties/.test(type)) return {kind:'technical',type};
  if (/ReactNode\[\]/.test(type)) return {kind:'array',type,item:{kind:'slot',type:'ReactNode'}};
  if (/ReactNode|ReactElement|ComponentType|JSX.Element/.test(type) || ['webContent','IconSvg'].includes(name)) return {kind:'slot',type};
  if (/^keyof T/.test(type)) return {kind:'string',type};
  if (type==='T'||/^Record</.test(type)||type.includes('SidebarBrand'))return {kind:'json',type};
  if (clean.every(x=>x.flags&ts.TypeFlags.BooleanLike)) return {kind:'boolean',type};
  if (clean.every(x=>x.flags&(ts.TypeFlags.StringLiteral|ts.TypeFlags.NumberLiteral))) return {kind:'enum',values:[...new Set(clean.map(x=>x.value))],type};
  if (clean.every(x=>x.flags&ts.TypeFlags.NumberLike)) return {kind:'number',type};
  if (clean.some(x=>checker.isArrayType(x)||checker.isTupleType(x))) {
    const arrays=clean.filter(x=>checker.isArrayType(x)||checker.isTupleType(x));
    const elem=checker.getUnionType(arrays.map(a=>checker.getIndexTypeOfType(a,ts.IndexKind.Number)).filter(Boolean));
    return {kind:'array',type,item:elem&&depth<5?describe(elem,'item',depth+1,seen):{kind:'json'}};
  }
  if (clean.some(x=>x.flags&ts.TypeFlags.StringLike)) return {kind:'string',type};
  if (clean.some(x=>checker.getSignaturesOfType(x,ts.SignatureKind.Call).length)) return {kind:'function',type};
  if (depth>=5||seen.has(t)) return {kind:'json',type};
  const next=new Set(seen);next.add(t);
  const fields=allProps(t).filter(isLocal).map(s=>property(s,depth+1,next));
  if(fields.length) return {kind:'object',type,fields};
  return {kind:'string',type};
}
function property(s,depth=0,seen=new Set()) {
  const symbols=s.sources||[s]; const dec=symbols[0].valueDeclaration || symbols[0].declarations?.[0];
  const t=checker.getUnionType(symbols.map(x=>checker.getTypeOfSymbolAtLocation(x,x.valueDeclaration||x.declarations?.[0])));
  return {name:s.name,optional:!!(s.flags&ts.SymbolFlags.Optional),description:ts.displayPartsToString(symbols[0].getDocumentationComment(checker)),...describe(t,s.name,depth,seen)};
}
const components=[];
for(const exp of checker.getExportsOfModule(module)) {
  if(['ICON_NAMES','isIconName'].includes(exp.name))continue;
  const symbol=checker.getAliasedSymbol(exp);if(!(symbol.flags & ts.SymbolFlags.Value))continue;
  const decl=symbol.valueDeclaration||symbol.declarations[0];
  let type=checker.getTypeOfSymbolAtLocation(symbol,decl);
  if(exp.name==='Radio') {const option=checker.getPropertyOfType(type,'Option');type=checker.getTypeOfSymbolAtLocation(option,option.valueDeclaration);}
  const sig=checker.getSignaturesOfType(type,ts.SignatureKind.Call)[0];
  if(!sig)throw Error('Sem contrato: '+exp.name);
  const param=sig.getParameters()[0];const props=checker.getTypeOfSymbolAtLocation(param,param.valueDeclaration);
  const own=allProps(props).filter(isLocal).map(s=>property(s));
  const inherited=allProps(props).filter(s=>!isLocal(s)).map(s=>s.name);
  components.push({name:exp.name,block:'ds-react-'+exp.name.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase(),source:path.relative(base,decl.getSourceFile().fileName),properties:own,inheritedHTML:inherited});
}
// Resolve generic Text enums from the same official declarations.
const textTypes=program.getSourceFile(path.join(base,'components/Atoms/Text/types.d.ts'));
const enumValues=name=>{const node=textTypes.statements.find(n=>ts.isEnumDeclaration(n)&&n.name.text===name);return node.members.map(m=>checker.getConstantValue(m));};
const text=components.find(c=>c.name==='Text');const variantsNode=textTypes.statements.find(n=>ts.isTypeAliasDeclaration(n)&&n.name.text==='TextColorSchemeVariants');
const variantsType=checker.getTypeAtLocation(variantsNode);const colorVariants={};
for(const p of checker.getPropertiesOfType(variantsType)){const type=checker.getTypeOfSymbolAtLocation(p,p.declarations[0]);colorVariants[p.name]=(type.isUnion()?type.types:[type]).filter(t=>t.flags&ts.TypeFlags.StringLiteral).map(t=>t.value);}
for(const [name,values] of Object.entries({textWeight:enumValues('TextWeight'),colorScheme:enumValues('TextColorScheme'),colorVariant:[...new Set(Object.values(colorVariants).flat())]}))Object.assign(text.properties.find(p=>p.name===name),{kind:'enum',values});
text.constraints={colorVariants,headingType:'title',captionSizes:['small','medium'],bodyWeights:['regular','bold']};

fs.mkdirSync('docs',{recursive:true});
fs.writeFileSync('docs/toranja-contract.json',JSON.stringify({package:'@interco/inter-toranja',version:JSON.parse(fs.readFileSync('vendor/@interco/inter-toranja/package.json')).version,components},null,2));
console.log(components.length+' componentes públicos; '+components.reduce((s,c)=>s+c.properties.length,0)+' propriedades próprias.');
