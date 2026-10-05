import { FieldsetTextareaWrapperClasses as a } from "../TextArea.js";
import { classNamesMerge as s } from "../../../../utils/classNamesMerge.js";
function p(e) {
  return s(e ? "fieldset-textarea--skeleton" : "fieldset-textarea");
}
function g(e) {
  return s(
    "fieldset-textarea__container",
    e && "fieldset-textarea__container--readonly"
  );
}
function N({
  isDisabled: e,
  isError: t,
  isFocused: n,
  isHovered: o,
  isOverLimit: r,
  isReadOnly: l
}) {
  const i = a.BASE, _ = a.FOCUSED, d = a.ERROR, c = a.DISABLED, f = a.READ_ONLY, u = a.HOVER;
  return s(
    i,
    n && !t && !r && _,
    (t || r) && d,
    e && c,
    l && f,
    !e && !l && o && u
  );
}
function b({
  isDisabled: e,
  isReadOnly: t,
  isError: n,
  isOverLimit: o
}) {
  const r = a.INPUT_DISABLED, l = a.INPUT_READ_ONLY, i = a.INPUT_ERROR;
  return s(
    "fieldset-textarea__textarea-wrapper__textarea",
    "type-label-large-regular",
    e && r,
    t && l,
    (n || o) && i
  );
}
function m({
  isDisabled: e,
  isReadOnly: t
}) {
  return s(
    "type-label-large-regular",
    "fieldset-textarea__label",
    e && "fieldset-textarea__label--disabled",
    t && "fieldset-textarea__label--readonly"
  );
}
function E({
  isDisabled: e,
  isReadOnly: t
}) {
  return s(
    "icons-wrapper",
    t && "icons-wrapper--readonly",
    e && "icons-wrapper--disabled"
  );
}
function R(e) {
  return s(
    "fieldset-textarea__hints__hintsMensagens",
    e && "fieldset-textarea__hints--disabled"
  );
}
function h({
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
  p as getFieldSetClassName,
  R as getHintsClassNames,
  E as getIconWrapperClassName,
  m as getLabelClassName,
  N as getTextAreaWrapperClassName,
  h as getTextCounterClassName,
  b as getTextareaClassNames
};
