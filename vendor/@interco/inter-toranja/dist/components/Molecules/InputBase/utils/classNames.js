import { FieldsetInputWrapperClasses as s } from "./constants.js";
import { classNamesMerge as l } from "../../../../utils/classNamesMerge.js";
function p({
  isTypeSearch: e,
  isError: t,
  isSuccess: a,
  isReadOnly: n
}) {
  const r = e ? s.SEARCH : s.BASE, _ = e ? s.SEARCH_ERROR : s.ERROR, o = e ? s.SEARCH_SUCCESS : s.SUCCESS, i = e ? s.SEARCH_READ_ONLY : s.READ_ONLY;
  return l(
    r,
    t && _,
    !t && a && o,
    n && i
  );
}
function d({
  isError: e,
  isSuccess: t,
  isReadOnly: a,
  isTypeSearch: n,
  hasFlag: r = !1
}) {
  const _ = n ? "fieldset__input-wrapper--search__input" : "fieldset__input-wrapper__input", o = n ? s.INPUT_SEARCH_READ_ONLY : s.INPUT_READ_ONLY, i = n ? s.INPUT_SEARCH_ERROR : s.INPUT_ERROR, C = n ? s.INPUT_SEARCH_SUCCESS : s.INPUT_SUCCESS;
  return l(
    "type-body-large-regular",
    _,
    a && o,
    e && i,
    !e && t && C,
    r && "fieldset__input-wrapper__input--with-flag"
  );
}
function R(e) {
  return l(
    "fieldset__hints__hintsMensagens",
    e && "fieldset__hints--disabled"
  );
}
function c({ isReadOnly: e }) {
  return l("icons-wrapper", e && "icons-wrapper--readonly");
}
function g({
  isReadOnly: e,
  hasFlag: t,
  isFocused: a = !1,
  hasValue: n = !1
}) {
  return l(
    a || n ? "type-body-small-regular" : "type-body-large-regular",
    "fieldset__label",
    e && "fieldset__label--readonly",
    t && "fieldset__label--with-flag"
  );
}
function E({
  isTypeSearch: e,
  suppressVisualLabel: t = !1
}) {
  return l(
    e ? "fieldset__container--search" : "fieldset__container",
    t && !e && "fieldset__container--without-visual-label"
  );
}
function N(e) {
  return e ? "fieldset--skeleton" : "fieldset";
}
export {
  E as getContainerClassName,
  N as getFieldSetClassName,
  R as getHintsClassNames,
  c as getIconWrapperClassName,
  d as getInputClassNames,
  p as getInputContainerClassNames,
  g as getInputLabelClassName
};
