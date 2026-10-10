import { useCallback as r } from "react";
const u = (t) => {
  const { onRowClick: o, onRowDoubleClick: e } = t, c = !!(o ?? e), l = r(
    (n) => {
      if (o)
        return () => {
          o(n);
        };
    },
    [o]
  ), a = r(
    (n) => {
      if (e)
        return () => {
          e(n);
        };
    },
    [e]
  );
  return {
    hasRowInteraction: c,
    createRowClickHandler: l,
    createRowDoubleClickHandler: a
  };
};
export {
  u as useTableRowInteraction
};
