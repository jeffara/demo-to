import { jsx as m } from "react/jsx-runtime";
import { classNamesMerge as c } from "../../../../../utils/classNamesMerge.js";
const f = ({
  barRects: d,
  isSkeleton: r,
  shouldAnimate: i,
  highlightIndex: e,
  classes: a
}) => /* @__PURE__ */ m("g", { "data-testid": "bars", className: a.bars, children: d.map((t) => {
  const o = e !== null && e !== t.categoryIndex;
  return /* @__PURE__ */ m(
    "rect",
    {
      "data-testid": t.testId,
      className: c(
        a.bar,
        !r && i && a.barAnimated,
        !r && t.value < 0 && a.barNegative,
        !r && o && a.barDimmed
      ),
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height,
      fill: r ? "var(--color-surface-disabled)" : t.color
    },
    t.animationKey
  );
}) });
export {
  f as ChartBarBars
};
