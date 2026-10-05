function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M7.108 2.292 2.185 7.216a1.5 1.5 0 0 0 0 2.121l4.478 4.478a1.5 1.5 0 0 0 2.121 0l4.924-4.923a1.5 1.5 0 0 0 .386-1.456l-.96-3.518a1.5 1.5 0 0 0-1.052-1.053l-3.518-.96a1.5 1.5 0 0 0-1.456.387Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 10.552,
  cy: 5.448,
  r: 1,
  fill: props.color,
  transform: "rotate(45 10.552 5.448)"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0H16V16H0z"
}))));
export default ComponenticTag;