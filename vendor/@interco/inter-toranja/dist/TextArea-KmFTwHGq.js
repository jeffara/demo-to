import { jsxs as h, jsx as n } from "react/jsx-runtime";
import { useEffect as re } from "react";
import { useTextareaHandlers as se } from "./components/Molecules/Textarea/hooks/useTextareaHandlers.js";
import { getAnimationConfig as ie } from "./components/Molecules/Textarea/utils/getAnimationConfig.js";
import { getMaxLength as ne, getPlaceholder as le } from "./components/Molecules/Textarea/utils/textareaUtils.js";
import T from "./components/Atoms/Hints/Hints.js";
import { NeutralIconButton as w } from "./components/Atoms/NeutralIconButton/index.js";
import { STATE as O } from "./utils/pattern.js";
import { m as oe } from "./proxy-BBnpZ6GV.js";
import { getClearFieldAriaLabel as de, CHARACTER_LIMIT_REACHED_MESSAGE as ce } from "./utils/accessibility/formFieldAccessibility.js";
import { classNamesMerge as l } from "./utils/classNamesMerge.js";
import './assets/TextArea.css';function _e(e) {
  return l(e ? "fieldset-textarea--skeleton" : "fieldset-textarea");
}
function fe(e) {
  return l(
    "fieldset-textarea__container",
    e && "fieldset-textarea__container--readonly"
  );
}
function ue({
  isDisabled: e,
  isError: t,
  isFocused: o,
  isHovered: m,
  isOverLimit: d,
  isReadOnly: c
}) {
  const x = s.BASE, N = s.FOCUSED, I = s.ERROR, f = s.DISABLED, g = s.READ_ONLY, p = s.HOVER;
  return l(
    x,
    o && !t && !d && N,
    (t || d) && I,
    e && f,
    c && g,
    !e && !c && m && p
  );
}
function he({
  isDisabled: e,
  isReadOnly: t,
  isError: o,
  isOverLimit: m
}) {
  const d = s.INPUT_DISABLED, c = s.INPUT_READ_ONLY, x = s.INPUT_ERROR;
  return l(
    "fieldset-textarea__textarea-wrapper__textarea",
    "type-label-large-regular",
    e && d,
    t && c,
    (o || m) && x
  );
}
function me({
  isDisabled: e,
  isReadOnly: t
}) {
  return l(
    "type-label-large-regular",
    "fieldset-textarea__label",
    e && "fieldset-textarea__label--disabled",
    t && "fieldset-textarea__label--readonly"
  );
}
function xe({
  isDisabled: e,
  isReadOnly: t
}) {
  return l(
    "icons-wrapper",
    t && "icons-wrapper--readonly",
    e && "icons-wrapper--disabled"
  );
}
function ge(e) {
  return l(
    "fieldset-textarea__hints__hintsMensagens",
    e && "fieldset-textarea__hints--disabled"
  );
}
function pe({
  isDisabled: e,
  isOverLimit: t
}) {
  return l(
    "fieldset-textarea__hints__counter",
    t && "fieldset-textarea__hints--error",
    e && "fieldset-textarea__hints--disabled"
  );
}
var s = /* @__PURE__ */ ((e) => (e.BASE = "fieldset-textarea__textarea-wrapper", e.FOCUSED = "fieldset-textarea__textarea-wrapper--focused", e.ERROR = "fieldset-textarea__textarea-wrapper--error", e.DISABLED = "fieldset-textarea__textarea-wrapper--disabled", e.READ_ONLY = "fieldset-textarea__textarea-wrapper--readonly", e.HOVER = "fieldset-textarea__textarea-wrapper--hover", e.INPUT_DISABLED = "fieldset-textarea__textarea-wrapper__textarea--disabled", e.INPUT_READ_ONLY = "fieldset-textarea__textarea-wrapper__textarea--readonly", e.INPUT_ERROR = "fieldset-textarea__textarea-wrapper__textarea--error", e))(s || {});
const we = (e) => {
  const {
    label: t = "Label",
    counter: o = 1e3,
    hints: m = [],
    placeholder: d = "",
    showCounter: c = !1,
    showHelper: x = !1,
    showHint: N = !1,
    state: I = O.ENABLED,
    value: f,
    onTag: g,
    onChange: p,
    onHelper: R,
    id: M,
    "aria-describedby": B,
    ...S
  } = e, {
    textareaRef: u,
    isFocused: v,
    value: b,
    isOverLimit: y,
    isHovered: P,
    currentState: k,
    isError: A,
    isReadOnly: i,
    isDisabled: a,
    isSkeleton: C,
    resolvedHints: U,
    characterCount: Y,
    isAtCharacterLimit: $,
    textareaId: H,
    hintsId: j,
    counterId: F,
    limitMessageId: G,
    ariaDescribedBy: V,
    setIsFocused: D,
    handleMouseEnter: q,
    handleMouseLeave: z,
    handleClear: J,
    handleChange: K
  } = se({
    propValue: f == null ? void 0 : f.toString(),
    state: I,
    initialHintsMensagens: m,
    counter: o,
    props: S,
    onTag: g,
    label: t,
    placeholder: d,
    showHint: N,
    showCounter: c,
    propsId: M,
    propsAriaDescribedBy: B
  }), { shouldShowHints: Q, shouldShowErrors: E, errorMessages: X, infoHints: Z } = U, W = ie({ isDisabled: a, isFocused: v, isReadOnly: i, value: b }), ee = !a && !i && !C, ae = (r) => {
    if (K(r), p) {
      const _ = {
        ...r,
        target: {
          ...r.target,
          value: r.target.value
        }
      };
      p(_);
    }
  }, te = (r) => {
    const _ = r.currentTarget;
    _.style.height = "auto", _.style.height = `${_.scrollHeight}px`;
  }, L = () => {
    var r;
    a || i || C || (D(!0), (r = u.current) == null || r.focus());
  };
  return re(() => {
    u.current && (u.current.style.height = "auto", u.current.style.height = `${u.current.scrollHeight}px`);
  }, [b]), /* @__PURE__ */ h(
    "fieldset",
    {
      className: _e(C),
      "aria-busy": C,
      "aria-disabled": a,
      children: [
        /* @__PURE__ */ h("div", { className: fe(i), "aria-disabled": a, children: [
          /* @__PURE__ */ n(
            oe.label,
            {
              htmlFor: H,
              onMouseEnter: q,
              onMouseLeave: z,
              className: me({ isDisabled: a, isReadOnly: i }),
              "aria-disabled": a,
              initial: { y: 20, scale: 1 },
              animate: W,
              transition: { type: "spring", stiffness: 300, damping: 20 },
              onClick: L,
              children: t
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: ue({
                isFocused: v,
                isError: A,
                isOverLimit: y,
                isDisabled: a,
                isReadOnly: i,
                isHovered: P
              }),
              onClick: L,
              "aria-disabled": a,
              children: [
                /* @__PURE__ */ n(
                  "textarea",
                  {
                    ref: u,
                    id: H,
                    className: he({
                      isDisabled: a,
                      isReadOnly: i,
                      isError: A,
                      isOverLimit: y
                    }),
                    onFocus: () => {
                      a || D(!0);
                    },
                    onBlur: () => D(!1),
                    name: e.name ?? "textarea",
                    ...S,
                    onChange: ae,
                    onInput: te,
                    placeholder: v ? le(d) : "",
                    value: b,
                    maxLength: ne(o),
                    disabled: a,
                    readOnly: i,
                    "aria-invalid": A,
                    "aria-describedby": V,
                    children: f
                  }
                ),
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: xe({ isDisabled: a, isReadOnly: i }),
                    tabIndex: -1,
                    onClick: L,
                    children: [
                      b && ee && /* @__PURE__ */ n(
                        w,
                        {
                          onClick: J,
                          onTag: (r) => {
                            g && g((_) => ({
                              ..._,
                              ...r(),
                              CustomParameters: {
                                nested_in: "Textarea",
                                nested_label: t
                              }
                            }));
                          },
                          icon: "ic_close_circle",
                          "data-testid": "close-icon",
                          "aria-label": de(t),
                          tabIndex: 0
                        }
                      ),
                      x && /* @__PURE__ */ n(
                        w,
                        {
                          "data-testid": "helper-button",
                          onClick: () => R == null ? void 0 : R(),
                          icon: "ic_help_circle",
                          "aria-label": "Ajuda",
                          tabIndex: 0,
                          disabled: a
                        }
                      ),
                      k === O.LOADING && /* @__PURE__ */ n(w, { state: "loading", onClick: () => {
                      } })
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ h("div", { className: "fieldset-textarea__hints", children: [
          Q && /* @__PURE__ */ n(
            "div",
            {
              id: j,
              className: ge(a),
              role: E ? "alert" : void 0,
              "aria-live": E ? "assertive" : void 0,
              "aria-disabled": a,
              children: /* @__PURE__ */ n(
                T,
                {
                  type: E ? O.ERROR : "info",
                  hints: E ? X : Z
                }
              )
            }
          ),
          c && /* @__PURE__ */ h(
            "div",
            {
              id: F,
              className: pe({ isDisabled: a, isOverLimit: y }),
              "aria-live": "polite",
              "aria-disabled": a,
              children: [
                /* @__PURE__ */ n(T, { type: "info", hints: [`${Y}/${o ?? 0}`] }),
                $ && /* @__PURE__ */ n("span", { id: G, className: "sr-only", children: ce })
              ]
            }
          )
        ] })
      ]
    }
  );
};
export {
  s as F,
  we as T,
  fe as a,
  ue as b,
  he as c,
  me as d,
  xe as e,
  ge as f,
  _e as g,
  pe as h
};
