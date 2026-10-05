import { jsx as t } from "react/jsx-runtime";
import { useTrailingIcons as y } from "./hooks/useTrailingIcons.js";
import { useInputContext as P } from "../../context/InputContext.js";
import { getIconWrapperClassName as x } from "../../utils/classNames.js";
import { InputType as r } from "../../utils/inputEnums.js";
import { CalendarIcon as A } from "./icons/CalendarIcon.js";
import { PasswordToggleIcon as H } from "./icons/PasswordToggleIcon.js";
import { SelectChevronIcon as L } from "./icons/SelectChevronIcon.js";
import { LoadingIcon as N } from "./icons/LoadingIcon.js";
import { HelperIcon as O } from "./icons/HelperIcon.js";
import { ClearIcon as R } from "./icons/ClearIcon.js";
import { SearchClearIcon as k } from "./icons/SearchClearIcon.js";
const Q = () => {
  const { state: m, config: d, handlers: u } = P(), { isReadOnly: n, isDisabled: I, hasValueInput: h, showPassword: a, isFocused: T } = m, { type: l, mask: f, state: g, label: s, showHelper: C, showClear: D } = d, { handleClear: p, handleOpenDatePicker: b, onHelper: w, setShowPassword: E, onTag: o } = u, i = ((e) => ({
    [r.TEXT]: "InputText",
    [r.PASSWORD]: "InputPassword",
    [r.EMAIL]: "InputEmail",
    [r.NUMBER]: "InputNumber",
    [r.TEL]: "InputTel",
    [r.SEARCH]: "InputSearch",
    [r.DATE]: "InputDate",
    [r.SELECT]: "Select"
  })[e])(l), c = y({
    type: l,
    mask: f,
    hasValueInput: h,
    isReadOnly: n,
    isDisabled: I,
    isFocused: T,
    showClear: D,
    showHelper: C,
    componentState: g
  }), S = c.length === 0;
  return /* @__PURE__ */ t("div", { className: x({ isReadOnly: n }), tabIndex: -1, "data-empty": S, children: c.map((e) => {
    switch (e.type) {
      case "search-clear":
        return /* @__PURE__ */ t(k, { onClear: p, label: s }, e.id);
      case "clear":
        return /* @__PURE__ */ t(
          R,
          {
            onClear: p,
            onTag: o,
            label: s,
            componentType: i
          },
          e.id
        );
      case "helper":
        return /* @__PURE__ */ t(
          O,
          {
            onHelper: w,
            onTag: o,
            label: s,
            componentType: i,
            isDisabled: e.isDisabled
          },
          e.id
        );
      case "loading":
        return /* @__PURE__ */ t(N, {}, e.id);
      case "select":
        return /* @__PURE__ */ t(L, { isDisabled: e.isDisabled }, e.id);
      case "password":
        return /* @__PURE__ */ t(
          H,
          {
            showPassword: a,
            onToggle: () => E(!a),
            onTag: o,
            label: s
          },
          e.id
        );
      case "calendar":
        return /* @__PURE__ */ t(
          A,
          {
            onOpenDatePicker: b,
            isDisabled: e.isDisabled
          },
          e.id
        );
      default:
        return null;
    }
  }) });
};
export {
  Q as InputTrailingIcons
};
