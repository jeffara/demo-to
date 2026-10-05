import { jsx as r } from "react/jsx-runtime";
import { mapStateToSTATE as n } from "../../../utils/stateMapper.js";
import { Icon as o } from "../../../../../Atoms/Icon/Icon.js";
const m = (t, e, i) => t ? /* @__PURE__ */ r("div", { "data-testid": `${i}-icon`, className: `listItemLeading__icon--${e}`, children: /* @__PURE__ */ r(
  o,
  {
    asset: t.asset,
    size: t.size,
    color: t.color,
    contentDescription: t.contentDescription,
    state: n(e)
  }
) }) : null;
export {
  m as renderIcon
};
