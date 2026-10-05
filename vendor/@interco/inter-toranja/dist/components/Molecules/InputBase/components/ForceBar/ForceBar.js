import { jsx as e, Fragment as m, jsxs as c } from "react/jsx-runtime";
import { ProgressBar as p } from "../../../../Atoms/ProgressIndicator/ProgressBar/ProgressBar.js";
import { ProgressBarVariant as d } from "../../../../Atoms/ProgressIndicator/ProgressBar/types.js";
import { Text as l } from "../../../../Atoms/Text/Text.js";
import { TextSize as n, TextType as f } from "../../../../Atoms/Text/types.js";
import { classNamesMerge as x } from "../../../../../utils/classNamesMerge.js";
import { STATE as S } from "../../../../../utils/pattern.js";
import '../../../../../assets/ForceBar.css';const T = 3, u = (t) => {
  const { state: a, activeSegments: s, label: r, className: o, shouldRender: i = !0 } = t;
  return i ? /* @__PURE__ */ e(
    "div",
    {
      className: x("force-bar", o),
      "data-testid": "force-bar",
      "data-state": a,
      children: /* @__PURE__ */ c("div", { className: "force-bar__wrapper", children: [
        /* @__PURE__ */ e(
          p,
          {
            variant: d.Stepped,
            steps: T,
            active: s,
            state: S.ENABLED
          }
        ),
        r && /* @__PURE__ */ e(l, { textType: f.Body, textSize: n.Small, "data-testid": "force-bar-label", children: r })
      ] })
    }
  ) : /* @__PURE__ */ e(m, {});
};
export {
  u as ForceBar
};
