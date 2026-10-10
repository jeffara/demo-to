const a = ({
  isDisabled: i,
  isFocused: n,
  isReadOnly: o,
  value: t
}) => {
  const s = !!(n || t), l = (i || o) && !t;
  let e;
  return s ? e = 4 : l ? e = 10 : e = 8, {
    y: e,
    scale: 1,
    x: 0,
    width: "100%"
  };
};
export {
  a as getAnimationConfig
};
