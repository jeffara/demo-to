import { SIDEBAR_FOOTER_FLYOUT_ID as t } from "../constants.js";
const i = (e, l) => {
  const [n, ...o] = e;
  if (!n)
    return null;
  const s = (r) => ({
    id: r.id,
    label: r.label,
    onClick: () => {
      l(r);
    }
  });
  return [s(n), ...o.map(s)];
}, p = (e, l, n) => {
  const o = i(e.children ?? [], n);
  return o || [
    {
      id: e.id,
      label: e.label,
      icon: e.icon,
      onClick: () => {
        l(e);
      }
    }
  ];
}, a = (e, l) => [
  {
    id: t,
    label: e.label,
    icon: e.icon,
    onClick: l
  }
];
export {
  i as mapSidebarChildrenToMenuPopupItems,
  a as resolveCollapsedFooterMenuPopupItems,
  p as resolveCollapsedMenuPopupItems
};
