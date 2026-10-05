import { jsx as s } from "react/jsx-runtime";
import { InputBase as m } from "../InputBase/InputBase.js";
import { InputType as i } from "../InputBase/utils/inputEnums.js";
import { TAGGING_EVENT as I } from "../../../utils/pattern.js";
const C = (r) => {
  const { placeholder: t = "Pesquisar", state: o, onTag: e, ...n } = r;
  return /* @__PURE__ */ s(
    m,
    {
      "data-testid": "input-search",
      type: i.SEARCH,
      placeholder: t,
      state: o,
      onTag: e,
      onKeyDown: (p) => {
        p.key === "Enter" && e && e((a) => ({
          ...a,
          name: I.INTERACTION_CLICK,
          ComponentProperties: {
            component_name: "InputSearch",
            state: o ?? "enabled",
            placeholder: t
          }
        }));
      },
      ...n
    }
  );
};
export {
  C as InputSearch
};
