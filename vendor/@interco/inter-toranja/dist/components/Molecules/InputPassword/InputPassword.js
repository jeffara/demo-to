import { jsx as e } from "react/jsx-runtime";
import { InputBase as p } from "../InputBase/InputBase.js";
import { InputType as m } from "../InputBase/utils/inputEnums.js";
import { STATE as n } from "../../../utils/pattern.js";
const i = (o) => {
  const { label: t = "Texto", state: r = n.ENABLED, ...s } = o;
  return /* @__PURE__ */ e(
    p,
    {
      label: t,
      type: m.PASSWORD,
      state: r,
      showClear: !0,
      customTagProps: {
        customProperties: {
          component_name: "InputPassword"
        }
      },
      ...s
    }
  );
};
export {
  i as InputPassword
};
