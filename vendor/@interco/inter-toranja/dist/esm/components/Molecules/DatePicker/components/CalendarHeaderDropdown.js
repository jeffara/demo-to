import { jsx as r } from "react/jsx-runtime";
import { useCalendarHeaderDropdown as v } from "../hooks/useCalendarHeaderDropdown.js";
import { ListItemGeneral as f } from "../../ListItemGeneral/ListItemGeneral.js";
const D = ({
  id: a,
  testId: s,
  options: i,
  onSelect: t
}) => {
  const {
    activeOptionId: n,
    setOptionRef: c,
    handleOptionFocus: o,
    handleOptionKeyDown: b,
    handleOptionClick: m
  } = v({ id: a, options: i, onSelect: t });
  return /* @__PURE__ */ r(
    "div",
    {
      id: a,
      className: "date-picker__header-dropdown",
      role: "listbox",
      "aria-activedescendant": n,
      "data-testid": s,
      children: i.map((e, d) => /* @__PURE__ */ r(
        "div",
        {
          id: `${a}-option-${e.value}`,
          ref: (l) => {
            c(d, l);
          },
          role: "option",
          tabIndex: e.isDisabled ? -1 : 0,
          "aria-selected": e.isSelected,
          "aria-disabled": e.isDisabled,
          className: "date-picker__header-dropdown-option",
          onFocus: () => {
            o(d);
          },
          onKeyDown: (l) => {
            b(l, d, e);
          },
          onClick: () => {
            m(e);
          },
          children: /* @__PURE__ */ r(
            f,
            {
              label: e.label,
              variant: e.isSelected ? "contained" : "default",
              selected: e.isSelected,
              state: e.isDisabled ? "disabled" : "enabled",
              showDivider: !1,
              interactive: !1,
              testId: `${s}-option-${e.value}`
            }
          )
        },
        e.value
      ))
    }
  );
};
export {
  D as CalendarHeaderDropdown
};
