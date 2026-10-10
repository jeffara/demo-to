import { jsx as n } from "react/jsx-runtime";
import { mapTableVisualStateToAtomState as c } from "../../shared/mapTableVisualState.js";
import { Icon as d } from "../../../../../Atoms/Icon/Icon.js";
import { PaymentMethods as u } from "../../../../../Atoms/PaymentMethods/PaymentMethods.js";
import { Avatar as m } from "../../../../../Molecules/Avatar/Avatar.js";
import { SIZE as r } from "../../../../../../utils/pattern.js";
const f = (t, e) => /* @__PURE__ */ n(d, { asset: t.icon, size: r.MEDIUM, state: c(e) }), l = (t, e) => {
  const { variant: o, icon: a, color: i, size: M } = t.avatar, s = c(e);
  return M === r.SMALL ? /* @__PURE__ */ n(m, { variant: o, icon: a, color: i, size: r.SMALL, state: s }) : M === r.MEDIUM ? /* @__PURE__ */ n(m, { variant: o, icon: a, color: i, size: r.MEDIUM, state: s }) : /* @__PURE__ */ n(
    m,
    {
      variant: o,
      icon: a,
      color: i,
      size: r.LARGE,
      edit: !1,
      state: s
    }
  );
}, h = (t, e) => t.paymentMethod ? /* @__PURE__ */ n(
  u,
  {
    paymentMethod: t.paymentMethod,
    size: r.SMALL,
    state: c(e)
  }
) : null, E = (t, e) => {
  switch (t.type) {
    case "icon":
      return f(t, e);
    case "avatar":
      return l(t, e);
    case "paymentMethod":
      return h(t, e);
    default:
      return null;
  }
};
export {
  E as renderVisualCells
};
