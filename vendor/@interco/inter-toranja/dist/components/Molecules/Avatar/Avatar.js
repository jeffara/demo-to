import { jsxs as D, jsx as a } from "react/jsx-runtime";
import { AvatarContent as E } from "./components/AvatarContent.js";
import { u as I } from "../../../useAvatar-DTSmcSAs.js";
import { Badge as S } from "../../Atoms/Badge/Badge.js";
import '../../../assets/Avatar.css';const F = (r) => {
  const {
    variant: s,
    state: i,
    iconAsset: o,
    src: l,
    alt: n,
    onError: d,
    badgeProps: t,
    isBadgeLarge: c,
    editIcon: m,
    flag: h,
    onEdit: v,
    shouldShowEdit: g,
    shouldShowFlag: u,
    shouldShowBadge: p,
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
        p && t ? /* @__PURE__ */ a(S, { ...t, "data-large": c ? "true" : "false" }) : null,
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
                variant: s,
                state: i,
                iconAsset: o,
                src: l,
                alt: n,
                onError: d,
                editIcon: m,
                flag: h,
                onEdit: v,
                shouldShowEdit: g,
                shouldShowFlag: u,
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
  F as Avatar
};
