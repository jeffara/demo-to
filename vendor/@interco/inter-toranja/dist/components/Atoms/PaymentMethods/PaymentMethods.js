import { jsx as t } from "react/jsx-runtime";
import { PAYMENT as a } from "./types.js";
import { Avatar as r } from "../../Molecules/Avatar/Avatar.js";
import { AvatarColor as y } from "../../Molecules/Avatar/types.js";
import { classNamesMerge as A } from "../../../utils/classNamesMerge.js";
import { STATE as o, SIZE as e } from "../../../utils/pattern.js";
import '../../../assets/PaymentMethods.css';const d = {
  [a.ALELO]: "ic_payment_alelo",
  [a.AMAZON]: "ic_payment_amazon",
  [a.AMEX]: "ic_payment_amex",
  [a.APPLEPAY]: "ic_payment_apple_pay",
  [a.DINERSCLUB]: "ic_payment_diners_club",
  [a.DISCOVER]: "ic_payment_discover",
  [a.ELO]: "ic_payment_elo",
  [a.GOOGLEPAY]: "ic_payment_google_pay",
  [a.HIPERCARD]: "ic_payment_hipercard",
  [a.JCB]: "ic_payment_jcb",
  [a.MASTERCARD]: "ic_payment_mastercard",
  [a.PAYPAL]: "ic_payment_paypal",
  [a.PLAID]: "ic_payment_plaid",
  [a.PLUXEE]: "ic_payment_pluxee",
  [a.TICKET]: "ic_payment_ticket",
  [a.VISA]: "ic_payment_visa",
  [a.VR]: "ic_payment_vr"
}, f = ({
  paymentMethod: n = "cardDefault",
  size: i = e.MEDIUM,
  state: c = o.ENABLED,
  color: p = y.Soft
}) => {
  const _ = d[n] || "ic_credit_card", s = A("payment-methods", {
    "payment-methods--disabled": c === o.DISABLED
  }), m = {
    icon: _,
    variant: "icon",
    state: c,
    color: p
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: s,
      "data-payment-method": n,
      "data-testid": "payment-methods",
      children: i === e.SMALL ? /* @__PURE__ */ t(r, { ...m, size: e.SMALL }) : i === e.LARGE ? /* @__PURE__ */ t(r, { ...m, size: e.LARGE }) : /* @__PURE__ */ t(r, { ...m, size: e.MEDIUM })
    }
  );
};
export {
  f as PaymentMethods
};
