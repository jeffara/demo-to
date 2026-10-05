function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticOrange = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M19 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeWidth: 2,
  d: "M20.255 5.153a3.6 3.6 0 0 1-4.468 1.535 3.6 3.6 0 0 1 4.468-1.535ZM14.808 6.008a2.88 2.88 0 0 1-.322-3.46 2.88 2.88 0 0 1 .322 3.46Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
}));
export default ComponenticOrange;