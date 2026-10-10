import { jsxs as C, jsx as l } from "react/jsx-runtime";
import { useEffect as se } from "react";
import { NeutralIconButton as D } from "./components/Atoms/NeutralIconButton/index.js";
import { STATE as I } from "./utils/pattern.js";
import { CHARACTER_LIMIT_REACHED_MESSAGE as ne, getClearFieldAriaLabel as ie } from "./utils/accessibility/formFieldAccessibility.js";
import { useTextareaHandlers as le } from "./components/Molecules/Textarea/hooks/useTextareaHandlers.js";
import { getAnimationConfig as oe } from "./components/Molecules/Textarea/utils/getAnimationConfig.js";
import { getMaxLength as de, getPlaceholder as ce } from "./components/Molecules/Textarea/utils/textareaUtils.js";
import { m as _e } from "./proxy-BBnpZ6GV.js";
import { classNamesMerge as x } from "./utils/classNamesMerge.js";
import M from "./components/Atoms/Hints/Hints.js";
import './assets/TextArea.css';function fe(e) {
  return x(e ? "fieldset-textarea--skeleton" : "fieldset-textarea");
}
function ue(e) {
  return x(
    "fieldset-textarea__container",
    e && "fieldset-textarea__container--readonly"
  );
}
function he({
  isDisabled: e,
  isError: a,
  isFocused: s,
  isHovered: n,
  isOverLimit: t,
  isReadOnly: i
}) {
  const o = _.BASE, m = _.FOCUSED, g = _.ERROR, d = _.DISABLED, c = _.READ_ONLY, f = _.HOVER;
  return x(
    o,
    s && !a && !t && m,
    (a || t) && g,
    e && d,
    i && c,
    !e && !i && n && f
  );
}
function me({
  isDisabled: e,
  isReadOnly: a,
  isError: s,
  isOverLimit: n
}) {
  const t = _.INPUT_DISABLED, i = _.INPUT_READ_ONLY, o = _.INPUT_ERROR;
  return x(
    "fieldset-textarea__textarea-wrapper__textarea",
    "type-body-large-regular",
    e && t,
    a && i,
    (s || n) && o
  );
}
function xe({
  isDisabled: e,
  isReadOnly: a,
  isFocused: s = !1,
  hasValue: n = !1
}) {
  return x(
    s || n ? "type-body-small-regular" : "type-body-large-regular",
    "fieldset-textarea__label",
    e && "fieldset-textarea__label--disabled",
    a && "fieldset-textarea__label--readonly"
  );
}
function ge({
  isDisabled: e,
  isReadOnly: a
}) {
  return x(
    "icons-wrapper",
    a && "icons-wrapper--readonly",
    e && "icons-wrapper--disabled"
  );
}
function pe(e) {
  return x(
    "fieldset-textarea__hints__hintsMensagens",
    e && "fieldset-textarea__hints--disabled"
  );
}
function be({
  isDisabled: e,
  isOverLimit: a
}) {
  return x(
    "fieldset-textarea__hints__counter",
    a && "fieldset-textarea__hints--error",
    e && "fieldset-textarea__hints--disabled"
  );
}
const Ce = ({
  shouldShowHints: e,
  shouldShowErrors: a,
  errorMessages: s,
  infoHints: n,
  isDisabled: t,
  hintsId: i,
  showCounter: o,
  counterId: m,
  characterCount: g,
  counter: d,
  isOverLimit: c,
  isAtCharacterLimit: f,
  limitMessageId: N
}) => /* @__PURE__ */ C("div", { className: "fieldset-textarea__hints", children: [
  e && /* @__PURE__ */ l(
    "div",
    {
      id: i,
      className: pe(t),
      role: a ? "alert" : void 0,
      "aria-live": a ? "assertive" : void 0,
      "aria-disabled": t,
      children: /* @__PURE__ */ l(
        M,
        {
          type: a ? I.ERROR : "info",
          hints: a ? s : n
        }
      )
    }
  ),
  o && /* @__PURE__ */ C(
    "div",
    {
      id: m,
      className: be({ isDisabled: t, isOverLimit: c }),
      "aria-live": "polite",
      "aria-disabled": t,
      children: [
        /* @__PURE__ */ l(M, { type: "info", hints: [`${g}/${d ?? 0}`] }),
        f && /* @__PURE__ */ l("span", { id: N, className: "sr-only", children: ne })
      ]
    }
  )
] }), Ne = ({
  hasTrailingIcons: e,
  isDisabled: a,
  isReadOnly: s,
  value: n,
  isEnabled: t,
  showHelper: i,
  currentState: o,
  label: m,
  onFocusField: g,
  handleClear: d,
  onHelper: c,
  onTag: f
}) => /* @__PURE__ */ C(
  "div",
  {
    className: ge({ isDisabled: a, isReadOnly: s }),
    "data-empty": !e,
    tabIndex: -1,
    onClick: g,
    children: [
      n && t && /* @__PURE__ */ l(
        D,
        {
          onClick: d,
          onTag: (N) => {
            f && f((R) => ({
              ...R,
              ...N(),
              CustomParameters: {
                nested_in: "Textarea",
                nested_label: m
              }
            }));
          },
          icon: "ic_close_circle",
          "data-testid": "close-icon",
          "aria-label": ie(m),
          tabIndex: 0
        }
      ),
      i && /* @__PURE__ */ l(
        D,
        {
          "data-testid": "helper-button",
          onClick: () => c == null ? void 0 : c(),
          icon: "ic_help_circle",
          "aria-label": "Ajuda",
          tabIndex: 0,
          disabled: a
        }
      ),
      o === I.LOADING && /* @__PURE__ */ l(D, { state: "loading", onClick: () => {
      } })
    ]
  }
);
var _ = /* @__PURE__ */ ((e) => (e.BASE = "fieldset-textarea__textarea-wrapper", e.FOCUSED = "fieldset-textarea__textarea-wrapper--focused", e.ERROR = "fieldset-textarea__textarea-wrapper--error", e.DISABLED = "fieldset-textarea__textarea-wrapper--disabled", e.READ_ONLY = "fieldset-textarea__textarea-wrapper--readonly", e.HOVER = "fieldset-textarea__textarea-wrapper--hover", e.INPUT_DISABLED = "fieldset-textarea__textarea-wrapper__textarea--disabled", e.INPUT_READ_ONLY = "fieldset-textarea__textarea-wrapper__textarea--readonly", e.INPUT_ERROR = "fieldset-textarea__textarea-wrapper__textarea--error", e))(_ || {});
const He = (e) => {
  const {
    label: a = "Label",
    counter: s = 1e3,
    hints: n = [],
    placeholder: t = "",
    showCounter: i = !1,
    showHelper: o = !1,
    showHint: m = !1,
    state: g = I.ENABLED,
    value: d,
    onTag: c,
    onChange: f,
    onHelper: N,
    id: R,
    "aria-describedby": P,
    ...w
  } = e, {
    textareaRef: p,
    isFocused: E,
    value: b,
    isOverLimit: v,
    isHovered: k,
    currentState: H,
    isError: L,
    isReadOnly: u,
    isDisabled: r,
    isSkeleton: A,
    resolvedHints: U,
    characterCount: F,
    isAtCharacterLimit: j,
    textareaId: S,
    hintsId: Y,
    counterId: $,
    limitMessageId: G,
    ariaDescribedBy: V,
    setIsFocused: O,
    handleMouseEnter: q,
    handleMouseLeave: z,
    handleClear: J,
    handleChange: K
  } = le({
    propValue: d == null ? void 0 : d.toString(),
    state: g,
    initialHintsMensagens: n,
    counter: s,
    props: w,
    onTag: c,
    label: a,
    placeholder: t,
    showHint: m,
    showCounter: i,
    propsId: R,
    propsAriaDescribedBy: P
  }), { shouldShowHints: Q, shouldShowErrors: X, errorMessages: Z, infoHints: W } = U, ee = oe({ isDisabled: r, isFocused: E, isReadOnly: u, value: b }), B = !r && !u && !A, ae = !!(b && B) || o || H === I.LOADING, te = (h) => {
    if (K(h), f) {
      const y = {
        ...h,
        target: {
          ...h.target,
          value: h.target.value
        }
      };
      f(y);
    }
  }, re = (h) => {
    const y = h.currentTarget;
    y.style.height = "auto", y.style.height = `${y.scrollHeight}px`;
  }, T = () => {
    var h;
    r || u || A || (O(!0), (h = p.current) == null || h.focus());
  };
  return se(() => {
    p.current && (p.current.style.height = "auto", p.current.style.height = `${p.current.scrollHeight}px`);
  }, [b]), /* @__PURE__ */ C(
    "fieldset",
    {
      className: fe(A),
      "data-testid": "TextArea",
      "aria-busy": A,
      "aria-disabled": r,
      children: [
        /* @__PURE__ */ C("div", { className: ue(u), "aria-disabled": r, children: [
          /* @__PURE__ */ l(
            _e.label,
            {
              htmlFor: S,
              onMouseEnter: q,
              onMouseLeave: z,
              className: xe({
                isDisabled: r,
                isReadOnly: u,
                isFocused: E,
                hasValue: !!b
              }),
              "aria-disabled": r,
              animate: ee,
              transition: { type: "spring", stiffness: 300, damping: 20 },
              onClick: T,
              children: a
            }
          ),
          /* @__PURE__ */ C(
            "div",
            {
              className: he({
                isFocused: E,
                isError: L,
                isOverLimit: v,
                isDisabled: r,
                isReadOnly: u,
                isHovered: k
              }),
              onClick: T,
              "aria-disabled": r,
              children: [
                /* @__PURE__ */ l(
                  "textarea",
                  {
                    ref: p,
                    id: S,
                    className: me({
                      isDisabled: r,
                      isReadOnly: u,
                      isError: L,
                      isOverLimit: v
                    }),
                    onFocus: () => {
                      r || O(!0);
                    },
                    onBlur: () => O(!1),
                    name: e.name ?? "textarea",
                    ...w,
                    onChange: te,
                    onInput: re,
                    placeholder: E ? ce(t) : "",
                    value: b,
                    maxLength: de(s),
                    disabled: r,
                    readOnly: u,
                    "aria-invalid": L,
                    "aria-describedby": V,
                    children: d
                  }
                ),
                /* @__PURE__ */ l(
                  Ne,
                  {
                    hasTrailingIcons: ae,
                    isDisabled: r,
                    isReadOnly: u,
                    value: b,
                    isEnabled: B,
                    showHelper: o,
                    currentState: H,
                    label: a,
                    onFocusField: T,
                    handleClear: J,
                    onHelper: N,
                    onTag: c
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l(
          Ce,
          {
            shouldShowHints: Q,
            shouldShowErrors: X,
            errorMessages: Z,
            infoHints: W,
            isDisabled: r,
            hintsId: Y,
            showCounter: i,
            counterId: $,
            characterCount: F,
            counter: s,
            isOverLimit: v,
            isAtCharacterLimit: j,
            limitMessageId: G
          }
        )
      ]
    }
  );
};
export {
  _ as F,
  He as T,
  fe as a,
  pe as b,
  ge as c,
  xe as d,
  he as e,
  be as f,
  ue as g,
  me as h,
  Ce as i,
  Ne as j
};
