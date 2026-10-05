import { useState as i, useRef as U, useEffect as y } from "react";
import { getMaxLength as X } from "../utils/textareaUtils.js";
import { isFinePointerHover as Z } from "../../../../utils/is-fine-pointer-hover.js";
import { STATE as t, TAGGING_EVENT as $ } from "../../../../utils/pattern.js";
import { resolveFormFieldHints as p, buildFieldId as ee, buildFieldDescriptionIds as te, buildAriaDescribedBy as ne } from "../../../../utils/accessibility/formFieldAccessibility.js";
function ce({
  propValue: E,
  state: e,
  initialHintsMensagens: g = [],
  counter: c,
  onTag: l,
  label: f,
  placeholder: h,
  props: n,
  showHint: T = !1,
  showCounter: m = !1,
  propsId: B,
  propsAriaDescribedBy: M
}) {
  const [u, v] = i(!1), [r, O] = i(E ?? ""), [_, I] = i(!1), [w, S] = i(!1), [o, G] = i(g), [a, D] = i(e), [L, b] = i(!1), d = U(null);
  y(() => {
    D(e);
  }, [e]), y(() => {
    (a === t.ERROR || e === t.ERROR) && l && !L ? (l((s) => ({
      ...s,
      name: $.ERROR_VIEW,
      ComponentProperties: {
        component_name: "Textarea",
        label: f,
        placeholder: h,
        value: String(r),
        error: o.length > 0 ? JSON.stringify(o) : "",
        counter: c
      }
    })), b(!0)) : a !== t.ERROR && e !== t.ERROR && b(!1);
  }, [
    a,
    l,
    e,
    L,
    f,
    h,
    E,
    o,
    c,
    r
  ]);
  const V = () => {
    !u && Z() && S(!0);
  }, P = () => {
    u || S(!1);
  }, Y = () => {
    if (d.current && (d.current.value = "", O(""), v(!1), I(!1), D(t.ENABLED), G(g), n.onChange)) {
      const s = new Event("textarea", { bubbles: !0 });
      d.current.dispatchEvent(s);
    }
  }, k = (s) => {
    if ((!n.disabled || e !== t.DISABLED) && (!n.readOnly || e !== t.READ_ONLY)) {
      const R = s.target.value;
      if (O(R), I(R.length > X(c)), n.onChange) {
        const Q = {
          ...s,
          target: {
            ...s.target,
            value: R
          }
        };
        n.onChange(Q);
      }
    }
  }, A = e === t.ERROR || a === t.ERROR, J = n.readOnly ?? e === t.READ_ONLY, K = n.disabled ?? e === t.DISABLED, W = e === t.SKELETON, x = p({
    hints: o,
    isError: A,
    showHint: T || o.length > 0
  }), C = (r == null ? void 0 : r.toString().length) ?? 0, j = m && C >= (c ?? 0), H = ee("textarea", B, f), { hintsId: F, counterId: N, limitMessageId: q } = te(H), z = ne([
    M,
    x.shouldShowHints ? F : void 0,
    m ? N : void 0
  ]);
  return {
    textareaRef: d,
    isFocused: u,
    value: r,
    isOverLimit: _,
    isHovered: w,
    currentState: a,
    isError: A,
    isReadOnly: J,
    isDisabled: K,
    isSkeleton: W,
    resolvedHints: x,
    characterCount: C,
    isAtCharacterLimit: j,
    textareaId: H,
    hintsId: F,
    counterId: N,
    limitMessageId: q,
    ariaDescribedBy: z,
    setIsFocused: v,
    handleMouseEnter: V,
    handleMouseLeave: P,
    handleClear: Y,
    handleChange: k
  };
}
export {
  ce as useTextareaHandlers
};
