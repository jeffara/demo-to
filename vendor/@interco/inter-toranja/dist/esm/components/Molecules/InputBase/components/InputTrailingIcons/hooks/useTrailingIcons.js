import { InputType as a, MaskType as u } from "../../../utils/inputEnums.js";
const n = (e) => e === "loading", p = (e, s) => !e && !n(s), y = (e, s) => e !== a.SELECT && e !== a.SEARCH && s !== u.DATE, R = (e, s, d, l, t, i, r) => e && d && t && p(l, r) && y(i, s), b = (e) => {
  const {
    type: s,
    mask: d,
    hasValueInput: l,
    isReadOnly: t,
    isDisabled: i,
    isFocused: r,
    showClear: c,
    showHelper: h,
    componentState: o
  } = e;
  return [
    [
      s === a.SEARCH && l && !t,
      { id: "search-clear", type: "search-clear", shouldRender: !0, isDisabled: !1 }
    ],
    [
      R(c, d, l, t, r, s, o),
      { id: "clear", type: "clear", shouldRender: !0, isDisabled: !1 }
    ],
    [h, { id: "helper", type: "helper", shouldRender: !0, isDisabled: i }],
    [
      n(o),
      { id: "loading", type: "loading", shouldRender: !0, isDisabled: !1 }
    ],
    [
      s === a.SELECT && !n(o),
      {
        id: "select",
        type: "select",
        shouldRender: !0,
        isDisabled: i || o === "disabled" || o === "readonly"
      }
    ],
    [
      s === a.PASSWORD && l && !n(o),
      {
        id: "password",
        type: "password",
        shouldRender: !0,
        isDisabled: i || t
      }
    ],
    [
      d === u.DATE,
      {
        id: "calendar",
        type: "calendar",
        shouldRender: !0,
        isDisabled: i || t
      }
    ]
  ];
}, S = (e) => {
  var d;
  const s = b({
    type: e.type,
    mask: e.mask,
    hasValueInput: e.hasValueInput,
    isReadOnly: e.isReadOnly,
    isDisabled: e.isDisabled,
    isFocused: e.isFocused,
    showClear: e.showClear,
    showHelper: e.showHelper,
    componentState: e.componentState
  });
  return (d = s == null ? void 0 : s.filter(([l]) => l)) == null ? void 0 : d.map(([, l]) => l);
};
export {
  S as useTrailingIcons
};
