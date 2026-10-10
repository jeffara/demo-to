import { isSidebarCustomBrand as o, SIDEBAR_BRAND_ALT as r } from "../constants.js";
import { l as s, a as L, b as l } from "../../../../logo-inter-B-D5dCAR.js";
const i = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Symbol%20/%20Inter'%3e%3cpath%20id='Vector'%20d='M0%2030.7235H16.1984L16.2846%2030.275L0.31051%2026.9628L0.62102%2025.186L16.5951%2028.6362L16.7332%2028.0151L1.63881%2021.4599L2.29434%2019.6485L17.4232%2026.0141L17.7337%2025.5655L4.32991%2015.6119L5.70997%2013.4383L19.0275%2023.3919L19.4243%2022.8572L8.93585%209.53966L11.5062%207.45233L21.9084%2020.1488L22.3569%2019.7521L16.3019%204.34721L19.9763%202.79464L25.6863%2017.889L26.1348%2017.751V1.01782H32V32H0V30.7235Z'%20fill='%23EA7100'/%3e%3c/g%3e%3c/svg%3e", c = {
  inter: l,
  interEmpresas: L,
  interCo: s
}, g = (e, t) => o(e) ? {
  src: t ? e.collapsedSrc : e.src,
  alt: e.alt
} : t ? { src: i, alt: r[e] } : { src: c[e], alt: r[e] };
export {
  g as resolveSidebarBrand
};
