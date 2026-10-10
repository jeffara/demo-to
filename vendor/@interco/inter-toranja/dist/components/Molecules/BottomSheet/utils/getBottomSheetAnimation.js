import { POSITION_ORDER as r } from "../constants.js";
import { BOTTOM_SHEET_POSITION as t, BOTTOM_SHEET_OVERLAY as d, BOTTOM_SHEET_EXPANSIBLE as e } from "../types.js";
const s = {
  entrance: {
    duration: 0.4,
    ease: [0, 0, 0.38, 0.9]
  },
  exit: {
    duration: 0.24,
    ease: [0.2, 0, 0.38, 0.9]
  },
  handler: {
    duration: 0.24,
    ease: [0.2, 0, 0.38, 0.9]
  }
}, O = {
  [t.COLLAPSED]: {
    animation: {
      y: "80%"
    },
    order: r.COLLAPSED
  },
  [t.MIDDLE]: {
    animation: {
      y: "50%"
    },
    order: r.MIDDLE
  },
  [t.EXPANDED]: {
    animation: {
      y: 0
    },
    order: r.EXPANDED
  },
  [t.HUG]: {
    animation: {
      opacity: 1,
      height: "fit-content",
      y: 0
    },
    order: r.HUG
  },
  hidden: {
    animation: {
      y: "100%"
    },
    order: r.HIDDEN
  }
}, c = (i, n) => ({
  variants: {
    hidden: {
      ...O.hidden.animation,
      transition: s.exit
    },
    ...Object.fromEntries(
      i.map((o) => [
        o,
        {
          ...O[o].animation,
          opacity: 1,
          transition: s.entrance
        }
      ])
    )
  },
  dragConstraints: { top: 0 },
  drag: n === e.ON ? "y" : void 0,
  dragTransition: n === e.ON ? s.handler : void 0
}), N = (i, n) => i === e.OFF ? [t.HUG] : n === d.ON ? [
  t.MIDDLE,
  t.EXPANDED
] : [
  t.COLLAPSED,
  t.MIDDLE,
  t.EXPANDED
], P = (i, n) => i === e.OFF ? t.HUG : n === d.ON ? t.MIDDLE : t.COLLAPSED, A = (i, n) => {
  const a = N(
    n,
    i
  ), o = P(n, i);
  return {
    positionOrder: Object.fromEntries(
      Object.entries(O).map(([D, m]) => [D, m.order])
    ),
    initialPosition: o,
    allowedPositions: a
  };
}, L = ({
  overlay: i = d.ON,
  expansible: n = e.ON
} = {}) => {
  const { positionOrder: a, initialPosition: o, allowedPositions: E } = A(
    i,
    n
  );
  return {
    animationProps: c(E, n),
    positionOrder: a,
    initialPosition: o
  };
};
export {
  s as ANIMATION_TRANSITIONS,
  O as ANIMATION_VARIANTS,
  L as createBottomSheetConfig,
  N as determineAllowedPositions,
  P as determineInitialPosition,
  c as getAnimationProps,
  A as getPositionConfig
};
