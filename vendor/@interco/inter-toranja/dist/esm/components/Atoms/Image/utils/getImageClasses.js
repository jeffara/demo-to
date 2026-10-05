import { classNamesMerge as f } from "../../../../utils/classNamesMerge.js";
import { STATE as a } from "../../../../utils/pattern.js";
function C(o) {
  return o ? {
    1: "image--ratio-square",
    0.5: "image--ratio-portrait-1-2",
    0.66: "image--ratio-portrait-2-3",
    0.67: "image--ratio-portrait-2-3",
    // Approximation
    0.75: "image--ratio-portrait-3-4",
    0.56: "image--ratio-portrait-9-16",
    2: "image--ratio-landscape-2-1",
    1.5: "image--ratio-landscape-3-2",
    1.33: "image--ratio-landscape-4-3",
    1.34: "image--ratio-landscape-4-3",
    // Approximation
    1.77: "image--ratio-landscape-16-9",
    1.78: "image--ratio-landscape-16-9"
    // Approximation
  }[o] || "image--ratio" : "";
}
function N({
  fillWidth: o,
  fillHeight: s,
  contentScale: l,
  radius: c,
  borderColor: t,
  borderWeight: d,
  state: e,
  enableZoom: m,
  ratio: u,
  className: v,
  loadStates: i,
  imageSrc: p
}) {
  const r = "image", $ = `${r}__img`, E = `${r}__error-icon`, g = e === a.SKELETON ? "skeleton" : e === a.ERROR || i.hasError ? "error" : i.isLoading && p ? "loading" : "loaded", n = f(
    r,
    o && `${r}--fill-width`,
    s && `${r}--fill-height`,
    l && `${r}--content-scale-${l}`,
    c && `${r}--radius-${c}`,
    t && `${r}--border-color-${t}`,
    d && `${r}--border-${d}`,
    e === a.DISABLED && `${r}--disabled`,
    e === a.SKELETON && `${r}--skeleton`,
    (e === a.ERROR || i.hasError) && `${r}--error`,
    m && `${r}--zoom-enabled`,
    u && C(u),
    v
  ), k = () => {
    if (!t)
      return {};
    const b = {
      "feedback-error": "var(--color-border-feedback-error)",
      "feedback-success": "var(--color-border-feedback-success)",
      "brand-inverse": "var(--color-border-brand-inverse)",
      "brand-strong": "var(--color-border-brand-strong)",
      "brand-default": "var(--color-border-brand-default)",
      "static-white-softer": "var(--color-border-static-white-softer)",
      "static-white-default": "var(--color-border-static-white-default)",
      "static-black": "var(--color-border-static-black)",
      "neutral-inverse": "var(--color-border-neutral-inverse)",
      "neutral-strongest": "var(--color-border-neutral-strongest)",
      "neutral-stronger": "var(--color-border-neutral-stronger)",
      "neutral-strong": "var(--color-border-neutral-strong)",
      "neutral-default": "var(--color-border-neutral-default)",
      "neutral-softer": "var(--color-border-neutral-softer)",
      disabled: "var(--color-border-disabled)"
    };
    return {
      "--image-border-color": b[t] || b["neutral-default"]
    };
  }, h = g === "loading" ? f(n, `${r}--skeleton`) : n;
  return {
    // Base classes
    rootClass: r,
    imageClass: $,
    errorIconClass: E,
    // Class names with modifiers
    imageClassName: n,
    finalClassName: h,
    currentState: g,
    // CSS custom properties
    borderColorStyle: k()
  };
}
export {
  C as getAspectRatioClass,
  N as getImageClasses
};
