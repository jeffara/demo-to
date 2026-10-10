import { jsxs as c, jsx as e, Fragment as M } from "react/jsx-runtime";
import { HeaderType as m } from "../constants.js";
import { NeutralIconButton as V } from "../../../Atoms/NeutralIconButton/index.js";
import { Chip as L } from "../../Chip/Chip.js";
import { InputSearch as q } from "../../InputSearch/InputSearch.js";
import { SegmentedControl as z } from "../../SegmentedControl/SegmentedControl.js";
import { classNamesMerge as C } from "../../../../utils/classNamesMerge.js";
import { STATE as o, SIZE as S } from "../../../../utils/pattern.js";
import { m as u } from "../../../../proxy-BBnpZ6GV.js";
import { SEARCH_TRIGGER_ICON_VARIANTS as U, SEARCH_FIELD_VARIANTS as Z, SEARCH_CONTENT_VARIANTS as J } from "../hooks/useHeaderSearchAnimation.js";
import { A as Q } from "../../../../index-CDYq4efL.js";
const W = (r) => (r == null ? void 0 : r.icon) === "ic_search", ta = ({
  type: r,
  isSkeleton: x,
  isSearchFieldVisible: A,
  areTrailingIconsHidden: I,
  onSearchExitComplete: D,
  state: F,
  showStartIcon: f,
  startIcon: _,
  showMiddleIcon: v,
  middleIcon: N,
  showEndIcon: H,
  endIcon: j,
  chip: i,
  segmentedControl: E,
  searchProps: t,
  onSearchOpenChange: s,
  trailingClasses: g,
  onTag: n
}) => {
  const R = r === m.Search, B = !R && !!s, l = (a, G, d) => {
    if (!G || !d)
      return null;
    const h = W(d) && B, K = () => {
      var b;
      h && (s == null || s(!0)), (b = d.onClick) == null || b.call(d);
    };
    return /* @__PURE__ */ e("div", { className: "header__trailing-icon", children: /* @__PURE__ */ e(
      V,
      {
        icon: d.icon,
        onClick: K,
        state: F,
        size: S.MEDIUM,
        "aria-label": d["aria-label"],
        "aria-expanded": h ? A : void 0,
        "aria-controls": h ? "header-search-field" : void 0,
        onTag: n
      }
    ) }, a);
  }, k = () => {
    const a = x ? o.SKELETON : o.ENABLED;
    return r === m.TitleChip && i ? /* @__PURE__ */ e(
      L,
      {
        ...i,
        state: a,
        trailingIcon: i.trailingIcon,
        onTag: i.onTag ?? n
      }
    ) : r === m.AvatarFlag && i ? /* @__PURE__ */ e("div", { className: "header__flag-chip", children: /* @__PURE__ */ e(
      L,
      {
        ...i,
        variant: "flag",
        state: a,
        trailingIcon: i.trailingIcon,
        onTag: i.onTag ?? n
      }
    ) }) : r === m.AvatarSegmentedControl && E ? /* @__PURE__ */ e("div", { className: "header__segmented", children: /* @__PURE__ */ e(
      z,
      {
        ...E,
        density: "compact",
        state: a,
        onTag: E.onTag ?? n
      }
    ) }) : null;
  }, p = () => /* @__PURE__ */ c(M, { children: [
    l("start", f, _),
    l("middle", v, N),
    l("end", H, j),
    k()
  ] }), T = (a) => /* @__PURE__ */ e(
    u.div,
    {
      id: "header-search-field",
      "data-testid": "header-search",
      className: C("header__search", {
        "header__search--expandable": a
      }),
      initial: a ? "collapsed" : !1,
      animate: "expanded",
      exit: a ? "collapsed" : void 0,
      variants: Z,
      children: /* @__PURE__ */ e(
        u.div,
        {
          className: "header__search-content",
          initial: a ? "collapsed" : !1,
          animate: "expanded",
          exit: a ? "collapsed" : void 0,
          variants: J,
          children: /* @__PURE__ */ e(
            q,
            {
              ...t,
              state: x ? o.SKELETON : o.ENABLED,
              placeholder: (t == null ? void 0 : t.placeholder) ?? "Pesquisar",
              autoFocus: a,
              onTag: (t == null ? void 0 : t.onTag) ?? n
            }
          )
        }
      )
    },
    "header-search"
  );
  return R ? !!(f && _) || !!(v && N) ? /* @__PURE__ */ c("div", { "data-testid": "header-trailing", className: g, children: [
    T(!1),
    /* @__PURE__ */ c("div", { className: "header__trailing-icons", children: [
      l("start", f, _),
      l("middle", v, N)
    ] })
  ] }) : T(!1) : B ? /* @__PURE__ */ c(
    "div",
    {
      "data-testid": "header-trailing",
      className: C(g, "header__trailing--expandable"),
      children: [
        /* @__PURE__ */ e(
          u.div,
          {
            className: "header__trailing-icons",
            initial: !1,
            animate: I ? "hidden" : "visible",
            variants: U,
            "aria-hidden": I || void 0,
            children: p()
          }
        ),
        /* @__PURE__ */ e(Q, { onExitComplete: D, children: A && T(!0) })
      ]
    }
  ) : /* @__PURE__ */ e("div", { "data-testid": "header-trailing", className: g, children: p() });
};
export {
  ta as HeaderTrailing
};
