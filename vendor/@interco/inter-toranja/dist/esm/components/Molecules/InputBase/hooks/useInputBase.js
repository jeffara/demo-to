import { useState as we } from "react";
import { useInputHandlers as be } from "./useInputHandlers.js";
import { useInputPassword as Re } from "../../InputPassword/hooks/useInputPassword.js";
import { InputType as I, DateType as Te, PhoneType as Ce } from "../utils/inputEnums.js";
import { handleMask as M } from "../utils/inputUtils.js";
import { STATE as o } from "../../../../utils/pattern.js";
import { buildFieldId as ye, buildFieldDescriptionIds as De, resolveFormFieldHints as Ve, INPUT_BASE_MAX_ERROR_MESSAGES as Ae, buildAriaDescribedBy as He } from "../../../../utils/accessibility/formFieldAccessibility.js";
const Ne = (t) => {
  const [O, L] = we(!1), { inputProps: _, forceBar: x } = Re(t), N = { ...t, ..._ }, {
    label: i = "Label",
    counter: E = 1e3,
    hints: w = [],
    error: U = [],
    success: X = "",
    placeholder: b,
    showCounter: R = !1,
    showHelper: z = !1,
    showHint: G = !0,
    showFlag: T = !1,
    showClear: K = !1,
    showContent: u = !0,
    flag: Y = "ic_flag_brazil",
    prefix: $,
    state: e = o.ENABLED,
    mask: s,
    type: d = I.TEXT,
    defaultValue: a = "",
    value: c,
    dateType: r = Te.BR,
    phoneType: n = Ce.BR,
    pickerRange: C,
    onTag: y,
    onChange: j,
    id: q,
    "aria-describedby": J,
    customTagProps: Q,
    ...D
  } = N, {
    inputRef: V,
    labelRef: W,
    isFocused: Z,
    hasValueInput: ee,
    characterCount: se,
    validationErrors: A,
    setIsFocused: H,
    handleClear: te,
    handleInputContainerFocusOut: oe,
    handleChange: ae,
    handleOpenDatePicker: re,
    getInputMode: ne,
    getInputType: le
  } = be({
    onChange: j,
    state: e,
    hints: w,
    mask: s,
    phoneType: n,
    dateType: r,
    pickerRange: C,
    counter: E,
    props: { ...D, value: c, customTagProps: Q },
    defaultValue: String(a),
    onTag: y,
    label: i,
    placeholder: b ?? ""
  }), l = e === o.ERROR || A.length > 0, p = e === o.SUCCESS && !l, h = t.readOnly ?? e === o.READ_ONLY, f = t.disabled ?? e === o.DISABLED, P = e === o.SKELETON, S = ye("input", q, i), { hintsId: k, counterId: v, limitMessageId: ie } = De(S), B = `${S}-flag`, F = d === I.SEARCH, {
    errorMessages: ue,
    successMessage: de,
    infoHints: ce,
    shouldShowErrors: pe,
    shouldShowSuccess: he,
    shouldShowInfoHints: fe,
    shouldShowHints: Se
  } = Ve({
    hints: w,
    error: U,
    success: X,
    validationErrors: A,
    isError: l,
    isSuccess: p,
    showHint: G,
    maxErrorMessages: Ae
  }), ge = He([
    J,
    Se ? k : void 0,
    R && s === void 0 ? v : void 0,
    T ? B : void 0
  ]), me = () => {
    if (!u)
      return { value: "" };
    if (c !== void 0) {
      const m = String(c);
      return { value: s && m ? M(m, s, n, r) : m };
    }
    return { defaultValue: s && a ? M(String(a), s, n, r) : a };
  }, Ie = () => {
    var g;
    !f && !h && (H(!0), (g = V.current) == null || g.focus());
  }, Ee = d !== I.SEARCH && u;
  return {
    contextValue: {
      state: {
        isError: l,
        isSuccess: p,
        isReadOnly: h,
        isDisabled: f,
        isFocused: Z,
        isTypeSearch: F,
        isSkeleton: P,
        showFlag: T,
        showPassword: O,
        showContent: u,
        hasValueInput: ee,
        characterCount: se
      },
      config: {
        label: i,
        inputId: S,
        hintsId: k,
        counterId: v,
        limitMessageId: ie,
        flagDescriptionId: B,
        ariaDescribedBy: ge,
        type: d,
        mask: s,
        phoneType: n,
        dateType: r,
        pickerRange: C,
        counter: E,
        placeholder: b,
        dataTestId: t["data-testid"],
        flag: Y,
        prefix: $,
        state: e,
        showHelper: z,
        showClear: K,
        showCounter: R,
        errorMessages: ue,
        infoHints: ce,
        success: de,
        shouldShowErrors: pe,
        shouldShowSuccess: he,
        shouldShowInfoHints: fe
      },
      handlers: {
        inputRef: V,
        labelRef: W,
        setIsFocused: H,
        setShowPassword: L,
        handleClear: te,
        handleChange: ae,
        handleOpenDatePicker: re,
        handleLabelClick: Ie,
        onHelper: t.onHelper,
        onTag: y,
        getInputType: le,
        getInputMode: ne,
        getInputValueProps: me
      }
    },
    forceBar: x,
    restProps: D,
    shouldRenderLabel: Ee,
    isSkeleton: P,
    isDisabled: f,
    isError: l,
    isSuccess: p,
    isReadOnly: h,
    isTypeSearch: F,
    handleInputContainerFocusOut: oe
  };
};
export {
  Ne as useInputBase
};
