import { parseCssVariableLines as y } from "../parse-css-variables.js";
function $(a) {
  const s = [], r = /--color-(light|dark)-([a-z-]+)-(\d{2,3}):\s*(#[0-9a-fA-F]{3,8});/g;
  let i;
  for (; (i = r.exec(a)) !== null; ) {
    const [, n, o, l, m] = i, t = `--color-${n}-${o}-${l}`;
    s.push({ mode: n, family: o, tone: Number(l), hex: m, varName: t });
  }
  return s;
}
function g(a) {
  return a === "orange" ? "brand" : a;
}
function b(a, s) {
  const r = a.split(`
`), i = [], n = (t) => {
    const e = /^\s*--([a-z0-9-]+):[ \t]*(#[0-9a-fA-F]{3,8});/.exec(t);
    return e ? { name: e[1], hex: e[2] } : null;
  }, o = (t) => {
    var c;
    const e = /@deprecated\s*(.*)/.exec(t);
    return ((c = e == null ? void 0 : e[1]) == null ? void 0 : c.trim()) ?? "";
  }, l = (t) => {
    const e = /use\s+(--[a-z0-9-]+)/i.exec(t);
    return e == null ? void 0 : e[1];
  }, m = (t) => {
    const e = Math.min(t + 5, r.length);
    for (let c = t + 1; c < e; c++) {
      const f = n(r[c]);
      if (f)
        return f;
      const u = r[c].trim();
      if (u && !u.startsWith("/*"))
        return null;
    }
    return null;
  };
  for (let t = 0; t < r.length; t++) {
    const e = r[t].trim();
    if (e.includes("@deprecated")) {
      const c = o(e), u = n(e) ?? m(t);
      u && i.push({
        varName: `--${u.name}`,
        hex: u.hex,
        filePath: s,
        note: c,
        replacement: l(c)
      });
    }
  }
  return i;
}
function k(a) {
  const s = [], r = a.split(`
`), i = (n) => {
    const o = n.trimStart();
    if (!o.startsWith("--color-"))
      return null;
    const l = o.indexOf(":");
    if (l === -1)
      return null;
    const t = o.slice(8, l).split("-");
    if (t.length < 3)
      return null;
    const [e, c, ...f] = t, u = f.join("-"), d = o.slice(l + 1).trim(), p = d.indexOf(";"), h = (p >= 0 ? d.slice(0, p) : d).trim();
    if (!/^#[0-9a-fA-F]{3,8}$/.test(h))
      return null;
    const x = `--color-${e}-${c}-${u}`;
    return { category: e, role: c, rest: u, hex: h, varName: x };
  };
  for (const n of r) {
    const o = i(n);
    o && s.push(o);
  }
  return s;
}
function v(a) {
  return y(a, {
    prefix: "--",
    nameFilter: (s) => s.toLowerCase().includes("gradient")
  });
}
function N(a) {
  const s = { brand: [], neutrals: [], decorative: [] };
  for (const r of a) {
    const i = g(r.family);
    let n;
    i === "brand" ? n = "brand" : ["gray", "graphite", "ceramic", "silver"].includes(r.family) ? n = "neutrals" : n = "decorative", s[n].push({ ...r, family: i });
  }
  for (const r of Object.keys(s)) {
    const i = [...s[r]].sort((n, o) => {
      const l = n.family.localeCompare(o.family);
      return l !== 0 ? l : n.tone - o.tone;
    });
    s[r] = i;
  }
  return s;
}
export {
  N as groupFamilies,
  g as mapFamilyDisplayName,
  $ as parseBasePalette,
  b as parseDeprecated,
  v as parseGradients,
  k as parseRoles
};
