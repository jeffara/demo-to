const s = (e, a) => e.map((l, b) => ({
  value: b,
  label: l.label,
  isDisabled: !!l.disabled,
  isSelected: a !== void 0 && (l.value === a || l.label === a)
}));
export {
  s as mapSelectPanelOptions
};
