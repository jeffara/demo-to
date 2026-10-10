import e from "../assets/symbol-inter.svg.js";
import { isSidebarCustomBrand as m, SIDEBAR_BRAND_ALT as t } from "../constants.js";
import s from "../../Header/assets/logo-inter-co.svg.js";
import i from "../../Header/assets/logo-inter-empresas.svg.js";
import l from "../../Header/assets/logo-inter.svg.js";
const c = {
  inter: l,
  interEmpresas: i,
  interCo: s
}, I = (r, o) => m(r) ? {
  src: o ? r.collapsedSrc : r.src,
  alt: r.alt
} : o ? { src: e, alt: t[r] } : { src: c[r], alt: t[r] };
export {
  I as resolveSidebarBrand
};
