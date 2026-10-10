import { HeaderType as r, HeaderVariant as v, HEADER_BASE_CLASS as n } from "../constants.js";
import { useHeaderSearchExpandState as Z } from "./useHeaderSearchExpandState.js";
import { classNamesMerge as h } from "../../../../utils/classNamesMerge.js";
import { STATE as S, SIZE as w } from "../../../../utils/pattern.js";
const j = /* @__PURE__ */ new Set([
  r.Avatar,
  r.AvatarFlag,
  r.AvatarSegmentedControl
]), q = (e) => e === S.SKELETON ? S.SKELETON : S.ENABLED, J = (e) => "size" in e && e.size ? e.size : w.SMALL, s = (e, t) => {
  if (t in e)
    return e[t];
}, Q = (e) => {
  if ("logo" in e && e.logo)
    return e.logo;
}, W = (e, t) => e !== w.LARGE ? !1 : t === r.Title, X = ({
  isSearchUiExpanded: e,
  onSearchOpenChange: t,
  onBackClick: a,
  handleCloseSearch: i,
  propsOnCloseClick: o
}) => e && t && !a ? i : o, ee = ({
  onTag: e,
  variant: t,
  type: a,
  size: i,
  title: o
}) => {
  if (e)
    return (g) => {
      e((d) => ({
        ...d,
        ...g(),
        CustomParameters: {
          nested_in: "Header",
          nested_variant: t,
          nested_type: a,
          nested_size: i,
          nested_title: o
        }
      }));
    };
}, te = (e, t, a) => h(n, {
  [`${n}--top-pages`]: e.isTopPages,
  [`${n}--inner-pages`]: e.isInnerPages,
  [`${n}--modal-pages`]: e.isModalPages,
  [`${n}--small`]: !e.isLarge || a,
  [`${n}--large`]: e.isLarge,
  [`${n}--collapsed`]: a,
  [`${n}--stacked`]: e.stacked,
  [`${n}--background-transparent`]: e.isTransparentBackground,
  [`${n}--skeleton`]: e.isSkeleton,
  [`${n}--search-expanded`]: e.isSearchUiExpanded,
  [`${n}--type-title`]: t === r.Title,
  [`${n}--type-title-chip`]: e.isTitleChip,
  [`${n}--type-logo`]: e.isLogoType,
  [`${n}--type-avatar`]: t === r.Avatar,
  [`${n}--type-avatar-flag`]: t === r.AvatarFlag,
  [`${n}--type-avatar-segmented`]: t === r.AvatarSegmentedControl,
  [`${n}--type-search`]: e.isSearchType
}), ae = (e, t, a) => h(`${n}__title`, {
  [`${n}__title--top`]: e.isTopPages && t === r.Title,
  [`${n}__title--small`]: !e.isTopPages || t !== r.Title,
  [`${n}__title--avatar`]: e.isAvatarType,
  [`${n}__title--collapsed-enter`]: a && e.isLarge
}), ne = ({
  hasNavigation: e,
  isAvatarType: t,
  avatar: a,
  isLogoType: i,
  isSearchUiExpanded: o
}) => e ? !0 : o ? !1 : t && a ? !0 : i, re = ({
  hasNavigation: e,
  isLeadingSlotVisible: t,
  hasLeadingVisual: a,
  hasInlineTitle: i,
  title: o
}) => e || !t || !a || !i ? !1 : !!o, ie = ({
  flags: e,
  onBackClick: t,
  onCloseClick: a,
  avatar: i,
  title: o,
  hasInlineTitle: g
}) => {
  const d = !!t || !!a, C = d || !e.isSearchUiExpanded, T = ne({
    hasNavigation: d,
    isAvatarType: e.isAvatarType,
    avatar: i,
    isLogoType: e.isLogoType,
    isSearchUiExpanded: e.isSearchUiExpanded
  });
  return h("header__leading", {
    "header__leading--top-pages": e.isTopPages && !e.isSearchUiExpanded,
    "header__leading--has-navigation": d,
    "header__leading--search-expanded": e.isSearchUiExpanded,
    "header__leading--with-gap": re({
      hasNavigation: d,
      isLeadingSlotVisible: C,
      hasLeadingVisual: T,
      hasInlineTitle: g,
      title: o
    })
  });
}, se = (e, t) => h("header__trailing", {
  "header__trailing--type-avatar-flag": t === r.AvatarFlag,
  "header__trailing--type-avatar-segmented": t === r.AvatarSegmentedControl,
  "header__trailing--type-search": e.isSearchType,
  "header__trailing--search-expanded": e.isSearchUiExpanded && !e.isSearchType
}), oe = ({
  flags: e,
  type: t,
  title: a,
  isCollapsed: i
}) => e.isSearchUiExpanded || e.isLogoType || e.isLarge && !i ? !1 : e.isAvatarType ? !!a : t === r.Title ? !0 : e.isTitleChip, le = ({
  flags: e,
  type: t,
  title: a,
  isCollapsed: i
}) => !e.isLarge || t !== r.Title || !a || i ? !1 : !e.isSearchUiExpanded, ue = (e) => {
  const {
    variant: t,
    type: a,
    state: i = S.ENABLED,
    stacked: o = !1,
    background: g = "default",
    isSearchOpen: d = !1,
    onTag: C
  } = e, T = q(i), L = J(e), E = T === S.SKELETON, m = W(L, a), A = t === v.TopPages, P = t === v.InnerPages, k = t === v.ModalPages, $ = j.has(a), y = a === r.Search, x = a === r.Logo, O = a === r.TitleChip, u = s(e, "title"), p = s(e, "onBackClick"), B = s(e, "onCloseClick"), {
    isSearchFieldVisible: H,
    isSearchUiExpanded: _,
    areTrailingIconsHidden: U,
    handleSearchExitComplete: N,
    handleCloseSearch: R
  } = Z({
    isSearchOpen: d,
    isPermanentSearch: y,
    onSearchOpenChange: e.onSearchOpenChange
  }), I = X({
    isSearchUiExpanded: _,
    onSearchOpenChange: e.onSearchOpenChange,
    onBackClick: p,
    handleCloseSearch: R,
    propsOnCloseClick: B
  }), f = s(e, "avatar"), b = s(e, "chip"), M = s(
    e,
    "segmentedControl"
  ), z = Q(e), V = s(e, "showStartIcon"), F = s(e, "startIcon"), D = s(e, "showMiddleIcon"), K = s(e, "middleIcon"), G = s(e, "showEndIcon"), Y = s(e, "endIcon"), c = {
    isSkeleton: E,
    isLarge: m,
    isTopPages: A,
    isInnerPages: P,
    isModalPages: k,
    isAvatarType: $,
    isSearchType: y,
    isLogoType: x,
    isTitleChip: O,
    isSearchUiExpanded: _,
    stacked: o,
    isTransparentBackground: g === "transparent"
  };
  return {
    variant: t,
    type: a,
    state: T,
    isSkeleton: E,
    isLarge: m,
    isTopPages: A,
    isAvatarType: $,
    isSearchExpanded: _,
    isSearchFieldVisible: H,
    areTrailingIconsHidden: U,
    handleSearchExitComplete: N,
    title: u,
    onBackClick: p,
    onCloseClick: I,
    avatar: f,
    chip: b,
    segmentedControl: M,
    logo: z,
    showStartIcon: V,
    startIcon: F,
    showMiddleIcon: D,
    middleIcon: K,
    showEndIcon: G,
    endIcon: Y,
    searchProps: e.searchProps,
    onSearchOpenChange: e.onSearchOpenChange,
    scrollContainer: e.scrollContainer,
    handleNestedTag: ee({ onTag: C, variant: t, type: a, size: L, title: u }),
    getRootClasses: (l) => te(c, a, l),
    getInlineTitleClasses: (l) => ae(c, a, l),
    getLargeTitleClasses: () => `${n}__title ${n}__title--large`,
    getRowClasses: () => h("header__row", {
      "header__row--type-search": _
    }),
    getLeadingClasses: (l) => ie({
      flags: c,
      onBackClick: p,
      onCloseClick: I,
      avatar: f,
      title: u,
      hasInlineTitle: l
    }),
    getTrailingClasses: () => se(c, a),
    getLargeTitleRowClasses: (l) => h("header__title-row", {
      "header__title-row--hidden": l
    }),
    shouldShowInlineTitle: (l) => oe({ flags: c, type: a, title: u, isCollapsed: l }),
    shouldShowLargeTitleRow: (l) => le({ flags: c, type: a, title: u, isCollapsed: l })
  };
};
export {
  ue as useHeader
};
