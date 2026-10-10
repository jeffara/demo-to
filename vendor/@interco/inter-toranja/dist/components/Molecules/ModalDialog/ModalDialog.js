import { jsxs as s, jsx as t } from "react/jsx-runtime";
import { useState as C, useEffect as S } from "react";
import { r as L } from "../../../index-DMbIF0Pz.js";
import { useFocusTrap as V, getFocusableElements as F } from "./hooks/useFocusTrap.js";
import { useModalDialog as R } from "./hooks/useModalDialog.js";
import { useModalDialogEvents as w } from "./hooks/useModalDialogEvents.js";
import { useModalDialogInitialState as B } from "./hooks/useModalDialogInitialState.js";
import { useModalDialogTag as k } from "./hooks/useModalDialogTag.js";
import { MODAL_DIALOG_OVERLAY as I } from "./types.js";
import { NeutralIconButton as z } from "../../Atoms/NeutralIconButton/index.js";
import { Text as Y } from "../../Atoms/Text/Text.js";
import { TextSize as $, TextWeight as j, TextType as K } from "../../Atoms/Text/types.js";
import { SIZE as P } from "../../../utils/pattern.js";
import { useBodyOverflow as W } from "../../../utils/useBodyOverflow.js";
import { u as G } from "../../../use-animation-C-0blZTK.js";
import { OVERLAY_VISIBILITY as y } from "../../Atoms/Overlay/types.js";
import { A as H } from "../../../index-CDYq4efL.js";
import { Overlay as U } from "../../Atoms/Overlay/Overlay.js";
import { m as Z } from "../../../proxy-BBnpZ6GV.js";
import '../../../assets/ModalDialog.css';const q = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: 0.95
  }
}, yo = (l) => {
  const { title: n, close: _, isOpen: o = !1, slot: d, footer: m, onTag: c } = l, {
    dialogId: a,
    titleId: f,
    panelClassName: v,
    rootClassName: b,
    resolvedOverlay: u,
    shouldShowCloseButton: D,
    dialogRef: i
  } = R(l), [e, p] = C(o), r = G(), h = o || e, N = h ? y.VISIBLE : y.HIDDEN, A = u === I.ON && o, { handleClose: M, handleEscapeClose: O, handleKeyDown: T, handleAnimationComplete: x } = w({
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
  }), W(A), V(i, o && e), S(() => {
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
        onClick: M,
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
        onKeyDown: T,
        onAnimationComplete: x,
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
                onClick: O
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
  yo as ModalDialog
};
