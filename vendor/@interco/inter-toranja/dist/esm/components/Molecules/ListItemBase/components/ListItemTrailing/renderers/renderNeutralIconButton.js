import { jsx as r } from "react/jsx-runtime";
import { NeutralIconButton as l } from "../../../../../Atoms/NeutralIconButton/NeutralIconButton.js";
import { mapStateToSTATE as m } from "../../../utils/stateMapper.js";
const f = (t, a, n, i) => {
  const o = m(a), c = (e) => {
    e.stopPropagation(), n && n({
      ComponentProperties: {
        component_name: "NeutralIconButton",
        state: o,
        icon: t.icon
      },
      ProductProperties: {
        nested_in: "ListItemAction",
        nested_label: i
      }
    }), t.onClick && t.onClick(e);
  };
  return /* @__PURE__ */ r(
    l,
    {
      icon: t.icon,
      onClick: c,
      "aria-label": t.ariaLabel,
      state: o,
      showBadge: t.showBadge,
      variant: t.variant,
      count: t.count
    }
  );
};
export {
  f as renderNeutralIconButton
};
