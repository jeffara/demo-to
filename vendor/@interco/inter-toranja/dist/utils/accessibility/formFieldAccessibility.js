const M = /\s+/g, R = /[^a-z0-9-]/g, L = "Limite de caracteres atingido", d = (e) => e.filter((r) => r.trim() !== ""), S = (e) => e === void 0 ? [] : Array.isArray(e) ? e : [e], T = 3, _ = (e, r) => r === void 0 ? e : e.slice(0, r), C = (e, r, s) => e.length > 0 ? e : r ? s : [], I = (e, r, s) => e.trim() !== "" ? e : !r || s.length === 0 ? "" : s[0], m = (e, r) => e ? r.length > 0 : !1, v = (e, r, s) => !(!e || r === "" || s), w = (e, r, s, o) => !(!e || r.length === 0 || s || o), p = (e, r) => e ? r : [], $ = ({
  hints: e = [],
  error: r,
  success: s = "",
  validationErrors: o = [],
  isError: l,
  isSuccess: u = !1,
  showHint: h = !0,
  maxErrorMessages: A
}) => {
  const t = d(S(e)), E = d([
    ...o,
    ...S(r)
  ]), g = C(
    E,
    l,
    t
  ), a = _(g, A), f = I(s, u, t), n = m(l, a), i = v(u, f, n), c = w(
    h,
    t,
    n,
    i
  ), H = p(c, t);
  return {
    sanitizedHints: t,
    errorMessages: a,
    successMessage: f,
    infoHints: H,
    shouldShowErrors: n,
    shouldShowSuccess: i,
    shouldShowInfoHints: c,
    shouldShowHints: n || i || c
  };
}, b = (e, r, s) => r ?? `${e}-${s.toLowerCase().replace(M, "-").replace(R, "")}`, F = (e) => ({
  hintsId: `${e}-hints`,
  counterId: `${e}-counter`,
  limitMessageId: `${e}-limit-message`
}), N = (e) => e.filter(Boolean).join(" ") || void 0, P = (e) => `Limpar ${e}`;
export {
  L as CHARACTER_LIMIT_REACHED_MESSAGE,
  T as INPUT_BASE_MAX_ERROR_MESSAGES,
  N as buildAriaDescribedBy,
  F as buildFieldDescriptionIds,
  b as buildFieldId,
  P as getClearFieldAriaLabel,
  S as normalizeMessages,
  $ as resolveFormFieldHints,
  d as sanitizeHintMessages
};
