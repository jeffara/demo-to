import { jsx as b } from "react/jsx-runtime";
import { useTableRow as w } from "./hooks/useTableRow.js";
import '../../../../../assets/TableRow.css';const R = (o) => {
  const { children: a, onClick: i, onDoubleClick: r } = o, {
    rootClasses: n,
    statusStyle: e,
    isRowInteractive: t,
    isRowFocusable: l,
    ariaDisabled: s,
    handleRowKeyDown: d
  } = w(o), c = e && {
    borderInlineStartColor: e.borderInlineStartColor
  };
  return /* @__PURE__ */ b(
    "tr",
    {
      "data-testid": "TableRow",
      className: n,
      style: c,
      tabIndex: l ? 0 : void 0,
      "aria-disabled": s,
      onClick: t ? i : void 0,
      onDoubleClick: t ? r : void 0,
      onKeyDown: l ? d : void 0,
      children: a
    }
  );
};
export {
  R as TableRow
};
