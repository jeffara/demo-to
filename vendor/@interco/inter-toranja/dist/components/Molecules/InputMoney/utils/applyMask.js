import { InputTypeValue as m, InputCurrencyMask as t } from "../types.js";
const y = " ", u = " ", n = (r) => r.replace(y, u), S = (r, c) => {
  const { typeValue: o, currency: a, isNumberInteger: s } = c;
  if (o === m.Monetary)
    switch (a) {
      case t.BRL: {
        const e = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: t.BRL
        }).format(r);
        return n(e);
      }
      case t.USD:
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: t.USD
        }).format(r).replace("$", "US$ ");
      case t.ARS: {
        const e = new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: t.ARS
        }).format(r);
        return n(e);
      }
      default:
        return r.toString();
    }
  return s ? Math.round(r).toString() : r.toFixed(2);
};
export {
  S as applyMask
};
