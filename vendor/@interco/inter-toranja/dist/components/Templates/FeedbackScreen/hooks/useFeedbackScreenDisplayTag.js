import { useRef as s, useEffect as f } from "react";
import { STATE as p, TAGGING_EVENT as E } from "../../../../utils/pattern.js";
const S = ({
  onTag: e,
  state: r,
  variant: c,
  title: n,
  value: o
}) => {
  const t = s(!1);
  f(() => {
    !e || r === p.SKELETON || t.current || (t.current = !0, e((m) => ({
      ...m,
      name: E.DISPLAY,
      ComponentProperties: {
        component_name: "FeedbackScreen",
        variant: c,
        title: n,
        value: o
      }
    })));
  }, [e, r, c, n, o]);
};
export {
  S as useFeedbackScreenDisplayTag
};
