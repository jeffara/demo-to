import { jsx as r } from "react/jsx-runtime";
import { mapStateToSTATE as c } from "../../../utils/stateMapper.js";
import { Radio as m } from "../../../../RadioButton/RadioButton.js";
import { RadioVariant as h } from "../../../../RadioButton/types.js";
const R = (a, o) => {
  const t = c(o), e = a.name ?? "radioTrailing", n = a.id ?? `${e}-${a.value ?? "option"}`, i = (d) => {
    a.onRadioChange && a.onRadioChange(d.target.checked);
  };
  return /* @__PURE__ */ r(
    m.Option,
    {
      id: n,
      name: e,
      checked: a.checked,
      value: a.value ?? "",
      onChange: i,
      onSelect: () => {
      },
      state: t,
      variant: h.Default
    }
  );
};
export {
  R as renderRadio
};
