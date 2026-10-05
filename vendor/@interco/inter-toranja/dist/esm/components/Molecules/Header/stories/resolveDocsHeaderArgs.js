import { defaultAvatar as P, defaultLogo as u, defaultSegmentedControl as z, defaultFlagChip as I, defaultTitleChip as f } from "./Header.stories.constants.js";
import { action as m } from "../../../../node_modules/@storybook/addon-actions/dist/chunk-4XZ63LWV.js";
const B = (e) => {
  const t = e.state, i = e.title ?? "Title", d = e.onBackClick ?? m("onBackClick"), v = e.onCloseClick ?? m("onCloseClick"), p = e.avatar ?? P, o = e.showStartIcon, n = e.startIcon, c = e.showMiddleIcon, l = e.middleIcon, s = e.showEndIcon, r = e.endIcon, a = e.onTag, k = e.chip, h = e.logo ?? u, C = e.segmentedControl ?? z;
  switch (e.type) {
    case "titleChip":
      return {
        variant: "innerPages",
        type: "titleChip",
        size: "small",
        state: t,
        title: i,
        onBackClick: d,
        chip: k ?? f,
        onTag: a
      };
    case "logo":
      return {
        variant: "topPages",
        type: "logo",
        size: "small",
        state: t,
        logo: h,
        showStartIcon: o,
        startIcon: n,
        showMiddleIcon: c,
        middleIcon: l,
        showEndIcon: s,
        endIcon: r,
        onTag: a
      };
    case "avatar":
      return {
        variant: "topPages",
        type: "avatar",
        size: "small",
        state: t,
        title: i,
        avatar: p,
        showStartIcon: o,
        startIcon: n,
        showMiddleIcon: c,
        middleIcon: l,
        showEndIcon: s,
        endIcon: r,
        onTag: a
      };
    case "avatarFlag":
      return {
        variant: "topPages",
        type: "avatarFlag",
        size: "small",
        state: t,
        title: i,
        avatar: p,
        chip: k ?? I,
        showStartIcon: o,
        startIcon: n,
        showMiddleIcon: c,
        middleIcon: l,
        onTag: a
      };
    case "avatarSegmentedControl":
      return {
        variant: "topPages",
        type: "avatarSegmentedControl",
        size: "small",
        state: t,
        title: i,
        avatar: p,
        segmentedControl: C,
        showStartIcon: o,
        startIcon: n,
        onTag: a
      };
    case "search":
      return e.variant === "innerPages" ? {
        variant: "innerPages",
        type: "search",
        size: "small",
        state: t,
        onBackClick: d,
        showStartIcon: o,
        startIcon: n,
        showMiddleIcon: c,
        middleIcon: l,
        searchProps: e.searchProps,
        onTag: a
      } : {
        variant: "topPages",
        type: "search",
        size: "small",
        state: t,
        onBackClick: e.onBackClick,
        showStartIcon: o,
        startIcon: n,
        showMiddleIcon: c,
        middleIcon: l,
        searchProps: e.searchProps,
        onTag: a
      };
    case "title":
    default:
      return e.variant === "modalPages" ? {
        variant: "modalPages",
        type: "title",
        size: e.size === "large" ? "large" : "small",
        state: t,
        stacked: e.stacked,
        title: i,
        onCloseClick: v,
        showStartIcon: o,
        startIcon: n,
        showMiddleIcon: c,
        middleIcon: l,
        showEndIcon: s,
        endIcon: r,
        onTag: a
      } : e.variant === "innerPages" ? {
        variant: "innerPages",
        type: "title",
        size: e.size === "large" ? "large" : "small",
        state: t,
        stacked: e.stacked,
        title: i,
        onBackClick: d,
        showStartIcon: o,
        startIcon: n,
        showMiddleIcon: c,
        middleIcon: l,
        showEndIcon: s,
        endIcon: r,
        onTag: a
      } : {
        variant: "topPages",
        type: "title",
        size: "small",
        state: t,
        stacked: e.stacked,
        title: i,
        onBackClick: e.onBackClick,
        showStartIcon: o,
        startIcon: n,
        showMiddleIcon: c,
        middleIcon: l,
        showEndIcon: s,
        endIcon: r,
        onTag: a
      };
  }
};
export {
  B as resolveDocsHeaderArgs
};
