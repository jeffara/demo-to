import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { Badge as r } from "../../../../../Atoms/Badge/Badge.js";
import { Text as i } from "../../../../../Atoms/Text/Text.js";
import { TextWeight as d, TextSize as o, TextType as l } from "../../../../../Atoms/Text/types.js";
const c = (e) => /* @__PURE__ */ t("div", { className: "badgeTrailing", children: [
  e.showDate && e.date && /* @__PURE__ */ a(
    i,
    {
      as: "span",
      textType: l.Body,
      textSize: o.Small,
      textWeight: d.Regular,
      colorScheme: "neutral",
      colorVariant: "secondary",
      children: e.date
    }
  ),
  e.showBadge && e.badgeValue !== void 0 && /* @__PURE__ */ a(r, { variant: "label", count: Number(e.badgeValue) })
] });
export {
  c as renderBadge
};
