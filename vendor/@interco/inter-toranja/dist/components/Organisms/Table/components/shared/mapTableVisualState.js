import { StepperState as n } from "../../../../Molecules/Stepper/types.js";
import { STATE as a } from "../../../../../utils/pattern.js";
const s = (e) => e === "skeleton", r = (e) => e === "disabled" ? "disabled" : e === "skeleton" ? "skeleton" : "enabled", i = (e) => {
  const t = r(e);
  return t === "disabled" ? a.DISABLED : t === "skeleton" ? a.SKELETON : a.ENABLED;
}, S = (e) => e === "enabled" || e === "selected", c = (e) => {
  const t = r(e);
  return t === "disabled" ? n.Disabled : t === "skeleton" ? n.Skeleton : n.Enabled;
}, u = (e) => r(e), T = (e) => r(e) === "skeleton" ? a.SKELETON : a.ENABLED;
export {
  s as isSkeletonVisualState,
  S as isTableVisualStateInteractive,
  i as mapTableVisualStateToAtomState,
  T as mapTableVisualStateToSignalState,
  c as mapTableVisualStateToStepperState,
  u as mapTableVisualStateToTagState,
  r as resolveTableVisualStateCategory
};
