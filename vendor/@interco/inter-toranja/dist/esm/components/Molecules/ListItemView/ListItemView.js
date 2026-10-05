import { jsxs as I, jsx as s } from "react/jsx-runtime";
import { ListItemViewOrientationEnum as u, ListItemViewValueTypeEnum as k } from "./enums.js";
import { LabelSection as A } from "./sections/LabelSection.js";
import { TrailingSection as R } from "./sections/TrailingSection.js";
import { ValueSection as w } from "./sections/ValueSection.js";
import { classNamesMerge as l } from "../../../utils/classNamesMerge.js";
import { STATE as T } from "../../../utils/pattern.js";
import '../../../assets/components/Molecules/ListItemView/ListItemView.modules.css';/* empty css                          */
const M = (f) => {
  const {
    label: r,
    value: h,
    orientation: o = u.HORIZONTAL,
    alignRight: i = !1,
    helper: n,
    valueType: E = k.TEXT,
    valueColor: c,
    tagColor: $ = "red",
    tagHierarchy: a = "soft",
    trailingType: b,
    trailing: m,
    onActionTrailing: V,
    helperOnClick: d,
    state: _ = T.ENABLED,
    onTag: g,
    ...L
  } = f, p = o === u.VERTICAL, t = _ === T.ENABLED;
  if (!p && i || p && m && i)
    return "Essa combinação não é permitida!";
  const e = `listItemView__${o}`, N = l(`${e}__label`, {
    [`${e}__label--helper`]: t && n,
    [`${e}__label--alignRight`]: i,
    [`${e}__label--skeleton`]: !t
  }), S = l(`${e}__value`, {
    [`${e}__value--alignRight`]: i,
    [`${e}__value--skeleton`]: !t,
    [c ?? ""]: !!c
  }), v = l(`${e}__trailing`, {
    [`${e}__trailing--skeleton`]: !t
  }), y = l({
    skeletonRight: !t && i
  });
  return /* @__PURE__ */ I("div", { className: `${e} ${y}`, "data-testid": "listItemView", ...L, children: [
    /* @__PURE__ */ s(
      A,
      {
        label: r,
        helper: n,
        isEnabled: t,
        className: N,
        helperOnClick: d,
        onTag: g,
        orientation: o,
        state: _
      }
    ),
    /* @__PURE__ */ s(
      w,
      {
        value: h,
        valueType: E,
        tagColor: $,
        tagHierarchy: typeof a == "object" && a ? a.hierarchy : a,
        isEnabled: t,
        className: S
      }
    ),
    /* @__PURE__ */ s(
      R,
      {
        trailing: m,
        trailingType: b,
        isEnabled: t,
        className: v,
        onActionTrailing: V,
        onTag: g,
        label: r
      }
    )
  ] });
};
export {
  M as ListItemView
};
