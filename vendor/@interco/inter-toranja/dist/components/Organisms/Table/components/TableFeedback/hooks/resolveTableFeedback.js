import { TABLE_ERROR_RETRY_LABEL as s, TABLE_ERROR_DEFAULT_DESCRIPTION as n, TABLE_ERROR_TITLE as b, getNoResultsTitle as d, TABLE_FEEDBACK_TEMPLATES as E } from "../constants.js";
import { classNamesMerge as r } from "../../../../../../utils/classNamesMerge.js";
const l = (e) => e === "empty" || e === "noFilters", k = ({
  type: e,
  description: c,
  searchTerm: i,
  emptyState: a
}) => {
  if (a)
    return {
      rootClasses: r(
        "table-feedback",
        l(e) ? "table-feedback--gap-relaxed" : "table-feedback--gap-compact"
      ),
      title: a.title,
      description: a.description,
      action: a.action && {
        label: a.action.label,
        onClick: a.action.onClick,
        hierarchy: a.action.hierarchy ?? "primary"
      }
    };
  const o = E[e], t = e === "noResults" ? d(i) : o.title;
  return {
    rootClasses: r(
      "table-feedback",
      l(e) ? "table-feedback--gap-relaxed" : "table-feedback--gap-compact"
    ),
    title: t,
    description: c ?? o.description
  };
}, R = ({
  description: e,
  onRetry: c
}) => ({
  rootClasses: r("table-feedback", "table-feedback--gap-compact"),
  title: b,
  description: e ?? n,
  action: c && {
    label: s,
    onClick: c,
    hierarchy: "primary"
  }
}), _ = (e) => e.type === "error" ? R(e) : k(e);
export {
  _ as resolveTableFeedback
};
