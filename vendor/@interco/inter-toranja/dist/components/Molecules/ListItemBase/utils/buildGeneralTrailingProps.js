const n = (t, e) => (e == null ? void 0 : e.type) ?? t, y = (t, e) => {
  const c = n(t, e);
  if (c) {
    if ((e == null ? void 0 : e.type) === c)
      return e;
    switch (c) {
      case "tagChevron":
        return { type: "tagChevron" };
      case "badge":
        return { type: "badge" };
      case "text":
        return { type: "text", textProps: { labelTrailing: "" } };
    }
  }
};
export {
  y as buildGeneralTrailingElementProps,
  n as resolveGeneralTrailingType
};
