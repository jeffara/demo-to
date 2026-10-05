import { jsx as f } from "react/jsx-runtime";
import { useListItemControlViewModel as u } from "./hooks/useListItemControlViewModel.js";
import { ListItemBase as C } from "../ListItemBase/ListItemBase.js";
const w = (t) => {
  const {
    state: n = "enabled",
    variant: o = "default",
    selected: i = !1,
    interactive: l = !0,
    onClick: r,
    onTag: a,
    showDivider: m = !0,
    testId: s = "listItemControl",
    className: c,
    alignmentTrailingMode: d
  } = t, { leadingElement: e, contentElement: g, trailingElement: I } = u(t);
  return /* @__PURE__ */ f(
    C,
    {
      state: n,
      variant: o,
      selected: i,
      interactive: l,
      onClick: r,
      onTag: a,
      leading: e,
      content: g,
      trailing: I,
      showLeading: !!e,
      showDivider: m,
      testId: s,
      className: c,
      componentName: "ListItemControl",
      alignmentTrailingMode: d
    }
  );
};
export {
  w as ListItemControl
};
