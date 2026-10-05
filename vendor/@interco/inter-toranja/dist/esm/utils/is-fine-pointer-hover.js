const e = "(hover: hover) and (pointer: fine)", n = () => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
export {
  e as FINE_POINTER_HOVER_QUERY,
  n as isFinePointerHover
};
