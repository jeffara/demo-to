import { jsx as I } from "react/jsx-runtime";
import { useListItemActionViewModel as L } from "./hooks/useListItemActionViewModel.js";
import { ListItemBase as f } from "../ListItemBase/ListItemBase.js";
const w = (t) => {
  const {
    state: e = "enabled",
    variant: n = "default",
    interactive: i = !0,
    onClick: o,
    onTag: a,
    showDivider: m = !0,
    testId: r = "listItemAction",
    className: s,
    alignmentTrailingMode: l,
    showLeading: c = !0
  } = t, { leadingElement: d, contentElement: g, trailingElement: u } = L(t);
  return /* @__PURE__ */ I(
    f,
    {
      state: e,
      variant: n,
      interactive: i,
      onClick: o,
      onTag: a,
      showLeading: c,
      leading: d,
      content: g,
      trailing: u,
      showDivider: m,
      testId: r,
      className: s,
      componentName: "ListItemAction",
      alignmentTrailingMode: l
    }
  );
};
export {
  w as ListItemAction
};
