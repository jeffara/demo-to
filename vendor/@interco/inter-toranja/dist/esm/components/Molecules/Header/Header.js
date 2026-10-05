import { jsxs as s, jsx as a } from "react/jsx-runtime";
import { HeaderLeading as r } from "./components/HeaderLeading.js";
import { HeaderInlineTitle as d, HeaderLargeTitle as c } from "./components/HeaderTitle.js";
import { HeaderTrailing as h } from "./components/HeaderTrailing.js";
import '../../../assets/components/Molecules/Header/Header.modules.css';/* empty css                    */
import { useHeader as g } from "./hooks/useHeader.js";
import { useHeaderScrollCollapse as p } from "./hooks/useHeaderScrollCollapse.js";
import { AnimatePresence as l } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
const x = (o) => {
  const e = g(o), { isCollapsed: i } = p({
    isEnabled: e.isLarge && !e.isSkeleton,
    scrollContainer: e.scrollContainer
  }), t = e.shouldShowInlineTitle(i), n = e.shouldShowLargeTitleRow(i);
  return /* @__PURE__ */ s("header", { "data-testid": "header", className: e.getRootClasses(i), children: [
    /* @__PURE__ */ s("div", { className: e.getRowClasses(), children: [
      /* @__PURE__ */ s("div", { className: e.getLeadingClasses(!!(t && e.title)), children: [
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
            titleClasses: e.getInlineTitleClasses(i)
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
        titleRowClasses: e.getLargeTitleRowClasses(i)
      },
      "header-large-title"
    ) })
  ] });
};
export {
  x as Header
};
