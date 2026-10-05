import { jsx as s } from "react/jsx-runtime";
import { mapStateToSTATE as a } from "../../../utils/stateMapper.js";
import { Stepper as i } from "../../../../Stepper/Stepper.js";
const d = (e, r, t, n) => {
  const p = a(r);
  return /* @__PURE__ */ s(
    i,
    {
      enableInput: !1,
      hasBorder: !1,
      min: e.min ?? 0,
      max: e.max ?? 100,
      step: e.step ?? 1,
      state: p,
      onTag: t ? (m) => {
        const o = m({
          screen_name: "Stepper"
        });
        t({
          ...o,
          ComponentProperties: {
            ...o.ComponentProperties,
            component_name: "Stepper"
          },
          ProductProperties: {
            nested_in: "ListItemControl",
            nested_label: n
          }
        });
      } : void 0
    }
  );
};
export {
  d as renderStepper
};
