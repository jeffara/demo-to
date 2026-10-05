import { jsx as t } from "react/jsx-runtime";
import { ListItemViewValueTypeEnum as n } from "../enums.js";
import { TextWeight as f, TextSize as d, TextType as x } from "../../../Atoms/Text/types.js";
import { SIZE as T } from "../../../../utils/pattern.js";
import { Tag as h } from "../../../Atoms/Tag/Tag.js";
import { Text as y } from "../../../Atoms/Text/Text.js";
const z = ({
  value: e,
  valueType: i,
  tagColor: o,
  tagHierarchy: m,
  isEnabled: p,
  className: r
}) => p ? i === n.TAG ? /* @__PURE__ */ t("div", { className: r, children: /* @__PURE__ */ t(
  h,
  {
    label: typeof e == "string" ? e : "",
    color: o,
    hierarchy: m ?? "soft",
    size: T.LARGE
  }
) }) : /* @__PURE__ */ t("div", { className: r, children: /* @__PURE__ */ t(
  y,
  {
    as: "span",
    textType: x.Body,
    textSize: d.Medium,
    textWeight: f.Bold,
    children: e
  }
) }) : /* @__PURE__ */ t("div", { className: r });
export {
  z as ValueSection
};
