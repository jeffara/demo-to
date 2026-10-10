import { getContainerClassName as u } from "../utils/classNames.js";
import { InputType as i } from "../utils/inputEnums.js";
import { handleMask as l } from "../utils/inputUtils.js";
const C = (s, e, r) => s !== i.SEARCH && e && !r, V = (s, e, r) => u({
  isTypeSearch: s,
  suppressVisualLabel: e && r
}), b = (s, e, r) => !s || !e ? {} : { "aria-label": r ?? e }, g = ({
  showContent: s,
  value: e,
  defaultValue: r,
  mask: t,
  phoneType: a,
  dateType: o
}) => {
  if (!s)
    return { value: "" };
  if (e !== void 0) {
    const n = String(e);
    return { value: t && n ? l(n, t, a, o) : n };
  }
  return { defaultValue: t && r ? l(String(r), t, a, o) : r };
};
export {
  b as buildAccessibleNameWhenLabelSuppressed,
  g as resolveControlledInputValueProps,
  V as resolveInputBaseContainerClassName,
  C as shouldRenderInputLabel
};
