import { jsxs as D, jsx as a } from "react/jsx-runtime";
import '../../../assets/components/Molecules/Avatar/Avatar.modules.css';/* empty css                    */
import { AvatarContent as E } from "./components/AvatarContent.js";
import { useAvatar as I } from "./hooks/useAvatar.js";
import { Badge as S } from "../../Atoms/Badge/Badge.js";
const F = (r) => {
  const {
    variant: o,
    state: i,
    iconAsset: s,
    src: l,
    alt: n,
    onError: d,
    badgeProps: t,
    isBadgeLarge: c,
    editIcon: m,
    flag: v,
    onEdit: h,
    shouldShowEdit: g,
    shouldShowFlag: u,
    shouldShowBadge: b,
    isDisabled: f,
    isInteractive: e,
    containerClassName: p,
    avatarClassName: C,
    flagClassName: w,
    initials: A,
    ariaLabel: N,
    handleClick: x,
    handleKeyDown: B
  } = I(r);
  return /* @__PURE__ */ D(
    "div",
    {
      className: p,
      onClick: x,
      onKeyDown: B,
      role: e ? "button" : void 0,
      tabIndex: e ? 0 : -1,
      "data-testid": "avatar-container",
      children: [
        b && t ? /* @__PURE__ */ a(S, { ...t, "data-large": c ? "true" : "false" }) : null,
        /* @__PURE__ */ a(
          "div",
          {
            "data-testid": "Avatar",
            className: C,
            "aria-disabled": f,
            "aria-label": N,
            children: /* @__PURE__ */ a(
              E,
              {
                variant: o,
                state: i,
                iconAsset: s,
                src: l,
                alt: n,
                onError: d,
                editIcon: m,
                flag: v,
                onEdit: h,
                shouldShowEdit: g,
                shouldShowFlag: u,
                flagClassName: w,
                initials: A
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
