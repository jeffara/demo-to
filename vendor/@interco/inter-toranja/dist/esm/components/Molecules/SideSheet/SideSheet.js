import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useSideSheet as w } from "./hooks/useSideSheet.js";
import { IconButton as E } from "../Button/IconButton/IconButton.js";
import { HIERARCHY as O, SIZE as T } from "../../../utils/pattern.js";
import { useBodyOverflow as V } from "../../../utils/useBodyOverflow.js";
import '../../../assets/components/Molecules/SideSheet/SideSheet.modules.css';/* empty css                       */
import { AnimatePresence as _ } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { Overlay as j } from "../../Atoms/Overlay/Overlay.js";
import { motion as F } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { Divider as H } from "../../Atoms/Divider/Divider.js";
const J = (i) => {
  const { slot: o, footer: r, id: l } = i, {
    panelRef: n,
    panelClasses: d,
    headerClasses: c,
    middleClasses: m,
    titleBlockClasses: h,
    titleClasses: C,
    descriptionClasses: f,
    slotClasses: p,
    footerClasses: v,
    closeButtonClasses: y,
    variants: S,
    controls: N,
    handleClose: u,
    handleKeyDown: b,
    handleAnimationComplete: A,
    handleCloseButtonClick: I,
    isSideSheetVisible: R,
    overlayVisibility: x,
    hasTitle: a,
    hasDescription: B,
    hasFooter: D,
    shouldShowDivider: k,
    titleId: t
  } = w(i);
  return V(i.isOpen ?? !1), /* @__PURE__ */ s(_, { mode: "sync", children: [
    /* @__PURE__ */ e(j, { isVisible: x, onClick: u }, `overlay_${l}`),
    R && /* @__PURE__ */ s(
      F.div,
      {
        ref: n,
        id: l,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": a ? t : void 0,
        className: d,
        "data-testid": "SideSheet",
        variants: S,
        initial: "hidden",
        animate: N,
        exit: "hidden",
        onKeyDown: b,
        onAnimationComplete: A,
        tabIndex: -1,
        children: [
          /* @__PURE__ */ e("header", { className: c, children: /* @__PURE__ */ e(
            E,
            {
              icon: "ic_close",
              size: T.LARGE,
              hierarchy: O.TERTIARY,
              onClick: I,
              "aria-label": "Fechar",
              className: y
            }
          ) }),
          /* @__PURE__ */ s("div", { className: m, children: [
            a && /* @__PURE__ */ s("div", { className: h, children: [
              /* @__PURE__ */ e("h2", { id: t, className: C, children: i.title }),
              B && /* @__PURE__ */ e("p", { className: f, children: i.description })
            ] }),
            o && /* @__PURE__ */ e("section", { className: p, children: o })
          ] }),
          D && /* @__PURE__ */ s("footer", { className: v, children: [
            k && /* @__PURE__ */ e(H, {}),
            r
          ] })
        ]
      },
      `side-sheet_${l}`
    )
  ] });
};
export {
  J as SideSheet
};
