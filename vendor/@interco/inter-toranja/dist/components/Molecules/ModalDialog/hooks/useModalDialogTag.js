import { useEffect as a } from "react";
import { TAGGING_EVENT as p } from "../../../../utils/pattern.js";
const E = ({
  meetsCondition: o,
  onTagFn: e,
  title: m
}) => {
  a(() => {
    o && e((r) => ({
      ...r,
      name: p.MODAL_VIEW,
      ComponentProperties: {
        component_name: "Modal Dialog",
        title: m
      }
    }));
  }, [o, e, m]);
};
export {
  E as useModalDialogTag
};
