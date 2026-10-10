import { classNamesMerge as e } from "../../../../utils/classNamesMerge.js";
import { SIZE as t } from "../../../../utils/pattern.js";
const m = {
  [t.SMALL]: "type-label-small-bold",
  [t.MEDIUM]: "type-label-medium-bold",
  [t.LARGE]: "type-title-small"
}, g = (a) => m[a], n = () => e("avatar", "avatar__container"), i = ({
  variant: a,
  size: l,
  state: r,
  color: s
}) => e("avatar", `avatar__${a}--${l}--${r}--${s}`), p = (a) => e("avatar__flag", {
  "avatar__flag--medium": a === t.MEDIUM,
  "avatar__flag--large": a === t.LARGE
});
export {
  i as getAvatarClassName,
  n as getContainerClassName,
  p as getFlagClassName,
  g as getInitialTypographyClassName
};
