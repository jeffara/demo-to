import { jsxs as N, Fragment as _, jsx as a } from "react/jsx-runtime";
import { AvatarVariant as l } from "../types.js";
import { AvatarEditButton as h } from "./AvatarEditButton.js";
import { AvatarFlag as A } from "./AvatarFlag.js";
import { classNamesMerge as C } from "../../../../utils/classNamesMerge.js";
import { Icon as I } from "../../../Atoms/Icon/Icon.js";
import { IconColors as g } from "../../../Atoms/Icon/constants/iconColors.js";
const x = ({
  variant: r,
  state: i,
  iconAsset: e,
  src: n,
  alt: o,
  onError: s,
  initials: c,
  initialTypographyClassName: t
}) => {
  switch (r) {
    case l.Icon:
      return /* @__PURE__ */ a("div", { className: "avatar__icon", "data-testid": "icon", children: /* @__PURE__ */ a(I, { asset: e, state: i, color: g.Neutral.Primary }) });
    case l.Initial:
      return /* @__PURE__ */ a("div", { className: C("avatar__initial", t), "data-testid": "initial", children: c });
    case l.Picture:
      return /* @__PURE__ */ a(
        "img",
        {
          src: n,
          alt: o,
          onError: s,
          className: "avatar__picture",
          "data-testid": "avatarPicture"
        }
      );
    default:
      return null;
  }
}, B = ({
  variant: r,
  state: i,
  iconAsset: e,
  src: n,
  alt: o,
  onError: s,
  editIcon: c,
  flag: t,
  onEdit: m,
  shouldShowEdit: d,
  shouldShowFlag: u,
  flagClassName: v,
  initials: p,
  initialTypographyClassName: f
}) => /* @__PURE__ */ N(_, { children: [
  d && m ? /* @__PURE__ */ a(h, { onClick: m, editIcon: c }) : null,
  u && t ? /* @__PURE__ */ a(A, { flag: t, className: v }) : null,
  x({
    variant: r,
    state: i,
    iconAsset: e,
    src: n,
    alt: o,
    onError: s,
    initials: p,
    initialTypographyClassName: f
  })
] });
export {
  B as AvatarContent
};
