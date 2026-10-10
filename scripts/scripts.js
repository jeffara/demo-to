import {prepareComponentReference} from './reference-shell.js';
import {preloadDS} from './ds-adapter.js';
export {mountDS,loadDSRuntime} from './ds-adapter.js';
import {prioritizeHero} from './critical-media.js';
import {initializeIntegrations} from './integration-setup.js';
import { resolveLink } from "./links.js";
import {
  decorateSections,
  decorateBlocks,
  decorateIcons,
  loadSection,
  loadSections,
  loadHeader,
  loadFooter,
  getMetadata,
} from "./aem.js";
export { instrument as moveInstrumentation } from "./toranja.js";
export function decorateButtons(main) {
  main.querySelectorAll("a[href]").forEach(a => { const href=resolveLink(a.getAttribute("href")); if(href) a.setAttribute("href",href); });
  main.querySelectorAll("p a[href]").forEach((a) => {
    const strong = a.closest("strong"),
      em = a.closest("em");
    if (!a.querySelector("img") && (strong || em)) {
      a.classList.add("button", strong ? "primary" : "secondary");
      a.closest("p").classList.add("button-container");
    }
  });
}
export function decorateMain(main) {
  decorateSections(main);
  decorateBlocks(main);
  decorateButtons(main);
  decorateIcons(main);
}
async function loadPage() {
  initializeIntegrations();
  document.documentElement.lang = document.documentElement.lang || "pt-BR";
  document.documentElement.setAttribute(
    "toranja-theme",
    getMetadata("toranjatheme") ||
      getMetadata("toranja-theme") ||
      getMetadata("theme") ||
      "pf-light",
  );
  document.documentElement.setAttribute(
    "toranja-surface",
    getMetadata("toranjasurface") ||
      getMetadata("toranja-surface") ||
      getMetadata("surface") ||
      "desktop",
  );
  const main = document.querySelector("main");
  const header = document.querySelector("header"), footer = document.querySelector("footer");
  prioritizeHero(main);
  // Start the common runtime and shared navigation in parallel with the first section.
  const warmup=preloadDS();warmup.catch(()=>{});
  const headerReady=header ? loadHeader(header) : Promise.resolve();
  if(main)decorateMain(main);
  prepareComponentReference(main);
  const first=main?.querySelector('.section');
  if(first)await loadSection(first);
  document.body.classList.add('appear');
  // Complete the visible content before competing with off-screen component chunks.
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  if(main){
    let previous=first;
    for(const section of main.querySelectorAll(':scope > .section')){
      if(section===first)continue;
      if(previous?.getBoundingClientRect().bottom>=innerHeight)break;
      await loadSection(section);previous=section;
    }
    const assetsReady=Promise.all([document.fonts.ready,...[...main.querySelectorAll('img')].filter(img=>img.getBoundingClientRect().top<innerHeight&&img.getBoundingClientRect().bottom>0).map(img=>img.decode().catch(()=>{}))]);
    const controller=new AbortController();let timeout;
    const demand=new Promise(resolve=>{window.addEventListener('scroll',resolve,{once:true,passive:true,signal:controller.signal});timeout=setTimeout(resolve,2000);});
    try{await Promise.race([assetsReady,demand]);}finally{clearTimeout(timeout);controller.abort();}
  }
  await Promise.all([headerReady,main&&loadSections(main),footer&&loadFooter(footer)]);
  if (main?.hasAttribute("data-aue-resource"))
    await import("./editor-support.js");
  document.documentElement.dataset.toranjaLoaded = "true";
}
loadPage().catch(error=>{
 document.body.classList.add('appear');
 console.error('Falha ao carregar a página Toranja',error);
});
