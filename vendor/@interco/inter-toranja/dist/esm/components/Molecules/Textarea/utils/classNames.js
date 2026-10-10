import { FieldsetTextareaWrapperClasses as a } from "../TextArea.js";
import { classNamesMerge as s } from "../../../../utils/classNamesMerge.js";
function x(e) {
  return s(e ? "fieldset-textarea--skeleton" : "fieldset-textarea");
}
function g(e) {
  return s(
    "fieldset-textarea__container",
    e && "fieldset-textarea__container--readonly"
  );
}
function y({
  isDisabled: e,
  isError: t,
  isFocused: r,
  isHovered: l,
  isOverLimit: n,
  isReadOnly: o
}) {
  const i = a.BASE, d = a.FOCUSED, _ = a.ERROR, c = a.DISABLED, f = a.READ_ONLY, p = a.HOVER;
  return s(
    i,
    r && !t && !n && d,
    (t || n) && _,
    e && c,
    o && f,
    !e && !o && l && p
  );
}
function N({
  isDisabled: e,
  isReadOnly: t,
  isError: r,
  isOverLimit: l
}) {
  const n = a.INPUT_DISABLED, o = a.INPUT_READ_ONLY, i = a.INPUT_ERROR;
  return s(
    "fieldset-textarea__textarea-wrapper__textarea",
    "type-body-large-regular",
    e && n,
    t && o,
    (r || l) && i
  );
}
function b({
  isDisabled: e,
  isReadOnly: t,
  isFocused: r = !1,
  hasValue: l = !1
}) {
  return s(
    r || l ? "type-body-small-regular" : "type-body-large-regular",
    "fieldset-textarea__label",
    e && "fieldset-textarea__label--disabled",
    t && "fieldset-textarea__label--readonly"
  );
}
function m({
  isDisabled: e,
  isReadOnly: t
}) {
  return s(
    "icons-wrapper",
    t && "icons-wrapper--readonly",
    e && "icons-wrapper--disabled"
  );
}
function h(e) {
  return s(
    "fieldset-textarea__hints__hintsMensagens",
    e && "fieldset-textarea__hints--disabled"
  );
}
function E({
  isDisabled: e,
  isOverLimit: t
}) {
  return s(
    "fieldset-textarea__hints__counter",
    t && "fieldset-textarea__hints--error",
    e && "fieldset-textarea__hints--disabled"
  );
}
export {
  g as getContainerClassName,
  x as getFieldSetClassName,
  h as getHintsClassNames,
  m as getIconWrapperClassName,
  b as getLabelClassName,
  y as getTextAreaWrapperClassName,
  E as getTextCounterClassName,
  N as getTextareaClassNames
};
