const d = {
  default: {
    focused: { y: -8, scale: 1, x: 0 },
    unfocused: { y: 0, scale: 1, x: 0 }
  },
  withFlag: {
    focused: { y: -12, scale: 0.75, x: -27 },
    unfocused: { y: 0, scale: 1, x: 0 }
  }
};
function u({
  isDisabled: c,
  isFocused: e,
  isReadOnly: f,
  hasValueInput: n,
  hasFlag: i = !1
}) {
  const s = (c || f) && !n ? { y: 0 } : {}, o = d[i ? "withFlag" : "default"], t = e || n ? o.focused : o.unfocused;
  return {
    ...s,
    ...t,
    width: "100%"
  };
}
export {
  u as getAnimationConfig
};
