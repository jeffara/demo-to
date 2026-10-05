import { jsxs as O, jsx as t } from "react/jsx-runtime";
import '../../../assets/InputBase.css';import '../../../assets/PinCode.css';/* empty css                                  */
import { usePinCode as S } from "./hooks/usePinCode.js";
import $ from "../../Atoms/Hints/Hints.js";
import { STATE as k } from "../../../utils/pattern.js";
function q({
  fields: i = 3,
  type: a = "number",
  state: d,
  disabled: c,
  hints: s,
  placeholder: o,
  hidden: m = !1,
  onGetValue: p,
  onComplete: u,
  onChange: _,
  onStateChange: f
}) {
  const {
    valuePinCode: h,
    fieldsetKeys: N,
    inputRefs: v,
    fieldsetRefs: y,
    isDisabled: r,
    isError: l,
    isSkeleton: g,
    isReadOnly: C,
    typeInput: P,
    handleInput: b,
    handlePaste: w,
    handleNavigation: R,
    handleFocus: B,
    handleBlur: D,
    handleContainerPointerDown: I,
    getClassNames: j,
    getInputClassNames: A
  } = S({
    fields: i,
    state: d,
    disabled: c,
    hidden: m,
    type: a,
    onGetValue: p,
    onComplete: u,
    onStateChange: f
  }), E = !!(s && s.length > 0);
  return /* @__PURE__ */ O(
    "div",
    {
      className: "fieldset__pin-code__container",
      style: { "--pin-code-fields": i },
      onPointerDown: I,
      children: [
        /* @__PURE__ */ t("div", { className: "fieldset__pin-code__container__wrapper", children: Array.from({ length: i }).map((F, e) => /* @__PURE__ */ t(
          "fieldset",
          {
            ref: (n) => {
              y.current[e] = n;
            },
            className: `fieldset${g ? "--skeleton" : ""}`,
            children: /* @__PURE__ */ t("div", { className: "fieldset__container", children: /* @__PURE__ */ t("div", { className: j(e), "data-testid": `pin-code-wrapper-${e}`, children: /* @__PURE__ */ t(
              "input",
              {
                ref: (n) => {
                  v.current[e] = n;
                },
                role: "spinbutton",
                "data-testid": `pin-code-input-${e}`,
                inputMode: a === "number" ? "numeric" : "text",
                type: P,
                autoComplete: "one-time-code",
                value: h[e],
                onInput: (n) => b(n, e),
                onKeyDown: (n) => R(n, e),
                onPaste: w,
                onFocus: () => B(e),
                onBlur: D,
                maxLength: 1,
                className: A(),
                disabled: r,
                placeholder: o == null ? void 0 : o.charAt(0),
                readOnly: C,
                onChange: _,
                "aria-invalid": l
              }
            ) }) })
          },
          N.current[e]
        )) }),
        E && s && /* @__PURE__ */ t(
          $,
          {
            className: [
              "fieldset__pin-code__container__hints",
              "fieldset__hints__hintsMensagens",
              r && "fieldset__hints--disabled"
            ].filter(Boolean).join(" "),
            type: l ? k.ERROR : "info",
            hints: s
          }
        )
      ]
    }
  );
}
export {
  q as PinCode
};
