import { jsxs as s, jsx as t } from "react/jsx-runtime";
import { useState as C, useEffect as S } from "react";
import { r as L } from "../../../_virtual/index.js";
import { useFocusTrap as V, getFocusableElements as F } from "./hooks/useFocusTrap.js";
import { useModalDialog as R } from "./hooks/useModalDialog.js";
import { useModalDialogEvents as w } from "./hooks/useModalDialogEvents.js";
import { useModalDialogInitialState as B } from "./hooks/useModalDialogInitialState.js";
import { useModalDialogTag as k } from "./hooks/useModalDialogTag.js";
import { MODAL_DIALOG_OVERLAY as I } from "./types.js";
import { NeutralIconButton as z } from "../../Atoms/NeutralIconButton/NeutralIconButton.js";
import { Text as Y } from "../../Atoms/Text/Text.js";
import { TextSize as $, TextWeight as j, TextType as K } from "../../Atoms/Text/types.js";
import { SIZE as P } from "../../../utils/pattern.js";
import { useBodyOverflow as W } from "../../../utils/useBodyOverflow.js";
import '../../../assets/components/Molecules/ModalDialog/ModalDialog.modules.css';/* empty css                         */
import { useAnimation as G } from "../../../node_modules/framer-motion/dist/es/animation/hooks/use-animation.js";
import { OVERLAY_VISIBILITY as y } from "../../Atoms/Overlay/types.js";
import { AnimatePresence as H } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { Overlay as U } from "../../Atoms/Overlay/Overlay.js";
import { motion as Z } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const q = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: 0.95
  }
}, _o = (l) => {
  const { title: n, close: _, isOpen: o = !1, slot: d, footer: m, onTag: c } = l, {
    dialogId: a,
    titleId: f,
    panelClassName: v,
    rootClassName: b,
    resolvedOverlay: u,
    shouldShowCloseButton: D,
    dialogRef: i
  } = R(l), [e, p] = C(o), r = G(), h = o || e, N = h ? y.VISIBLE : y.HIDDEN, M = u === I.ON && o, { handleClose: O, handleEscapeClose: T, handleKeyDown: x, handleAnimationComplete: A } = w({
    close: _,
    isOpen: o,
    setIsRendered: p,
    controls: r,
    restoreFocusId: l.restoreFocusId,
    isRendered: e
  });
  B({
    isOpen: o,
    isRendered: e,
    controls: r,
    setIsRendered: p
  }), k({
    meetsCondition: e && c !== void 0,
    onTagFn: c ?? (() => {
    }),
    title: n
  }), W(M), V(i, o && e), S(() => {
    if (!o || !e || !i.current)
      return;
    const g = F(i.current)[0];
    if (g) {
      g.focus();
      return;
    }
    i.current.focus();
  }, [a, i, o, e]);
  const E = /* @__PURE__ */ s(H, { mode: "sync", children: [
    u === I.ON && /* @__PURE__ */ t(
      U,
      {
        isVisible: N,
        onClick: O,
        id: `overlay_${a}`
      },
      `overlay_${a}`
    ),
    h && /* @__PURE__ */ t("div", { className: b, children: /* @__PURE__ */ s(
      Z.div,
      {
        ref: i,
        id: a,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": f,
        className: v,
        "data-testid": "ModalDialog",
        variants: q,
        initial: "hidden",
        animate: r,
        exit: "hidden",
        tabIndex: -1,
        onKeyDown: x,
        onAnimationComplete: A,
        children: [
          /* @__PURE__ */ s("header", { className: "modal-dialog__header", children: [
            /* @__PURE__ */ t("div", { className: "modal-dialog__title", children: /* @__PURE__ */ t(
              Y,
              {
                id: f,
                as: "h2",
                textType: K.Title,
                textWeight: j.Medium,
                textSize: $.Medium,
                children: n
              }
            ) }),
            D && /* @__PURE__ */ t(
              z,
              {
                icon: "ic_close",
                size: P.MEDIUM,
                "aria-label": "Fechar",
                onClick: T
              }
            )
          ] }),
          d && /* @__PURE__ */ t("div", { className: "modal-dialog__body type-body-large-regular", children: d }),
          m && /* @__PURE__ */ t("footer", { className: "modal-dialog__footer", children: m })
        ]
      }
    ) }, `modal-dialog-root_${a}`)
  ] });
  return L.createPortal(E, document.body);
};
export {
  _o as ModalDialog
};
