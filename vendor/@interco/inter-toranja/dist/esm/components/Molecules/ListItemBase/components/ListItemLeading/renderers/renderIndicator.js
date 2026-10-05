import { jsxs as l, jsx as c } from "react/jsx-runtime";
import { mapStateToSTATE as i } from "../../../utils/stateMapper.js";
import { Icon as n } from "../../../../../Atoms/Icon/Icon.js";
const o = {
  "Color/Chart/Brand/Default": "var(--color-chart-brand-default)",
  "Color/Chart/Neutral/Default": "var(--color-chart-neutral-default)",
  "Color/Chart/Neutral/Soft": "var(--color-chart-neutral-soft)",
  "Color/Chart/Feedback/Success": "var(--color-chart-feedback-success)",
  "Color/Chart/Feedback/Error": "var(--color-chart-feedback-error)",
  "Color/Chart/Feedback/Warning": "var(--color-chart-feedback-warning)",
  "Color/Chart/Categorical/1": "var(--color-chart-categorical-1)",
  "Color/Chart/Categorical/2": "var(--color-chart-categorical-2)",
  "Color/Chart/Categorical/3": "var(--color-chart-categorical-3)",
  "Color/Chart/Categorical/4": "var(--color-chart-categorical-4)",
  "Color/Chart/Categorical/5": "var(--color-chart-categorical-5)"
}, e = "Color/Chart/Brand/Default", C = (r) => r.startsWith("var(--color-chart-"), s = (r) => {
  if (!r)
    return o[e];
  const a = r.trim();
  return a in o ? o[a] : C(a) ? a : o[e];
}, f = (r, a, t) => r ? /* @__PURE__ */ l(
  "div",
  {
    "data-testid": `${t}-indicator-wrapper`,
    className: `listItemLeading__indicatorWrapper listItemLeading__indicatorWrapper--${a}`,
    children: [
      /* @__PURE__ */ c(
        "div",
        {
          "data-testid": `${t}-indicator`,
          className: `listItemLeading__indicator listItemLeading__indicator--${a}`,
          style: { backgroundColor: s(r.color) },
          children: r.children
        }
      ),
      r.icon && /* @__PURE__ */ c(
        n,
        {
          asset: r.icon.asset,
          size: r.icon.size,
          color: r.icon.color,
          contentDescription: r.icon.contentDescription,
          state: i(a)
        }
      )
    ]
  }
) : null;
export {
  f as renderIndicator
};
