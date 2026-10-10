const o = (e) => {
  const n = e.map((l) => ({
    id: l.id,
    label: l.label,
    icon: l.icon,
    disabled: l.disabled,
    onClick: l.onSelect
  }));
  return [n[0], ...n.slice(1)];
};
export {
  o as mapTableIconButtonMenuItems
};
