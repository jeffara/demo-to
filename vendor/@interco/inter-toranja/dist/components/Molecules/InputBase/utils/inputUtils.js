import { MaskType as r, PhoneType as i, DateType as a } from "./inputEnums.js";
function h(n, e, t, s) {
  if (e)
    return e;
  switch (n) {
    case r.EMAIL:
      return "seuemail@dominio.com";
    case r.PHONE:
      return t === i.BR ? "(00) 00000-0000" : "000 0000-0000";
    case r.CPF:
      return "000.000.000-00";
    case r.CEP:
      return "00000-000";
    case r.DATE:
      return s === a.BR ? "dd/mm/aaaa" : "mm/dd/yyyy";
    case r.MONETARY:
      return "0,00";
    default:
      return "";
  }
}
function y(n, e, t) {
  switch (n) {
    case r.PHONE:
      return e === i.BR ? 15 : 20;
    case r.CPF:
      return 14;
    case r.CEP:
      return 9;
    case r.DATE:
      return 10;
    case r.MONETARY:
      return 22;
    default:
      return t;
  }
}
function l(n) {
  const e = n.replace(/\D/g, ""), t = e.slice(0, 2);
  if (e.length === 0)
    return "";
  if (e.length <= 2)
    return `(${e}`;
  if (e.length <= 6)
    return `(${e.slice(0, 2)}) ${e.slice(2)}`;
  if (e.length <= 10) {
    const c = e.slice(2);
    return c.length <= 4 ? `(${t}) ${c}` : c.length <= 8 ? `(${t}) ${c.slice(0, 4)}-${c.slice(4)}` : `(${t}) ${c.slice(0, 5)}-${c.slice(5)}`;
  }
  const s = e.slice(2, 11);
  return `(${t}) ${s.slice(0, 5)}-${s.slice(5)}`;
}
function u(n) {
  const e = n.replace(/\D/g, "");
  return e.length === 0 ? "" : e.length <= 3 ? e : e.length <= 7 ? `${e.slice(0, 3)} ${e.slice(3)}` : e.length <= 11 ? `${e.slice(0, 3)} ${e.slice(3, 7)}-${e.slice(7)}` : `${e.slice(0, 3)} ${e.slice(3, 7)}-${e.slice(7, 11)}`;
}
function o(n) {
  return n.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
function $(n) {
  return n.replace(/\D/g, "").replace(/(\d{5})(\d{3})$/, "$1-$2");
}
function p(n) {
  return n.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2})(\d)/, "$1/$2");
}
function d(n) {
  return n.replace(/\D/g, "").replace(/(\d{4})(\d)/, "$1/$2").replace(/(\d{2})(\d{2})$/, "$1/$2");
}
const f = 15;
function g(n) {
  const e = n.replace(/\D/g, "").slice(0, f);
  if (e.length === 0)
    return "";
  const t = Number(e) / 100;
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(t);
}
const M = (n, e, t, s) => {
  switch (e) {
    case r.PHONE:
      return t === i.BR ? l(n) : u(n);
    case r.CPF:
      return o(n);
    case r.CEP:
      return $(n);
    case r.DATE:
      return s === a.BR ? p(n) : d(n);
    case r.MONETARY:
      return g(n);
    default:
      return n;
  }
}, D = (n, e) => n instanceof Node && e instanceof Node && n.contains(e);
export {
  y as getMaxLength,
  h as getPlaceholder,
  M as handleMask,
  D as shouldKeepInputFocused
};
