import { jsx as n } from "react/jsx-runtime";
import { Switch as r } from "../../../../../Atoms/Switch/Switch.js";
import { mapStateToSTATE as c } from "../../../utils/stateMapper.js";
const i = (t, e) => {
  const o = c(e);
  return /* @__PURE__ */ n(r, { checked: t.checked, onChange: t.onChange, state: o });
};
export {
  i as renderSwitch
};
