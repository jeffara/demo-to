import { jsx as a, jsxs as n } from "react/jsx-runtime";
import '../../assets/stories/shared/ResponsivePreviewLayout.modules.css';/* empty css                                     */
const s = "responsive-preview-layout", m = ({
  children: e
}) => /* @__PURE__ */ a("div", { className: s, children: e }), p = ({
  label: e,
  width: i,
  children: l,
  isStacked: o = !1
}) => {
  const r = {
    "--responsive-preview-width": `${i}px`
  }, t = o ? `${s}__frame-stack` : `${s}__frame`;
  return /* @__PURE__ */ n("div", { className: `${s}__band`, children: [
    /* @__PURE__ */ a("p", { className: `type-label-medium-bold ${s}__label`, children: e }),
    /* @__PURE__ */ a("div", { className: t, style: r, children: l })
  ] });
}, d = ({ children: e }) => /* @__PURE__ */ a("div", { className: `${s}__row`, children: e }), _ = ({ children: e }) => /* @__PURE__ */ a("div", { className: `${s}__fill`, children: e });
export {
  p as ResponsivePreviewBand,
  _ as ResponsivePreviewFill,
  m as ResponsivePreviewLayout,
  d as ResponsivePreviewRow
};
