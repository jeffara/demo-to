import { jsx as o } from "react/jsx-runtime";
import { useMemo as v } from "react";
import { useSelectOptionsPanel as P } from "../hooks/useSelectOptionsPanel.js";
import { mapSelectPanelOptions as h } from "../utils/mapSelectPanelOptions.js";
import '../../../../assets/components/Molecules/Select/components/SelectOptionsPanel.modules.css';/* empty css                                */
import { ListItemGeneral as D } from "../../ListItemGeneral/ListItemGeneral.js";
const y = ({
  id: i,
  options: l,
  selectedValue: s,
  onSelect: c,
  onTag: d,
  testId: r = "SelectOptionsPanel"
}) => {
  const p = v(
    () => h(l, s),
    [l, s]
  ), {
    activeOptionId: m,
    setOptionRef: f,
    handleOptionFocus: b,
    handleOptionKeyDown: u,
    handleOptionClick: O
  } = P({
    id: i,
    options: p,
    onSelect: (a) => {
      const e = l[a];
      e && !e.disabled && c(e);
    }
  });
  return /* @__PURE__ */ o(
    "div",
    {
      id: i,
      className: "select-options-panel",
      role: "listbox",
      "aria-activedescendant": m,
      "data-testid": r,
      children: l.map((a, e) => {
        const t = p[e];
        return t ? /* @__PURE__ */ o(
          "div",
          {
            id: `${i}-option-${t.value}`,
            ref: (n) => {
              f(e, n);
            },
            role: "option",
            tabIndex: t.isDisabled ? -1 : 0,
            "aria-selected": t.isSelected,
            "aria-disabled": t.isDisabled,
            className: "select-options-panel__option",
            onFocus: () => {
              b(e);
            },
            onKeyDown: (n) => {
              u(n, e, t);
            },
            onClick: () => {
              O(t);
            },
            children: /* @__PURE__ */ o(
              D,
              {
                label: a.label,
                variant: "default",
                selected: !1,
                state: t.isDisabled ? "disabled" : "enabled",
                showDivider: !1,
                interactive: !1,
                leadingProps: a.leadingProps,
                trailingProps: a.trailingProps,
                onTag: d,
                testId: `${r}-option-${a.value}`
              }
            )
          },
          a.value
        ) : null;
      })
    }
  );
};
export {
  y as SelectOptionsPanel
};
