import { jsxs as c, jsx as l } from "react/jsx-runtime";
import '../../../assets/components/Utilitarios/Colors/ThemeSelector.modules.css';/* empty css                           */
function h({
  label: r,
  value: a,
  options: n,
  onChange: t
}) {
  return /* @__PURE__ */ c("div", { className: "theme-selector", children: [
    /* @__PURE__ */ l("label", { children: r }),
    /* @__PURE__ */ l("select", { value: a, onChange: (e) => t(e.target.value), children: n.map((e) => /* @__PURE__ */ l("option", { value: e.value, children: e.label }, e.value)) })
  ] });
}
export {
  h as ThemeSelector
};
