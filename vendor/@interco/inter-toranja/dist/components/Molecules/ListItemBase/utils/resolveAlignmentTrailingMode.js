const t = ({
  explicitMode: e,
  trailingType: n,
  hasParagraphTrailing: r
}) => e || (n === "badge" || n === "text" && r ? "top-aligned" : "center-aligned");
export {
  t as resolveAlignmentTrailingMode
};
