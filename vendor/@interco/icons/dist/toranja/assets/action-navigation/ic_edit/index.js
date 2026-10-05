function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEdit = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M14.802 3.283a3 3 0 0 1 4.352.115l1.797 1.997a3 3 0 0 1-.148 4.166L8.775 21.16a3 3 0 0 1-2.082.84H3a1 1 0 0 1-1-1v-3.672a3 3 0 0 1 .879-2.12L14.802 3.282ZM4.292 16.621l9.165-9.164 3.068 3.451-9.138 8.812a1 1 0 0 1-.694.28H4v-2.672a1 1 0 0 1 .293-.707Zm15.123-8.5-1.45 1.398-3.091-3.479 1.342-1.342a1 1 0 0 1 1.45.038l1.798 1.997a1 1 0 0 1-.05 1.388Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M13 20a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"
}));
export default ComponenticEdit;