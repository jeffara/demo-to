import { classNamesMerge as e } from "../../../../../../utils/classNamesMerge.js";
const a = ({ trailing: o }) => {
  const s = !!o;
  return {
    rootClasses: e("table-toolbar"),
    showActions: s
  };
};
export {
  a as useTableToolbar
};
