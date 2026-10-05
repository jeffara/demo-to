import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { Text as o } from "../../../Text/Text.js";
import { TextWeight as a, TextType as r, TextSize as c } from "../../../Text/types.js";
import '../../../../../assets/ChartLineTooltip.css';const x = ({
  title: d,
  items: n,
  showIndicators: p = !0
}) => n.length === 0 ? null : /* @__PURE__ */ i("div", { "data-testid": "tooltip", className: "chart-line-tooltip", children: [
  /* @__PURE__ */ t(
    o,
    {
      textSize: c.Small,
      textType: r.Body,
      textWeight: a.Regular,
      colorVariant: "secondary",
      children: d
    }
  ),
  /* @__PURE__ */ t("div", { className: "chart-line-tooltip__content", children: n.map((e, l) => /* @__PURE__ */ i(
    "div",
    {
      "data-testid": `tooltip-item-${l + 1}`,
      className: "chart-line-tooltip__item",
      children: [
        /* @__PURE__ */ i("div", { className: "chart-line-tooltip__label", children: [
          p && /* @__PURE__ */ t(
            "div",
            {
              "data-testid": `tooltip-indicator-${l + 1}`,
              className: "chart-line-tooltip__indicator",
              style: { backgroundColor: e.color }
            }
          ),
          /* @__PURE__ */ t(
            o,
            {
              textSize: c.Small,
              textType: r.Body,
              textWeight: a.Regular,
              colorVariant: "secondary",
              children: e.label
            }
          )
        ] }),
        /* @__PURE__ */ t(
          o,
          {
            textSize: c.Small,
            textType: r.Body,
            textWeight: a.Bold,
            colorVariant: "primary",
            children: e.value
          }
        )
      ]
    },
    `${e.label}-${l}`
  )) })
] });
export {
  x as ChartLineTooltip
};
