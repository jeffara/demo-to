import { jsxs as S, jsx as t } from "react/jsx-runtime";
import '../../../assets/components/Molecules/Snackbar/Snackbar.modules.css';/* empty css                      */
import y from "./SnackbarButton/SnackbarButton.js";
import { TAG_TYPE as e } from "./types.js";
import M from "./utils/useSnackbarTimeout.js";
import { IconColors as P } from "../../Atoms/Icon/constants/iconColors.js";
import { Icon as R } from "../../Atoms/Icon/Icon.js";
import { Signal as v } from "../../Atoms/Signal/Signal.js";
import { Text as k } from "../../Atoms/Text/Text.js";
import { TextWeight as A, TextSize as E, TextType as h } from "../../Atoms/Text/types.js";
import { FEEDBACK as w, TAGGING_EVENT as p, STATE as s, SIZE as U, VARIANT as K } from "../../../utils/pattern.js";
const Y = ({
  variant: i,
  IconSvg: n
}) => i !== K.DEFAULT ? /* @__PURE__ */ t("div", { className: "snackbar__signal", children: /* @__PURE__ */ t(v, { state: s.ENABLED, variant: i }) }) : n ? /* @__PURE__ */ t("div", { className: "snackbar__icon", children: /* @__PURE__ */ t(n, {}) }) : null, Q = (i) => {
  const {
    variant: n = w.SUCCESS,
    title: o,
    description: r,
    IconSvg: C,
    onClickButtonSnackbar: T,
    showButtonSnackbar: D,
    labelButton: c,
    show: b,
    onClose: f,
    onTag: _
  } = i, B = 400, x = 6e3, I = D && T && c, g = I ? "--with-button" : "", { isRendered: N, classAnimation: L, hideSnackbar: u } = M({
    show: b,
    displayDuration: x,
    animationDuration: B,
    onClose: f
  }), l = (a, d) => {
    _ && _((O) => ({
      ...O,
      name: a,
      ComponentProperties: {
        component_name: "Snackbar",
        ...d
      }
    }));
  }, m = (a) => ({
    [e.DISPLAY]: {
      variant: n,
      label_snackbar_button: c,
      icon: n,
      title: o,
      description: r,
      show_snackbar_dismiss: !0,
      state_snackbar_dismiss: s.ENABLED
    },
    [e.BUTTON]: {
      label: c,
      title: o,
      description: r
    },
    [e.DISMISS]: {
      title: o,
      description: r
    }
  })[a] || {};
  if (N) {
    if (N && b) {
      const a = m(e.DISPLAY);
      l(p.DISPLAY, a);
    }
  } else return null;
  return /* @__PURE__ */ S("div", { "data-testid": "container-snackbar", className: L, children: [
    /* @__PURE__ */ t(Y, { variant: n, IconSvg: C }),
    /* @__PURE__ */ S("div", { className: `snackbar__texts${g}`, children: [
      o && /* @__PURE__ */ t(
        k,
        {
          as: "p",
          "aria-label": "title",
          textType: h.Body,
          textSize: E.Medium,
          textWeight: A.Bold,
          state: s.ENABLED,
          children: o
        }
      ),
      /* @__PURE__ */ t(
        k,
        {
          as: "p",
          "aria-label": "description",
          textType: h.Body,
          textSize: E.Medium,
          textWeight: A.Regular,
          state: s.ENABLED,
          children: r
        }
      )
    ] }),
    /* @__PURE__ */ S("div", { className: "snackbar__actions", children: [
      I && /* @__PURE__ */ t("div", { className: "snackbar__actions__button", children: /* @__PURE__ */ t(
        y,
        {
          onClick: () => {
            const a = m(e.BUTTON);
            l(p.INTERACTION_CLICK, a), T();
          },
          labelButton: c
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          className: "snackbar__actions__close",
          tabIndex: 0,
          onClick: () => {
            const a = m(e.DISMISS);
            l(p.INTERACTION_CLICK, a), u();
          },
          onKeyDown: (a) => {
            if (a.key === "Enter") {
              const d = m(e.DISMISS);
              l(p.INTERACTION_CLICK, d), u();
            }
          },
          "aria-label": "Close Snackbar",
          children: /* @__PURE__ */ t("span", { "data-testid": "close-icon", children: /* @__PURE__ */ t(
            R,
            {
              asset: "ic_close",
              size: U.SMALL,
              state: s.ENABLED,
              color: P.Neutral.Primary
            }
          ) })
        }
      )
    ] })
  ] });
};
export {
  Q as Snackbar
};
