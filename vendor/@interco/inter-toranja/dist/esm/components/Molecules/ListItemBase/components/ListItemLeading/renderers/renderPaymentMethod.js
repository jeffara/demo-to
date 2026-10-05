import { jsx as m } from "react/jsx-runtime";
import { mapStateToSTATE as n } from "../../../utils/stateMapper.js";
import { PaymentMethods as a } from "../../../../../Atoms/PaymentMethods/PaymentMethods.js";
const s = (t, e, r) => t ? /* @__PURE__ */ m("div", { "data-testid": `${r}-payment`, className: `listItemLeading__iconPayment--${e}`, children: /* @__PURE__ */ m(a, { paymentMethod: t, state: n(e) }) }) : null;
export {
  s as renderPaymentMethod
};
