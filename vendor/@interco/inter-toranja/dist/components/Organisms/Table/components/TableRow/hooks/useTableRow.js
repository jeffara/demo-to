import { isTableVisualStateInteractive as f } from "../../shared/mapTableVisualState.js";
import { classNamesMerge as v } from "../../../../../../utils/classNamesMerge.js";
const h = (l) => {
  const {
    visualState: o = "enabled",
    showDivider: n = !1,
    striped: c = !1,
    forceHover: d = !1,
    statusColor: r,
    onClick: t,
    onDoubleClick: e
  } = l, w = v(
    "table-row",
    `table-row--${o}`,
    n && "table-row--divider",
    c && "table-row--striped",
    d && "table-row--hover"
  ), b = r ? { borderInlineStartColor: r } : void 0, a = f(o), u = a && !!(t ?? e), s = a && !!(t ?? e);
  return {
    rootClasses: w,
    statusStyle: b,
    isRowInteractive: u,
    isRowFocusable: s,
    ariaDisabled: o === "disabled" ? !0 : void 0,
    handleRowKeyDown: (i) => {
      if (s && i.key === "Enter") {
        if (i.preventDefault(), t) {
          t();
          return;
        }
        e == null || e();
      }
    }
  };
};
export {
  h as useTableRow
};
