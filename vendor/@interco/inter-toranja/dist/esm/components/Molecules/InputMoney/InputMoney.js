import { jsxs as $, Fragment as k, jsx as t } from "react/jsx-runtime";
import { useState as B, useMemo as H, useEffect as me } from "react";
import { InputTypeValue as de, InputCurrencyMask as pe, VariantNumeric as fe, ActionType as F } from "./types.js";
import { applyMask as ge } from "./utils/applyMask.js";
import he from "./utils/classNames.js";
import { getMessages as Ee } from "./utils/getMessages.js";
import G from "../../Atoms/Hints/Hints.js";
import { STATE as O, TAGGING_EVENT as ye, SIZE as j, HIERARCHY as w, ColorType as z } from "../../../utils/pattern.js";
import { useDebouncedCallback as _e } from "../../../utils/useDebouncedCallback.js";
import '../../../assets/components/Molecules/InputMoney/InputMoney.modules.css';/* empty css                        */
import { useReturnState as Me } from "./utils/hooks/useReturnState.js";
import { useValue as Ce } from "./utils/hooks/useValue.js";
import { useAdjustFont as Ne } from "./utils/hooks/useAdjustFont.js";
import { useClassNames as Ie } from "./utils/hooks/useClassNames.js";
import { useResolvedHints as be } from "./utils/hooks/useResolvedHints.js";
import { IconButton as P } from "../Button/IconButton/IconButton.js";
const Se = 12, Re = 3, Pe = (Y) => {
  const {
    state: I = O.ENABLED,
    defaultValue: y = 0,
    typeValue: u = de.Monetary,
    currency: c = pe.BRL,
    variantNumeric: W = fe.Decimal,
    minValue: l = 0,
    maxValue: r = 100,
    showButtons: o = !1,
    fixedDecrementValue: X = 20,
    fixedIncrementValue: _ = 100,
    hint: p,
    onChange: b,
    onDebouncedChange: Z,
    onTag: m
  } = Y, { isReadOnly: f, isDisabled: g, isError: h, isSkeleton: S, isNumberInteger: d } = Me(
    I,
    u,
    W
  ), { value: s, setValue: q, handleValueChange: J } = Ce(
    b,
    y,
    l,
    r,
    {
      typeValue: u,
      currency: c,
      isNumberInteger: d
    }
  ), { fontSize: R, inputRef: K, containerRef: Q, adjustFont: U, handleFocus: ee } = Ne(o), [a, T] = B(null), [V, v] = B(!1), { showButtonClass: ne, skeletonClass: M, getClassName: te, disabledClass: oe } = Ie(
    g,
    !!(h || a),
    f,
    S,
    o
  ), C = H(
    () => (e) => ge(e, {
      typeValue: u,
      currency: c,
      isNumberInteger: d
    }),
    [u, c, d]
  ), E = H(
    () => Ee({
      typeValue: u,
      currency: c,
      minValue: l,
      maxValue: r,
      isNumberInteger: d,
      fixedIncrementValue: _,
      isReadOnly: f,
      showButtons: o,
      defaultValue: y
    }),
    [l, r, c, _, f, o, y]
  ), re = _e(Z), A = h || a !== null, { errorMessages: se, infoHints: ae, shouldShowErrors: ie, shouldShowInfoHints: le } = be({
    hint: p,
    isError: h,
    validationError: a
  });
  if (me(() => {
    if (!A) {
      v(!1);
      return;
    }
    if (!m || V)
      return;
    const e = [];
    a && e.push(a), p && e.push(...p), m((n) => ({
      ...n,
      name: ye.ERROR_VIEW,
      ComponentProperties: {
        component_name: "InputMoney",
        value: String(s),
        buttons: o,
        error: e.join(",")
      }
    })), v(!0);
  }, [A, V, p, m, o, a, s]), E.validationError)
    return E.validationError;
  const D = (e) => {
    if (m) {
      const n = {
        ...e().ComponentProperties,
        nested_in: "InputMoney"
      };
      m((N) => ({
        ...N,
        ...e(),
        ComponentProperties: {
          ...n
        }
      }));
    }
  }, ue = (e) => {
    const n = e.target.value.replace(/[^\d]/g, "").padStart(Re, "0");
    if (n.length > Se)
      return;
    const N = `${n.slice(0, -2)}.${n.slice(-2)}`, i = d ? parseInt(n) : parseFloat(N);
    T(i < l ? E.errorMinMessage : i > r ? E.errorMaxMessage : null), n.length <= r.toString().length && s !== i && U(n), q(i);
    const L = C(i);
    b(i, L), I === O.ENABLED && re(i, L);
  }, ce = () => ie ? /* @__PURE__ */ t(G, { className: "input-money__error-hints", hints: se, type: z.Error }) : le ? /* @__PURE__ */ t(G, { className: "input-money__info-hints", hints: ae, type: z.Info }) : /* @__PURE__ */ t(k, {}), x = (e, n) => {
    J(e, n), T(null);
  };
  return /* @__PURE__ */ $(k, { children: [
    /* @__PURE__ */ $(
      "div",
      {
        className: `input-money${te()}${ne}`,
        ref: Q,
        "data-testid": "container-input",
        children: [
          o && /* @__PURE__ */ t("div", { className: `input-money__button${M}`, children: /* @__PURE__ */ t(
            P,
            {
              "data-testid": "decrement__button",
              hierarchy: w.SECONDARY,
              disabled: s <= l || g,
              icon: "ic_remove",
              onClick: () => x(F.DECREMENT, X),
              onTag: (e) => {
                D(e);
              },
              size: j.SMALL
            }
          ) }),
          /* @__PURE__ */ t(
            "div",
            {
              onFocus: ee,
              className: "input-money__container-input",
              tabIndex: 0,
              "aria-label": "Money Input",
              role: "button",
              children: S ? /* @__PURE__ */ t(
                "div",
                {
                  style: { fontSize: `${R}px` },
                  className: `type-display-medium input-money__container-input${M}`,
                  children: C(s)
                }
              ) : /* @__PURE__ */ t(
                "input",
                {
                  className: `type-display-medium input-money__container-input__input${oe}
                ${h || a ? he.ERROR : ""}`,
                  disabled: g,
                  onChange: ue,
                  readOnly: f,
                  ref: K,
                  tabIndex: -1,
                  style: { fontSize: `${R}px` },
                  value: C(s),
                  inputMode: "numeric",
                  "data-testid": "input-money",
                  maxLength: r,
                  minLength: l
                }
              )
            }
          ),
          o && /* @__PURE__ */ t("div", { className: `input-money__button${M}`, children: /* @__PURE__ */ t(
            P,
            {
              color: "var(color-icon-brand-strong)",
              "data-testid": "increment__button",
              disabled: s >= r || g,
              hierarchy: w.SECONDARY,
              icon: "ic_add",
              onClick: () => x(F.INCREMENT, _),
              onTag: (e) => {
                D(e);
              },
              size: j.SMALL
            }
          ) })
        ]
      }
    ),
    ce()
  ] });
};
export {
  Pe as InputMoney
};
