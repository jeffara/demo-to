import { getPaginationTranslations as h } from "../infrastructure/translations.js";
import { calculatePageOffset as C } from "../utils/calculatePageOffset.js";
import { classNamesMerge as S } from "../../../../utils/classNamesMerge.js";
const O = (g) => {
  const {
    pageIndex: o,
    pageSize: l,
    pageCount: s,
    totalItems: r,
    status: i = "default",
    language: c = "ptBR",
    onPageChange: m,
    onPageSizeChange: p
  } = g, e = i === "skeleton", a = i === "loading", t = !e && !a, d = h(c), P = C(o, l, r), f = o + 1;
  return {
    rootClasses: S("pagination", {
      "pagination--skeleton": e,
      "pagination--loading": a
    }),
    isInteractive: t,
    isSkeleton: e,
    isLoading: a,
    translations: d,
    pageOffset: P,
    displayPageNumber: f,
    handlePageCommit: (n) => {
      if (!t || s <= 0)
        return;
      const u = Math.min(Math.max(n, 1), s);
      m(u - 1);
    },
    handlePageSizeSelect: (n) => {
      t && p(n);
    }
  };
};
export {
  O as usePagination
};
