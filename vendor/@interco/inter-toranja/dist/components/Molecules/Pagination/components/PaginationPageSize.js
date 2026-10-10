import { jsx as n } from "react/jsx-runtime";
import { useMemo as E } from "react";
import { PAGINATION_PAGE_SIZE_MENU_SIZE as I, PAGINATION_PAGE_SIZE_MENU_PLACEMENT as g, PAGINATION_PAGE_SIZE_MENU_OFFSET as N } from "../infrastructure/constants.js";
import { Chip as p } from "../../Chip/Chip.js";
import { STATE as _ } from "../../../../utils/pattern.js";
import { MenuPopup as P } from "../../MenuPopup/MenuPopup.js";
const A = (t, a, e, s) => {
  const c = t.map((i) => {
    const m = i === a ? `${e.displaying} ${i}` : `${e.display} ${i}`;
    return {
      id: `page-size-${i}`,
      label: m,
      onClick: () => {
        s(i);
      }
    };
  }), [o, ...r] = c;
  if (!o)
    throw new Error("Pagination requires at least one page size option");
  return [o, ...r];
}, G = ({
  pageSize: t,
  pageSizeOptions: a,
  translations: e,
  isInteractive: s,
  isSkeleton: c,
  isLoading: o,
  onPageSizeSelect: r
}) => {
  const i = E(
    () => A(a, t, e, r),
    [a, t, e, r]
  );
  if (c)
    return /* @__PURE__ */ n("div", { className: "pagination__zone pagination__zone--start", "data-testid": "PaginationPageSize", children: /* @__PURE__ */ n(
      p,
      {
        label: e.displaying,
        state: _.SKELETON,
        trailingIcon: "ic_chevron_down"
      }
    ) });
  const d = o ? _.LOADING : _.ENABLED, m = `${e.displaying} ${t}`, l = /* @__PURE__ */ n(p, { label: m, state: d, trailingIcon: "ic_chevron_down" });
  return /* @__PURE__ */ n("div", { className: "pagination__zone pagination__zone--start", "data-testid": "PaginationPageSize", children: s ? /* @__PURE__ */ n(
    P,
    {
      ariaLabel: e.pagination,
      items: i,
      offset: N,
      placement: g,
      size: I,
      children: l
    }
  ) : l });
};
export {
  G as PaginationPageSize
};
