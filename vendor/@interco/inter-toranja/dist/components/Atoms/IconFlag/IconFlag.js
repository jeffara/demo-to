import { jsx as n } from "react/jsx-runtime";
import { Icon as s } from "../Icon/Icon.js";
import { COUNTRY as r, SIZE as c, STATE as e } from "../../../utils/pattern.js";
const i = {
  [r.ARGENTINA]: "ic_flag_argentina_rounded",
  [r.BRAZIL]: "ic_flag_brazil_rounded",
  [r.SPAIN]: "ic_flag_spain_rounded",
  [r.UNITED_STATES]: "ic_flag_united_states_rounded",
  [r.GLOBE]: "ic_flag_globe"
}, d = (t) => t === e.DISABLED || t === e.SKELETON ? t : e.ENABLED, f = (t, o, _ = c.MEDIUM) => {
  const a = i[t] ?? i[r.GLOBE];
  return /* @__PURE__ */ n("div", { "data-testid": a, className: `listItem__icon--${o}`, children: /* @__PURE__ */ n(s, { asset: a, size: _, state: d(o), isFlag: !0 }) });
};
export {
  f as default
};
