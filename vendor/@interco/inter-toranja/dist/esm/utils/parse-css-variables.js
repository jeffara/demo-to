function u(s) {
  for (let e = 0; e < s.length; e++) {
    const n = s[e], t = n >= "a" && n <= "z", r = n >= "A" && n <= "Z", i = n >= "0" && n <= "9";
    if (!t && !r && !i && n !== "-")
      return !1;
  }
  return !0;
}
function a(s, { prefix: e, nameFilter: n }) {
  const t = s.trimStart();
  if (!t.startsWith(e))
    return null;
  const r = t.indexOf(":");
  if (r === -1)
    return null;
  const i = t.slice(2, r);
  if (n && !n(i) || !u(i))
    return null;
  const o = t.slice(r + 1).trim(), l = o.indexOf(";"), c = (l >= 0 ? o.slice(0, l) : o).trim();
  return c ? { varName: `--${i}`, value: c } : null;
}
function f(s, e) {
  const n = [];
  for (const t of s.split(`
`)) {
    const r = a(t, e);
    r && n.push(r);
  }
  return n;
}
export {
  f as parseCssVariableLines
};
