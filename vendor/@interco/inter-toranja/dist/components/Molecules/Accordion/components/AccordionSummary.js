import { jsxs as v, jsx as c } from "react/jsx-runtime";
import { AccordionChevron as A } from "./AccordionChevron.js";
import { AccordionLeading as h } from "./AccordionLeading.js";
import { AccordionSummaryText as y } from "./AccordionSummaryText.js";
const _ = ({
  title: n,
  description: d,
  contentId: t,
  sizeTitle: i,
  showLeading: p,
  leading: u,
  isExpanded: m,
  isDisabled: o,
  isSkeleton: r,
  onClick: x,
  onKeyDown: f
}) => {
  const a = o || r;
  return /* @__PURE__ */ v(
    "header",
    {
      className: "accordion__summary",
      role: "button",
      onClick: x,
      onKeyDown: f,
      "aria-expanded": r ? void 0 : m,
      "aria-controls": r ? void 0 : t,
      "aria-disabled": a,
      tabIndex: a ? -1 : 0,
      children: [
        /* @__PURE__ */ c(
          h,
          {
            showLeading: p,
            leading: u,
            isDisabled: o,
            isSkeleton: r
          }
        ),
        /* @__PURE__ */ c(
          y,
          {
            title: n,
            description: d,
            sizeTitle: i,
            isDisabled: o,
            isSkeleton: r
          }
        ),
        /* @__PURE__ */ c(A, { isSkeleton: r, isExpanded: m, isDisabled: o })
      ]
    }
  );
};
export {
  _ as AccordionSummary
};
