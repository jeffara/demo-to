import { jsx as r } from "react/jsx-runtime";
import { LeadingVariant as i } from "../types.js";
import { Icon as s } from "../../../Atoms/Icon/Icon.js";
import { Avatar as m } from "../../Avatar/Avatar.js";
import { classNamesMerge as n } from "../../../../utils/classNamesMerge.js";
import { SIZE as v, STATE as t } from "../../../../utils/pattern.js";
const p = ({
  showLeading: o,
  leading: a,
  isDisabled: e,
  isSkeleton: c
}) => {
  if (!o || !a)
    return null;
  const d = c ? t.SKELETON : e ? t.DISABLED : t.ENABLED;
  return a.variant === i.Icon ? /* @__PURE__ */ r(
    "div",
    {
      "data-testid": "leading",
      className: n("accordion__leading", "accordion__leading--icon"),
      "aria-hidden": "true",
      children: /* @__PURE__ */ r(s, { asset: a.icon })
    }
  ) : a.variant === i.Avatar ? /* @__PURE__ */ r(
    "div",
    {
      "data-testid": "leading",
      className: n("accordion__leading", "accordion__leading--avatar"),
      "aria-hidden": "true",
      children: /* @__PURE__ */ r(
        m,
        {
          ...a.avatar,
          size: v.MEDIUM,
          state: d,
          onClick: void 0,
          onTag: void 0
        }
      )
    }
  ) : null;
};
export {
  p as AccordionLeading
};
