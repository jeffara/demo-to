import { useState as L, useRef as R, useId as N, useEffect as T, useLayoutEffect as B, cloneElement as M } from "react";
import { computeTooltipDescriptionPosition as W, TOOLTIP_DESCRIPTION_DEFAULT_OFFSET as Y } from "../utils/tooltipDescriptionPosition.js";
import { useClickOutside as z } from "../../BottomSheet/hooks/useClickOutside.js";
import { classNamesMerge as c } from "../../../../utils/classNamesMerge.js";
import { isFinePointerHover as U } from "../../../../utils/is-fine-pointer-hover.js";
import { HIERARCHY as P } from "../../../../utils/pattern.js";
const $ = (o, w, g, r) => {
  const n = o.props.onFocus, i = o.props.onBlur;
  return M(o, {
    ...w,
    onFocus: (l) => {
      n == null || n(l), g();
    },
    onBlur: (l) => {
      i == null || i(l), r();
    }
  });
}, Q = (o) => {
  const {
    children: w,
    description: g,
    align: r = "left",
    placement: n = "top",
    isOpen: i,
    defaultOpen: l = !1,
    onToggle: _
  } = o, I = o.hierarchy ?? P.PRIMARY, p = "title" in o ? o.title : void 0, O = i !== void 0, [D, F] = L(l), t = O ? i : D, [u, S] = L({
    top: 0,
    left: 0,
    caretShift: 0,
    placement: n
  }), h = R(null), v = R(null), s = R(0), y = `tooltip-description-${N().replace(/:/g, "")}`, C = g.trim(), f = C.length > 0, k = I === P.PRIMARY && !!(p != null && p.trim()), a = (e) => {
    t !== e && (O || F(e), _ == null || _(e));
  }, m = () => {
    s.current !== 0 && (window.clearTimeout(s.current), s.current = 0);
  }, A = () => {
    !f || !U() || (m(), a(!0));
  }, b = () => {
    f && (m(), a(!0));
  }, H = () => {
    m(), s.current = window.setTimeout(() => {
      a(!1), s.current = 0;
    }, 120);
  };
  return T(() => {
    t || m();
  }, [t]), T(
    () => () => {
      window.clearTimeout(s.current);
    },
    []
  ), z({
    ref: v,
    extraRef: h,
    isActive: t,
    onClickOutside: () => {
      a(!1);
    }
  }), T(() => {
    if (!t)
      return;
    const e = (d) => {
      d.key === "Escape" && (d.preventDefault(), a(!1));
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e);
    };
  }, [t]), B(() => {
    if (!t)
      return;
    const e = () => {
      const d = h.current, E = v.current;
      !d || !E || S(
        W({
          trigger: d.getBoundingClientRect(),
          panelHeight: E.offsetHeight,
          panelWidth: E.offsetWidth,
          align: r,
          placement: n,
          offset: Y,
          viewport: { width: window.innerWidth, height: window.innerHeight }
        })
      );
    };
    return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
      window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
    };
  }, [r, t, n, C, p]), {
    hasDescription: f,
    isOpen: t,
    showTitle: k,
    title: p,
    description: C,
    placement: u.placement,
    tooltipId: y,
    rootClasses: c("tooltip-description"),
    triggerClasses: c("tooltip-description__trigger"),
    panelClasses: c("tooltip-description__panel", {
      "tooltip-description__panel--top": u.placement === "top",
      "tooltip-description__panel--bottom": u.placement === "bottom"
    }),
    contentClasses: c("tooltip-description__content"),
    caretRowClasses: c("tooltip-description__caret-row", {
      "tooltip-description__caret-row--left": r === "left",
      "tooltip-description__caret-row--center": r === "center",
      "tooltip-description__caret-row--right": r === "right"
    }),
    caretClasses: c("tooltip-description__caret"),
    trigger: $(
      w,
      {
        "aria-describedby": t && f ? y : void 0
      },
      b,
      H
    ),
    triggerRef: h,
    panelRef: v,
    panelStyle: u,
    handleHoverOpen: A,
    handleHoverClose: H
  };
};
export {
  Q as useTooltipDescription
};
