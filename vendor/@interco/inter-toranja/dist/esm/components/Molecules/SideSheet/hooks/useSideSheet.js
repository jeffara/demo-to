import { useRef as g, useState as x, useEffect as f, useCallback as l } from "react";
import { useSideSheetOnTag as w } from "./useSideSheetOnTag.js";
import { getSideSheetAnimationVariants as K } from "../utils/getSideSheetAnimation.js";
import { classNamesMerge as s } from "../../../../utils/classNamesMerge.js";
import { useAnimation as N } from "../../../../node_modules/framer-motion/dist/es/animation/hooks/use-animation.js";
import { OVERLAY_VISIBILITY as y } from "../../../Atoms/Overlay/types.js";
const Y = "side-sheet-title", q = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', G = (I) => {
  const { isOpen: t = !1, close: u, title: h, description: B, footer: D, showFooterDivider: T, onTag: m } = I, c = g(null), r = g(!1), [i, a] = x(t), o = N(), R = K(), k = !!h, A = !!B, p = !!D, L = p && (T ?? !0), _ = t || i, V = _ ? y.VISIBLE : y.HIDDEN;
  w({
    meetsCondition: i && m !== void 0,
    onTagFn: m ?? (() => {
    }),
    title: h
  }), f(() => {
    t && (a(!0), o.start("visible"));
  }, [t, o]), f(() => {
    var e;
    t && i && ((e = c.current) == null || e.focus());
  }, [t, i]), f(() => {
    !t && i && !r.current && o.start("hidden").then(() => {
      a(!1);
    });
  }, [t, i, o]);
  const n = l(() => {
    r.current || (r.current = !0, o.start("hidden").then(() => {
      r.current = !1, u(), a(!1);
    }));
  }, [u, o]), C = l((e) => {
    const b = c.current;
    if (!b)
      return;
    const d = b.querySelectorAll(q);
    if (d.length === 0)
      return;
    const S = d[0], E = d[d.length - 1];
    if (e.shiftKey && document.activeElement === S) {
      e.preventDefault(), E.focus();
      return;
    }
    !e.shiftKey && document.activeElement === E && (e.preventDefault(), S.focus());
  }, []), v = l(
    (e) => {
      if (e.key === "Escape") {
        n();
        return;
      }
      e.key === "Tab" && C(e);
    },
    [n, C]
  ), F = l(
    (e) => {
      e === "hidden" && t && a(!1);
    },
    [t]
  ), O = l(
    (e) => {
      e.stopPropagation(), n();
    },
    [n]
  );
  return {
    panelRef: c,
    panelClasses: s("side-sheet__panel"),
    headerClasses: s("side-sheet__header"),
    middleClasses: s("side-sheet__middle"),
    titleBlockClasses: s("side-sheet__title-block"),
    titleClasses: s("side-sheet__title", "type-title-medium"),
    descriptionClasses: s("side-sheet__description", "type-body-large-regular"),
    slotClasses: s("side-sheet__slot"),
    footerClasses: s("side-sheet__footer"),
    closeButtonClasses: s("side-sheet__close-button"),
    variants: R,
    controls: o,
    handleClose: n,
    handleKeyDown: v,
    handleAnimationComplete: F,
    handleCloseButtonClick: O,
    isSideSheetVisible: _,
    overlayVisibility: V,
    hasTitle: k,
    hasDescription: A,
    hasFooter: p,
    shouldShowDivider: L,
    titleId: Y
  };
};
export {
  G as useSideSheet
};
