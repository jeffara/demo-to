"""Lossless glyph subsetting for the Portuguese-first catalogue; full fonts remain fallback."""
from pathlib import Path
import hashlib,json
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.pens.recordingPen import RecordingPen
root=Path(__file__).resolve().parents[1]
chars=set(range(32,127))|set(map(ord,'ÀÁÂÃÇÉÊÍÓÔÕÚÜàáâãçéêíóôõúü\u00a0\u00b7'))|set(range(0x2000,0x2070))|{0x20ac,0x2190,0x2191,0x2192,0x2193}
report=[];css=[]
for filename,output,families,weights in [('inter-latin.woff2','inter-critical.woff2',['Inter'],'100 900'),('citrina-regular.woff2','citrina-critical.woff2',['Citrina','Citrina VF'],'400')]:
 source=root/'fonts'/filename;dest=root/'fonts'/output;original=TTFont(source);font=TTFont(source)
 options=subset.Options();options.flavor='woff2';options.hinting=True;options.layout_features=['*'];options.recalc_timestamp=False;options.glyph_names=True
 worker=subset.Subsetter(options=options);worker.populate(unicodes=chars);worker.subset(font);font.flavor='woff2';font.save(dest)
 result=TTFont(dest);before=original.getGlyphSet();after=result.getGlyphSet();cmap=original.getBestCmap();actual=result.getBestCmap()
 for code,name in actual.items():
  oldName=cmap[code];a=RecordingPen();b=RecordingPen();before[oldName].draw(a);after[name].draw(b)
  assert a.value==b.value,(filename,code,'outline')
  assert original['hmtx'][oldName]==result['hmtx'][name],(filename,code,'metrics')
 # Keep all variation axes/ranges; no hint stripping or outline changes.
 assert [('wght',100.0,400.0,900.0)]==[(a.axisTag,a.minValue,a.defaultValue,a.maxValue)for a in result['fvar'].axes] if 'fvar' in original else 'fvar' not in result
 ranges=','.join('U+'+format(c,'X') for c in sorted(actual))
 for family in families:css.append("@font-face{font-family:'"+family+"';font-style:normal;font-weight:"+weights+";font-display:swap;src:url('../fonts/"+output+"') format('woff2');unicode-range:"+ranges+";}")
 report.append({'source':str(source.relative_to(root)),'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest(),'output':str(dest.relative_to(root)),'sha256':hashlib.sha256(dest.read_bytes()).hexdigest(),'sourceBytes':source.stat().st_size,'outputBytes':dest.stat().st_size,'characters':len(actual),'outlinesAndMetricsUnchanged':True,'fullFontRetained':True})
p=root/'styles/fonts.css';text=p.read_text().split('/* generated critical subsets */')[0].rstrip();p.write_text(text+'\n/* generated critical subsets */\n'+'\n'.join(css)+'\n')
(root/'docs/font-subsets-v4.0.0.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
