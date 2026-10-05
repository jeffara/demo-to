function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M32.706 9.597 8.595 33.707a5 5 0 0 0 0 7.072l22.627 22.627a5 5 0 0 0 7.071 0l24.112-24.11a5 5 0 0 0 1.288-4.852l-4.849-17.779a5 5 0 0 0-3.508-3.508L37.557 8.308a5 5 0 0 0-4.85 1.289Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 47.485,
  cy: 24.515,
  r: 4.5,
  fill: props.color,
  transform: "rotate(45 47.485 24.515)"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0H72V72H0z"
}))));
export default ComponenticTag;