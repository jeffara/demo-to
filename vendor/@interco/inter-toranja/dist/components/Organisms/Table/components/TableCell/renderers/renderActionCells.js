import { jsx as o } from "react/jsx-runtime";
import { mapTableVisualStateToAtomState as i, mapTableVisualStateToStepperState as u } from "../../shared/mapTableVisualState.js";
import { TableIconButtonMenu as m } from "../components/TableIconButtonMenu/TableIconButtonMenu.js";
import { Checkbox as h } from "../../../../../Atoms/Checkbox/Checkbox.js";
import { Button as C } from "../../../../../Molecules/Button/Button.js";
import { IconButton as b } from "../../../../../Molecules/Button/IconButton/IconButton.js";
import { Stepper as d } from "../../../../../Molecules/Stepper/Stepper.js";
import { SIZE as s, HIERARCHY as k } from "../../../../../../utils/pattern.js";
const f = (t, e) => /* @__PURE__ */ o(
  "span",
  {
    className: "table-cell__checkbox",
    onClick: (n) => {
      n.stopPropagation();
    },
    children: /* @__PURE__ */ o(
      h,
      {
        state: i(e),
        checked: t.checked,
        onChange: t.onChange
      }
    )
  }
), p = (t, e) => /* @__PURE__ */ o(
  d,
  {
    enableInput: !1,
    hasBorder: !1,
    min: t.min ?? 0,
    max: t.max ?? 100,
    value: t.value ?? 0,
    state: u(e)
  }
), x = (t, e) => {
  const { button: n } = t, c = i(e), a = (r) => {
    r.stopPropagation(), n.onClick(r);
  };
  return /* @__PURE__ */ o(
    C,
    {
      label: n.label,
      variant: n.variant,
      hierarchy: n.hierarchy ?? k.SECONDARY,
      size: n.size ?? s.SMALL,
      hug: !0,
      state: c,
      onClick: a
    }
  );
}, B = (t, e) => {
  const { iconButton: n } = t, c = i(e), a = (r) => {
    var l;
    r.stopPropagation(), (l = n.onClick) == null || l.call(n, r);
  };
  return /* @__PURE__ */ o(
    b,
    {
      icon: n.icon,
      hierarchy: n.hierarchy,
      size: n.size ?? s.SMALL,
      state: c,
      onClick: a
    }
  );
}, S = (t, e) => /* @__PURE__ */ o(m, { cellProps: t, visualState: e }), P = (t, e) => {
  switch (t.type) {
    case "checkbox":
      return f(t, e);
    case "counter":
      return p(t, e);
    case "button":
      return x(t, e);
    case "iconButton":
      return B(t, e);
    case "iconButtonMenu":
      return S(t, e);
    default:
      return null;
  }
};
export {
  P as renderActionCells
};
