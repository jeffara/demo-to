function o(r) {
  const e = r.trim();
  if (!e.startsWith("#"))
    return null;
  const n = e.slice(1);
  if (n.length === 3) {
    const s = parseInt(n[0] + n[0], 16), t = parseInt(n[1] + n[1], 16), a = parseInt(n[2] + n[2], 16);
    return { r: s, g: t, b: a, a: 255 };
  }
  return n.length === 6 ? {
    r: parseInt(n.slice(0, 2), 16),
    g: parseInt(n.slice(2, 4), 16),
    b: parseInt(n.slice(4, 6), 16),
    a: 255
  } : n.length === 8 ? {
    r: parseInt(n.slice(0, 2), 16),
    g: parseInt(n.slice(2, 4), 16),
    b: parseInt(n.slice(4, 6), 16),
    a: parseInt(n.slice(6, 8), 16)
  } : null;
}
function i({ r, g: e, b: n, a: s = 255 }) {
  const t = s / 255;
  return {
    r: Math.round((1 - t) * 255 + t * r),
    g: Math.round((1 - t) * 255 + t * e),
    b: Math.round((1 - t) * 255 + t * n),
    a: 255
  };
}
function l(r) {
  const e = (a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }, n = e(r.r), s = e(r.g), t = e(r.b);
  return 0.2126 * n + 0.7152 * s + 0.0722 * t;
}
function u(r, e = 0.179) {
  const n = o(r);
  if (!n)
    return !1;
  const s = i(n);
  return l(s) <= e;
}
export {
  i as blendOverWhite,
  o as parseHexColor,
  l as relativeLuminance,
  u as shouldUseWhiteText
};
