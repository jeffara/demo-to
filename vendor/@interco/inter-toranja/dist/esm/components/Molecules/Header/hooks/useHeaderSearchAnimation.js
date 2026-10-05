import { EASING as t, DURATION as i } from "../../../../utils/constants/animation.js";
const n = {
  duration: i.MODERATE_02,
  ease: t.ENTRANCE_FUNCTIONAL
}, o = {
  duration: i.MODERATE_02,
  ease: t.EXIT_FUNCTIONAL
}, a = {
  duration: i.MODERATE_01,
  ease: t.EXIT_FUNCTIONAL
}, T = {
  duration: i.MODERATE_01,
  ease: t.ENTRANCE_FUNCTIONAL
}, e = {
  collapsed: {
    clipPath: "inset(0 0 0 100%)",
    opacity: 0,
    transition: o
  },
  expanded: {
    clipPath: "inset(0 0 0 0)",
    opacity: 1,
    transition: n
  }
}, E = {
  collapsed: {
    opacity: 0,
    transition: o
  },
  expanded: {
    opacity: 1,
    transition: n
  }
}, A = {
  visible: {
    opacity: 1,
    scale: 1,
    pointerEvents: "auto",
    transition: n
  },
  hidden: {
    opacity: 0,
    scale: 0.85,
    pointerEvents: "none",
    transition: o
  }
}, N = {
  visible: {
    opacity: 1,
    scale: 1,
    height: "auto",
    transition: T
  },
  hidden: {
    opacity: 0,
    scale: 0.85,
    height: 0,
    paddingBottom: 0,
    transition: a
  }
}, c = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    transition: a
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: T
  }
};
export {
  c as COLLAPSED_TITLE_VARIANTS,
  N as LARGE_TITLE_VARIANTS,
  E as SEARCH_CONTENT_VARIANTS,
  e as SEARCH_FIELD_VARIANTS,
  A as SEARCH_TRIGGER_ICON_VARIANTS
};
