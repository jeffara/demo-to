import { useMemo as E } from "react";
import { SegmentedControlClass as s } from "../enums.js";
const i = (r, n) => {
  const T = E(() => {
    const e = [s.BASE];
    return r === "skeleton" && e.push(s.SKELETON), n && e.push(s.HUG), e.join(" ");
  }, [r, n]), c = E(
    () => (e, o) => {
      const t = [s.SEGMENT];
      return e && t.push(s.SEGMENT_ACTIVE), o && t.push(s.SEGMENT_DISABLED), n && t.push(s.SEGMENT_HUG), t.join(" ");
    },
    [n]
  ), l = E(
    () => (e) => {
      const o = s.TEXT, t = e ? s.TEXT_BOLD : s.TEXT_REGULAR;
      return `${o} ${t}`;
    },
    []
  );
  return {
    containerClass: T,
    getSegmentClasses: c,
    getTextClasses: l
  };
};
export {
  i as useSegmentedControlClasses
};
