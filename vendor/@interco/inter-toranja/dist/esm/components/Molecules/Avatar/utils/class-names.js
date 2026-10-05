import { classNamesMerge as t } from "../../../../utils/classNamesMerge.js";
import { SIZE as r } from "../../../../utils/pattern.js";
const g = () => t("avatar", "avatar__container"), l = ({
  variant: a,
  size: e,
  state: s,
  color: m
}) => t("avatar", `avatar__${a}--${e}--${s}--${m}`), v = (a) => t("avatar__flag", {
  "avatar__flag--medium": a === r.MEDIUM,
  "avatar__flag--large": a === r.LARGE
});
export {
  l as getAvatarClassName,
  g as getContainerClassName,
  v as getFlagClassName
};
