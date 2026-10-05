import { jsx as a, jsxs as c, Fragment as b } from "react/jsx-runtime";
import { HeaderType as N } from "../constants.js";
import { NeutralIconButton as q } from "../../../Atoms/NeutralIconButton/NeutralIconButton.js";
import { Chip as p } from "../../Chip/Chip.js";
import { InputSearch as z } from "../../InputSearch/InputSearch.js";
import { SegmentedControl as O } from "../../SegmentedControl/SegmentedControl.js";
import { classNamesMerge as F } from "../../../../utils/classNamesMerge.js";
import { STATE as d, SIZE as U } from "../../../../utils/pattern.js";
import { motion as A } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { SEARCH_TRIGGER_ICON_VARIANTS as Z, SEARCH_FIELD_VARIANTS as k, SEARCH_CONTENT_VARIANTS as J } from "../hooks/useHeaderSearchAnimation.js";
import { AnimatePresence as Q } from "../../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
const S = (r) => (r == null ? void 0 : r.icon) === "ic_search", da = ({
  type: r,
  isSkeleton: m,
  isSearchFieldVisible: u,
  areTrailingIconsHidden: I,
  onSearchExitComplete: H,
  state: K,
  showStartIcon: _,
  startIcon: o,
  showMiddleIcon: v,
  middleIcon: T,
  showEndIcon: C,
  endIcon: j,
  chip: i,
  segmentedControl: E,
  searchProps: t,
  onSearchOpenChange: f,
  trailingClasses: g,
  onTag: l
}) => {
  const B = r === N.Search, L = !B && !!f, s = (e, M, n) => {
    if (!M || !n)
      return null;
    const x = S(n) && L, V = () => {
      var D;
      x && (f == null || f(!0)), (D = n.onClick) == null || D.call(n);
    };
    return /* @__PURE__ */ a("div", { className: "header__trailing-icon", children: /* @__PURE__ */ a(
      q,
      {
        icon: n.icon,
        onClick: V,
        state: K,
        size: U.MEDIUM,
        "aria-label": n["aria-label"],
        "aria-expanded": x ? u : void 0,
        "aria-controls": x ? "header-search-field" : void 0,
        onTag: l
      }
    ) }, e);
  }, G = () => /* @__PURE__ */ c(b, { children: [
    r === N.TitleChip && i && /* @__PURE__ */ a(
      p,
      {
        ...i,
        state: m ? d.SKELETON : d.ENABLED,
        trailingIcon: i.trailingIcon,
        onTag: i.onTag ?? l
      }
    ),
    r === N.AvatarFlag && i && /* @__PURE__ */ a("div", { className: "header__flag-chip", children: /* @__PURE__ */ a(
      p,
      {
        ...i,
        variant: "flag",
        state: m ? d.SKELETON : d.ENABLED,
        trailingIcon: i.trailingIcon,
        onTag: i.onTag ?? l
      }
    ) }),
    r === N.AvatarSegmentedControl && E && /* @__PURE__ */ a("div", { className: "header__segmented", children: /* @__PURE__ */ a(
      O,
      {
        ...E,
        filling: E.filling,
        state: m ? d.SKELETON : d.ENABLED,
        onTag: E.onTag ?? l
      }
    ) })
  ] }), R = () => /* @__PURE__ */ c(b, { children: [
    s("start", _, o),
    s("middle", v, T),
    s("end", C, j),
    G()
  ] }), h = (e) => /* @__PURE__ */ a(
    A.div,
    {
      id: "header-search-field",
      "data-testid": "header-search",
      className: F("header__search", {
        "header__search--expandable": e
      }),
      initial: e ? "collapsed" : !1,
      animate: "expanded",
      exit: e ? "collapsed" : void 0,
      variants: k,
      children: /* @__PURE__ */ a(
        A.div,
        {
          className: "header__search-content",
          initial: e ? "collapsed" : !1,
          animate: "expanded",
          exit: e ? "collapsed" : void 0,
          variants: J,
          children: /* @__PURE__ */ a(
            z,
            {
              ...t,
              state: m ? d.SKELETON : d.ENABLED,
              placeholder: (t == null ? void 0 : t.placeholder) ?? "Pesquisar",
              autoFocus: e,
              onTag: (t == null ? void 0 : t.onTag) ?? l
            }
          )
        }
      )
    },
    "header-search"
  );
  return B ? !!(_ && o) || !!(v && T) ? /* @__PURE__ */ c("div", { "data-testid": "header-trailing", className: g, children: [
    h(!1),
    /* @__PURE__ */ c("div", { className: "header__trailing-icons", children: [
      s("start", _, o),
      s("middle", v, T)
    ] })
  ] }) : h(!1) : L ? /* @__PURE__ */ c(
    "div",
    {
      "data-testid": "header-trailing",
      className: F(g, "header__trailing--expandable"),
      children: [
        /* @__PURE__ */ a(
          A.div,
          {
            className: "header__trailing-icons",
            initial: !1,
            animate: I ? "hidden" : "visible",
            variants: Z,
            "aria-hidden": I || void 0,
            children: R()
          }
        ),
        /* @__PURE__ */ a(Q, { onExitComplete: H, children: u && h(!0) })
      ]
    }
  ) : /* @__PURE__ */ a("div", { "data-testid": "header-trailing", className: g, children: R() });
};
export {
  da as HeaderTrailing
};
