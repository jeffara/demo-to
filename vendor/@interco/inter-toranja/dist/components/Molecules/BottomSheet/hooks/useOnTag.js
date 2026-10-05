import { useEffect as r } from "react";
import { TAGGING_EVENT as p } from "../../../../utils/pattern.js";
const c = ({ meetsCondition: o, onTagFn: e, title: t }) => {
  r(() => {
    o && e((m) => ({
      ...m,
      name: p.MODAL_VIEW,
      ComponentProperties: {
        component_name: "Bottom Sheet",
        title: t
      }
    }));
  }, [o, e, t]);
};
export {
  c as useBottomSheetTag
};
