const i = (l) => {
  const e = {
    large: "type-link-large",
    medium: "type-link-medium",
    small: "type-link-small"
  };
  return e[l] || e.medium;
};
export {
  i as getLinkSizeClass
};
