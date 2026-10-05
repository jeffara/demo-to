var A = /* @__PURE__ */ ((t) => (t.HUG = "hug", t.FILL = "fill", t))(A || {});
const _ = "segmented-control", E = `${_}__segments`, e = `${E}__text-container`, o = `${e}__text`, s = "--skeleton", T = "--hug", S = "--active", L = "--disabled", n = "type-label-medium-bold", I = "type-label-medium-regular", $ = {
  BASE: _,
  SKELETON: `${_}${s}`,
  HUG: `${_}${T}`,
  SEGMENT: E,
  SEGMENT_ACTIVE: `${E}${S}`,
  SEGMENT_DISABLED: `${E}${L}`,
  SEGMENT_HUG: `${E}${T}`,
  SEGMENT_ACTIVE_BG: `${E}${S}--bg`,
  TEXT_CONTAINER: e,
  TEXT: o,
  TEXT_BOLD: n,
  TEXT_REGULAR: I
};
export {
  $ as SegmentedControlClass,
  A as TimelineFillingEnum
};
