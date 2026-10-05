import { useState as V, useRef as q, useCallback as u, useLayoutEffect as Q, useEffect as C } from "react";
import { DateType as x, PhoneType as X, MaskType as n } from "../utils/inputEnums.js";
import { handleMask as dt, shouldKeepInputFocused as ft } from "../utils/inputUtils.js";
import { TAGGING_EVENT as vt } from "../../../../utils/pattern.js";
const Et = "Insira um e-mail válido.", Pt = "Número de telefone inválido.", mt = "CPF inválido.", ht = "Data inválida.", gt = "CEP inválido.", Mt = (i, f) => ({
  [n.PHONE]: i === X.BR ? /^\(\d{2}\)\s?\d{4,5}-\d{4}$/ : /^\d{1,3}\s\d{1,4}-\d{4}$/,
  [n.CPF]: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  [n.CEP]: /^\d{5}-\d{3}$/,
  [n.DATE]: f === x.BR ? /^\d{2}\/\d{2}\/\d{4}$/ : /^\d{4}\/\d{2}\/\d{2}$/,
  [n.EMAIL]: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}), Vt = () => ({
  [n.PHONE]: Pt,
  [n.CPF]: mt,
  [n.CEP]: gt,
  [n.DATE]: ht,
  [n.EMAIL]: Et
}), Dt = (i) => Vt()[i];
function $t({
  onChange: i,
  state: f,
  hints: A,
  mask: o,
  phoneType: P = X.BR,
  dateType: l = x.BR,
  pickerRange: O,
  counter: I,
  defaultValue: m,
  onTag: R,
  label: F,
  placeholder: L,
  props: c
}) {
  const [k, v] = V(!1), [N, S] = V(!1), b = c.value !== void 0 ? String(c.value) : m, tt = b.length > 0, [et, h] = V(tt), [rt, g] = V(b.length), s = q(null), nt = q(null), [st, y] = V([]), D = u(
    (t) => {
      if (!o || t.length === 0)
        return { isValid: !0, errors: [] };
      const r = Mt(P, l)[o];
      if (!r)
        return { isValid: !0, errors: [] };
      if (r.test(t))
        return { isValid: !0, errors: [] };
      const d = Dt(o);
      return { isValid: !1, errors: d ? [d] : [] };
    },
    [l, o, P]
  ), E = u(
    (t, e) => {
      const r = o ? dt(t, o, P, l) : t;
      if (h(r.length > 0), e && o) {
        const a = D(r);
        y(a.errors);
      }
      return r;
    },
    [o, P, l, D]
  );
  Q(() => {
    if (!s.current || c.value === void 0)
      return;
    const t = c.value, e = E(t, !0);
    s.current.value !== e && (s.current.value = e), g(e.length);
  }, [c.value, E]), Q(() => {
    if (!s.current)
      return;
    const e = s.current.value.length > 0;
    h(e);
  }, [o, P, l]);
  const ut = u(() => {
    s.current && (s.current.value = "", h(!1), y([]), g(0), s.current.focus(), i && i(""));
  }, [i]), ot = u((t) => {
    ft(t.currentTarget, t.relatedTarget) || v(!1);
  }, []), ct = u((t, e) => {
    if (!e && t === "search")
      return "search";
    switch (e) {
      case n.EMAIL:
        return "email";
      case n.PHONE:
        return "tel";
      case n.CPF:
      case n.CEP:
      case n.DATE:
      case n.MONETARY:
        return "numeric";
      default:
        return "text";
    }
  }, []), at = u(
    (t, e, r = "text") => {
      if (e || r === "select")
        return "text";
      const a = {
        [n.EMAIL]: "email",
        [n.PHONE]: "tel",
        [n.CPF]: "text",
        [n.CEP]: "text",
        [n.DATE]: "text",
        [n.MONETARY]: "text"
      };
      return t ? a[t] || "text" : r;
    },
    []
  ), H = u(
    (t) => {
      const e = o ? D(t) : { isValid: !0, errors: [] };
      return y(e.errors), g(t.length), i && i(t), e.isValid;
    },
    [o, i, D]
  ), $ = u(() => {
    if (c.disabled || c.readOnly || !s.current)
      return !0;
    const t = s.current.value, e = E(t, !0);
    return s.current.value = e, H(e);
  }, [c.disabled, c.readOnly, E, H]), p = u(
    (t, e) => {
      if (!t)
        return null;
      const r = t.split("/");
      if (r.length !== 3)
        return null;
      const [a, d, lt] = r, J = e === x.BR, K = J ? a : d, U = J ? d : a, j = lt;
      return !K || !U || !j ? null : { day: K, month: U, year: j };
    },
    []
  ), M = u(
    (t, e) => {
      const r = p(t, e);
      return r ? `${r.year}-${r.month.padStart(2, "0")}-${r.day.padStart(2, "0")}` : "";
    },
    [p]
  ), B = u(
    (t) => {
      if (!t)
        return null;
      const e = t.split("-");
      if (e.length !== 3)
        return null;
      const [r, a, d] = e;
      return !r || !a || !d ? null : { year: r, month: a, day: d };
    },
    []
  ), T = u(
    (t, e) => {
      const r = B(t);
      return r ? e === x.BR ? `${r.day}/${r.month}/${r.year}` : `${r.month}/${r.day}/${r.year}` : "";
    },
    [B]
  ), w = u(
    (t, e) => {
      const r = document.createElement("input");
      return r.type = "date", r.style.position = "fixed", r.style.opacity = "0", r.style.pointerEvents = "none", r.setAttribute("aria-hidden", "true"), t && (r.value = t), e != null && e.start && (r.min = M(e.start, l)), e != null && e.end && (r.max = M(e.end, l)), r;
    },
    [l, M]
  ), _ = u(
    (t, e) => {
      if (!t)
        return;
      const r = T(t, l);
      e.value = r, h(r.length > 0), i && i(r), $();
    },
    [l, i, $, T]
  ), z = u(
    (t, e) => {
      t.style.pointerEvents = "none", t.removeEventListener("change", e), t.removeEventListener("blur", e), setTimeout(() => {
        document.body.contains(t) && document.body.removeChild(t);
      }, 100);
    },
    []
  ), G = u(
    (t, e) => {
      const r = () => {
        _(t.value, e), z(t, r), v(!0), e.focus();
      };
      return t.addEventListener("change", r), t.addEventListener("blur", r), r;
    },
    [_, z, v]
  ), Z = u((t) => {
    if (t.style.pointerEvents = "auto", t.focus(), "showPicker" in t && typeof t.showPicker == "function")
      try {
        t.showPicker();
      } catch {
        t.style.pointerEvents = "none";
      }
  }, []), it = u(() => {
    if (!s.current || o !== n.DATE)
      return;
    const t = s.current, e = t.value, r = M(e, l), a = w(r, O);
    document.body.appendChild(a), G(a, t), v(!0), setTimeout(() => {
      Z(a);
    }, 10);
  }, [
    o,
    l,
    O,
    v,
    M,
    w,
    G,
    Z
  ]), W = u(() => {
    if (!s.current || !o)
      return;
    const t = s.current.value || m;
    if (!t) {
      h(!1);
      return;
    }
    const e = E(t, !0);
    s.current.value !== e && (s.current.value = e), g(e.length);
  }, [m, o, E]);
  C(() => {
    c.value === void 0 && W();
  }, [c.value, W]), C(() => {
    const t = s.current ? s.current.value.length : m.length;
    g(t);
  }, [f, m]);
  const Y = u(
    (t) => {
      var e, r;
      return {
        ...t,
        ...(e = c.customTagProps) == null ? void 0 : e.data,
        ComponentProperties: {
          name: vt.ERROR_VIEW,
          component_name: "InputText",
          label: F,
          placeholder: L,
          value: s.current ? s.current.value : "",
          error: A.length > 0 ? JSON.stringify(A) : "",
          counter: I,
          ...(r = c.customTagProps) == null ? void 0 : r.customProperties
        }
      };
    },
    [F, L, A, I, c.customTagProps]
  );
  return C(() => {
    if (f !== "error") {
      S(!1);
      return;
    }
    !R || N || (R(Y), S(!0));
  }, [R, f, N, Y]), {
    inputRef: s,
    labelRef: nt,
    isFocused: k,
    hasValueInput: et,
    characterCount: rt,
    setIsFocused: v,
    handleClear: ut,
    handleInputContainerFocusOut: ot,
    handleChange: $,
    handleOpenDatePicker: it,
    getInputMode: ct,
    getInputType: at,
    validationErrors: st
  };
}
export {
  $t as useInputHandlers
};
