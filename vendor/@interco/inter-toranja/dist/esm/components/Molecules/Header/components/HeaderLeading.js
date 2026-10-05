import { jsxs as L, jsx as e } from "react/jsx-runtime";
import { HeaderType as i, HeaderVariant as N } from "../constants.js";
import { HeaderLogo as E } from "./HeaderLogo.js";
import { NeutralIconButton as M } from "../../../Atoms/NeutralIconButton/NeutralIconButton.js";
import { Avatar as s } from "../../Avatar/Avatar.js";
import { SIZE as o, STATE as d } from "../../../../utils/pattern.js";
const U = ({
  variant: T,
  type: n,
  isSkeleton: A,
  isSearchExpanded: u = !1,
  onBackClick: g,
  onCloseClick: m,
  avatar: r,
  logo: f,
  state: t,
  onTag: l
}) => {
  const I = n === i.Avatar || n === i.AvatarFlag || n === i.AvatarSegmentedControl, h = () => g ? /* @__PURE__ */ e(
    M,
    {
      icon: "ic_arrow_left",
      onClick: g,
      state: t,
      size: o.MEDIUM,
      "aria-label": "Voltar",
      onTag: l
    }
  ) : (T === N.ModalPages || u) && m ? /* @__PURE__ */ e(
    M,
    {
      icon: "ic_close",
      onClick: m,
      state: t,
      size: o.MEDIUM,
      "aria-label": u ? "Fechar busca" : "Fechar",
      onTag: l
    }
  ) : null, k = () => {
    if (!I || !r)
      return null;
    const c = t === d.SKELETON ? d.SKELETON : d.ENABLED, a = r.onTag ?? l;
    return r.variant === "initial" ? /* @__PURE__ */ e(
      s,
      {
        variant: "initial",
        size: o.MEDIUM,
        state: c,
        color: r.color,
        category: r.category,
        label: r.label,
        onClick: r.onClick,
        onTag: a
      }
    ) : r.variant === "picture" ? /* @__PURE__ */ e(
      s,
      {
        variant: "picture",
        size: o.MEDIUM,
        state: c,
        color: "image",
        src: r.src,
        alt: r.alt,
        onClick: r.onClick,
        onTag: a,
        onError: r.onError
      }
    ) : /* @__PURE__ */ e(
      s,
      {
        variant: "icon",
        size: o.MEDIUM,
        state: c,
        color: r.color,
        icon: r.icon,
        onClick: r.onClick,
        onTag: a
      }
    );
  }, p = () => n !== i.Logo ? null : A ? /* @__PURE__ */ e("div", { "data-testid": "header-logo-skeleton", className: "header__skeleton", children: /* @__PURE__ */ e(E, { logo: f }) }) : /* @__PURE__ */ e(E, { logo: f });
  return /* @__PURE__ */ L("div", { "data-testid": "header-leading", className: "header__leading-content", children: [
    h(),
    k(),
    p()
  ] });
};
export {
  U as HeaderLeading
};
