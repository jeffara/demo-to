import { jsx as o } from "react/jsx-runtime";
import { useRef as v } from "react";
import { resolveBulletModifier as g } from "./PageIndicator.helper.js";
import { MODIFIER_CLASS as x } from "./types.js";
import { v as A } from "../../../v4-CRLUkzQ6.js";
import '../../../assets/PageIndicator.css';const S = (a) => {
  const { items: e, selected: t } = a, c = v(
    Array.from({ length: e }).fill(null).map(() => A())
  );
  if (e <= 0 || t <= 0)
    return "Valores númericos recebidos não são válidos.";
  if (t > e)
    return "O item selecionado não pode ser maior que o total de itens.";
  const n = "page-indicator__bullet", m = () => {
    const i = document.querySelector(`.${n}${x.ACTIVE}`);
    let l = -1;
    if (i) {
      const s = i.getAttribute("aria-label");
      s && (l = parseInt(s, 10));
    }
    return l;
  };
  return /* @__PURE__ */ o("div", { className: "page-indicator", children: (() => {
    const l = Math.min(e, 5), s = e > 5, u = t - 1, d = e - t, f = m();
    return Array.from({ length: l }, (E, b) => {
      const r = b + 1, p = g({
        index: r,
        selected: t,
        maxVisibleBullets: 5,
        isPossibleInfinite: s,
        balanceRestLeft: u,
        balanceRestRight: d,
        oldActiveIndex: f
      });
      return /* @__PURE__ */ o(
        "div",
        {
          "aria-label": r.toString(),
          "data-testid": `page-indicator-${r}`,
          className: `${n}${p}`
        },
        c.current[r]
      );
    });
  })() });
};
export {
  S as PageIndicator
};
