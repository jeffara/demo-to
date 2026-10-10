import { jsxs as O, jsx as i } from "react/jsx-runtime";
import { useState as y, useRef as q, useEffect as G } from "react";
import { StepperState as t, StepperMask as N } from "./types.js";
import { IconButton as V } from "../Button/IconButton/IconButton.js";
import '../../../assets/components/Molecules/Stepper/Stepper.modules.css';/* empty css                     */
import { motion as H } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const J = (u, l, n) => Math.min(Math.max(u, l), n), ee = (u) => {
  const {
    enableInput: l,
    max: n,
    min: s,
    hasBorder: F = !0,
    state: a,
    step: S = 1,
    mask: $,
    maskType: B,
    value: g,
    onValueChange: m,
    onTag: v
  } = u, [E, M] = y(s), [D, k] = y(1), [f, b] = y(!1), c = q(null), x = g !== void 0, o = x ? g : E, R = F ? "" : " stepper__field--borderless", _ = (e) => {
    const r = J(e, s, n);
    x || M(r), m == null || m(r);
  }, w = (e) => {
    switch (e) {
      case t.Error:
        return t.Enabled;
      case t.Disabled:
        return t.Disabled;
      case t.Skeleton:
        return t.Skeleton;
      case t.Enabled:
      default:
        return t.Enabled;
    }
  }, C = (e) => {
    if (v) {
      const r = {
        ...e().ComponentProperties,
        nested_in: "Stepper"
      };
      v((h) => ({
        ...h,
        ...e(),
        ComponentProperties: {
          ...r
        }
      }));
    }
  }, T = () => {
    const e = o + S;
    _(e >= n ? n : e), k(1), b(!0);
  }, z = () => {
    const e = o - S;
    _(e <= s ? s : e), k(0), b(!0);
  }, U = (e) => {
    b(!1);
    const r = e.target.value.replace(/[^\d]/g, "").padStart(3, "0");
    if (r) {
      const h = `${r.slice(0, -2)}.${r.slice(-2)}`;
      let p = parseFloat(h);
      p > n ? p = n : p < s && (p = s), _(p);
    }
  }, j = (e) => {
    if ($)
      switch (B) {
        case N.BRL:
          return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(e);
        case N.USD:
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(e);
        default:
          return e.toString();
      }
    return e.toString();
  }, A = () => {
    c.current && c.current.focus();
  }, I = j(o), d = a === t.Skeleton, L = d ? "" : I, P = d ? 1 : Math.max(I.length, 1);
  return G(() => {
    c.current && l && c.current.focus();
  }, [l, o]), /* @__PURE__ */ O(
    "div",
    {
      className: `stepper stepper__${a}${l ? " stepper--with-input" : ""}`,
      "data-testid": "stepper",
      children: [
        /* @__PURE__ */ i("div", { className: "stepper__button", children: /* @__PURE__ */ i(
          V,
          {
            "data-testid": "decrement__button",
            disabled: o <= s || a === t.Disabled,
            hierarchy: "secondary",
            icon: "ic_remove",
            onClick: z,
            state: w(a),
            onTag: (e) => {
              C(e);
            },
            size: "small"
          }
        ) }),
        /* @__PURE__ */ i(
          "div",
          {
            role: d ? void 0 : "button",
            className: `content__stepper__input stepper__field stepper__field--${a}${R}`,
            tabIndex: d ? -1 : 0,
            "aria-label": "Stepper Input",
            "aria-hidden": d,
            onFocus: A,
            children: /* @__PURE__ */ i(
              H.div,
              {
                className: "stepper__value",
                animate: f && { opacity: 1, y: 0 },
                exit: f ? { y: D === 1 ? 20 : -20, opacity: 0 } : {},
                initial: f ? { y: D === 0 ? 20 : -20, opacity: 0 } : {},
                transition: { duration: 0.3 },
                children: /* @__PURE__ */ i(
                  "input",
                  {
                    className: "stepper__value-input type-label-large-regular",
                    disabled: a === t.Disabled,
                    onChange: U,
                    readOnly: !l,
                    ref: c,
                    size: P,
                    tabIndex: -1,
                    value: L
                  }
                )
              },
              o
            )
          }
        ),
        /* @__PURE__ */ i("div", { className: "stepper__button", children: /* @__PURE__ */ i(
          V,
          {
            color: "var(--color-icon-brand-strong)",
            "data-testid": "increment__button",
            disabled: o >= n || a === t.Disabled,
            hierarchy: "secondary",
            icon: "ic_add",
            onClick: T,
            state: w(a),
            onTag: (e) => {
              C(e);
            },
            size: "small"
          }
        ) })
      ]
    }
  );
};
export {
  ee as Stepper
};
