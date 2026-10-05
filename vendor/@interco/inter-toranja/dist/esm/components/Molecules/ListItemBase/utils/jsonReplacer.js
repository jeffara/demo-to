const r = (o, n) => {
  var c;
  if (typeof n == "function")
    return "[Function]";
  if (typeof n == "object" && n !== null && "$$typeof" in n) {
    const e = n;
    if (o === "icon" || o === "labelIcon") {
      const t = e.type;
      return `<${((t == null ? void 0 : t.name) || ((c = e.constructor) == null ? void 0 : c.name) || "Icon").replace("Componentic", "Ic")} />`;
    }
    return o === "children" ? "[ReactNode - Custom Content]" : "[ReactNode]";
  }
  return n;
}, p = (o) => JSON.stringify(o, r, 2);
export {
  r as jsonReplacer,
  p as stringifyProps
};
