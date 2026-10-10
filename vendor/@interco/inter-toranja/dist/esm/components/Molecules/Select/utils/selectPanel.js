import { STATE as i, SURFACE as f } from "../../../../utils/pattern.js";
const S = /* @__PURE__ */ new Set([
  i.DISABLED,
  i.READ_ONLY,
  i.LOADING,
  i.SKELETON
]), D = /* @__PURE__ */ new Set(["Enter", " "]), E = (r, n) => {
  if (!r)
    return !1;
  const e = n == null ? void 0 : n.trim();
  return e !== void 0 && e.length > 0;
}, h = (r) => {
  if (r != null)
    return String(r);
}, A = (r, n) => {
  if (!(!r || n === void 0))
    return r.find((e) => e.value === n) ?? r.find((e) => e.label === n);
}, L = ({
  surface: r,
  options: n,
  disabled: e,
  readOnly: t,
  state: o
}) => {
  const s = r === f.DESKTOP, u = n !== void 0 && n.length > 0, a = s && u, l = !!e || o === i.DISABLED, p = !!t || o === i.READ_ONLY, c = l || p || S.has(o);
  return {
    hasDesktopPicker: a,
    isDisabled: l,
    isReadOnly: p,
    isPanelBlocked: c,
    canOpenPanel: a && !c
  };
}, O = ({
  hasDesktopPicker: r,
  isPanelOpen: n,
  listboxId: e,
  onKeyDown: t,
  onClick: o
}) => {
  if (!r)
    return {};
  const s = { onKeyDown: t, onClick: o };
  return n ? {
    "aria-haspopup": "listbox",
    "aria-expanded": !0,
    "aria-controls": e,
    ...s
  } : {
    "aria-haspopup": "listbox",
    "aria-expanded": !1,
    ...s
  };
}, P = ({
  event: r,
  isPanelBlocked: n,
  canOpenPanel: e,
  onClick: t,
  togglePanel: o
}) => {
  if (!n) {
    if (e) {
      o();
      return;
    }
    t == null || t(r);
  }
}, g = ({
  event: r,
  canOpenPanel: n,
  openPanel: e,
  togglePanel: t
}) => {
  if (n) {
    if (r.key === "ArrowDown") {
      r.preventDefault(), e();
      return;
    }
    D.has(r.key) && (r.preventDefault(), t());
  }
};
export {
  A as findSelectedOption,
  O as getDesktopPickerInputProps,
  P as handleSelectTriggerClick,
  g as handleSelectTriggerKeyDown,
  h as resolveFieldValue,
  L as resolveSelectPanelFlags,
  E as shouldSuppressSelectVisualLabel
};
