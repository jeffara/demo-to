function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticConsortium = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M4 4v6.316h4V16h5.333v4.667a7.333 7.333 0 1 0 7.334-7.334h-2.8L10.333 4H4Z"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 20.4,
  cy: 20.4,
  fill: props.color,
  rx: 2.667,
  ry: 2.667
}));
export default ComponenticConsortium;