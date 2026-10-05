import { jsx as n } from "react/jsx-runtime";
import { useRef as g } from "react";
import { resolveBulletModifier as v } from "./PageIndicator.helper.js";
import { MODIFIER_CLASS as x } from "./types.js";
import '../../../assets/components/Atoms/PageIndicator/PageIndicator.modules.css';/* empty css                           */
import A from "../../../node_modules/uuid/dist/esm-browser/v4.js";
const _ = (a) => {
  const { items: e, selected: t } = a, c = g(
    Array.from({ length: e }).fill(null).map(() => A())
  );
  if (e <= 0 || t <= 0)
    return "Valores númericos recebidos não são válidos.";
  if (t > e)
    return "O item selecionado não pode ser maior que o total de itens.";
  const o = "page-indicator__bullet", m = () => {
    const s = document.querySelector(`.${o}${x.ACTIVE}`);
    let l = -1;
    if (s) {
      const r = s.getAttribute("aria-label");
      r && (l = parseInt(r, 10));
    }
    return l;
  };
  return /* @__PURE__ */ n("div", { className: "page-indicator", children: (() => {
    const l = Math.min(e, 5), r = e > 5, u = t - 1, d = e - t, f = m();
    return Array.from({ length: l }, (E, b) => {
      const i = b + 1, p = v({
        index: i,
        selected: t,
        maxVisibleBullets: 5,
        isPossibleInfinite: r,
        balanceRestLeft: u,
        balanceRestRight: d,
        oldActiveIndex: f
      });
      return /* @__PURE__ */ n(
        "div",
        {
          "aria-label": i.toString(),
          "data-testid": `page-indicator-${i}`,
          className: `${o}${p}`
        },
        c.current[i]
      );
    });
  })() });
};
export {
  _ as PageIndicator
};
