import { STATE as r } from "../../../../utils/pattern.js";
const o = (t, e) => t ? r.SKELETON : e ? r.ENABLED : r.DISABLED;
export {
  o as resolvePaginationTextState
};
