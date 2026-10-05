import { jsx as n } from "react/jsx-runtime";
import { mapStateToSTATE as r } from "../../../utils/stateMapper.js";
import o from "../../../../../Atoms/IconFlag/IconFlag.js";
const c = (t, e, i) => {
  if (!t)
    return null;
  const a = r(e);
  return /* @__PURE__ */ n(
    "div",
    {
      "data-testid": `${i}-flag`,
      className: `listItemLeading__iconFlag listItemLeading__iconFlag--${a}`,
      children: o(t, a)
    }
  );
};
export {
  c as renderFlag
};
