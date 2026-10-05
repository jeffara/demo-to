import { HeaderType as i, HeaderVariant as p, HEADER_BASE_CLASS as n } from "../constants.js";
import { useHeaderSearchExpandState as Y } from "./useHeaderSearchExpandState.js";
import { classNamesMerge as h } from "../../../../utils/classNamesMerge.js";
import { STATE as u, SIZE as f } from "../../../../utils/pattern.js";
const Z = /* @__PURE__ */ new Set([
  i.Avatar,
  i.AvatarFlag,
  i.AvatarSegmentedControl
]), j = (e) => e === u.SKELETON ? u.SKELETON : u.ENABLED, q = (e) => "size" in e && e.size ? e.size : f.SMALL, s = (e, t) => {
  if (t in e)
    return e[t];
}, J = (e) => {
  if ("logo" in e && e.logo)
    return e.logo;
}, Q = (e, t) => e !== f.LARGE ? !1 : t === i.Title, W = ({
  isSearchUiExpanded: e,
  onSearchOpenChange: t,
  onBackClick: a,
  handleCloseSearch: r,
  propsOnCloseClick: o
}) => e && t && !a ? r : o, X = ({
  onTag: e,
  variant: t,
  type: a,
  size: r,
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
          nested_size: r,
          nested_title: o
        }
      }));
    };
}, ee = (e, t, a) => h(n, {
  [`${n}--top-pages`]: e.isTopPages,
  [`${n}--inner-pages`]: e.isInnerPages,
  [`${n}--modal-pages`]: e.isModalPages,
  [`${n}--small`]: !e.isLarge || a,
  [`${n}--large`]: e.isLarge,
  [`${n}--collapsed`]: a,
  [`${n}--stacked`]: e.stacked,
  [`${n}--skeleton`]: e.isSkeleton,
  [`${n}--search-expanded`]: e.isSearchUiExpanded,
  [`${n}--type-title`]: t === i.Title,
  [`${n}--type-title-chip`]: e.isTitleChip,
  [`${n}--type-logo`]: e.isLogoType,
  [`${n}--type-avatar`]: t === i.Avatar,
  [`${n}--type-avatar-flag`]: t === i.AvatarFlag,
  [`${n}--type-avatar-segmented`]: t === i.AvatarSegmentedControl,
  [`${n}--type-search`]: e.isSearchType
}), te = (e, t, a) => h(`${n}__title`, {
  [`${n}__title--top`]: e.isTopPages && t === i.Title,
  [`${n}__title--small`]: !e.isTopPages || t !== i.Title,
  [`${n}__title--avatar`]: e.isAvatarType,
  [`${n}__title--collapsed-enter`]: a && e.isLarge
}), ae = ({
  hasNavigation: e,
  isAvatarType: t,
  avatar: a,
  isLogoType: r,
  isSearchUiExpanded: o
}) => e ? !0 : o ? !1 : t && a ? !0 : r, ne = ({
  hasNavigation: e,
  isLeadingSlotVisible: t,
  hasLeadingVisual: a,
  hasInlineTitle: r,
  title: o
}) => e || !t || !a || !r ? !1 : !!o, ie = ({
  flags: e,
  onBackClick: t,
  onCloseClick: a,
  avatar: r,
  title: o,
  hasInlineTitle: g
}) => {
  const d = !!t || !!a, T = d || !e.isSearchUiExpanded, _ = ae({
    hasNavigation: d,
    isAvatarType: e.isAvatarType,
    avatar: r,
    isLogoType: e.isLogoType,
    isSearchUiExpanded: e.isSearchUiExpanded
  });
  return h("header__leading", {
    "header__leading--top-pages": e.isTopPages && !e.isSearchUiExpanded,
    "header__leading--has-navigation": d,
    "header__leading--search-expanded": e.isSearchUiExpanded,
    "header__leading--with-gap": ne({
      hasNavigation: d,
      isLeadingSlotVisible: T,
      hasLeadingVisual: _,
      hasInlineTitle: g,
      title: o
    })
  });
}, re = (e, t) => h("header__trailing", {
  "header__trailing--type-avatar-flag": t === i.AvatarFlag,
  "header__trailing--type-avatar-segmented": t === i.AvatarSegmentedControl,
  "header__trailing--type-search": e.isSearchType,
  "header__trailing--search-expanded": e.isSearchUiExpanded && !e.isSearchType
}), se = ({
  flags: e,
  type: t,
  title: a,
  isCollapsed: r
}) => e.isSearchUiExpanded || e.isLogoType || e.isLarge && !r ? !1 : e.isAvatarType ? !!a : t === i.Title ? !0 : e.isTitleChip, oe = ({
  flags: e,
  type: t,
  title: a,
  isCollapsed: r
}) => !e.isLarge || t !== i.Title || !a || r ? !1 : !e.isSearchUiExpanded, ge = (e) => {
  const {
    variant: t,
    type: a,
    state: r = u.ENABLED,
    stacked: o = !1,
    isSearchOpen: g = !1,
    onTag: d
  } = e, T = j(r), _ = q(e), L = T === u.SKELETON, E = Q(_, a), m = t === p.TopPages, w = t === p.InnerPages, P = t === p.ModalPages, A = Z.has(a), y = a === i.Search, x = a === i.Logo, k = a === i.TitleChip, S = s(e, "title"), v = s(e, "onBackClick"), O = s(e, "onCloseClick"), {
    isSearchFieldVisible: H,
    isSearchUiExpanded: C,
    areTrailingIconsHidden: U,
    handleSearchExitComplete: B,
    handleCloseSearch: N
  } = Y({
    isSearchOpen: g,
    isPermanentSearch: y,
    onSearchOpenChange: e.onSearchOpenChange
  }), $ = W({
    isSearchUiExpanded: C,
    onSearchOpenChange: e.onSearchOpenChange,
    onBackClick: v,
    handleCloseSearch: N,
    propsOnCloseClick: O
  }), I = s(e, "avatar"), R = s(e, "chip"), M = s(
    e,
    "segmentedControl"
  ), b = J(e), z = s(e, "showStartIcon"), V = s(e, "startIcon"), F = s(e, "showMiddleIcon"), D = s(e, "middleIcon"), K = s(e, "showEndIcon"), G = s(e, "endIcon"), c = {
    isSkeleton: L,
    isLarge: E,
    isTopPages: m,
    isInnerPages: w,
    isModalPages: P,
    isAvatarType: A,
    isSearchType: y,
    isLogoType: x,
    isTitleChip: k,
    isSearchUiExpanded: C,
    stacked: o
  };
  return {
    variant: t,
    type: a,
    state: T,
    isSkeleton: L,
    isLarge: E,
    isTopPages: m,
    isAvatarType: A,
    isSearchExpanded: C,
    isSearchFieldVisible: H,
    areTrailingIconsHidden: U,
    handleSearchExitComplete: B,
    title: S,
    onBackClick: v,
    onCloseClick: $,
    avatar: I,
    chip: R,
    segmentedControl: M,
    logo: b,
    showStartIcon: z,
    startIcon: V,
    showMiddleIcon: F,
    middleIcon: D,
    showEndIcon: K,
    endIcon: G,
    searchProps: e.searchProps,
    onSearchOpenChange: e.onSearchOpenChange,
    scrollContainer: e.scrollContainer,
    handleNestedTag: X({ onTag: d, variant: t, type: a, size: _, title: S }),
    getRootClasses: (l) => ee(c, a, l),
    getInlineTitleClasses: (l) => te(c, a, l),
    getLargeTitleClasses: () => `${n}__title ${n}__title--large`,
    getRowClasses: () => h("header__row", {
      "header__row--type-search": C
    }),
    getLeadingClasses: (l) => ie({
      flags: c,
      onBackClick: v,
      onCloseClick: $,
      avatar: I,
      title: S,
      hasInlineTitle: l
    }),
    getTrailingClasses: () => re(c, a),
    getLargeTitleRowClasses: (l) => h("header__title-row", {
      "header__title-row--hidden": l
    }),
    shouldShowInlineTitle: (l) => se({ flags: c, type: a, title: S, isCollapsed: l }),
    shouldShowLargeTitleRow: (l) => oe({ flags: c, type: a, title: S, isCollapsed: l })
  };
};
export {
  ge as useHeader
};
