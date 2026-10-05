import { jsxs as b, jsx as o } from "react/jsx-runtime";
import { useRef as Y, useState as N, useCallback as C } from "react";
import { useClickOutside as j } from "./hooks/useClickOutside.js";
import { useBottomSheetEvents as K } from "./hooks/useEvents.js";
import { useInitialState as W } from "./hooks/useInitialState.js";
import { useBottomSheetTag as X } from "./hooks/useOnTag.js";
import { useScrollDetection as G } from "./hooks/useScrollDetection.js";
import { BOTTOM_SHEET_OVERLAY as m, BOTTOM_SHEET_POSITION as c, BOTTOM_SHEET_EXPANSIBLE as U } from "./types.js";
import { createBottomSheetConfig as q } from "./utils/getBottomSheetAnimation.js";
import { Text as J } from "../../Atoms/Text/Text.js";
import { TextSize as Q, TextWeight as Z, TextType as $ } from "../../Atoms/Text/types.js";
import { classNamesMerge as tt } from "../../../utils/classNamesMerge.js";
import { useBodyOverflow as et } from "../../../utils/useBodyOverflow.js";
import { u as ot } from "../../../visual-element-Dhl5aGeu.js";
import { OVERLAY_VISIBILITY as x } from "../../Atoms/Overlay/types.js";
import { u as nt } from "../../../use-animation-C-0blZTK.js";
import { A as st } from "../../../index-CDYq4efL.js";
import { Overlay as rt } from "../../Atoms/Overlay/Overlay.js";
import { m as it } from "../../../proxy-BBnpZ6GV.js";
import '../../../assets/BottomSheet.css';class at {
  constructor() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  subscribe(t) {
    return this.componentControls.add(t), () => this.componentControls.delete(t);
  }
  /**
   * Start a drag gesture on every `motion` component that has this set of drag controls
   * passed into it via the `dragControls` prop.
   *
   * ```jsx
   * dragControls.start(e, {
   *   snapToCursor: true
   * })
   * ```
   *
   * @param event - PointerEvent
   * @param options - Options
   *
   * @public
   */
  start(t, d) {
    this.componentControls.forEach((s) => {
      s.start(t.nativeEvent || t, d);
    });
  }
}
const mt = () => new at();
function lt() {
  return ot(mt);
}
const Pt = ({
  title: n,
  isOpen: t = !1,
  close: d,
  id: s,
  overlay: e = m.ON,
  expansible: I = U.ON,
  position: B,
  slot: P,
  onTag: E
}) => {
  const O = Y(null), { slotRef: v, hasScroll: S } = G(), r = lt(), [h, D] = N(t), A = e === m.ON && t, u = t || h, w = u ? x.VISIBLE : x.HIDDEN, l = nt(), {
    animationProps: { variants: T, dragConstraints: L, drag: i },
    positionOrder: y,
    initialPosition: f
  } = q({
    overlay: e,
    expansible: I
  }), [a, g] = N(
    f
  ), { handleClose: p, handleDragEnd: M, handleKeyDown: V, handleAnimationComplete: k } = K({
    close: d,
    controls: l,
    initialPosition: f,
    positionOrder: y,
    variants: T,
    isOpen: t,
    setIsRendered: D,
    currentPosition: a,
    setCurrentPosition: g
  });
  W({
    isOpen: t,
    isRendered: h,
    position: B,
    initialPosition: f,
    controls: l,
    setIsRendered: D,
    setCurrentPosition: g
  }), X({
    meetsCondition: h && E !== void 0,
    onTagFn: E ?? (() => {
    }),
    title: n
  }), et(A);
  const H = C(() => {
    e === m.OFF && p();
  }, [e, p]);
  j({
    ref: O,
    isActive: u && e === m.OFF,
    onClickOutside: H
  });
  const R = C(
    (_) => {
      i === "y" && r.start(_);
    },
    [i, r]
  ), F = C(
    (_) => {
      i === "y" && (S || r.start(_));
    },
    [i, r, S]
  ), z = tt("bottom-sheet__content", {
    "bottom-sheet__content--expanded": a === c.EXPANDED,
    "bottom-sheet__content--middle": a === c.MIDDLE,
    "bottom-sheet__content--hug": a === c.HUG,
    "bottom-sheet__content--collapsed": a === c.COLLAPSED
  });
  return /* @__PURE__ */ b(st, { mode: "sync", children: [
    e === m.ON && /* @__PURE__ */ o(rt, { isVisible: w, onClick: p }, "overlay_" + s),
    u && /* @__PURE__ */ b(
      it.div,
      {
        ref: O,
        id: s,
        initial: { y: "100%", opacity: 0 },
        dragConstraints: L,
        variants: T,
        animate: l,
        drag: i,
        dragControls: r,
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
          /* @__PURE__ */ b("div", { className: "bottom-sheet__header", onPointerDown: R, children: [
            /* @__PURE__ */ o(
              "button",
              {
                className: "bottom-sheet__drag-container",
                "aria-label": "Drag to resize bottom sheet",
                "aria-expanded": !!l,
                children: /* @__PURE__ */ o("div", { className: "bottom-sheet__drag-indicator", "aria-hidden": "true" })
              }
            ),
            n && /* @__PURE__ */ o("div", { className: "bottom-sheet__title-container", children: /* @__PURE__ */ o(
              J,
              {
                id: "bottom-sheet-title",
                as: "h2",
                textType: $.Title,
                textWeight: Z.Medium,
                textSize: Q.Medium,
                children: n
              }
            ) })
          ] }),
          /* @__PURE__ */ o(
            "section",
            {
              ref: v,
              className: "bottom-sheet__slot",
              "aria-labelledby": n ? "bottom-sheet-title" : void 0,
              onPointerDown: F,
              children: P
            }
          )
        ]
      },
      "bottom-sheet_" + s
    )
  ] });
};
export {
  Pt as BottomSheet
};
