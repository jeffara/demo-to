import { DateType as a } from "../../InputBase/utils/inputEnums.js";
const g = 3, m = 4, u = (t) => String(t).padStart(2, "0"), D = (t, r, n) => {
  if (!Number.isInteger(t) || !Number.isInteger(r) || !Number.isInteger(n))
    return null;
  const e = new Date(t, r - 1, n);
  return e.getFullYear() === t && e.getMonth() === r - 1 && e.getDate() === n ? e : null;
}, b = (t, r) => {
  const n = t.split("/");
  if (n.length !== g)
    return null;
  const [e, s, o] = n;
  if (!e || !s || (o == null ? void 0 : o.length) !== m)
    return null;
  const c = Number(o), l = r === a.BR ? Number(s) : Number(e), i = r === a.BR ? Number(e) : Number(s);
  return D(c, l, i);
}, f = (t, r) => {
  const n = u(t.getDate()), e = u(t.getMonth() + 1), s = String(t.getFullYear());
  return r === a.BR ? `${n}/${e}/${s}` : `${e}/${n}/${s}`;
}, p = (t) => t === a.US ? "en-US" : "pt-BR";
export {
  f as formatMaskedDate,
  p as getDatePickerLocale,
  b as parseMaskedDate
};
