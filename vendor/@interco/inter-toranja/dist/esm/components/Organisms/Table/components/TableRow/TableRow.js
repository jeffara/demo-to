import { jsx as b } from "react/jsx-runtime";
import { useTableRow as w } from "./hooks/useTableRow.js";
import '../../../../../assets/components/Organisms/Table/components/TableRow/TableRow.modules.css';/* empty css                      */
const R = (o) => {
  const { children: i, onClick: r, onDoubleClick: a } = o, {
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
      onClick: t ? r : void 0,
      onDoubleClick: t ? a : void 0,
      onKeyDown: l ? d : void 0,
      children: i
    }
  );
};
export {
  R as TableRow
};
