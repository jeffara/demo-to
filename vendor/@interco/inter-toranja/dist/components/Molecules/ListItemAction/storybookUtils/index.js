import { jsxs as t, jsx as a, Fragment as p } from "react/jsx-runtime";
import { Text as o } from "../../../Atoms/Text/Text.js";
import { TextWeight as h, TextSize as m, TextType as _ } from "../../../Atoms/Text/types.js";
import '../../../../assets/index2.css';const c = "storybook", s = ({ children: l }) => /* @__PURE__ */ a(o, { as: "p", textType: _.Code, textSize: m.Small, textWeight: h.Regular, children: l }), g = (l) => Array.isArray(l) ? l.map((e) => [e.value, { label: e.label }]) : Object.entries(l), S = ({
  id: l,
  label: e,
  options: i,
  value: n,
  onChange: d
}) => /* @__PURE__ */ t("div", { className: `${c}__column`, children: [
  /* @__PURE__ */ t(s, { children: [
    "Selecione a variante de ",
    e
  ] }),
  /* @__PURE__ */ a(
    "select",
    {
      id: l,
      value: n,
      onChange: (r) => {
        d(r.target.value);
      },
      className: `${c}__select`,
      children: g(i).map(([r, { label: x }]) => /* @__PURE__ */ a("option", { value: r, children: x }, r))
    }
  )
] }), T = ({
  children: l,
  label: e,
  codeContent: i,
  title: n = "Código da prop"
}) => /* @__PURE__ */ t("div", { className: `${c}__code`, children: [
  /* @__PURE__ */ a("div", { className: `${c}__container__content`, children: l }),
  /* @__PURE__ */ t("div", { style: { alignItems: "flex-start" }, className: `${c}__column`, children: [
    /* @__PURE__ */ a(s, { children: `${n}: ${e}` }),
    /* @__PURE__ */ a("pre", { className: `${c}__code__pre`, children: i })
  ] })
] }), b = ({
  title: l,
  firstItem: e,
  secondItem: i,
  thirdItem: n,
  fourthItem: d
}) => /* @__PURE__ */ t("div", { className: `${c}__usage`, children: [
  /* @__PURE__ */ t(o, { as: "p", textType: _.Label, textSize: m.Small, textWeight: h.Bold, children: [
    "✅ ",
    l
  ] }),
  e && /* @__PURE__ */ t(s, { children: [
    "• ",
    e
  ] }),
  i && /* @__PURE__ */ t(s, { children: [
    "• ",
    i
  ] }),
  n && /* @__PURE__ */ t(s, { children: [
    "• ",
    n
  ] }),
  d && /* @__PURE__ */ t(s, { children: [
    "• ",
    d
  ] })
] }), u = ({
  title: l,
  description: e,
  firstComparisonTitle: i,
  firstComparison: n,
  secondComparisonTitle: d,
  secondComparison: r,
  children: x
}) => /* @__PURE__ */ t("div", { className: `${c}__section`, children: [
  /* @__PURE__ */ t("div", { style: { marginBottom: "32px" }, className: `${c}__column`, children: [
    /* @__PURE__ */ a(
      o,
      {
        as: "h3",
        textType: _.Title,
        textSize: m.Small,
        textWeight: h.Bold,
        children: l
      }
    ),
    /* @__PURE__ */ a(s, { children: typeof e == "string" ? e : /* @__PURE__ */ a(p, { children: e }) })
  ] }),
  /* @__PURE__ */ t("div", { className: `${c}__row`, children: [
    /* @__PURE__ */ t("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ a(s, { children: i }),
      /* @__PURE__ */ a("div", { className: `${c}__dashed`, children: n })
    ] }),
    /* @__PURE__ */ t("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ a(s, { children: d }),
      /* @__PURE__ */ a("div", { className: `${c}__dashed`, children: r })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: `${c}__section--margin-top`, children: [
    /* @__PURE__ */ a(
      o,
      {
        as: "h3",
        textType: _.Title,
        textSize: m.Small,
        textWeight: h.Bold,
        children: "Uso Recomendado"
      }
    ),
    /* @__PURE__ */ a("div", { className: `${c}__row`, children: x })
  ] })
] }), v = (l) => l.split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), f = (l) => Object.entries(l).reduce(
  (e, [i]) => ({
    ...e,
    [i]: { label: v(i) }
  }),
  {}
);
export {
  T as CodeRender,
  u as ComparisonBox,
  b as RecommendedUsageBox,
  S as SelectRender,
  f as createSelectOptions,
  v as formatKeyToLabel
};
