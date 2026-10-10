import { renderActionCells as n } from "./renderActionCells.js";
import { renderContentCells as r } from "./renderContentCells.js";
import { renderVisualCells as c } from "./renderVisualCells.js";
import { isSkeletonVisualState as a } from "../../shared/mapTableVisualState.js";
const o = (e, t) => !a(t), m = (e, t) => {
  if (!o(e, t))
    return null;
  switch (e.type) {
    case "checkbox":
    case "counter":
    case "button":
    case "iconButton":
    case "iconButtonMenu":
      return n(e, t);
    case "text":
    case "value":
    case "status":
    case "tags":
    case "signal":
      return r(e, t);
    case "icon":
    case "avatar":
    case "paymentMethod":
      return c(e, t);
    default:
      return null;
  }
};
export {
  m as renderTableCellContent
};
