import { jsx as a, jsxs as i } from "react/jsx-runtime";
import { TextWeight as o, TextType as s, TextSize as c } from "../../Text/types.js";
import { Text as n } from "../../Text/Text.js";
import '../../../../assets/components/Atoms/Charts/Legend/Legend.modules.css';/* empty css                    */
const t = "legend", g = (l, e, r, d) => /* @__PURE__ */ i("div", { "data-testid": `legend-item-${e + 1}`, className: t, children: [
  /* @__PURE__ */ i("div", { className: `${t}__item ${t}__item--${d}`, children: [
    /* @__PURE__ */ a(
      "div",
      {
        "data-testid": `legend-indicator-${e + 1}`,
        className: `${t}__indicator`,
        style: { backgroundColor: l.color }
      }
    ),
    /* @__PURE__ */ a(
      n,
      {
        textSize: c.Small,
        textType: s.Body,
        textWeight: o.Regular,
        colorVariant: "secondary",
        children: l.label
      }
    )
  ] }),
  r && /* @__PURE__ */ a("div", { className: `${t}__value`, children: /* @__PURE__ */ a(
    n,
    {
      textSize: c.Small,
      textType: s.Body,
      textWeight: o.Bold,
      colorVariant: "primary",
      children: l.value
    }
  ) })
] }, e), y = ({ items: l, orientation: e }) => {
  if (l.length === 0)
    return null;
  const r = e === "vertical";
  return /* @__PURE__ */ a("div", { "data-testid": "legend", className: `${t} ${t}--${e}`, children: l.map((d, m) => g(d, m, r, e)) });
};
export {
  y as Legend
};
