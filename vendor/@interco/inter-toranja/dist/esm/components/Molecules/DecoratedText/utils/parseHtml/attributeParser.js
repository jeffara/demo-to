const c = (i) => {
  const r = {};
  let s = 0, a = "", t = "", l = !1;
  for (let f = 0; f < i.length; f++) {
    const e = i[f];
    switch (s) {
      case 0:
        /\w/.test(e) && (a = e, s = 1);
        break;
      case 1:
        /\w/.test(e) ? a += e : e === "=" ? s = 3 : /\s/.test(e) && (s = 2);
        break;
      case 2:
        e === "=" ? s = 3 : /\w/.test(e) && (a = e, s = 1);
        break;
      case 3:
        e === '"' ? (t = "", s = 4) : e === "'" && (t = "", s = 5);
        break;
      case 4:
        l ? (t += e, l = !1) : e === "\\" ? (t += e, l = !0) : e === '"' ? (r[a] = t, a = "", s = 0) : t += e;
        break;
      case 5:
        l ? (t += e, l = !1) : e === "\\" ? (t += e, l = !0) : e === "'" ? (r[a] = t, a = "", s = 0) : t += e;
        break;
    }
  }
  return r;
};
export {
  c as parseAttributes
};
