import { jsxs as V, jsx as a } from "react/jsx-runtime";
import { useState as b, useRef as j, useEffect as A } from "react";
import { StepperState as t, StepperMask as w } from "./types.js";
import { IconButton as x } from "../Button/IconButton/IconButton.js";
import { m as L } from "../../../proxy-BBnpZ6GV.js";
import '../../../assets/Stepper.css';const J = (C) => {
  const { enableInput: u, max: i, min: r, hasBorder: I = !0, state: n, step: h = 1, mask: N, maskType: F, onTag: y } = C, [s, o] = b(r), [S, g] = b(1), [m, f] = b(!1), c = j(null), $ = I ? "" : " stepper__field--borderless", v = (e) => {
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
  }, D = (e) => {
    if (y) {
      const d = {
        ...e().ComponentProperties,
        nested_in: "Stepper"
      };
      y((_) => ({
        ..._,
        ...e(),
        ComponentProperties: {
          ...d
        }
      }));
    }
  }, B = () => {
    const e = s + h;
    e >= i ? o(i) : o(e), g(1), f(!0);
  }, E = () => {
    const e = s - h;
    e <= r ? o(r) : o(e), g(0), f(!0);
  }, R = (e) => {
    f(!1);
    const d = e.target.value.replace(/[^\d]/g, "").padStart(3, "0");
    if (d) {
      const _ = `${d.slice(0, -2)}.${d.slice(-2)}`;
      let p = parseFloat(_);
      p > i ? p = i : p < r && (p = r), o(p);
    }
  }, T = (e) => {
    if (N)
      switch (F) {
        case w.BRL:
          return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(e);
        case w.USD:
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(e);
        default:
          return e.toString();
      }
    return e.toString();
  }, z = () => {
    c.current && c.current.focus();
  }, k = T(s), l = n === t.Skeleton, M = l ? "" : k, U = l ? 1 : Math.max(k.length, 1);
  return A(() => {
    c.current && u && c.current.focus();
  }, [u, s]), /* @__PURE__ */ V(
    "div",
    {
      className: `stepper stepper__${n}${u ? " stepper--with-input" : ""}`,
      "data-testid": "stepper",
      children: [
        /* @__PURE__ */ a("div", { className: "stepper__button", children: /* @__PURE__ */ a(
          x,
          {
            "data-testid": "decrement__button",
            disabled: s <= r || n === t.Disabled,
            hierarchy: "secondary",
            icon: "ic_remove",
            onClick: E,
            state: v(n),
            onTag: (e) => {
              D(e);
            },
            size: "small"
          }
        ) }),
        /* @__PURE__ */ a(
          "div",
          {
            role: l ? void 0 : "button",
            className: `content__stepper__input stepper__field stepper__field--${n}${$}`,
            tabIndex: l ? -1 : 0,
            "aria-label": "Stepper Input",
            "aria-hidden": l,
            onFocus: z,
            children: /* @__PURE__ */ a(
              L.div,
              {
                className: "stepper__value",
                animate: m && { opacity: 1, y: 0 },
                exit: m ? { y: S === 1 ? 20 : -20, opacity: 0 } : {},
                initial: m ? { y: S === 0 ? 20 : -20, opacity: 0 } : {},
                transition: { duration: 0.3 },
                children: /* @__PURE__ */ a(
                  "input",
                  {
                    className: "stepper__value-input",
                    disabled: n === t.Disabled,
                    onChange: R,
                    readOnly: !u,
                    ref: c,
                    size: U,
                    tabIndex: -1,
                    value: M
                  }
                )
              },
              s
            )
          }
        ),
        /* @__PURE__ */ a("div", { className: "stepper__button", children: /* @__PURE__ */ a(
          x,
          {
            color: "var(--color-icon-brand-strong)",
            "data-testid": "increment__button",
            disabled: s >= i || n === t.Disabled,
            hierarchy: "secondary",
            icon: "ic_add",
            onClick: B,
            state: v(n),
            onTag: (e) => {
              D(e);
            },
            size: "small"
          }
        ) })
      ]
    }
  );
};
export {
  J as Stepper
};
