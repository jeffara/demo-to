const s = (t) => {
  if (!document)
    return null;
  const e = document.createElement("div");
  return e.innerHTML = t, e.getElementsByTagName("svg")[0];
}, c = ["ic_flag_", "ic_babi_", "ic_payment_"], l = (t, e) => {
  if (t.setAttribute("width", "inherit"), t.setAttribute("height", "inherit"), !(!!e && c.some((r) => e.toLowerCase().startsWith(r)))) {
    t.setAttribute("fill", "inherit");
    const r = t.getElementsByTagName("path");
    Array.from(r).forEach((i) => {
      i.setAttribute("fill", "inherit");
    }), t.setAttribute("fill", "inherit");
  }
}, a = (t, e) => {
  if (typeof document > "u")
    return "";
  const o = t.replace(/^data:image\/svg\+xml[^,]*,/, ""), r = decodeURIComponent(o);
  if (r.includes("<svg")) {
    const n = s(r);
    return n ? (l(n, e), n.outerHTML.toString()) : "";
  }
  throw new Error("Invalid SVG content");
};
export {
  s as createSvgElement,
  a as processSvgContent,
  l as setIconAttributes
};
