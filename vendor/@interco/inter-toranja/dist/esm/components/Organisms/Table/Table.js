import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { forwardRef as X, useImperativeHandle as Y } from "react";
import { useTableController as Z } from "./application/useTableController.js";
import { TableBody as $ } from "./components/TableBody/TableBody.js";
import { TableHead as ee } from "./components/TableHead/TableHead.js";
import { useTable as oe } from "./hooks/useTable.js";
import '../../../assets/components/Organisms/Table/Table.modules.css';/* empty css                   */
import { TableToolbar as te } from "./components/TableToolbar/TableToolbar.js";
import { Pagination as ne } from "../../Molecules/Pagination/Pagination.js";
import { TableLoadingBody as ae } from "./components/TableLoadingBody/TableLoadingBody.js";
import { TableSkeletonBody as re } from "./components/TableSkeletonBody/TableSkeletonBody.js";
import { TableFeedbackBody as g } from "./components/TableFeedbackBody/TableFeedbackBody.js";
import { TableErrorState as le } from "./components/TableErrorState/TableErrorState.js";
import { TableEmptyState as ie } from "./components/TableEmptyState/TableEmptyState.js";
const se = (a, u) => {
  const { toolbar: e } = a, { rootClasses: h } = oe(), p = Z(a), {
    rows: b,
    columns: t,
    hideHeader: C,
    showDivider: r,
    striped: l,
    tableMinWidth: i,
    bodyMode: n,
    isLoading: s,
    error: S,
    emptyFeedback: f,
    emptyMessage: T,
    searchTerm: w,
    emptyState: y,
    onRetry: R,
    skeletonRowCount: k,
    showPagination: v,
    pageIndex: B,
    pageSize: I,
    pageCount: P,
    totalItems: H,
    pageSizeOptions: _,
    paginationStatus: x,
    language: z,
    handlePageChange: M,
    handlePageSizeChange: N,
    goToPage: m,
    enableStatus: D,
    getStatusColor: j,
    getColumnSortDirection: E,
    handleSortColumn: F,
    selectionHeaderCheckbox: L,
    resolveRowId: W,
    selectionColumnId: d,
    isRowSelected: O,
    isRowSelectable: q,
    handleRowSelectionChange: A,
    createRowClickHandler: G,
    createRowDoubleClickHandler: J,
    hasRowInteraction: K
  } = p;
  Y(u, () => ({ goToPage: m }), [m]);
  const Q = i > 0 ? { minWidth: i } : void 0, U = !!(e != null && e.title) || !!(e != null && e.trailing), V = () => n === "loading" ? /* @__PURE__ */ o(ae, { columnCount: t.length }) : n === "skeleton" ? /* @__PURE__ */ o(
    re,
    {
      columns: t,
      rowCount: k,
      showDivider: r,
      striped: l
    }
  ) : n === "error" ? /* @__PURE__ */ o(g, { columnCount: t.length, children: /* @__PURE__ */ o(le, { error: S, onRetry: R }) }) : n === "empty" ? /* @__PURE__ */ o(g, { columnCount: t.length, children: /* @__PURE__ */ o(
    ie,
    {
      variant: f,
      emptyMessage: T,
      searchTerm: w,
      emptyState: y
    }
  ) }) : /* @__PURE__ */ o(
    $,
    {
      rows: b,
      columns: t,
      resolveRowId: W,
      showDivider: r,
      striped: l,
      enableStatus: D,
      getStatusColor: j,
      selectionColumnId: d,
      isRowSelected: O,
      isRowSelectable: q,
      onRowSelectionChange: A,
      createRowClickHandler: G,
      createRowDoubleClickHandler: J,
      hasRowInteraction: K
    }
  );
  return /* @__PURE__ */ c("div", { "data-testid": "Table", className: h, "aria-busy": s, children: [
    U && /* @__PURE__ */ o(te, { title: e == null ? void 0 : e.title, trailing: e == null ? void 0 : e.trailing }),
    /* @__PURE__ */ o("div", { className: "table__scroll", children: /* @__PURE__ */ c("table", { className: "table__element", style: Q, children: [
      !C && /* @__PURE__ */ o(
        ee,
        {
          columns: t,
          isSkeleton: n === "skeleton",
          isLoading: s,
          getColumnSortDirection: E,
          onSortColumn: F,
          selectionColumnId: d,
          selectionHeaderCheckbox: L
        }
      ),
      V()
    ] }) }),
    v && n === "data" && /* @__PURE__ */ o("div", { className: "table__pagination", children: /* @__PURE__ */ o(
      ne,
      {
        pageIndex: B,
        pageSize: I,
        pageCount: P,
        totalItems: H,
        pageSizeOptions: _,
        status: x,
        language: z,
        onPageChange: M,
        onPageSizeChange: N
      }
    ) })
  ] });
}, Re = X(se);
export {
  Re as Table
};
