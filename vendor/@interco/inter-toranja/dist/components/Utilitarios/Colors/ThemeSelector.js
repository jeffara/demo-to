import { jsxs as t, jsx as l } from "react/jsx-runtime";
import '../../../assets/ThemeSelector.css';function h({
  label: r,
  value: a,
  options: n,
  onChange: c
}) {
  return /* @__PURE__ */ t("div", { className: "theme-selector", children: [
    /* @__PURE__ */ l("label", { children: r }),
    /* @__PURE__ */ l("select", { value: a, onChange: (e) => c(e.target.value), children: n.map((e) => /* @__PURE__ */ l("option", { value: e.value, children: e.label }, e.value)) })
  ] });
}
export {
  h as ThemeSelector
};
