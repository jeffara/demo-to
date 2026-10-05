import { jsx as e, Fragment as m, jsxs as c } from "react/jsx-runtime";
import '../../../../../assets/components/Molecules/InputBase/components/ForceBar/ForceBar.modules.css';/* empty css                      */
import { ProgressBar as p } from "../../../../Atoms/ProgressIndicator/ProgressBar/ProgressBar.js";
import { ProgressBarVariant as d } from "../../../../Atoms/ProgressIndicator/ProgressBar/types.js";
import { Text as l } from "../../../../Atoms/Text/Text.js";
import { TextSize as n, TextType as f } from "../../../../Atoms/Text/types.js";
import { classNamesMerge as x } from "../../../../../utils/classNamesMerge.js";
import { STATE as S } from "../../../../../utils/pattern.js";
const T = 3, y = (t) => {
  const { state: a, activeSegments: o, label: r, className: s, shouldRender: i = !0 } = t;
  return i ? /* @__PURE__ */ e(
    "div",
    {
      className: x("force-bar", s),
      "data-testid": "force-bar",
      "data-state": a,
      children: /* @__PURE__ */ c("div", { className: "force-bar__wrapper", children: [
        /* @__PURE__ */ e(
          p,
          {
            variant: d.Stepped,
            steps: T,
            active: o,
            state: S.ENABLED
          }
        ),
        r && /* @__PURE__ */ e(l, { textType: f.Body, textSize: n.Small, "data-testid": "force-bar-label", children: r })
      ] })
    }
  ) : /* @__PURE__ */ e(m, {});
};
export {
  y as ForceBar
};
