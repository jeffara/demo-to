import { jsx as c } from "react/jsx-runtime";
import { useListItemGeneralViewModel as f } from "./hooks/useListItemGeneralViewModel.js";
import { ListItemBase as u } from "../ListItemBase/ListItemBase.js";
const v = (t) => {
  const {
    state: i = "enabled",
    variant: n = "default",
    selected: r = !1,
    interactive: a = !0,
    onClick: o,
    onTag: l,
    showDivider: s = !0,
    showLeading: d = !0,
    testId: m = "listItemGeneral",
    className: g
  } = t, e = f(t);
  return /* @__PURE__ */ c(
    u,
    {
      state: i,
      variant: n,
      selected: r,
      interactive: a,
      onClick: o,
      onTag: l,
      leading: e.leading,
      content: e.content,
      trailing: e.trailing,
      showLeading: d,
      showDivider: s,
      gridModifier: e.gridModifier,
      testId: m,
      className: g,
      componentName: "ListItemGeneral",
      alignmentTrailingMode: e.alignmentTrailingMode
    }
  );
};
export {
  v as ListItemGeneral
};
