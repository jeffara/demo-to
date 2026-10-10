import { jsxs as D, jsx as a } from "react/jsx-runtime";
import '../../../assets/components/Molecules/Avatar/Avatar.modules.css';/* empty css                    */
import { AvatarContent as E } from "./components/AvatarContent.js";
import { useAvatar as I } from "./hooks/useAvatar.js";
import { Badge as S } from "../../Atoms/Badge/Badge.js";
const P = (r) => {
  const {
    variant: i,
    state: o,
    iconAsset: s,
    src: l,
    alt: n,
    onError: d,
    badgeProps: t,
    isBadgeLarge: m,
    editIcon: c,
    flag: h,
    onEdit: v,
    shouldShowEdit: g,
    shouldShowFlag: p,
    shouldShowBadge: u,
    isDisabled: b,
    isInteractive: e,
    containerClassName: f,
    avatarClassName: C,
    flagClassName: N,
    initials: w,
    initialTypographyClassName: A,
    ariaLabel: x,
    handleClick: y,
    handleKeyDown: B
  } = I(r);
  return /* @__PURE__ */ D(
    "div",
    {
      className: f,
      onClick: y,
      onKeyDown: B,
      role: e ? "button" : void 0,
      tabIndex: e ? 0 : -1,
      "data-testid": "avatar-container",
      children: [
        u && t ? /* @__PURE__ */ a(S, { ...t, "data-large": m ? "true" : "false" }) : null,
        /* @__PURE__ */ a(
          "div",
          {
            "data-testid": "Avatar",
            className: C,
            "aria-disabled": b,
            "aria-label": x,
            children: /* @__PURE__ */ a(
              E,
              {
                variant: i,
                state: o,
                iconAsset: s,
                src: l,
                alt: n,
                onError: d,
                editIcon: c,
                flag: h,
                onEdit: v,
                shouldShowEdit: g,
                shouldShowFlag: p,
                flagClassName: N,
                initials: w,
                initialTypographyClassName: A
              }
            )
          }
        )
      ]
    }
  );
};
export {
  P as Avatar
};
