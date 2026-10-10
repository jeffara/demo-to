import { jsxs as f, jsx as o } from "react/jsx-runtime";
import { PaginationNavigator as u } from "./components/PaginationNavigator.js";
import { PaginationPageSize as z } from "./components/PaginationPageSize.js";
import { PaginationProgress as C } from "./components/PaginationProgress.js";
import { usePagination as b } from "./hooks/usePagination.js";
import '../../../assets/Pagination.css';const y = (n) => {
  const { pageSize: s, pageCount: g, totalItems: r, pageSizeOptions: m, language: l = "ptBR" } = n, {
    rootClasses: P,
    isInteractive: i,
    isSkeleton: e,
    isLoading: t,
    translations: a,
    pageOffset: p,
    displayPageNumber: c,
    handlePageCommit: S,
    handlePageSizeSelect: d
  } = b(n);
  return /* @__PURE__ */ f(
    "nav",
    {
      className: P,
      "data-testid": "Pagination",
      "aria-label": a.pagination,
      "aria-busy": t,
      children: [
        /* @__PURE__ */ o(
          z,
          {
            pageSize: s,
            pageSizeOptions: m,
            translations: a,
            isInteractive: i,
            isSkeleton: e,
            isLoading: t,
            onPageSizeSelect: d
          }
        ),
        /* @__PURE__ */ o(
          u,
          {
            displayPageNumber: c,
            pageCount: g,
            translations: a,
            isInteractive: i,
            isSkeleton: e,
            isLoading: t,
            onPageCommit: S
          }
        ),
        /* @__PURE__ */ o(
          C,
          {
            pageOffset: p,
            totalItems: r,
            translations: a,
            language: l,
            isSkeleton: e,
            isInteractive: i
          }
        )
      ]
    }
  );
};
export {
  y as Pagination
};
