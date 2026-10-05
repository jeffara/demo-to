import { jsx as o } from "react/jsx-runtime";
import { IconColors as n } from "../../../Atoms/Icon/constants/iconColors.js";
import { Icon as a } from "../../../Atoms/Icon/Icon.js";
import { classNamesMerge as i } from "../../../../utils/classNamesMerge.js";
import { STATE as m, SIZE as t } from "../../../../utils/pattern.js";
const p = ({
  isSkeleton: r,
  isExpanded: c,
  isDisabled: e
}) => r ? /* @__PURE__ */ o("div", { className: "accordion__chevron" }) : /* @__PURE__ */ o(
  "div",
  {
    className: i("accordion__chevron", {
      "accordion__chevron--expanded": c,
      "accordion__chevron--animate": !e && !r
    }),
    children: /* @__PURE__ */ o(
      a,
      {
        asset: "ic_chevron_down",
        size: t.MEDIUM,
        state: m.ENABLED,
        color: n.Neutral.Primary,
        "aria-hidden": "true"
      }
    )
  }
);
export {
  p as AccordionChevron
};
