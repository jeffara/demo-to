import { AvatarVariant as n } from "../types.js";
const o = "ic_orange", a = (r) => r.variant === n.Icon ? {
  iconAsset: r.icon,
  label: null,
  category: null,
  src: void 0,
  alt: void 0,
  onError: void 0
} : r.variant === n.Initial ? {
  iconAsset: o,
  label: r.label,
  category: r.category,
  src: void 0,
  alt: void 0,
  onError: void 0
} : {
  iconAsset: o,
  label: null,
  category: null,
  src: r.src,
  alt: r.alt,
  onError: r.onError
};
export {
  a as resolveContentProps
};
