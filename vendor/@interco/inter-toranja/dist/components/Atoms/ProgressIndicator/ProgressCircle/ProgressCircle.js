import { jsx as o, jsxs as l } from "react/jsx-runtime";
import { useState as f, useEffect as g } from "react";
import { SIZE as m } from "../../../../utils/pattern.js";
import '../../../../assets/ProgressCircle.css';const x = ({
  size: n = m.MEDIUM,
  progress: r = 0
}) => {
  const [e, i] = f(r), s = 20.2, c = 2 * Math.PI * s, t = c - e / 100 * c;
  return g(() => {
    e !== r && i((a) => Math.min(a + (r - a), 100));
  }, [r, e]), /* @__PURE__ */ o(
    "span",
    {
      "data-testid": "progress-circle",
      className: `progress-circle--${n}`,
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
  x as ProgressCircle
};
