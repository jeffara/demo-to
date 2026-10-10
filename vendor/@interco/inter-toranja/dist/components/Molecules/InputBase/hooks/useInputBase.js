import { useState as we } from "react";
import { shouldRenderInputLabel as Re, resolveInputBaseContainerClassName as Te, buildAccessibleNameWhenLabelSuppressed as Pe, resolveControlledInputValueProps as ye } from "./useInputBasePresentation.js";
import { useInputHandlers as De } from "./useInputHandlers.js";
import { useInputPassword as Ae } from "../../InputPassword/hooks/useInputPassword.js";
import { InputType as F, DateType as Be, PhoneType as ve } from "../utils/inputEnums.js";
import { STATE as o } from "../../../../utils/pattern.js";
import { buildFieldId as He, buildFieldDescriptionIds as Le, resolveFormFieldHints as Ne, buildAriaDescribedBy as Fe, INPUT_BASE_MAX_ERROR_MESSAGES as Oe } from "../../../../utils/accessibility/formFieldAccessibility.js";
const Ke = (e) => {
  const [O, V] = we(!1), { inputProps: M, forceBar: _ } = Ae(e), k = { ...e, ...M }, {
    label: t = "Label",
    counter: S = 1e3,
    hints: m = [],
    error: x = [],
    success: U = "",
    placeholder: b,
    showCounter: g = !1,
    showHelper: X = !1,
    showHint: z = !0,
    showFlag: E = !1,
    showClear: G = !1,
    showContent: r = !0,
    suppressVisualLabel: l = !1,
    flag: K = "ic_flag_brazil",
    prefix: W,
    state: s = o.ENABLED,
    mask: a,
    type: i = F.TEXT,
    defaultValue: C = "",
    value: w,
    dateType: u = Be.BR,
    phoneType: c = ve.BR,
    pickerRange: R,
    onTag: T,
    onChange: Y,
    id: $,
    "aria-describedby": j,
    customTagProps: q,
    suppressNativeDatePicker: J,
    ...P
  } = k, {
    inputRef: y,
    labelRef: Q,
    isFocused: Z,
    hasValueInput: ee,
    characterCount: se,
    validationErrors: D,
    setIsFocused: A,
    handleClear: oe,
    handleInputContainerFocusOut: te,
    handleChange: re,
    handleOpenDatePicker: ae,
    getInputMode: ne,
    getInputType: le
  } = De({
    onChange: Y,
    state: s,
    hints: m,
    mask: a,
    phoneType: c,
    dateType: u,
    pickerRange: R,
    counter: S,
    props: { ...P, value: w, customTagProps: q },
    defaultValue: String(C),
    onTag: T,
    label: t,
    placeholder: b ?? "",
    suppressNativeDatePicker: J
  }), n = s === o.ERROR || D.length > 0, d = s === o.SUCCESS && !n, p = e.readOnly ?? s === o.READ_ONLY, h = e.disabled ?? s === o.DISABLED, B = s === o.SKELETON, f = He("input", $, t), { hintsId: v, counterId: H, limitMessageId: ie } = Le(f), L = `${f}-flag`, I = i === F.SEARCH, {
    errorMessages: ue,
    successMessage: ce,
    infoHints: de,
    shouldShowErrors: pe,
    shouldShowSuccess: he,
    shouldShowInfoHints: fe,
    shouldShowHints: Ie
  } = Ne({
    hints: m,
    error: x,
    success: U,
    validationErrors: D,
    isError: n,
    isSuccess: d,
    showHint: z,
    maxErrorMessages: Oe
  }), Se = Fe([
    j,
    Ie ? v : void 0,
    g && a === void 0 ? H : void 0,
    E ? L : void 0
  ]), me = () => ye({
    showContent: r,
    value: w,
    defaultValue: C,
    mask: a,
    phoneType: c,
    dateType: u
  }), be = () => {
    var N;
    !h && !p && (A(!0), (N = y.current) == null || N.focus());
  }, ge = Re(i, r, l), Ee = Te(
    I,
    l,
    r
  ), Ce = Pe(
    l,
    t,
    e["aria-label"]
  );
  return {
    contextValue: {
      state: {
        isError: n,
        isSuccess: d,
        isReadOnly: p,
        isDisabled: h,
        isFocused: Z,
        isTypeSearch: I,
        isSkeleton: B,
        showFlag: E,
        showPassword: O,
        showContent: r,
        hasValueInput: ee,
        characterCount: se
      },
      config: {
        label: t,
        inputId: f,
        hintsId: v,
        counterId: H,
        limitMessageId: ie,
        flagDescriptionId: L,
        ariaDescribedBy: Se,
        type: i,
        mask: a,
        phoneType: c,
        dateType: u,
        pickerRange: R,
        counter: S,
        placeholder: b,
        dataTestId: e["data-testid"],
        flag: K,
        prefix: W,
        state: s,
        showHelper: X,
        showClear: G,
        showCounter: g,
        errorMessages: ue,
        infoHints: de,
        success: ce,
        shouldShowErrors: pe,
        shouldShowSuccess: he,
        shouldShowInfoHints: fe
      },
      handlers: {
        inputRef: y,
        labelRef: Q,
        setIsFocused: A,
        setShowPassword: V,
        handleClear: oe,
        handleChange: re,
        handleOpenDatePicker: ae,
        handleLabelClick: be,
        onHelper: e.onHelper,
        onTag: T,
        getInputType: le,
        getInputMode: ne,
        getInputValueProps: me
      }
    },
    forceBar: _,
    restProps: {
      ...P,
      ...Ce
    },
    shouldRenderLabel: ge,
    isSkeleton: B,
    isDisabled: h,
    isError: n,
    isSuccess: d,
    isReadOnly: p,
    isTypeSearch: I,
    containerClassName: Ee,
    handleInputContainerFocusOut: te
  };
};
export {
  Ke as useInputBase
};
