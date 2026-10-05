import { jsxs as i, jsx as a } from "react/jsx-runtime";
import { HeaderLeading as r } from "./components/HeaderLeading.js";
import { HeaderInlineTitle as d, HeaderLargeTitle as c } from "./components/HeaderTitle.js";
import { HeaderTrailing as h } from "./components/HeaderTrailing.js";
import { useHeader as g } from "./hooks/useHeader.js";
import { useHeaderScrollCollapse as p } from "./hooks/useHeaderScrollCollapse.js";
import { A as l } from "../../../index-CDYq4efL.js";
import "./constants.js";
import '../../../assets/Header.css';const x = (o) => {
  const e = g(o), { isCollapsed: s } = p({
    isEnabled: e.isLarge && !e.isSkeleton,
    scrollContainer: e.scrollContainer
  }), t = e.shouldShowInlineTitle(s), n = e.shouldShowLargeTitleRow(s);
  return /* @__PURE__ */ i("header", { "data-testid": "header", className: e.getRootClasses(s), children: [
    /* @__PURE__ */ i("div", { className: e.getRowClasses(), children: [
      /* @__PURE__ */ i("div", { className: e.getLeadingClasses(!!(t && e.title)), children: [
        (!!e.onBackClick || !!e.onCloseClick || !e.isSearchExpanded) && /* @__PURE__ */ a(
          r,
          {
            variant: e.variant,
            type: e.type,
            isSkeleton: e.isSkeleton,
            isSearchExpanded: e.isSearchExpanded,
            onBackClick: e.onBackClick,
            onCloseClick: e.onCloseClick,
            avatar: e.isSearchExpanded ? void 0 : e.avatar,
            logo: e.isSearchExpanded ? void 0 : e.logo,
            state: e.state,
            onTag: e.handleNestedTag
          }
        ),
        /* @__PURE__ */ a(l, { initial: !1, children: t && e.title && /* @__PURE__ */ a(
          d,
          {
            title: e.title,
            isSkeleton: e.isSkeleton,
            isTopPages: e.isTopPages,
            isAvatarType: e.isAvatarType,
            isLarge: e.isLarge,
            titleClasses: e.getInlineTitleClasses(s)
          },
          "header-inline-title"
        ) })
      ] }),
      /* @__PURE__ */ a(
        h,
        {
          type: e.type,
          isSkeleton: e.isSkeleton,
          isSearchFieldVisible: e.isSearchFieldVisible,
          areTrailingIconsHidden: e.areTrailingIconsHidden,
          onSearchExitComplete: e.handleSearchExitComplete,
          state: e.state,
          showStartIcon: e.showStartIcon,
          startIcon: e.startIcon,
          showMiddleIcon: e.showMiddleIcon,
          middleIcon: e.middleIcon,
          showEndIcon: e.showEndIcon,
          endIcon: e.endIcon,
          chip: e.chip,
          segmentedControl: e.segmentedControl,
          searchProps: e.searchProps,
          onSearchOpenChange: e.onSearchOpenChange,
          trailingClasses: e.getTrailingClasses(),
          onTag: e.handleNestedTag
        }
      )
    ] }),
    /* @__PURE__ */ a(l, { initial: !1, children: n && e.title && /* @__PURE__ */ a(
      c,
      {
        title: e.title,
        isSkeleton: e.isSkeleton,
        titleClasses: e.getLargeTitleClasses(),
        titleRowClasses: e.getLargeTitleRowClasses(s)
      },
      "header-large-title"
    ) })
  ] });
};
export {
  x as Header
};
