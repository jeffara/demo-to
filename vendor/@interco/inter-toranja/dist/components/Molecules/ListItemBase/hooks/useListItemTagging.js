import { useState as I, useCallback as c } from "react";
import { omitUndefinedValues as T } from "../utils/tagDataUtils.js";
import { TAGGING_EVENT as g } from "../../../../utils/pattern.js";
const L = ({
  onTag: o,
  componentName: r = "ListItem",
  state: m = "enabled"
}) => {
  const [n, p] = I({}), f = c((e) => {
    p(typeof e == "function" ? (t) => e(t) : (t) => ({ ...t, ...e }));
  }, []);
  return { handleTag: c(
    (e = {}) => {
      if (o) {
        const t = (e == null ? void 0 : e.ComponentProperties) ?? {}, i = t.component_name, C = i && !i.startsWith("ListItem"), l = T(
          C ? t : {
            component_name: r,
            state: m,
            ...n,
            ...e
          }
        ), u = Object.fromEntries(
          Object.entries(e).filter(([s]) => s !== "ComponentProperties")
        );
        o((s) => ({
          ...s,
          ...u,
          name: g.INTERACTION_CLICK,
          ComponentProperties: l
        }));
      }
    },
    [o, r, m, n]
  ), tagData: n, setTagData: f };
};
export {
  L as useListItemTagging
};
