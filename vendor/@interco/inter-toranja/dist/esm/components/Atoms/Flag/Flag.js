import { jsx as l } from "react/jsx-runtime";
import { IconColors as t } from "../Icon/constants/iconColors.js";
import { Icon as f } from "../Icon/Icon.js";
import '../../../assets/components/Atoms/Flag/Flag.modules.css';/* empty css                  */
import { classNamesMerge as d } from "../../../utils/classNamesMerge.js";
import { STATE as o } from "../../../utils/pattern.js";
const p = ({ iconFlag: a, contentDescription: s = "", size: e, state: r, id: m }) => {
  const i = d("flag", {
    "flag--skeleton": r === o.SKELETON,
    "flag--disabled": r === o.DISABLED
  });
  return /* @__PURE__ */ l("div", { className: i, "data-flag": a, "data-testid": "flag-wrapper", children: /* @__PURE__ */ l(
    f,
    {
      asset: a,
      contentDescription: s,
      size: e,
      state: r,
      color: r === o.SKELETON ? t.Neutral.Secondary : void 0,
      id: m,
      isFlag: !0
    }
  ) });
};
p.displayName = "Flag";
export {
  p as Flag
};
