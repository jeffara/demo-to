import { a as d } from "../../../../chunk-4XZ63LWV-CUwAtpuR.js";
const g = {
  variant: "initial",
  category: "person",
  label: "Nina Brown",
  color: "soft"
};
d("icon-click");
const u = {
  label: "Label",
  trailingIcon: "ic_chevron_down"
}, P = {
  variant: "flag",
  flagIcon: "ic_flag_brazil",
  trailingIcon: "ic_chevron_down"
}, f = {
  segments: [{ icon: "ic_orange" }, { icon: "ic_orange" }],
  filling: "hug",
  onClick: d("segment-click")
}, I = "inter", y = (e) => {
  const t = e.state, l = e.title ?? "Title", p = e.onBackClick ?? d("onBackClick"), h = e.onCloseClick ?? d("onCloseClick"), k = e.avatar ?? g, n = e.showStartIcon, o = e.startIcon, c = e.showMiddleIcon, i = e.middleIcon, s = e.showEndIcon, r = e.endIcon, a = e.onTag, v = e.chip, C = e.logo ?? I, m = e.segmentedControl ?? f;
  switch (e.type) {
    case "titleChip":
      return {
        variant: "innerPages",
        type: "titleChip",
        size: "small",
        state: t,
        title: l,
        onBackClick: p,
        chip: v ?? u,
        onTag: a
      };
    case "logo":
      return {
        variant: "topPages",
        type: "logo",
        size: "small",
        state: t,
        logo: C,
        showStartIcon: n,
        startIcon: o,
        showMiddleIcon: c,
        middleIcon: i,
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
        title: l,
        avatar: k,
        showStartIcon: n,
        startIcon: o,
        showMiddleIcon: c,
        middleIcon: i,
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
        title: l,
        avatar: k,
        chip: v ?? P,
        showStartIcon: n,
        startIcon: o,
        showMiddleIcon: c,
        middleIcon: i,
        onTag: a
      };
    case "avatarSegmentedControl":
      return {
        variant: "topPages",
        type: "avatarSegmentedControl",
        size: "small",
        state: t,
        title: l,
        avatar: k,
        segmentedControl: m,
        showStartIcon: n,
        startIcon: o,
        onTag: a
      };
    case "search":
      return e.variant === "innerPages" ? {
        variant: "innerPages",
        type: "search",
        size: "small",
        state: t,
        onBackClick: p,
        showStartIcon: n,
        startIcon: o,
        showMiddleIcon: c,
        middleIcon: i,
        searchProps: e.searchProps,
        onTag: a
      } : {
        variant: "topPages",
        type: "search",
        size: "small",
        state: t,
        onBackClick: e.onBackClick,
        showStartIcon: n,
        startIcon: o,
        showMiddleIcon: c,
        middleIcon: i,
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
        title: l,
        onCloseClick: h,
        showStartIcon: n,
        startIcon: o,
        showMiddleIcon: c,
        middleIcon: i,
        showEndIcon: s,
        endIcon: r,
        onTag: a
      } : e.variant === "innerPages" ? {
        variant: "innerPages",
        type: "title",
        size: e.size === "large" ? "large" : "small",
        state: t,
        stacked: e.stacked,
        title: l,
        onBackClick: p,
        showStartIcon: n,
        startIcon: o,
        showMiddleIcon: c,
        middleIcon: i,
        showEndIcon: s,
        endIcon: r,
        onTag: a
      } : {
        variant: "topPages",
        type: "title",
        size: "small",
        state: t,
        stacked: e.stacked,
        title: l,
        onBackClick: e.onBackClick,
        showStartIcon: n,
        startIcon: o,
        showMiddleIcon: c,
        middleIcon: i,
        showEndIcon: s,
        endIcon: r,
        onTag: a
      };
  }
};
export {
  y as resolveDocsHeaderArgs
};
