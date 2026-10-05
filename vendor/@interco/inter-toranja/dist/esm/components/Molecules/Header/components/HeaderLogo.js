import { jsx as t } from "react/jsx-runtime";
import a from "../assets/logo-inter-co.svg.js";
import n from "../assets/logo-inter-empresas.svg.js";
import m from "../assets/logo-inter.svg.js";
import s from "../assets/logo-toranja.svg.js";
import { HeaderLogo as o } from "../constants.js";
const I = {
  [o.Inter]: m,
  [o.InterEmpresas]: n,
  [o.InterCo]: a,
  [o.Toranja]: s
}, g = {
  [o.Inter]: "Inter",
  [o.InterEmpresas]: "Inter Empresas",
  [o.InterCo]: "Inter & Co",
  [o.Toranja]: "Toranja"
}, L = ({ logo: e = o.Inter }) => {
  const r = e;
  return /* @__PURE__ */ t(
    "img",
    {
      "data-testid": "header-logo",
      className: "header__logo",
      src: I[r],
      alt: g[r]
    }
  );
};
export {
  L as HeaderLogo
};
