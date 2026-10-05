import { jsx as m } from "react/jsx-runtime";
import { InputBase as s } from "../InputBase/InputBase.js";
import { MaskType as n, InputType as a } from "../InputBase/utils/inputEnums.js";
import { STATE as T } from "../../../utils/pattern.js";
const f = (t) => {
  const { label: o = "Texto", state: e = T.ENABLED, pickerRange: p, ...r } = t;
  return /* @__PURE__ */ m(
    s,
    {
      label: o,
      type: a.TEXT,
      mask: n.DATE,
      state: e,
      pickerRange: p,
      customTagProps: {
        customProperties: {
          component_name: "InputDate"
        }
      },
      ...r
    }
  );
};
export {
  f as InputDate
};
