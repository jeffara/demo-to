import { jsx as s } from "react/jsx-runtime";
const a = ({
  plotWidth: t,
  chartHeight: e,
  className: i,
  testId: o,
  children: r
}) => /* @__PURE__ */ s(
  "svg",
  {
    "data-testid": o,
    className: i,
    width: "100%",
    height: e,
    viewBox: `0 0 ${t} ${e}`,
    preserveAspectRatio: "none",
    overflow: "visible",
    "aria-hidden": !0,
    children: r
  }
);
export {
  a as ChartSvg
};
