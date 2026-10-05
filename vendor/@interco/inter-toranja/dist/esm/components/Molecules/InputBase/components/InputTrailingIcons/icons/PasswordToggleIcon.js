import { jsx as r } from "react/jsx-runtime";
import { NeutralIconButton as a } from "../../../../../Atoms/NeutralIconButton/NeutralIconButton.js";
const p = ({
  showPassword: o,
  onToggle: t,
  onTag: e,
  label: n
}) => /* @__PURE__ */ r(
  a,
  {
    "data-testid": o ? "icon-passwordshow" : "icon-passwordhide",
    onClick: t,
    onTag: (s) => {
      e && e((i) => ({
        ...i,
        ...s(),
        CustomParameters: {
          nested_in: "InputPassword",
          nested_label: n
        }
      }));
    },
    icon: o ? "ic_eye_open" : "ic_eye_closed",
    tabIndex: 0
  }
);
export {
  p as PasswordToggleIcon
};
