import { jsx as l } from "react/jsx-runtime";
import { InputBase as u } from "../InputBase/InputBase.js";
import { InputType as b } from "../InputBase/utils/inputEnums.js";
import { STATE as n } from "../../../utils/pattern.js";
import { useDebouncedCallback as d } from "../../../utils/useDebouncedCallback.js";
const D = (r) => {
  const {
    type: p = b.TEXT,
    label: a = "Texto",
    state: o = n.ENABLED,
    onChange: e,
    onDebouncedChange: m,
    phoneType: s,
    ...c
  } = r, T = d(m);
  return /* @__PURE__ */ l(
    u,
    {
      label: a,
      type: p,
      state: o,
      phoneType: s,
      onChange: (t) => {
        e == null || e(t), o === n.ENABLED && T(t);
      },
      ...c
    }
  );
};
export {
  D as InputText
};
