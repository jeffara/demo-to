import { useEffect as p } from "react";
import { TAGGING_EVENT as t } from "../../../../utils/pattern.js";
const E = ({
  meetsCondition: e,
  onTagFn: o,
  title: m
}) => {
  p(() => {
    e && o((r) => ({
      ...r,
      name: t.MODAL_VIEW,
      ComponentProperties: {
        component_name: "Side Sheet",
        title: m
      }
    }));
  }, [e, o, m]);
};
export {
  E as useSideSheetOnTag
};
