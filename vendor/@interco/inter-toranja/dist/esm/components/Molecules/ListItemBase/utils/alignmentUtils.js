const n = (t) => ({
  leading: "leading--center--center",
  content: "content--left--center",
  trailing: `trailing--right--${t === "top-aligned" ? "top" : "center"}`
});
export {
  n as getAlignmentClasses
};
