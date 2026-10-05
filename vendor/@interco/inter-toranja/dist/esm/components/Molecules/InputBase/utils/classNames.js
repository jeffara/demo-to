import { FieldsetInputWrapperClasses as s } from "./constants.js";
import { classNamesMerge as a } from "../../../../utils/classNamesMerge.js";
function f({
  isTypeSearch: e,
  isError: n,
  isSuccess: l,
  isReadOnly: t
}) {
  const r = e ? s.SEARCH : s.BASE, _ = e ? s.SEARCH_ERROR : s.ERROR, o = e ? s.SEARCH_SUCCESS : s.SUCCESS, C = e ? s.SEARCH_READ_ONLY : s.READ_ONLY;
  return a(
    r,
    n && _,
    !n && l && o,
    t && C
  );
}
function d({
  isError: e,
  isSuccess: n,
  isReadOnly: l,
  isTypeSearch: t,
  hasFlag: r = !1
}) {
  const _ = t ? "fieldset__input-wrapper--search__input" : "fieldset__input-wrapper__input", o = t ? s.INPUT_SEARCH_READ_ONLY : s.INPUT_READ_ONLY, C = t ? s.INPUT_SEARCH_ERROR : s.INPUT_ERROR, i = t ? s.INPUT_SEARCH_SUCCESS : s.INPUT_SUCCESS;
  return a(
    "type-body-large-regular",
    _,
    l && o,
    e && C,
    !e && n && i,
    r && "fieldset__input-wrapper__input--with-flag"
  );
}
function R(e) {
  return a(
    "fieldset__hints__hintsMensagens",
    e && "fieldset__hints--disabled"
  );
}
function c({ isReadOnly: e }) {
  return a("icons-wrapper", e && "icons-wrapper--readonly");
}
function g({
  isReadOnly: e,
  hasFlag: n,
  isFocused: l = !1,
  hasValue: t = !1
}) {
  return a(
    l || t ? "type-body-small-regular" : "type-body-large-regular",
    "fieldset__label",
    e && "fieldset__label--readonly",
    n && "fieldset__label--with-flag"
  );
}
function E({ isTypeSearch: e }) {
  return a(e ? "fieldset__container--search" : "fieldset__container");
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
  f as getInputContainerClassNames,
  g as getInputLabelClassName
};
