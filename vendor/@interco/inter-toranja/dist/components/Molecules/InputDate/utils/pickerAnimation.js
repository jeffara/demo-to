import { EASING as i, DURATION as o } from "../../../../utils/constants/animation.js";
const T = {
  duration: o.MODERATE_01,
  ease: i.ENTRANCE_FUNCTIONAL
}, n = {
  duration: o.FAST_02,
  ease: i.EXIT_FUNCTIONAL
}, N = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    originX: 0,
    originY: 0,
    transition: n
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    originX: 0,
    originY: 0,
    transition: T
  }
};
export {
  N as DATE_PICKER_POPOVER_VARIANTS
};
