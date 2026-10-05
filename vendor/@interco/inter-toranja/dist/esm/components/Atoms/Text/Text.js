import { jsx as D } from "react/jsx-runtime";
import '../../../assets/components/Atoms/Text/Text.modules.css';/* empty css                  */
import { TextWeight as l, TextColorScheme as n, TextType as g } from "./types.js";
import { classNamesMerge as L } from "../../../utils/classNamesMerge.js";
import { STATE as u } from "../../../utils/pattern.js";
const k = ({
  state: a = u.ENABLED,
  children: i,
  textSize: $,
  textType: r,
  textWeight: c = l.Regular,
  as: f = "span",
  id: C,
  colorScheme: o = n.Neutral,
  colorVariant: d = "primary",
  colorStrong: p,
  ...b
}) => {
  const E = f, S = () => {
    const e = `-${l.Regular}`, t = `-${c}`, s = c === l.Medium;
    return r === g.Body ? s ? e : t : r === g.Label ? t : "";
  }, w = (e, t, s) => e === "caption" ? t === "bold" ? t : "medium" : s, N = () => {
    if (a === u.DISABLED || a === u.SKELETON)
      return "";
    const e = "text--color", t = o === n.Feedback || o === n.Accent, s = `${e}--${o}`, m = `${s}--${d}`;
    return o === n.Disabled ? s : t ? `${m}${p ? "--strong" : "--default"}` : m;
  }, T = S(), x = `type-${r}`, A = w(r, c, $), B = `${x}-${A}${T}`;
  return /* @__PURE__ */ D(
    E,
    {
      ...b,
      id: C,
      title: typeof i == "string" ? i : void 0,
      "data-testid": "text",
      className: L("text", B, `text--${a}`, N()),
      children: i
    }
  );
};
export {
  k as Text
};
