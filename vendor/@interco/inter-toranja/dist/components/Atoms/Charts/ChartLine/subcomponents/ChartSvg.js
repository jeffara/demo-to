import { jsx as o } from "react/jsx-runtime";
const n = ({
  plotWidth: e,
  chartHeight: t,
  shouldLockPlotWidth: r = !1,
  className: s,
  testId: a,
  children: i
}) => /* @__PURE__ */ o(
  "svg",
  {
    "data-testid": a,
    className: s,
    width: r ? e : "100%",
    height: t,
    viewBox: `0 0 ${e} ${t}`,
    preserveAspectRatio: "none",
    "aria-hidden": !0,
    children: i
  }
);
export {
  n as ChartSvg
};
