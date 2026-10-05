import { jsxs as u, jsx as e } from "react/jsx-runtime";
import { useRef as Y, useState as C, useCallback as b } from "react";
import { useClickOutside as j } from "./hooks/useClickOutside.js";
import { useBottomSheetEvents as K } from "./hooks/useEvents.js";
import { useInitialState as W } from "./hooks/useInitialState.js";
import { useBottomSheetTag as X } from "./hooks/useOnTag.js";
import { useScrollDetection as G } from "./hooks/useScrollDetection.js";
import { BOTTOM_SHEET_OVERLAY as s, BOTTOM_SHEET_POSITION as l, BOTTOM_SHEET_EXPANSIBLE as U } from "./types.js";
import { createBottomSheetConfig as q } from "./utils/getBottomSheetAnimation.js";
import { Text as J } from "../../Atoms/Text/Text.js";
import { TextSize as Q, TextWeight as Z, TextType as $ } from "../../Atoms/Text/types.js";
import { classNamesMerge as tt } from "../../../utils/classNamesMerge.js";
import { useBodyOverflow as et } from "../../../utils/useBodyOverflow.js";
import '../../../assets/components/Molecules/BottomSheet/BottomSheet.modules.css';/* empty css                         */
import { useDragControls as ot } from "../../../node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.js";
import { OVERLAY_VISIBILITY as N } from "../../Atoms/Overlay/types.js";
import { useAnimation as it } from "../../../node_modules/framer-motion/dist/es/animation/hooks/use-animation.js";
import { AnimatePresence as nt } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { Overlay as rt } from "../../Atoms/Overlay/Overlay.js";
import { motion as st } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const It = ({
  title: a,
  isOpen: o = !1,
  close: x,
  id: d,
  overlay: t = s.ON,
  expansible: I = U.ON,
  position: B,
  slot: P,
  onTag: O
}) => {
  const S = Y(null), { slotRef: v, hasScroll: E } = G(), i = ot(), [c, T] = C(o), A = t === s.ON && o, h = o || c, L = h ? N.VISIBLE : N.HIDDEN, m = it(), {
    animationProps: { variants: D, dragConstraints: y, drag: n },
    positionOrder: w,
    initialPosition: f
  } = q({
    overlay: t,
    expansible: I
  }), [r, g] = C(
    f
  ), { handleClose: _, handleDragEnd: M, handleKeyDown: V, handleAnimationComplete: k } = K({
    close: x,
    controls: m,
    initialPosition: f,
    positionOrder: w,
    variants: D,
    isOpen: o,
    setIsRendered: T,
    currentPosition: r,
    setCurrentPosition: g
  });
  W({
    isOpen: o,
    isRendered: c,
    position: B,
    initialPosition: f,
    controls: m,
    setIsRendered: T,
    setCurrentPosition: g
  }), X({
    meetsCondition: c && O !== void 0,
    onTagFn: O ?? (() => {
    }),
    title: a
  }), et(A);
  const H = b(() => {
    t === s.OFF && _();
  }, [t, _]);
  j({
    ref: S,
    isActive: h && t === s.OFF,
    onClickOutside: H
  });
  const R = b(
    (p) => {
      n === "y" && i.start(p);
    },
    [n, i]
  ), F = b(
    (p) => {
      n === "y" && (E || i.start(p));
    },
    [n, i, E]
  ), z = tt("bottom-sheet__content", {
    "bottom-sheet__content--expanded": r === l.EXPANDED,
    "bottom-sheet__content--middle": r === l.MIDDLE,
    "bottom-sheet__content--hug": r === l.HUG,
    "bottom-sheet__content--collapsed": r === l.COLLAPSED
  });
  return /* @__PURE__ */ u(nt, { mode: "sync", children: [
    t === s.ON && /* @__PURE__ */ e(rt, { isVisible: L, onClick: _ }, "overlay_" + d),
    h && /* @__PURE__ */ u(
      st.div,
      {
        ref: S,
        id: d,
        initial: { y: "100%", opacity: 0 },
        dragConstraints: y,
        variants: D,
        animate: m,
        drag: n,
        dragControls: i,
        dragListener: !1,
        onDragEnd: M,
        onKeyDown: V,
        className: z,
        "data-testid": "bottom-sheet-content",
        exit: "hidden",
        tabIndex: -1,
        onAnimationComplete: k,
        "aria-live": "polite",
        children: [
          /* @__PURE__ */ u("div", { className: "bottom-sheet__header", onPointerDown: R, children: [
            /* @__PURE__ */ e(
              "button",
              {
                className: "bottom-sheet__drag-container",
                "aria-label": "Drag to resize bottom sheet",
                "aria-expanded": !!m,
                children: /* @__PURE__ */ e("div", { className: "bottom-sheet__drag-indicator", "aria-hidden": "true" })
              }
            ),
            a && /* @__PURE__ */ e("div", { className: "bottom-sheet__title-container", children: /* @__PURE__ */ e(
              J,
              {
                id: "bottom-sheet-title",
                as: "h2",
                textType: $.Title,
                textWeight: Z.Medium,
                textSize: Q.Medium,
                children: a
              }
            ) })
          ] }),
          /* @__PURE__ */ e(
            "section",
            {
              ref: v,
              className: "bottom-sheet__slot",
              "aria-labelledby": a ? "bottom-sheet-title" : void 0,
              onPointerDown: F,
              children: P
            }
          )
        ]
      },
      "bottom-sheet_" + d
    )
  ] });
};
export {
  It as BottomSheet
};
