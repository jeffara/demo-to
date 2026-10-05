import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { Text as l } from "../../../Text/Text.js";
import { TextWeight as o, TextType as i, TextSize as p } from "../../../Text/types.js";
import '../../../../../assets/ChartBarTooltip.css';const m = ({ items: r }) => r.length === 0 ? null : /* @__PURE__ */ e("div", { "data-testid": "tooltip", className: "chart-bar-tooltip", children: r.map((t, a) => /* @__PURE__ */ d(
  "div",
  {
    "data-testid": `tooltip-item-${a + 1}`,
    className: "chart-bar-tooltip__item",
    children: [
      /* @__PURE__ */ e(
        l,
        {
          textSize: p.Small,
          textType: i.Body,
          textWeight: o.Regular,
          colorVariant: "secondary",
          children: t.label
        }
      ),
      /* @__PURE__ */ e(
        l,
        {
          textSize: p.Small,
          textType: i.Body,
          textWeight: o.Bold,
          colorVariant: "primary",
          children: t.value
        }
      )
    ]
  },
  `${t.value}-${a}`
)) });
export {
  m as ChartBarTooltip
};
