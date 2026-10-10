import { classNamesMerge as a } from "../../../../../../utils/classNamesMerge.js";
const c = (e) => {
  const { visualState: l = "enabled", align: t = "start" } = e;
  return {
    rootClasses: a(
      "table-cell",
      `table-cell--align-${t}`,
      `table-cell--${l}`,
      `table-cell--type-${e.type}`
    )
  };
};
export {
  c as useTableCell
};
