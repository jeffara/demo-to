import { useMemo as o } from "react";
import { SegmentedControlClass as s } from "../enums.js";
const f = (r, n, T) => {
  const S = o(() => {
    const e = [s.BASE];
    return r === "skeleton" && e.push(s.SKELETON), n && e.push(s.HUG), e.join(" ");
  }, [r, n]), c = o(
    () => (e, E) => {
      const t = [s.SEGMENT];
      return e && t.push(s.SEGMENT_ACTIVE), E && t.push(s.SEGMENT_DISABLED), n && t.push(s.SEGMENT_HUG), T && t.push(s.SEGMENT_COMPACT), t.join(" ");
    },
    [n, T]
  ), l = o(
    () => (e) => {
      const E = s.TEXT, t = e ? s.TEXT_BOLD : s.TEXT_REGULAR;
      return `${E} ${t}`;
    },
    []
  );
  return {
    containerClass: S,
    getSegmentClasses: c,
    getTextClasses: l
  };
};
export {
  f as useSegmentedControlClasses
};
