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
  if (main) {
    decorateMain(main);
    document.body.classList.add("appear");
    const first = main.querySelector(".section");
    if (first) await loadSection(first);
  }
  const header = document.querySelector("header"),
    footer = document.querySelector("footer");
  await Promise.all([
    main && loadSections(main),
    header && loadHeader(header),
    footer && loadFooter(footer),
  ]);
  if (main?.hasAttribute("data-aue-resource"))
    await import("./editor-support.js");
  document.documentElement.dataset.toranjaLoaded = "true";
}
loadPage().catch((error) =>
  console.error("Falha ao carregar a página Toranja", error),
);
