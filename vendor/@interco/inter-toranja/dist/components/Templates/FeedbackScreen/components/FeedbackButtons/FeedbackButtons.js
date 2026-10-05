import { jsxs as m, jsx as f } from "react/jsx-runtime";
import { wrapNestedOnTag as r } from "../../utils/wrapNestedOnTag.js";
import { Button as s } from "../../../../Molecules/Button/Button.js";
import { SIZE as R, HIERARCHY as C } from "../../../../../utils/pattern.js";
const A = () => {
}, k = (l) => l ?? A, d = ({
  state: l,
  buttonContainerClasses: b,
  secondaryButton: e,
  secondaryButtonHierarchy: h,
  primaryButton: i,
  tertiaryButton: a,
  shouldShowTertiaryButton: T,
  onTag: c,
  taggingContext: o
}) => /* @__PURE__ */ m("div", { className: b, children: [
  e && /* @__PURE__ */ f(
    s,
    {
      label: e.label,
      onClick: k(e.onClick),
      size: R.LARGE,
      hierarchy: h,
      variant: "default",
      state: l,
      onTag: r(c, e.onTag, o),
      fill: !0
    }
  ),
  i && /* @__PURE__ */ f(
    s,
    {
      label: i.label,
      onClick: k(i.onClick),
      size: R.LARGE,
      hierarchy: C.PRIMARY,
      variant: "default",
      state: l,
      onTag: r(c, i.onTag, o),
      fill: !0
    }
  ),
  T && a && /* @__PURE__ */ f(
    s,
    {
      label: a.label,
      onClick: k(a.onClick),
      size: R.LARGE,
      hierarchy: C.TERTIARY,
      variant: "default",
      state: l,
      onTag: r(c, a.onTag, o),
      fill: !0
    }
  )
] });
export {
  d as FeedbackButtons
};
