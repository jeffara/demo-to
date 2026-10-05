import s from "../classNames.js";
const m = (a, e, n, l, r) => {
  const C = e ? s.ERROR : "", t = a ? s.DISABLED : "", c = n ? s.READONLY : "", E = r ? s.SHOW_BUTTONS : "", o = l ? s.SKELETON : "";
  return {
    disabledClass: t,
    showButtonClass: E,
    skeletonClass: o,
    getClassName: () => [o, t, C, c].find(
      (N) => N !== ""
    ) ?? ""
  };
};
export {
  m as useClassNames
};
