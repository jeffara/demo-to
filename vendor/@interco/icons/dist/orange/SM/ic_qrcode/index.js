function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticQrcode = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 4.667,
  height: 4.667,
  x: 2,
  y: 2,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 0.5
}), /*#__PURE__*/React.createElement("rect", {
  width: 3,
  height: 3,
  x: 11.666,
  y: 11.667,
  fill: props.color,
  rx: 0.5
}), /*#__PURE__*/React.createElement("rect", {
  width: 3,
  height: 3,
  x: 8.667,
  y: 8.667,
  fill: props.color,
  rx: 0.5
}), /*#__PURE__*/React.createElement("rect", {
  width: 4.667,
  height: 4.667,
  x: 2,
  y: 9.333,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 0.5
}), /*#__PURE__*/React.createElement("rect", {
  width: 4.667,
  height: 4.667,
  x: 9.333,
  y: 2,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 0.5
}));
export default ComponenticQrcode;