import { jsxs as t, jsx as a } from "react/jsx-runtime";
import '../../assets/ResponsivePreviewLayout.css';const s = "responsive-preview-layout", c = ({
  children: e
}) => /* @__PURE__ */ a("div", { className: s, children: e }), m = ({
  label: e,
  width: i,
  children: l,
  isStacked: o = !1
}) => {
  const r = {
    "--responsive-preview-width": `${i}px`
  }, n = o ? `${s}__frame-stack` : `${s}__frame`;
  return /* @__PURE__ */ t("div", { className: `${s}__band`, children: [
    /* @__PURE__ */ a("p", { className: `type-label-medium-bold ${s}__label`, children: e }),
    /* @__PURE__ */ a("div", { className: n, style: r, children: l })
  ] });
}, p = ({ children: e }) => /* @__PURE__ */ a("div", { className: `${s}__row`, children: e }), d = ({ children: e }) => /* @__PURE__ */ a("div", { className: `${s}__fill`, children: e });
export {
  m as ResponsivePreviewBand,
  d as ResponsivePreviewFill,
  c as ResponsivePreviewLayout,
  p as ResponsivePreviewRow
};
