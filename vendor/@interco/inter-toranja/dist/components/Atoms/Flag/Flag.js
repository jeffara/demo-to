import { jsx as l } from "react/jsx-runtime";
import { IconColors as i } from "../Icon/constants/iconColors.js";
import { Icon as t } from "../Icon/Icon.js";
import { classNamesMerge as d } from "../../../utils/classNamesMerge.js";
import { STATE as a } from "../../../utils/pattern.js";
import '../../../assets/Flag.css';const g = ({ iconFlag: o, contentDescription: s = "", size: e, state: r, id: m }) => {
  const f = d("flag", {
    "flag--skeleton": r === a.SKELETON,
    "flag--disabled": r === a.DISABLED
  });
  return /* @__PURE__ */ l("div", { className: f, "data-flag": o, "data-testid": "flag-wrapper", children: /* @__PURE__ */ l(
    t,
    {
      asset: o,
      contentDescription: s,
      size: e,
      state: r,
      color: r === a.SKELETON ? i.Neutral.Secondary : void 0,
      id: m,
      isFlag: !0
    }
  ) });
};
g.displayName = "Flag";
export {
  g as Flag
};
