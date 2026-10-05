import { STATE as l } from "../../../../utils/pattern.js";
const k = ({
  state: r,
  isExpanded: n,
  toggleExpanded: t,
  handleTagging: i,
  setShowContent: o
}) => {
  const c = r === l.DISABLED, f = r === l.SKELETON;
  return {
    handleClick: (e) => {
      if (!c) {
        if (f) {
          e.preventDefault();
          return;
        }
        n || o(!0), i(), t();
      }
    },
    handleKeyDown: (e) => {
      c || f || (e.key === " " || e.key === "Enter") && (e.preventDefault(), n || o(!0), i(), t());
    }
  };
};
export {
  k as useAccordionHandlers
};
