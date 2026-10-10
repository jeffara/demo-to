import { useState as V, useRef as Q, useCallback as u, useLayoutEffect as X, useEffect as $ } from "react";
import { DateType as D, PhoneType as k, MaskType as n } from "../utils/inputEnums.js";
import { handleMask as dt, shouldKeepInputFocused as vt } from "../utils/inputUtils.js";
import { invalidEmail as Et, invalidDate as mt, invalidCEP as Pt, invalidCPF as gt, invalidPhone as ht } from "../validation/errorMessages.json.js";
import { SURFACE as Mt, TAGGING_EVENT as Vt } from "../../../../utils/pattern.js";
import { getToranjaSurface as At } from "../../../../utils/useToranjaSurface/useToranjaSurface.js";
const Dt = (i, d) => ({
  [n.PHONE]: i === k.BR ? /^\(\d{2}\)\s?\d{4,5}-\d{4}$/ : /^\d{1,3}\s\d{1,4}-\d{4}$/,
  [n.CPF]: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  [n.CEP]: /^\d{5}-\d{3}$/,
  [n.DATE]: d === D.BR ? /^\d{2}\/\d{2}\/\d{4}$/ : /^\d{4}\/\d{2}\/\d{2}$/,
  [n.EMAIL]: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}), Rt = () => ({
  [n.PHONE]: ht,
  [n.CPF]: gt,
  [n.CEP]: Pt,
  [n.DATE]: mt,
  [n.EMAIL]: Et
}), xt = (i) => Rt()[i];
function Ft({
  onChange: i,
  state: d,
  hints: R,
  mask: o,
  phoneType: m = k.BR,
  dateType: l = D.BR,
  pickerRange: C,
  counter: S,
  defaultValue: P,
  onTag: x,
  label: I,
  placeholder: F,
  props: c,
  suppressNativeDatePicker: L = !1
}) {
  const [tt, v] = V(!1), [b, H] = V(!1), N = c.value !== void 0 ? String(c.value) : P, et = N.length > 0, [rt, g] = V(et), [nt, h] = V(N.length), s = Q(null), st = Q(null), [ut, y] = V([]), A = u(
    (t) => {
      if (!o || t.length === 0)
        return { isValid: !0, errors: [] };
      const r = Dt(m, l)[o];
      if (!r)
        return { isValid: !0, errors: [] };
      if (r.test(t))
        return { isValid: !0, errors: [] };
      const f = xt(o);
      return { isValid: !1, errors: f ? [f] : [] };
    },
    [l, o, m]
  ), E = u(
    (t, e) => {
      const r = o ? dt(t, o, m, l) : t;
      if (g(r.length > 0), e && o) {
        const a = A(r);
        y(a.errors);
      }
      return r;
    },
    [o, m, l, A]
  );
  X(() => {
    if (!s.current || c.value === void 0)
      return;
    const t = c.value, e = E(t, !0);
    s.current.value !== e && (s.current.value = e), h(e.length);
  }, [c.value, E]), X(() => {
    if (!s.current)
      return;
    const e = s.current.value.length > 0;
    g(e);
  }, [o, m, l]);
  const ot = u(() => {
    s.current && (s.current.value = "", g(!1), y([]), h(0), s.current.focus(), i && i(""));
  }, [i]), ct = u((t) => {
    vt(t.currentTarget, t.relatedTarget) || v(!1);
  }, []), at = u((t, e) => {
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
  }, []), it = u(
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
  ), T = u(
    (t) => {
      const e = o ? A(t) : { isValid: !0, errors: [] };
      return y(e.errors), h(t.length), i && i(t), e.isValid;
    },
    [o, i, A]
  ), O = u(() => {
    if (c.disabled || c.readOnly || !s.current)
      return !0;
    const t = s.current.value, e = E(t, !0);
    return s.current.value = e, T(e);
  }, [c.disabled, c.readOnly, E, T]), p = u(
    (t, e) => {
      if (!t)
        return null;
      const r = t.split("/");
      if (r.length !== 3)
        return null;
      const [a, f, ft] = r, Y = e === D.BR, j = Y ? a : f, J = Y ? f : a, q = ft;
      return !j || !J || !q ? null : { day: j, month: J, year: q };
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
      const [r, a, f] = e;
      return !r || !a || !f ? null : { year: r, month: a, day: f };
    },
    []
  ), w = u(
    (t, e) => {
      const r = B(t);
      return r ? e === D.BR ? `${r.day}/${r.month}/${r.year}` : `${r.month}/${r.day}/${r.year}` : "";
    },
    [B]
  ), _ = u(
    (t, e) => {
      const r = document.createElement("input");
      return r.type = "date", r.style.position = "fixed", r.style.opacity = "0", r.style.pointerEvents = "none", r.setAttribute("aria-hidden", "true"), t && (r.value = t), e != null && e.start && (r.min = M(e.start, l)), e != null && e.end && (r.max = M(e.end, l)), r;
    },
    [l, M]
  ), z = u(
    (t, e) => {
      if (!t)
        return;
      const r = w(t, l);
      e.value = r, g(r.length > 0), i && i(r), O();
    },
    [l, i, O, w]
  ), G = u(
    (t, e) => {
      t.style.pointerEvents = "none", t.removeEventListener("change", e), t.removeEventListener("blur", e), setTimeout(() => {
        document.body.contains(t) && document.body.removeChild(t);
      }, 100);
    },
    []
  ), Z = u(
    (t, e) => {
      const r = () => {
        z(t.value, e), G(t, r), v(!0), e.focus();
      };
      return t.addEventListener("change", r), t.addEventListener("blur", r), r;
    },
    [z, G, v]
  ), K = u((t) => {
    if (t.style.pointerEvents = "auto", t.focus(), "showPicker" in t && typeof t.showPicker == "function")
      try {
        t.showPicker();
      } catch {
        t.style.pointerEvents = "none";
      }
  }, []), lt = u(() => {
    if (!s.current || o !== n.DATE || L && At() === Mt.DESKTOP)
      return;
    const t = s.current, e = t.value, r = M(e, l), a = _(r, C);
    document.body.appendChild(a), Z(a, t), v(!0), setTimeout(() => {
      K(a);
    }, 10);
  }, [
    o,
    l,
    C,
    v,
    M,
    _,
    Z,
    K,
    L
  ]), U = u(() => {
    if (!s.current || !o)
      return;
    const t = s.current.value || P;
    if (!t) {
      g(!1);
      return;
    }
    const e = E(t, !0);
    s.current.value !== e && (s.current.value = e), h(e.length);
  }, [P, o, E]);
  $(() => {
    c.value === void 0 && U();
  }, [c.value, U]), $(() => {
    const t = s.current ? s.current.value.length : P.length;
    h(t);
  }, [d, P]);
  const W = u(
    (t) => {
      var e, r;
      return {
        ...t,
        ...(e = c.customTagProps) == null ? void 0 : e.data,
        ComponentProperties: {
          name: Vt.ERROR_VIEW,
          component_name: "InputText",
          label: I,
          placeholder: F,
          value: s.current ? s.current.value : "",
          error: R.length > 0 ? JSON.stringify(R) : "",
          counter: S,
          ...(r = c.customTagProps) == null ? void 0 : r.customProperties
        }
      };
    },
    [I, F, R, S, c.customTagProps]
  );
  return $(() => {
    if (d !== "error") {
      H(!1);
      return;
    }
    !x || b || (x(W), H(!0));
  }, [x, d, b, W]), {
    inputRef: s,
    labelRef: st,
    isFocused: tt,
    hasValueInput: rt,
    characterCount: nt,
    setIsFocused: v,
    handleClear: ot,
    handleInputContainerFocusOut: ct,
    handleChange: O,
    handleOpenDatePicker: lt,
    getInputMode: at,
    getInputType: it,
    validationErrors: ut
  };
}
export {
  Ft as useInputHandlers
};
