import { InitialCategory as o } from "../types.js";
const a = (i, n) => {
  const t = n.trim().split(" "), r = t[0].charAt(0).toUpperCase();
  if (i !== o.Person || t.length <= 1)
    return r;
  const e = t[t.length - 1].charAt(0).toUpperCase();
  return `${r}${e}`;
};
export {
  a as getInitials
};
