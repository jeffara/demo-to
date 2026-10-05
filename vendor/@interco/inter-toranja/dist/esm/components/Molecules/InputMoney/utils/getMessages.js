import { applyMask as g } from "./applyMask.js";
const q = ({
  typeValue: a,
  currency: i,
  minValue: r,
  maxValue: e,
  fixedIncrementValue: s,
  isNumberInteger: n,
  isReadOnly: m,
  showButtons: d,
  defaultValue: l
}) => {
  const t = (f) => g(f, {
    typeValue: a,
    currency: i,
    isNumberInteger: n
  }), c = t(r), p = t(e), v = `Digite um valor maior que ${c}`, M = `Digite um valor menor que ${p}`;
  let o = null;
  return s !== void 0 && s > e ? o = "O valor de incremento não pode ser maior que o valor máximo." : m && d ? o = "Os botões não podem ser mostrados quando o estado for apenas leitura." : (r < 0 || e < 0 || (l ?? 0) < 0) && (o = "O input não aceita valores negativos."), {
    errorMinMessage: v,
    errorMaxMessage: M,
    validationError: o
  };
};
export {
  q as getMessages
};
