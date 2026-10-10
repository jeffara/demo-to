/** Conversões tipadas e validações compartilhadas entre renderização e testes. */
export function at(o,p){return p.reduce((v,k)=>v?.[k],o);}
export function put(o,p,v){let x=o;for(const k of p.slice(0,-1)){if(['__proto__','prototype','constructor'].includes(k))throw Error('Propriedade inválida');x=x[k]??={};}if(['__proto__','prototype','constructor'].includes(p.at(-1)))throw Error('Propriedade inválida');x[p.at(-1)]=v;}
export function parseList(value,spec={kind:'string'}){
 if(Array.isArray(value))return value.map(v=>scalar(v,spec));
 const raw=String(value??'').trim();if(!raw)return [];
 if(raw.startsWith('[')){let v;try{v=JSON.parse(raw)}catch{throw Error('Lista legada inválida')};if(!Array.isArray(v))throw Error('Lista inválida');return v.map(v=>scalar(v,spec));}
 return raw.split(/\r?\n|,\s*/).filter(Boolean).map(v=>scalar(v,spec));
}
export function scalar(value,spec){
 if(['json','object'].includes(spec.kind)&&typeof value==='string')return JSON.parse(value);
 if(spec.kind==='number'){const n=Number(value);if(!Number.isFinite(n))throw Error('Valor numérico inválido');return n;}
 if(spec.kind==='boolean')return value===true||value==='true';
 return value;
}
export function normalizeProps(raw,schema){
 const p=structuredClone(raw);
 // These official controls read required collections during their first render.
 const emptyArrays={Breadcrumb:['items'],Table:['data','columns'],Pagination:['pageSizeOptions'],BottomSheetCountry:['items','featuredItems'],InputCountry:['countryItems','featuredCountryItems'],ChartBar:['categories','values'],ChartMeter:['bars','legend']};
 for(const key of emptyArrays[schema.name]||[])p[key]??=[];
 for(const [name,mode] of Object.entries(p.$enabled||{}))if(mode==='false')delete p[name];
 if(schema.name==='ListItem')for(const side of ['leading','trailing']){const selected=p['$'+side+'Choice'];if(selected&&selected!=='auto')for(const k of Object.keys(p))if(k.startsWith(side)&&k!==selected)delete p[k];}
 if(p.$chartData?.length){const rows=p.$chartData;if(schema.name==='ChartBar'){p.categories=rows.map(x=>x.label||'');p.values=rows.map(x=>x.value??0)}if(schema.name==='ChartDonut'){p.label=rows.map(x=>x.label||'');p.slice=rows.map(x=>x.value??0)}if(schema.name==='ChartMeter'){p.legend=rows.map(x=>x.label||'');p.bars=rows.map(x=>x.value??0)}if(rows.every(x=>x.color))p.forceColor=rows.map(x=>x.color);}
 const length=schema.name==='ChartBar'?p.values?.length:schema.name==='ChartDonut'?p.slice?.length:schema.name==='ChartMeter'?p.bars?.length:null;
 if(length!=null){const keys=schema.name==='ChartBar'?['categories','valueLabels','forceColor']:schema.name==='ChartDonut'?['label','value','forceColor','forceIndex']:['legend','value','forceColor'];for(const k of keys)if(p[k]?.length&&p[k].length!==length)throw Error('Gráfico: '+k+' deve ter '+length+' itens.');}
 if(schema.name==='ChartLine'&&p.series?.length&&p.categories?.length)for(const series of p.series)if(series.values?.length!==p.categories.length)throw Error('Cada série deve ter um valor por categoria.');
 for(const c of schema.collections||[])if(c.maxItems&&at(p,c.path)?.length>c.maxItems)throw Error('Máximo de '+c.maxItems+' itens em '+c.id);
 if(schema.name==='DatePicker'){
  const dates=[p.minDate,p.maxDate,p.visibleMonth,p.$dateValue,p.$defaultDate,p.value?.start,p.value?.end,p.defaultValue?.start,p.defaultValue?.end,...(p.$disabledDates||[])].filter(v=>v!=null&&v!=='');
  for(const value of dates)if(typeof value==='string'){if(!/^\d{4}-\d{2}-\d{2}$/.test(value))throw Error('Use datas no formato AAAA-MM-DD.');const date=new Date(value+'T12:00:00');if(Number.isNaN(date.getTime())||date.getFullYear()!==Number(value.slice(0,4))||date.getMonth()+1!==Number(value.slice(5,7))||date.getDate()!==Number(value.slice(8,10)))throw Error('Data inválida.');}
  if(p.minDate&&p.maxDate&&new Date(p.minDate)>new Date(p.maxDate))throw Error('A data mínima deve preceder a máxima.');
  if(p.value?.start&&p.value?.end&&new Date(p.value.start)>new Date(p.value.end))throw Error('O início deve preceder o fim do intervalo.');
 }
 if(p.min!=null&&p.max!=null&&Number(p.min)>Number(p.max))throw Error('O mínimo não pode exceder o máximo.');
 return p;
}
