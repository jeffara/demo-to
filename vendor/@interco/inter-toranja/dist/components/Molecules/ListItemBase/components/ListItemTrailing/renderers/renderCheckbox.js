import { jsx as a } from "react/jsx-runtime";
import { Checkbox as c } from "../../../../../Atoms/Checkbox/Checkbox.js";
import { mapStateToSTATE as m } from "../../../utils/stateMapper.js";
import { VARIANT as h } from "../../../../../../utils/pattern.js";
const d = (e, o) => {
  const t = m(o), n = (r) => {
    e.onChange && e.onChange(r);
  };
  return /* @__PURE__ */ a(
    c,
    {
      checked: e.checked,
      variant: h.DEFAULT,
      onChange: n,
      state: t
    }
  );
};
export {
  d as renderCheckbox
};
