import { AvatarVariant as a, InitialCategory as r } from "../Avatar/types.js";
const l = (t, i) => t ? t.avatarVariant === a.Initial ? {
  variant: a.Initial,
  color: "soft",
  category: t.category ?? r.Person,
  label: i
} : {
  variant: a.Picture,
  color: "image",
  src: t.src,
  alt: t.alt
} : null;
export {
  l as useMenuItemAvatar
};
