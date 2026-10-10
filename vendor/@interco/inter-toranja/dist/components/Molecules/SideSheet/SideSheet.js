import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useSideSheet as w } from "./hooks/useSideSheet.js";
import { IconButton as E } from "../Button/IconButton/IconButton.js";
import { HIERARCHY as O, SIZE as T } from "../../../utils/pattern.js";
import { useBodyOverflow as V } from "../../../utils/useBodyOverflow.js";
import { A as _ } from "../../../index-CDYq4efL.js";
import { Overlay as j } from "../../Atoms/Overlay/Overlay.js";
import { m as F } from "../../../proxy-BBnpZ6GV.js";
import { Divider as H } from "../../Atoms/Divider/Divider.js";
import '../../../assets/SideSheet.css';const q = (i) => {
  const { slot: a, footer: r, id: l } = i, {
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
    hasTitle: o,
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
        "aria-labelledby": o ? t : void 0,
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
            o && /* @__PURE__ */ s("div", { className: h, children: [
              /* @__PURE__ */ e("h2", { id: t, className: C, children: i.title }),
              B && /* @__PURE__ */ e("p", { className: f, children: i.description })
            ] }),
            a && /* @__PURE__ */ e("section", { className: p, children: a })
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
  q as SideSheet
};
