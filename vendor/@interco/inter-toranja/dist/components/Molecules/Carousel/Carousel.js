import { jsxs as N, jsx as a } from "react/jsx-runtime";
import { useState as S, useRef as n, useEffect as R } from "react";
import { CAROUSEL_VARIANTS as p } from "./constants.js";
import { useCarouselAutoplay as W } from "./hooks/useCarouselAutoplay.js";
import { useCarouselDrag as V } from "./hooks/useCarouselDrag.js";
import { useCarouselLayout as $ } from "./hooks/useCarouselLayout.js";
import { PageIndicator as D } from "../../Atoms/PageIndicator/PageIndicator.js";
import { classNamesMerge as G } from "../../../utils/classNamesMerge.js";
import { v as L } from "../../../v4-CRLUkzQ6.js";
import '../../../assets/Carousel.css';const F = (e) => {
  const {
    items: r,
    variant: s = p.PAGE_VIEW,
    snapToGrid: P = !1,
    pageSpacing: i = 8,
    timer: x = 0,
    onPageChange: o
  } = e, [t, d] = S(0), f = n(!0), T = n(
    Array(r.length).fill("").map(() => L())
  ), l = n(null), c = n(null), h = s === p.PAGE_VIEW, { slideWidth: u, currentTranslate: v, prevTranslate: _, setCurrentTranslate: C, setPrevTranslate: E } = $({
    variant: s,
    showPreview: e.showPreview,
    pageWidth: e.pageWidth,
    pageSpacing: i,
    currentIndex: t,
    viewportRef: c,
    carouselRef: l
  }), { dragStart: w, drag: g, dragEnd: m, isDragging: I } = V({
    variant: s,
    snapToGrid: P,
    items: r,
    pageSpacing: i,
    showPreview: e.showPreview,
    slideWidth: u,
    currentIndex: t,
    carouselRef: l,
    viewportRef: c,
    prevTranslate: _,
    currentTranslate: v,
    setCurrentIndex: d,
    setCurrentTranslate: C,
    setPrevTranslate: E
  });
  W({
    timer: x,
    itemCount: r.length,
    isDragging: I,
    setCurrentIndex: d
  });
  const M = G("carousel", `carousel--${s}`, {
    "carousel--with-preview": h && e.showPreview
  });
  return R(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    o == null || o(t);
  }, [t, o]), /* @__PURE__ */ N("div", { className: M, children: [
    /* @__PURE__ */ a(
      "div",
      {
        ref: c,
        className: "carousel__inner",
        tabIndex: -1,
        onTouchStart: w,
        onTouchMove: g,
        onTouchEnd: m,
        onMouseDown: w,
        onMouseMove: g,
        onMouseUp: m,
        onMouseLeave: m,
        children: /* @__PURE__ */ a(
          "div",
          {
            ref: l,
            className: "carousel__track",
            style: {
              transform: `translate3d(${v}px, 0, 0)`,
              gap: `${i}px`
            },
            children: r.map((A, y) => /* @__PURE__ */ a(
              "div",
              {
                className: "carousel__slide",
                style: {
                  width: u > 0 ? `${u}px` : "100%"
                },
                children: A
              },
              T.current[y]
            ))
          }
        )
      }
    ),
    h && !e.showPreview && /* @__PURE__ */ a(D, { items: r.length, selected: t + 1 })
  ] });
};
export {
  F as Carousel
};
