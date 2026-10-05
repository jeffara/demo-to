var d = /* @__PURE__ */ ((e) => (e.SMALL = "small", e.LARGE = "large", e.MEDIUM = "medium", e.EXTRA_LARGE = "extraLarge", e))(d || {}), o = /* @__PURE__ */ ((e) => (e.ENABLED = "enabled", e.ERROR = "error", e.SUCCESS = "success", e.DISABLED = "disabled", e.READ_ONLY = "readonly", e.LOADING = "loading", e.SKELETON = "skeleton", e))(o || {}), l = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.DESTRUCTIVE = "destructive", e.INVERSE = "inverse", e.ICON = "icon", e.AVATAR = "avatar", e.CONTAINED = "contained", e.INDETERMINATE = "indeterminate", e))(l || {}), s = /* @__PURE__ */ ((e) => (e.SMALL = "--small", e.LARGE = "--large", e.MEDIUM = "--medium", e.ENABLED = "--enabled", e.DISABLED = "--disabled", e.LOADING = "--loading", e.SKELETON = "--skeleton", e.FOCUSED = "--focused", e.HOVERED = "--hovered", e.PRESSED = "--pressed", e))(s || {}), u = /* @__PURE__ */ ((e) => (e.DEFAULT = "--default", e.DESTRUCTIVE = "--destructive", e.INVERSE = "--inverse", e))(u || {}), c = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.SECONDARY_OUTLINED = "secondaryOutlined", e.TERTIARY = "tertiary", e))(c || {}), m = /* @__PURE__ */ ((e) => (e.SUCCESS = "success", e.WARNING = "warning", e.ERROR = "error", e.INFORMATION = "information", e.PENDING = "pending", e.SCHEDULED = "scheduled", e))(m || {}), L = /* @__PURE__ */ ((e) => (e.Success = "success", e.Error = "error", e.Warning = "warning", e.Information = "information", e.Info = "info", e.Default = "default", e))(L || {}), $ = /* @__PURE__ */ ((e) => (e.ARGENTINA = "argentina", e.BRAZIL = "brazil", e.GLOBE = "globe", e.SPAIN = "spain", e.UNITED_STATES = "unitedStates", e))($ || {}), v = /* @__PURE__ */ ((e) => (e.DISPLAY = "display", e.INTERACTION_CLICK = "interaction_click", e.ERROR_VIEW = "error_view", e.MODAL_VIEW = "modal_view", e))(v || {}), f = /* @__PURE__ */ ((e) => (e.PF_LIGHT = "pf-light", e.PF_DARK = "pf-dark", e.PJ_LIGHT = "pj-light", e.PJ_DARK = "pj-dark", e))(f || {}), g = /* @__PURE__ */ ((e) => (e.WEBVIEW = "webview", e.DESKTOP = "desktop", e))(g || {});
const t = (e, n, r) => ({
  small: `${e}--small`,
  large: `${e}--large`,
  medium: `${e}--medium`,
  enabled: `${e}__${n}${r}--enabled`,
  disabled: `${e}__${n}${r}--disabled`,
  loading: `${e}__${n}${r}--loading`
}), _ = (e, n) => {
  const r = n ? `--${n}` : "", a = (i) => `${e}__${i}${r}`;
  return {
    block: e,
    skeleton: `${e}--skeleton${r}`,
    element: {
      primary: {
        base: a(
          "primary"
          /* PRIMARY */
        ),
        modifier: t(e, "primary", r)
      },
      secondary: {
        base: a(
          "secondary"
          /* SECONDARY */
        ),
        modifier: t(e, "secondary", r)
      },
      secondaryOutlined: {
        base: a(
          "secondaryOutlined"
          /* SECONDARY_OUTLINED */
        ),
        modifier: t(e, "secondaryOutlined", r)
      },
      tertiary: {
        base: a(
          "tertiary"
          /* TERTIARY */
        ),
        modifier: t(e, "tertiary", r)
      }
    }
  };
};
export {
  $ as COUNTRY,
  L as ColorType,
  m as FEEDBACK,
  c as HIERARCHY,
  s as MODIFIERS,
  u as MODIFIERS_STYLE_TYPE,
  d as SIZE,
  o as STATE,
  g as SURFACE,
  v as TAGGING_EVENT,
  f as THEME,
  l as VARIANT,
  _ as createBEMClassNames
};
