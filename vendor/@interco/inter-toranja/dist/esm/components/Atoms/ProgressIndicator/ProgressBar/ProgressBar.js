import { jsx as r, Fragment as n, jsxs as d } from "react/jsx-runtime";
import { useRef as c, useState as m } from "react";
import '../../../../assets/components/Atoms/ProgressIndicator/ProgressBar/ProgressBar.modules.css';/* empty css                         */
import { ProgressBarVariant as i } from "./types.js";
import { STATE as l } from "../../../../utils/pattern.js";
import g from "../../../../node_modules/uuid/dist/esm-browser/v4.js";
const f = (t) => {
  const { steps: s, active: e } = t, o = c(Array(s).map(() => g()));
  return e > s ? /* @__PURE__ */ r(n, { children: "O número de passos completados não pode exceder o total de passos disponíveis." }) : /* @__PURE__ */ r(n, { children: Array.from({ length: s }, (p, a) => /* @__PURE__ */ r("div", { className: "progress-bar__progress-of-bar--step", children: /* @__PURE__ */ r(
    "div",
    {
      "data-testid": `progress-step-${a}`,
      className: `progress-bar__progress-of-bar--step${a < e ? "--active" : "--disabled"}`,
      style: {
        width: a < e ? "100%" : "0px"
      }
    }
  ) }, o.current[a])) });
}, h = (t) => {
  const { progress: s, variant: e } = t, [o] = m(s), p = Math.min(Math.max(o + (s - o), 0), 100);
  return /* @__PURE__ */ d(n, { children: [
    e === i.Default && /* @__PURE__ */ r(
      "div",
      {
        role: "progressbar",
        className: "progress-bar__progress-of-bar--fill",
        style: { width: `${p}%` }
      }
    ),
    e === i.FullWidth && /* @__PURE__ */ r(
      "div",
      {
        role: "progressbar",
        className: "progress-bar__progress-of-bar--fullWidth",
        style: { width: `${p}%` }
      }
    )
  ] });
}, x = (t) => {
  const { variant: s, state: e = l.ENABLED } = t;
  return /* @__PURE__ */ r("div", { className: `progress-bar__container--${s}--${e}`, children: e === l.ENABLED && /* @__PURE__ */ r(n, { children: s === i.Stepped ? /* @__PURE__ */ r(f, { ...t }) : /* @__PURE__ */ r(h, { ...t }) }) });
};
export {
  x as ProgressBar
};
