import { jsxs as f, jsx as o } from "react/jsx-runtime";
import '../../../assets/components/Molecules/Pagination/Pagination.modules.css';/* empty css                        */
import { PaginationNavigator as u } from "./components/PaginationNavigator.js";
import { PaginationPageSize as z } from "./components/PaginationPageSize.js";
import { PaginationProgress as C } from "./components/PaginationProgress.js";
import { usePagination as b } from "./hooks/usePagination.js";
const I = (n) => {
  const { pageSize: s, pageCount: r, totalItems: g, pageSizeOptions: m, language: l = "ptBR" } = n, {
    rootClasses: p,
    isInteractive: i,
    isSkeleton: t,
    isLoading: e,
    translations: a,
    pageOffset: P,
    displayPageNumber: c,
    handlePageCommit: S,
    handlePageSizeSelect: d
  } = b(n);
  return /* @__PURE__ */ f(
    "nav",
    {
      className: p,
      "data-testid": "Pagination",
      "aria-label": a.pagination,
      "aria-busy": e,
      children: [
        /* @__PURE__ */ o(
          z,
          {
            pageSize: s,
            pageSizeOptions: m,
            translations: a,
            isInteractive: i,
            isSkeleton: t,
            isLoading: e,
            onPageSizeSelect: d
          }
        ),
        /* @__PURE__ */ o(
          u,
          {
            displayPageNumber: c,
            pageCount: r,
            translations: a,
            isInteractive: i,
            isSkeleton: t,
            isLoading: e,
            onPageCommit: S
          }
        ),
        /* @__PURE__ */ o(
          C,
          {
            pageOffset: P,
            totalItems: g,
            translations: a,
            language: l,
            isSkeleton: t,
            isInteractive: i
          }
        )
      ]
    }
  );
};
export {
  I as Pagination
};
