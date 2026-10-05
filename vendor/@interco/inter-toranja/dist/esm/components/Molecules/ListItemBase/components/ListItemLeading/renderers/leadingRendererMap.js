import { renderAvatar as t } from "./renderAvatar.js";
import { renderCheckbox as m } from "./renderCheckbox.js";
import { renderFlag as a } from "./renderFlag.js";
import { renderIcon as p } from "./renderIcon.js";
import { renderImage as i } from "./renderImage.js";
import { renderIndicator as d } from "./renderIndicator.js";
import { renderNumberText as c } from "./renderNumberText.js";
import { renderPaymentMethod as s } from "./renderPaymentMethod.js";
import { renderSlot as f } from "./renderSlot.js";
const n = {
  avatar: (r, e) => t(r.avatarProps, e),
  checkbox: (r, e) => m(r.checkboxProps, e),
  flag: (r, e, o) => a(r.flagProps, e, o),
  icon: (r, e, o) => p(r.iconProps, e, o),
  image: (r, e, o) => i(r.imageProps, e, o),
  indicator: (r, e, o) => d(r.indicatorProps, e, o),
  numberText: (r, e, o) => c(r.numberTextProps, e, o),
  paymentMethod: (r, e, o) => s(r.paymentMethodProps, e, o),
  slot: (r, e, o) => f(r.slotProps, e, o),
  none: () => null
}, v = (r) => n[r] || n.none;
export {
  v as getLeadingRenderer
};
