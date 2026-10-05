import { jsxs as e, jsx as l, Fragment as p } from "react/jsx-runtime";
import '../../../../assets/components/Molecules/ListItemAction/storybookUtils/ListItemAction.stories.modules.css';/* empty css                                    */
import { Text as o } from "../../../Atoms/Text/Text.js";
import { TextWeight as h, TextSize as m, TextType as _ } from "../../../Atoms/Text/types.js";
const t = "storybook", c = ({ children: a }) => /* @__PURE__ */ l(o, { as: "p", textType: _.Code, textSize: m.Small, textWeight: h.Regular, children: a }), v = (a) => Array.isArray(a) ? a.map((i) => [i.value, { label: i.label }]) : Object.entries(a), S = ({
  id: a,
  label: i,
  options: d,
  value: s,
  onChange: n
}) => /* @__PURE__ */ e("div", { className: `${t}__column`, children: [
  /* @__PURE__ */ e(c, { children: [
    "Selecione a variante de ",
    i
  ] }),
  /* @__PURE__ */ l(
    "select",
    {
      id: a,
      value: s,
      onChange: (r) => {
        n(r.target.value);
      },
      className: `${t}__select`,
      children: v(d).map(([r, { label: x }]) => /* @__PURE__ */ l("option", { value: r, children: x }, r))
    }
  )
] }), T = ({
  children: a,
  label: i,
  codeContent: d,
  title: s = "Código da prop"
}) => /* @__PURE__ */ e("div", { className: `${t}__code`, children: [
  /* @__PURE__ */ l("div", { className: `${t}__container__content`, children: a }),
  /* @__PURE__ */ e("div", { style: { alignItems: "flex-start" }, className: `${t}__column`, children: [
    /* @__PURE__ */ l(c, { children: `${s}: ${i}` }),
    /* @__PURE__ */ l("pre", { className: `${t}__code__pre`, children: d })
  ] })
] }), u = ({
  title: a,
  firstItem: i,
  secondItem: d,
  thirdItem: s,
  fourthItem: n
}) => /* @__PURE__ */ e("div", { className: `${t}__usage`, children: [
  /* @__PURE__ */ e(o, { as: "p", textType: _.Label, textSize: m.Small, textWeight: h.Bold, children: [
    "✅ ",
    a
  ] }),
  i && /* @__PURE__ */ e(c, { children: [
    "• ",
    i
  ] }),
  d && /* @__PURE__ */ e(c, { children: [
    "• ",
    d
  ] }),
  s && /* @__PURE__ */ e(c, { children: [
    "• ",
    s
  ] }),
  n && /* @__PURE__ */ e(c, { children: [
    "• ",
    n
  ] })
] }), b = ({
  title: a,
  description: i,
  firstComparisonTitle: d,
  firstComparison: s,
  secondComparisonTitle: n,
  secondComparison: r,
  children: x
}) => /* @__PURE__ */ e("div", { className: `${t}__section`, children: [
  /* @__PURE__ */ e("div", { style: { marginBottom: "32px" }, className: `${t}__column`, children: [
    /* @__PURE__ */ l(
      o,
      {
        as: "h3",
        textType: _.Title,
        textSize: m.Small,
        textWeight: h.Bold,
        children: a
      }
    ),
    /* @__PURE__ */ l(c, { children: typeof i == "string" ? i : /* @__PURE__ */ l(p, { children: i }) })
  ] }),
  /* @__PURE__ */ e("div", { className: `${t}__row`, children: [
    /* @__PURE__ */ e("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ l(c, { children: d }),
      /* @__PURE__ */ l("div", { className: `${t}__dashed`, children: s })
    ] }),
    /* @__PURE__ */ e("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ l(c, { children: n }),
      /* @__PURE__ */ l("div", { className: `${t}__dashed`, children: r })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: `${t}__section--margin-top`, children: [
    /* @__PURE__ */ l(
      o,
      {
        as: "h3",
        textType: _.Title,
        textSize: m.Small,
        textWeight: h.Bold,
        children: "Uso Recomendado"
      }
    ),
    /* @__PURE__ */ l("div", { className: `${t}__row`, children: x })
  ] })
] });
export {
  T as CodeRender,
  b as ComparisonBox,
  u as RecommendedUsageBox,
  S as SelectRender
};
