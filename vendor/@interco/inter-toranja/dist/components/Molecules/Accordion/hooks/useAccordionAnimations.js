import { useState as r, useEffect as i } from "react";
import { EASING as t, DURATION as o } from "../../../../utils/constants/animation.js";
import { u as A } from "../../../../use-animation-C-0blZTK.js";
const O = {
  ACCORDION_EXPAND: {
    duration: o.SLOW_01,
    ease: t.STANDARD_FUNCTIONAL
  },
  ACCORDION_CONTENT: {
    duration: o.MODERATE_02,
    ease: t.ENTRANCE_FUNCTIONAL
  },
  ACCORDION_CONTENT_EXIT: {
    duration: o.MODERATE_01,
    ease: t.EXIT_FUNCTIONAL
  },
  CHEVRON_ROTATE: {
    duration: o.SLOW_01,
    ease: t.STANDARD_FUNCTIONAL
  },
  FADE_IN: {
    duration: o.MODERATE_02,
    ease: t.ENTRANCE_FUNCTIONAL
  },
  FADE_OUT: {
    duration: o.MODERATE_01,
    ease: t.EXIT_FUNCTIONAL
  }
}, d = ({
  isExpanded: a
}) => {
  const [T, s] = r(a), [C, N] = r(!1), E = {
    expanded: { height: "auto" },
    collapsed: { height: "0px" }
  }, e = A(), n = A(), u = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return i(() => (N(!0), () => {
    N(!1);
  }), []), i(() => {
    C && (a ? (e.start("expanded").then(() => {
      s(!0);
    }), n.start({
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: O.ACCORDION_CONTENT.duration
      }
    })) : n.start({
      opacity: 0,
      transition: {
        duration: O.ACCORDION_CONTENT_EXIT.duration
      }
    }).then(() => {
      e.start("collapsed").then(() => {
        s(!1);
      });
    }));
  }, [a, e, n]), {
    showContent: T,
    setShowContent: s,
    variants: E,
    controls: e,
    contentControls: n,
    contentVariants: u
  };
};
export {
  O as ANIMATION_CONFIG,
  d as useAccordionAnimations
};
