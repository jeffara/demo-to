import { useState as T, useRef as c, useId as N, useEffect as _, useLayoutEffect as S, cloneElement as Q } from "react";
import { findFirstInteractiveIndex as H, isMenuPopupItemInteractive as F, getVerticalNavigationDirection as ee, findNextInteractiveIndex as ne, findLastInteractiveIndex as te } from "../utils/menuPopupNavigation.js";
import { computeMenuPopupPosition as oe } from "../utils/menuPopupPosition.js";
import { IconColors as B } from "../../../Atoms/Icon/constants/iconColors.js";
import { useClickOutside as re } from "../../BottomSheet/hooks/useClickOutside.js";
import { classNamesMerge as u } from "../../../../utils/classNamesMerge.js";
import { isFinePointerHover as se } from "../../../../utils/is-fine-pointer-hover.js";
import { SIZE as d, TAGGING_EVENT as x } from "../../../../utils/pattern.js";
const ie = "Menu", ue = 16, le = "Loading", pe = (f, E, r) => {
  const i = f.props.onClick;
  return Q(f, {
    ...E,
    onClick: (m) => {
      i == null || i(m), r();
    }
  });
}, Ie = (f) => {
  const {
    children: E,
    items: r,
    size: i = d.MEDIUM,
    isOpen: m,
    defaultOpen: G = !1,
    placement: A = "bottom-start",
    offset: D = ue,
    onToggle: I,
    onTag: p,
    ariaLabel: U = ie,
    openOnHover: R = !1
  } = f, P = m !== void 0, [K, z] = T(G), t = P ? m : K, [W, M] = T(0), [V, $] = T({ top: 0, left: 0 }), C = c(null), v = c(null), w = c([]), L = c(!1), l = c(0), g = `menu-popup-trigger-${N().replace(/:/g, "")}`, O = `menu-popup-menu-${N().replace(/:/g, "")}`, a = (e) => {
    t !== e && (P || z(e), I == null || I(e));
  }, h = () => {
    var e;
    a(!1), (e = document.getElementById(g)) == null || e.focus();
  }, k = () => {
    l.current !== 0 && (window.clearTimeout(l.current), l.current = 0);
  }, X = () => {
    !R || !se() || (k(), a(!0));
  }, Y = () => {
    R && (k(), l.current = window.setTimeout(() => {
      a(!1), l.current = 0;
    }, 120));
  };
  _(() => {
    t || k();
  }, [t]), _(
    () => () => {
      window.clearTimeout(l.current);
    },
    []
  ), re({
    ref: v,
    extraRef: C,
    isActive: t,
    onClickOutside: () => {
      a(!1);
    }
  }), _(() => {
    !t || !p || p((e) => ({
      ...e,
      name: x.DISPLAY,
      ComponentProperties: {
        component_name: "MenuPopup"
      }
    }));
  }, [t, p]), _(() => {
    if (!t)
      return;
    const e = (n) => {
      n.key === "Escape" && (n.preventDefault(), h());
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e);
    };
  }, [t, g]), S(() => {
    var n;
    if (!t) {
      L.current = !1;
      return;
    }
    if (L.current)
      return;
    const e = H(r);
    e < 0 || (M(e), (n = w.current[e]) == null || n.focus(), L.current = !0);
  }, [t, r]), S(() => {
    if (!t)
      return;
    const e = () => {
      const n = C.current, o = v.current;
      !n || !o || $(
        oe({
          trigger: n.getBoundingClientRect(),
          panelHeight: o.offsetHeight,
          panelWidth: o.offsetWidth,
          placement: A,
          offset: D,
          viewport: { width: window.innerWidth, height: window.innerHeight }
        })
      );
    };
    return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
      window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
    };
  }, [t, D, A]);
  const Z = () => {
    a(!t);
  }, j = (e) => {
    F(e) && (p && p((n) => ({
      ...n,
      name: x.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "MenuPopup",
        label: e.label
      }
    })), e.onClick(), h());
  }, b = (e) => {
    var n;
    M(e), (n = w.current[e]) == null || n.focus();
  }, q = (e, n) => {
    if (e.key === "Tab") {
      e.preventDefault(), h();
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      F(r[n]) || e.preventDefault();
      return;
    }
    const o = ee(e.key);
    if (o) {
      e.preventDefault(), b(ne(r, n, o));
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      const s = H(r);
      s >= 0 && b(s);
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      const s = te(r);
      s >= 0 && b(s);
    }
  }, J = r.map((e, n) => {
    const o = !!e.disabled, s = !!e.skeleton;
    return {
      id: e.id,
      label: e.label,
      icon: e.icon,
      iconColor: o ? B.Neutral.Secondary : B.Neutral.Primary,
      isDisabled: o,
      isSkeleton: s,
      itemClasses: u("menu-popup__item", {
        "menu-popup__item--disabled": o,
        "menu-popup__item--skeleton": s
      }),
      labelClasses: u("menu-popup__label", "type-body-medium-bold", {
        "menu-popup__label--disabled": o
      }),
      tabIndex: n === W ? 0 : -1,
      ariaLabel: s ? le : void 0,
      isAriaDisabled: o || s,
      handleClick: () => {
        j(e);
      },
      handleKeyDown: (y) => {
        q(y, n);
      },
      setItemRef: (y) => {
        w.current[n] = y;
      }
    };
  });
  return {
    shouldRender: r.length > 0,
    isOpen: t,
    ariaLabel: U,
    triggerId: g,
    menuId: O,
    rootClasses: u("menu-popup"),
    triggerClasses: u("menu-popup__trigger"),
    panelClasses: u("menu-popup__panel", {
      "menu-popup__panel--small": i === d.SMALL,
      "menu-popup__panel--medium": i === d.MEDIUM,
      "menu-popup__panel--large": i === d.LARGE,
      "menu-popup__panel--extraLarge": i === d.EXTRA_LARGE
    }),
    listClasses: u("menu-popup__list"),
    iconClasses: u("menu-popup__icon"),
    skeletonClasses: u("menu-popup__skeleton"),
    trigger: pe(
      E,
      {
        id: g,
        "aria-haspopup": "menu",
        "aria-expanded": t,
        "aria-controls": O
      },
      Z
    ),
    triggerRef: C,
    panelRef: v,
    panelStyle: V,
    viewItems: J,
    handleHoverOpen: X,
    handleHoverClose: Y
  };
};
export {
  Ie as useMenuPopup
};
