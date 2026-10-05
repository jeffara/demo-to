import { jsxs as o, jsx as i } from "react/jsx-runtime";
import { useEffect as ae } from "react";
import '../../../assets/components/Molecules/Textarea/TextArea.modules.css';/* empty css                      */
import { useTextareaHandlers as te } from "./hooks/useTextareaHandlers.js";
import { getFieldSetClassName as re, getContainerClassName as ie, getLabelClassName as ne, getTextAreaWrapperClassName as se, getTextareaClassNames as oe, getIconWrapperClassName as le, getHintsClassNames as de, getTextCounterClassName as ce } from "./utils/classNames.js";
import { getAnimationConfig as he } from "./utils/getAnimationConfig.js";
import { getMaxLength as me, getPlaceholder as fe } from "./utils/textareaUtils.js";
import L from "../../Atoms/Hints/Hints.js";
import { NeutralIconButton as C } from "../../Atoms/NeutralIconButton/NeutralIconButton.js";
import { STATE as E } from "../../../utils/pattern.js";
import { motion as ue } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { getClearFieldAriaLabel as ge, CHARACTER_LIMIT_REACHED_MESSAGE as _e } from "../../../utils/accessibility/formFieldAccessibility.js";
var pe = /* @__PURE__ */ ((a) => (a.BASE = "fieldset-textarea__textarea-wrapper", a.FOCUSED = "fieldset-textarea__textarea-wrapper--focused", a.ERROR = "fieldset-textarea__textarea-wrapper--error", a.DISABLED = "fieldset-textarea__textarea-wrapper--disabled", a.READ_ONLY = "fieldset-textarea__textarea-wrapper--readonly", a.HOVER = "fieldset-textarea__textarea-wrapper--hover", a.INPUT_DISABLED = "fieldset-textarea__textarea-wrapper__textarea--disabled", a.INPUT_READ_ONLY = "fieldset-textarea__textarea-wrapper__textarea--readonly", a.INPUT_ERROR = "fieldset-textarea__textarea-wrapper__textarea--error", a))(pe || {});
const He = (a) => {
  const {
    label: l = "Label",
    counter: f = 1e3,
    hints: w = [],
    placeholder: v = "",
    showCounter: I = !1,
    showHelper: H = !1,
    showHint: D = !1,
    state: S = E.ENABLED,
    value: d,
    onTag: u,
    onChange: A,
    onHelper: g,
    id: O,
    "aria-describedby": M,
    ...y
  } = a, {
    textareaRef: s,
    isFocused: _,
    value: c,
    isOverLimit: p,
    isHovered: T,
    currentState: B,
    isError: x,
    isReadOnly: r,
    isDisabled: e,
    isSkeleton: h,
    resolvedHints: k,
    characterCount: P,
    isAtCharacterLimit: U,
    textareaId: R,
    hintsId: $,
    counterId: j,
    limitMessageId: G,
    ariaDescribedBy: Y,
    setIsFocused: b,
    handleMouseEnter: F,
    handleMouseLeave: V,
    handleClear: q,
    handleChange: z
  } = te({
    propValue: d == null ? void 0 : d.toString(),
    state: S,
    initialHintsMensagens: w,
    counter: f,
    props: y,
    onTag: u,
    label: l,
    placeholder: v,
    showHint: D,
    showCounter: I,
    propsId: O,
    propsAriaDescribedBy: M
  }), { shouldShowHints: J, shouldShowErrors: m, errorMessages: K, infoHints: Q } = k, X = he({ isDisabled: e, isFocused: _, isReadOnly: r, value: c }), Z = !e && !r && !h, W = (t) => {
    if (z(t), A) {
      const n = {
        ...t,
        target: {
          ...t.target,
          value: t.target.value
        }
      };
      A(n);
    }
  }, ee = (t) => {
    const n = t.currentTarget;
    n.style.height = "auto", n.style.height = `${n.scrollHeight}px`;
  }, N = () => {
    var t;
    e || r || h || (b(!0), (t = s.current) == null || t.focus());
  };
  return ae(() => {
    s.current && (s.current.style.height = "auto", s.current.style.height = `${s.current.scrollHeight}px`);
  }, [c]), /* @__PURE__ */ o(
    "fieldset",
    {
      className: re(h),
      "aria-busy": h,
      "aria-disabled": e,
      children: [
        /* @__PURE__ */ o("div", { className: ie(r), "aria-disabled": e, children: [
          /* @__PURE__ */ i(
            ue.label,
            {
              htmlFor: R,
              onMouseEnter: F,
              onMouseLeave: V,
              className: ne({ isDisabled: e, isReadOnly: r }),
              "aria-disabled": e,
              initial: { y: 20, scale: 1 },
              animate: X,
              transition: { type: "spring", stiffness: 300, damping: 20 },
              onClick: N,
              children: l
            }
          ),
          /* @__PURE__ */ o(
            "div",
            {
              className: se({
                isFocused: _,
                isError: x,
                isOverLimit: p,
                isDisabled: e,
                isReadOnly: r,
                isHovered: T
              }),
              onClick: N,
              "aria-disabled": e,
              children: [
                /* @__PURE__ */ i(
                  "textarea",
                  {
                    ref: s,
                    id: R,
                    className: oe({
                      isDisabled: e,
                      isReadOnly: r,
                      isError: x,
                      isOverLimit: p
                    }),
                    onFocus: () => {
                      e || b(!0);
                    },
                    onBlur: () => b(!1),
                    name: a.name ?? "textarea",
                    ...y,
                    onChange: W,
                    onInput: ee,
                    placeholder: _ ? fe(v) : "",
                    value: c,
                    maxLength: me(f),
                    disabled: e,
                    readOnly: r,
                    "aria-invalid": x,
                    "aria-describedby": Y,
                    children: d
                  }
                ),
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: le({ isDisabled: e, isReadOnly: r }),
                    tabIndex: -1,
                    onClick: N,
                    children: [
                      c && Z && /* @__PURE__ */ i(
                        C,
                        {
                          onClick: q,
                          onTag: (t) => {
                            u && u((n) => ({
                              ...n,
                              ...t(),
                              CustomParameters: {
                                nested_in: "Textarea",
                                nested_label: l
                              }
                            }));
                          },
                          icon: "ic_close_circle",
                          "data-testid": "close-icon",
                          "aria-label": ge(l),
                          tabIndex: 0
                        }
                      ),
                      H && /* @__PURE__ */ i(
                        C,
                        {
                          "data-testid": "helper-button",
                          onClick: () => g == null ? void 0 : g(),
                          icon: "ic_help_circle",
                          "aria-label": "Ajuda",
                          tabIndex: 0,
                          disabled: e
                        }
                      ),
                      B === E.LOADING && /* @__PURE__ */ i(C, { state: "loading", onClick: () => {
                      } })
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "fieldset-textarea__hints", children: [
          J && /* @__PURE__ */ i(
            "div",
            {
              id: $,
              className: de(e),
              role: m ? "alert" : void 0,
              "aria-live": m ? "assertive" : void 0,
              "aria-disabled": e,
              children: /* @__PURE__ */ i(
                L,
                {
                  type: m ? E.ERROR : "info",
                  hints: m ? K : Q
                }
              )
            }
          ),
          I && /* @__PURE__ */ o(
            "div",
            {
              id: j,
              className: ce({ isDisabled: e, isOverLimit: p }),
              "aria-live": "polite",
              "aria-disabled": e,
              children: [
                /* @__PURE__ */ i(L, { type: "info", hints: [`${P}/${f ?? 0}`] }),
                U && /* @__PURE__ */ i("span", { id: G, className: "sr-only", children: _e })
              ]
            }
          )
        ] })
      ]
    }
  );
};
export {
  pe as FieldsetTextareaWrapperClasses,
  He as TextArea
};
