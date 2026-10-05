function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticOrange = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 1.5,
  d: "M12.667 9.333A5.333 5.333 0 1 1 2 9.333a5.333 5.333 0 0 1 10.667 0Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeWidth: 1.5,
  d: "M13.503 3.435a2.4 2.4 0 0 1-2.978 1.023 2.4 2.4 0 0 1 2.978-1.023ZM9.872 4.005a1.92 1.92 0 0 1-.215-2.307 1.92 1.92 0 0 1 .215 2.307Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M7.333 6.667a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0ZM6 8.333a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
}));
export default ComponenticOrange;