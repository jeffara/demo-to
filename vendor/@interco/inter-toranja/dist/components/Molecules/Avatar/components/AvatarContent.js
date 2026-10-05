import { jsxs as f, Fragment as x, jsx as t } from "react/jsx-runtime";
import { AvatarVariant as l } from "../types.js";
import { AvatarEditButton as _ } from "./AvatarEditButton.js";
import { AvatarFlag as h } from "./AvatarFlag.js";
import { Text as N } from "../../../Atoms/Text/Text.js";
import { TextType as T, TextSize as y } from "../../../Atoms/Text/types.js";
import { Icon as A } from "../../../Atoms/Icon/Icon.js";
import { IconColors as C } from "../../../Atoms/Icon/constants/iconColors.js";
const I = ({
  variant: a,
  state: e,
  iconAsset: i,
  src: o,
  alt: n,
  onError: c,
  initials: r
}) => {
  switch (a) {
    case l.Icon:
      return /* @__PURE__ */ t("div", { className: "avatar__icon", "data-testid": "icon", children: /* @__PURE__ */ t(A, { asset: i, state: e, color: C.Neutral.Primary }) });
    case l.Initial:
      return /* @__PURE__ */ t("div", { className: "avatar__initial", "data-testid": "initial", children: r ? /* @__PURE__ */ t(N, { textSize: y.Large, textType: T.Body, children: r }) : null });
    case l.Picture:
      return /* @__PURE__ */ t(
        "img",
        {
          src: o,
          alt: n,
          onError: c,
          className: "avatar__picture",
          "data-testid": "avatarPicture"
        }
      );
    default:
      return null;
  }
}, k = ({
  variant: a,
  state: e,
  iconAsset: i,
  src: o,
  alt: n,
  onError: c,
  editIcon: r,
  flag: m,
  onEdit: s,
  shouldShowEdit: d,
  shouldShowFlag: u,
  flagClassName: p,
  initials: v
}) => /* @__PURE__ */ f(x, { children: [
  d && s ? /* @__PURE__ */ t(_, { onClick: s, editIcon: r }) : null,
  u && m ? /* @__PURE__ */ t(h, { flag: m, className: p }) : null,
  I({
    variant: a,
    state: e,
    iconAsset: i,
    src: o,
    alt: n,
    onError: c,
    initials: v
  })
] });
export {
  k as AvatarContent
};
