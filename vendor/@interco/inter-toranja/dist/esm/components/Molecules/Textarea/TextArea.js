import { jsxs as p, jsx as c } from "react/jsx-runtime";
import { useEffect as ee } from "react";
import '../../../assets/components/Molecules/Textarea/TextArea.modules.css';/* empty css                      */
import { TextAreaHintsFooter as te } from "./components/TextAreaHintsFooter.js";
import { TextAreaTrailingIcons as ae } from "./components/TextAreaTrailingIcons.js";
import { useTextareaHandlers as re } from "./hooks/useTextareaHandlers.js";
import { getLabelClassName as oe, getTextareaClassNames as ie, getTextAreaWrapperClassName as ne, getContainerClassName as se, getFieldSetClassName as le } from "./utils/classNames.js";
import { getAnimationConfig as de } from "./utils/getAnimationConfig.js";
import { getMaxLength as ce, getPlaceholder as he } from "./utils/textareaUtils.js";
import { STATE as L } from "../../../utils/pattern.js";
import { motion as me } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
var ue = /* @__PURE__ */ ((t) => (t.BASE = "fieldset-textarea__textarea-wrapper", t.FOCUSED = "fieldset-textarea__textarea-wrapper--focused", t.ERROR = "fieldset-textarea__textarea-wrapper--error", t.DISABLED = "fieldset-textarea__textarea-wrapper--disabled", t.READ_ONLY = "fieldset-textarea__textarea-wrapper--readonly", t.HOVER = "fieldset-textarea__textarea-wrapper--hover", t.INPUT_DISABLED = "fieldset-textarea__textarea-wrapper__textarea--disabled", t.INPUT_READ_ONLY = "fieldset-textarea__textarea-wrapper__textarea--readonly", t.INPUT_ERROR = "fieldset-textarea__textarea-wrapper__textarea--error", t))(ue || {});
const we = (t) => {
  const {
    label: h = "Label",
    counter: m = 1e3,
    hints: H = [],
    placeholder: _ = "",
    showCounter: b = !1,
    showHelper: E = !1,
    showHint: C = !1,
    state: D = L.ENABLED,
    value: s,
    onTag: N,
    onChange: A,
    onHelper: R,
    id: S,
    "aria-describedby": O,
    ...v
  } = t, {
    textareaRef: o,
    isFocused: l,
    value: i,
    isOverLimit: u,
    isHovered: T,
    currentState: I,
    isError: f,
    isReadOnly: a,
    isDisabled: e,
    isSkeleton: d,
    resolvedHints: B,
    characterCount: M,
    isAtCharacterLimit: P,
    textareaId: w,
    hintsId: U,
    counterId: k,
    limitMessageId: F,
    ariaDescribedBy: j,
    setIsFocused: g,
    handleMouseEnter: V,
    handleMouseLeave: Y,
    handleClear: $,
    handleChange: G
  } = re({
    propValue: s == null ? void 0 : s.toString(),
    state: D,
    initialHintsMensagens: H,
    counter: m,
    props: v,
    onTag: N,
    label: h,
    placeholder: _,
    showHint: C,
    showCounter: b,
    propsId: S,
    propsAriaDescribedBy: O
  }), { shouldShowHints: q, shouldShowErrors: z, errorMessages: J, infoHints: K } = B, Q = de({ isDisabled: e, isFocused: l, isReadOnly: a, value: i }), y = !e && !a && !d, X = !!(i && y) || E || I === L.LOADING, Z = (r) => {
    if (G(r), A) {
      const n = {
        ...r,
        target: {
          ...r.target,
          value: r.target.value
        }
      };
      A(n);
    }
  }, W = (r) => {
    const n = r.currentTarget;
    n.style.height = "auto", n.style.height = `${n.scrollHeight}px`;
  }, x = () => {
    var r;
    e || a || d || (g(!0), (r = o.current) == null || r.focus());
  };
  return ee(() => {
    o.current && (o.current.style.height = "auto", o.current.style.height = `${o.current.scrollHeight}px`);
  }, [i]), /* @__PURE__ */ p(
    "fieldset",
    {
      className: le(d),
      "data-testid": "TextArea",
      "aria-busy": d,
      "aria-disabled": e,
      children: [
        /* @__PURE__ */ p("div", { className: se(a), "aria-disabled": e, children: [
          /* @__PURE__ */ c(
            me.label,
            {
              htmlFor: w,
              onMouseEnter: V,
              onMouseLeave: Y,
              className: oe({
                isDisabled: e,
                isReadOnly: a,
                isFocused: l,
                hasValue: !!i
              }),
              "aria-disabled": e,
              animate: Q,
              transition: { type: "spring", stiffness: 300, damping: 20 },
              onClick: x,
              children: h
            }
          ),
          /* @__PURE__ */ p(
            "div",
            {
              className: ne({
                isFocused: l,
                isError: f,
                isOverLimit: u,
                isDisabled: e,
                isReadOnly: a,
                isHovered: T
              }),
              onClick: x,
              "aria-disabled": e,
              children: [
                /* @__PURE__ */ c(
                  "textarea",
                  {
                    ref: o,
                    id: w,
                    className: ie({
                      isDisabled: e,
                      isReadOnly: a,
                      isError: f,
                      isOverLimit: u
                    }),
                    onFocus: () => {
                      e || g(!0);
                    },
                    onBlur: () => g(!1),
                    name: t.name ?? "textarea",
                    ...v,
                    onChange: Z,
                    onInput: W,
                    placeholder: l ? he(_) : "",
                    value: i,
                    maxLength: ce(m),
                    disabled: e,
                    readOnly: a,
                    "aria-invalid": f,
                    "aria-describedby": j,
                    children: s
                  }
                ),
                /* @__PURE__ */ c(
                  ae,
                  {
                    hasTrailingIcons: X,
                    isDisabled: e,
                    isReadOnly: a,
                    value: i,
                    isEnabled: y,
                    showHelper: E,
                    currentState: I,
                    label: h,
                    onFocusField: x,
                    handleClear: $,
                    onHelper: R,
                    onTag: N
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c(
          te,
          {
            shouldShowHints: q,
            shouldShowErrors: z,
            errorMessages: J,
            infoHints: K,
            isDisabled: e,
            hintsId: U,
            showCounter: b,
            counterId: k,
            characterCount: M,
            counter: m,
            isOverLimit: u,
            isAtCharacterLimit: P,
            limitMessageId: F
          }
        )
      ]
    }
  );
};
export {
  ue as FieldsetTextareaWrapperClasses,
  we as TextArea
};
