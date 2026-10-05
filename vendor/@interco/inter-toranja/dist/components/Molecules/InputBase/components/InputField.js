import { jsx as N } from "react/jsx-runtime";
import { useInputContext as O } from "../context/InputContext.js";
import { getInputClassNames as S } from "../utils/classNames.js";
import { getMaxLength as j, getPlaceholder as k } from "../utils/inputUtils.js";
const A = ({ restProps: p }) => {
  const { state: d, config: u, handlers: l } = O(), {
    isError: o,
    isSuccess: c,
    isReadOnly: t,
    isDisabled: a,
    isFocused: h,
    isTypeSearch: n,
    showFlag: g,
    showPassword: m,
    showContent: y
  } = d, {
    inputId: I,
    type: r,
    mask: e,
    phoneType: i,
    dateType: f,
    counter: b,
    placeholder: x,
    dataTestId: F,
    ariaDescribedBy: T
  } = u, { inputRef: w, setIsFocused: C, handleChange: P, getInputType: M, getInputMode: R, getInputValueProps: v } = l, { onFocus: s, onBlur: B, ...D } = p;
  return /* @__PURE__ */ N(
    "input",
    {
      ref: w,
      id: I,
      "data-testid": F ?? "input",
      className: S({
        isError: o,
        isSuccess: c,
        isReadOnly: t,
        isTypeSearch: n,
        hasFlag: g
      }),
      type: M(e, m, r),
      inputMode: R(
        r,
        e
      ),
      onInput: () => P(),
      placeholder: y && (h || n) ? k(e, x, i, f) : "",
      ...v(),
      maxLength: j(e, i, b),
      disabled: a,
      readOnly: t,
      ...D,
      onFocus: (L) => {
        !a && !t && C(!0), s == null || s(L);
      },
      onBlur: B,
      "aria-invalid": o || void 0,
      "aria-describedby": T
    }
  );
};
export {
  A as InputField
};
