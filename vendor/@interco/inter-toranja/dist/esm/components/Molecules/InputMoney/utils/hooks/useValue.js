import { useState as h } from "react";
import { ActionType as s } from "../../types.js";
import { applyMask as M } from "../applyMask.js";
const N = (u, r = 0, m = 0, p = 100, c) => {
  const [t, o] = h(r ?? 0), l = (e) => {
    const a = Math.max(m, Math.min(e, p));
    o(a);
    const n = M(a, c);
    u(a, n);
  };
  return { value: t, setValue: o, updateValue: l, handleValueChange: (e, a = e === s.INCREMENT ? 100 : 20) => {
    const n = e === s.INCREMENT ? t + a : t - a;
    l(n);
  } };
};
export {
  N as useValue
};
