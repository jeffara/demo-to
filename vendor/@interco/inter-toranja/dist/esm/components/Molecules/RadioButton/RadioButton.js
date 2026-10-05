import { jsx as o, jsxs as f } from "react/jsx-runtime";
import h from "react";
import '../../../assets/components/Molecules/RadioButton/RadioButton.modules.css';/* empty css                         */
import { Text as x } from "../../Atoms/Text/Text.js";
import { TextType as T, TextSize as _ } from "../../Atoms/Text/types.js";
import { STATE as u } from "../../../utils/pattern.js";
const a = ({
  checked: r,
  children: e,
  id: t,
  name: l,
  onChange: i,
  onTag: b,
  state: n,
  value: p,
  variant: s
}) => {
  const m = `radio__content__option--${s}--${n}`, d = (c) => {
    i && i(c);
  };
  return /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ o("label", { htmlFor: t, className: m, children: /* @__PURE__ */ o(
      "input",
      {
        checked: r,
        disabled: n === u.DISABLED,
        id: t,
        name: l,
        onChange: d,
        type: "radio",
        value: p
      }
    ) }),
    e && /* @__PURE__ */ o(x, { textSize: _.Medium, textType: T.Label, as: "span", children: /* @__PURE__ */ o("label", { htmlFor: t, children: e }) })
  ] });
}, y = ({ children: r }) => {
  const e = h.Children.toArray(r).filter(
    (t) => t.type === a
  );
  return /* @__PURE__ */ o("div", { className: "radio", children: e });
};
y.Option = a;
export {
  y as Radio
};
