import { jsx as o, jsxs as l } from "react/jsx-runtime";
import { useState as f, useEffect as m } from "react";
import '../../../../assets/components/Atoms/ProgressIndicator/ProgressCircle/ProgressCircle.modules.css';/* empty css                            */
import { SIZE as g } from "../../../../utils/pattern.js";
const _ = ({
  size: i = g.MEDIUM,
  progress: r = 0
}) => {
  const [e, n] = f(r), s = 20.2, c = 2 * Math.PI * s, t = c - e / 100 * c;
  return m(() => {
    e !== r && n((a) => Math.min(a + (r - a), 100));
  }, [r, e]), /* @__PURE__ */ o(
    "span",
    {
      "data-testid": "progress-circle",
      className: `progress-circle--${i}`,
      "aria-label": "Carregando",
      children: /* @__PURE__ */ l("svg", { viewBox: "24 25 50 50", className: "progress-circle__svg", children: [
        /* @__PURE__ */ o(
          "circle",
          {
            className: "progress-circle__circle--background",
            cx: "50",
            cy: "50",
            fill: "none",
            r: s
          }
        ),
        /* @__PURE__ */ o(
          "circle",
          {
            className: "progress-circle__circle--progress",
            cx: "50",
            cy: "50",
            r: s,
            fill: "none",
            strokeDasharray: c,
            strokeDashoffset: t,
            "data-stroke-dashoffset": t
          }
        )
      ] })
    }
  );
};
export {
  _ as ProgressCircle
};
