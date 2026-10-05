import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { Text as l } from "../../../Atoms/Text/Text.js";
import { TextSize as s, TextWeight as c, TextType as x } from "../../../Atoms/Text/types.js";
import { classNamesMerge as h } from "../../../../utils/classNamesMerge.js";
import { STATE as r } from "../../../../utils/pattern.js";
const p = ({
  title: m,
  description: e,
  sizeTitle: o,
  isSkeleton: d,
  isDisabled: a
}) => d ? /* @__PURE__ */ i("div", { className: "accordion__summary-text", children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: h("skeleton__title", {
        "skeleton__title--large": o === s.Large
      }),
      style: { width: `${m.length}ch` }
    }
  ),
  e && /* @__PURE__ */ t("div", { className: "skeleton__description", style: { width: `${e.length}ch` } })
] }) : /* @__PURE__ */ i("div", { className: "accordion__summary-text", children: [
  /* @__PURE__ */ t(
    l,
    {
      textType: x.Label,
      textWeight: c.Bold,
      textSize: o,
      state: a ? r.DISABLED : r.ENABLED,
      children: m
    }
  ),
  e && /* @__PURE__ */ t(
    l,
    {
      textType: x.Body,
      textSize: s.Medium,
      textWeight: c.Regular,
      state: a ? r.DISABLED : r.ENABLED,
      children: e
    }
  )
] });
export {
  p as AccordionSummaryText
};
