var e = /* @__PURE__ */ ((E) => (E.HUG = "hug", E.FILL = "fill", E))(e || {}), o = /* @__PURE__ */ ((E) => (E.DEFAULT = "default", E.COMPACT = "compact", E))(o || {});
const T = "segmented-control", _ = `${T}__segments`, S = `${_}__text-container`, c = `${S}__text`, L = "--skeleton", t = "--hug", s = "--compact", A = "--active", I = "--disabled", $ = "type-label-medium-bold", C = "type-label-medium-regular", n = {
  BASE: T,
  SKELETON: `${T}${L}`,
  HUG: `${T}${t}`,
  SEGMENT: _,
  SEGMENT_ACTIVE: `${_}${A}`,
  SEGMENT_DISABLED: `${_}${I}`,
  SEGMENT_HUG: `${_}${t}`,
  SEGMENT_COMPACT: `${_}${s}`,
  SEGMENT_ACTIVE_BG: `${_}${A}--bg`,
  TEXT_CONTAINER: S,
  TEXT: c,
  TEXT_BOLD: $,
  TEXT_REGULAR: C
};
export {
  n as SegmentedControlClass,
  o as SegmentedControlDensityEnum,
  e as TimelineFillingEnum
};
