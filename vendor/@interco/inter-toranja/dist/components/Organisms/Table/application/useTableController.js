import { useRef as I, useEffect as v, useCallback as le } from "react";
import { DEFAULT_SKELETON_ROW_COUNT as ae } from "./constants.js";
import { useTablePagination as re } from "./useTablePagination.js";
import { useTableRowInteraction as ie } from "./useTableRowInteraction.js";
import { useTableSelection as ce } from "./useTableSelection.js";
import { useTableSort as de } from "./useTableSort.js";
import { getRowId as me } from "../domain/getRowId.js";
import { resolveColumnWidths as ue } from "../domain/resolveColumnWidths.js";
import { resolveTableBodyMode as ge } from "../domain/resolveTableBodyMode.js";
import { resolveVisibleRows as k } from "../domain/resolveVisibleRows.js";
const T = (s) => s.map((e) => ({
  id: e.id,
  accessor: e.accessor,
  sortAccessor: e.sortAccessor,
  cellType: e.cellType,
  sortable: e.sortable,
  minWidth: e.minWidth
})), Re = (s, e, c, l) => s > 0 && e === 0 && c ? "noResults" : l, Te = (s) => {
  const {
    data: e,
    columns: c,
    getRowId: l,
    hideHeader: y = !1,
    showDivider: E = !1,
    striped: F = !1,
    isLoading: m = !1,
    skeleton: x = !1,
    error: R,
    emptyFeedback: D = "empty",
    emptyMessage: H,
    searchTerm: P,
    emptyState: W,
    onRetry: M,
    language: O = "ptBR",
    filter: t = "",
    manualPagination: z = !1,
    enableStatus: A = !1,
    getStatusColor: B,
    sortBy: L,
    onSortChange: _,
    selectionColumn: N,
    selectedRowIds: U,
    onSelectionChange: V,
    validateBeforeSelectRow: K,
    onRowClick: $,
    onRowDoubleClick: j
  } = s, { sort: n, handleSortColumn: q, getColumnSortDirection: G } = de({
    sortBy: L,
    onSortChange: _
  }), w = T(c), p = t.trim().length > 0, u = k({
    rows: e,
    columns: w,
    sort: n,
    filter: t
  }), J = z ? e.length : u.totalItems, {
    isEnabled: r,
    pageSizeOptions: Q,
    paginationState: d,
    handlePageChange: X,
    handlePageSizeChange: Y,
    goToPage: i
  } = re({
    props: s,
    rowCount: J
  }), f = I(t), h = I(n);
  v(() => {
    f.current !== t && (f.current = t, r && i(0));
  }, [t, r, i]), v(() => {
    h.current !== n && (h.current = n, r && i(0));
  }, [n, r, i]);
  const a = k({
    rows: e,
    columns: w,
    sort: n,
    filter: t,
    pagination: d
  }), o = ce({
    data: e,
    columns: c,
    visibleRows: a.rows,
    selectionColumn: N,
    selectedRowIds: U,
    onSelectionChange: V,
    validateBeforeSelectRow: K,
    getRowIdFn: l
  }), g = ie({
    onRowClick: $,
    onRowDoubleClick: j
  }), Z = le(
    (b) => {
      const S = e.indexOf(b), se = S >= 0 ? S : 0;
      return me(b, se, l);
    },
    [e, l]
  ), { totalMinWidth: ee } = ue(T(o.columns), 0), oe = Re(
    e.length,
    u.totalItems,
    p,
    D
  ), te = e.length > 0 && u.totalItems === 0 && p ? t : P, C = ge({
    isLoading: m,
    skeleton: x,
    error: R,
    totalItemCount: a.totalItems
  }), ne = m ? "loading" : "default";
  return {
    rows: C === "data" ? a.rows : [],
    columns: o.columns,
    getRowId: l,
    hideHeader: y,
    showDivider: E,
    striped: F,
    tableMinWidth: ee,
    bodyMode: C,
    isLoading: m,
    error: R,
    emptyFeedback: oe,
    emptyMessage: H,
    searchTerm: te,
    emptyState: W,
    onRetry: M,
    skeletonRowCount: ae,
    showPagination: r,
    pageIndex: a.pageIndex,
    pageSize: (d == null ? void 0 : d.pageSize) ?? e.length,
    pageCount: a.pageCount,
    totalItems: a.totalItems,
    pageSizeOptions: Q,
    paginationStatus: ne,
    language: O,
    handlePageChange: X,
    handlePageSizeChange: Y,
    goToPage: i,
    enableStatus: A,
    getStatusColor: B,
    sort: n,
    handleSortColumn: q,
    getColumnSortDirection: G,
    selectionColumnId: o.selectionColumnId,
    isSelectionEnabled: o.isSelectionEnabled,
    isRowSelected: o.isRowSelected,
    isRowSelectable: o.isRowSelectable,
    handleRowSelectionChange: o.handleRowSelectionChange,
    selectionHeaderCheckbox: o.isSelectionEnabled ? o.selectionHeaderCheckbox : void 0,
    createRowClickHandler: g.createRowClickHandler,
    createRowDoubleClickHandler: g.createRowDoubleClickHandler,
    hasRowInteraction: g.hasRowInteraction,
    resolveRowId: Z
  };
};
export {
  Te as useTableController
};
