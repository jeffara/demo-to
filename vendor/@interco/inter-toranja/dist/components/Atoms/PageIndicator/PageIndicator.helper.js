import { MODIFIER_CLASS as o } from "./types.js";
const n = ({
  index: r,
  maxVisibleBullets: t,
  isPossibleInfinite: i,
  balanceRestLeft: e,
  balanceRestRight: f
}) => i ? r === 1 && e >= 2 ? o.OVERFLOW : r === t && f >= 2 ? o.OVERFLOW : "" : "", u = ({
  index: r,
  selected: t,
  balanceRestLeft: i,
  balanceRestRight: e
}) => t <= 2 ? r === t ? o.ACTIVE : "" : r === 3 && i >= 2 && e >= 2 ? o.ACTIVE : r === 4 && e === 1 ? o.ACTIVE : r === 5 && e === 0 ? o.ACTIVE : "", A = ({
  index: r,
  selected: t,
  isPossibleInfinite: i,
  balanceRestLeft: e,
  balanceRestRight: f
}) => i ? u({
  index: r,
  selected: t,
  balanceRestLeft: e,
  balanceRestRight: f
}) : r === t ? o.ACTIVE : "", c = (r, t, i) => r !== t || i ? "" : o.OLD_ACTIVE, v = (r) => {
  const t = n(r), i = A(r), e = c(
    r.index,
    r.oldActiveIndex,
    !!i
  );
  return `${t}${i}${e}`;
};
export {
  v as resolveBulletModifier
};
