import { jsx as e, jsxs as d } from "react/jsx-runtime";
import '../../../../../assets/components/Atoms/Charts/ChartBar/subcomponents/ChartBarTooltip.modules.css';/* empty css                             */
import { Text as o } from "../../../Text/Text.js";
import { TextWeight as l, TextType as i, TextSize as p } from "../../../Text/types.js";
const n = ({ items: r }) => r.length === 0 ? null : /* @__PURE__ */ e("div", { "data-testid": "tooltip", className: "chart-bar-tooltip", children: r.map((t, a) => /* @__PURE__ */ d(
  "div",
  {
    "data-testid": `tooltip-item-${a + 1}`,
    className: "chart-bar-tooltip__item",
    children: [
      /* @__PURE__ */ e(
        o,
        {
          textSize: p.Small,
          textType: i.Body,
          textWeight: l.Regular,
          colorVariant: "secondary",
          children: t.label
        }
      ),
      /* @__PURE__ */ e(
        o,
        {
          textSize: p.Small,
          textType: i.Body,
          textWeight: l.Bold,
          colorVariant: "primary",
          children: t.value
        }
      )
    ]
  },
  `${t.value}-${a}`
)) });
export {
  n as ChartBarTooltip
};
