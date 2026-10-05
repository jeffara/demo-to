import {read,el,text,plain,link,href,finish,media,option,safeURL} from '../../scripts/toranja.js';
export default function decorate(block){
 const {fields:f}=read(block),box=el('figure'),frame=el('div','toranja-video-frame portal-'+option(block,['arch','asymmetric','pill','rounded'],'rounded')),poster=media(f.posterImage,'video-poster-wrapper'),button=el('button','toranja-play-btn','▶');
 const ratio=text(f.ratio,'16/9');frame.style.aspectRatio=['16/9','4/3','1/1','9/16'].includes(ratio)?ratio:'16/9';button.type='button';button.setAttribute('aria-label','Assistir: '+text(f.title,'vídeo'));poster.append(button);frame.append(poster);
 button.onclick=()=>{
  const raw=href(f.videoUrl,'');if(!raw){frame.replaceChildren(el('p','video-error','Informe um endereço de vídeo.'));return;}
  let url;try{url=new URL(raw,location.href)}catch{frame.replaceChildren(el('p','video-error','Endereço de vídeo inválido.'));return;}
  let player;const provider=text(f.videoFormat,'auto');
  if(/(^|\.)youtube\.com$/.test(url.hostname)||url.hostname==='youtu.be'){
   const id=url.hostname==='youtu.be'?url.pathname.split('/')[1]:url.searchParams.get('v')||url.pathname.split('/').filter(Boolean).at(-1);
   if(!/^[\w-]{11}$/.test(id||'')){frame.replaceChildren(el('p','video-error','Link do YouTube inválido.'));return;}
   player=el('iframe','video-iframe');player.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1`;player.title=text(f.title,'Vídeo');player.allow='autoplay; encrypted-media; picture-in-picture';player.allowFullscreen=true;
  }else if(/\.(mp4|webm)$/i.test(url.pathname)||['mp4','webm'].includes(provider)){
   player=el('video','video-iframe');player.src=url.href;player.controls=true;player.autoplay=true;player.playsInline=true;player.preload='metadata';player.setAttribute('aria-label',text(f.title,'Vídeo'));
   const captions=href(f.captionsUrl,'');if(captions){player.crossOrigin='anonymous';const track=el('track');track.kind='captions';track.src=safeURL(captions,'');track.srclang=text(f.captionsLanguage,'pt-BR');track.label=text(f.captionsLabel,'Português');track.default=true;player.append(track);}
   player.addEventListener('error',()=>{const notice=el('p','video-error','Não foi possível carregar o vídeo. Verifique se o endereço permite reprodução.');frame.after(notice);},{once:true});
  }else{player=link(f.videoUrl,'button secondary','Abrir vídeo');player.target=text(f.videoUrlTarget,'_blank');player.rel='noopener noreferrer';}
  frame.replaceChildren(player);player.focus();
 };
 box.append(plain(f.title,'h3'),frame,plain(f.caption,'figcaption'));finish(block,box);
}
