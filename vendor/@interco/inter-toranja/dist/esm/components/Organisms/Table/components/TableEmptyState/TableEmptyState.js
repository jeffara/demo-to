import { jsx as r } from "react/jsx-runtime";
import { TableFeedback as m } from "../TableFeedback/TableFeedback.js";
const b = ({
  variant: t,
  emptyMessage: e,
  emptyState: o,
  searchTerm: p
}) => /* @__PURE__ */ r(
  m,
  {
    type: t,
    description: e,
    searchTerm: p,
    emptyState: o
  }
);
export {
  b as TableEmptyState
};
