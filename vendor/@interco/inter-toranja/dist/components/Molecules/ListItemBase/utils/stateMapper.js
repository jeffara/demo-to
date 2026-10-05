import { STATE as e } from "../../../../utils/pattern.js";
const r = (t) => {
  switch (t) {
    case "enabled":
      return e.ENABLED;
    case "loading":
      return e.ENABLED;
    case "disabled":
      return e.DISABLED;
    case "skeleton":
      return e.SKELETON;
    default:
      return e.ENABLED;
  }
}, n = (t) => t;
export {
  n as mapStateToComponentState,
  r as mapStateToSTATE
};
