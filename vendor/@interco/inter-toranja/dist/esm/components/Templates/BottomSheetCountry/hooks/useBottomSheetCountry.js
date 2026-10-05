import { useState as D } from "react";
import { DEFAULT_FEATURED_TITLE as F, DEFAULT_ALL_TITLE as M, DEFAULT_SEARCH_PLACEHOLDER as N, getNoResultsTitle as P, EMPTY_NO_ITEMS_TITLE as O, EMPTY_NO_RESULTS_DESCRIPTION as U, EMPTY_NO_ITEMS_DESCRIPTION as v } from "../constants.js";
import { classNamesMerge as h } from "../../../../utils/classNamesMerge.js";
const Y = (t, s) => {
  var o;
  const e = s.trim().toLocaleLowerCase();
  if (!e)
    return !0;
  const r = t.label.toLocaleLowerCase().includes(e), n = ((o = t.description) == null ? void 0 : o.toLocaleLowerCase().includes(e)) ?? !1;
  return r || n;
}, B = (t) => [...t].sort(
  (s, e) => s.label.localeCompare(e.label, void 0, { sensitivity: "base" })
), S = (t, s) => t.filter((e) => Y(e, s)), H = (t, s, e, r) => {
  if (t.length === 0)
    return "noItems";
  const n = r.trim().length > 0, o = s.length > 0 || e.length > 0;
  return n && !o ? "noResults" : "default";
}, G = (t) => {
  const {
    items: s,
    featuredItems: e = [],
    selectedValue: r,
    showSearch: n = !0,
    showFeatured: o = !1,
    featuredTitle: T = F,
    allTitle: d = M,
    searchPlaceholder: _ = N,
    initialSearchTerm: E = "",
    onSelect: I,
    close: L
  } = t, [c, C] = D(E), m = B(S(s, c)), i = S(e, c), l = H(
    s,
    m,
    i,
    c
  ), u = o && i.length > 0 && l === "default", f = u, p = l === "noResults" || l === "noItems", y = l === "noResults" ? P(c.trim()) : O, b = l === "noResults" ? U : v, R = h("bottom-sheet-country"), g = h("bottom-sheet-country__search"), w = h("bottom-sheet-country__empty"), A = h("bottom-sheet-country__list");
  return {
    rootClasses: R,
    searchClasses: g,
    emptyClasses: w,
    listClasses: A,
    searchTerm: c,
    searchPlaceholder: _,
    featuredTitle: T,
    allTitle: d,
    contentState: l,
    sortedFilteredItems: m,
    filteredFeaturedItems: i,
    shouldShowSearch: n,
    shouldShowFeaturedSection: u,
    shouldShowAllTitle: f,
    shouldShowEmptyState: p,
    emptyTitle: y,
    emptyDescription: b,
    handleSearchChange: (a) => {
      C(a);
    },
    handleSelect: (a) => {
      I(a), L();
    },
    isItemSelected: (a) => r === a
  };
};
export {
  G as useBottomSheetCountry
};
