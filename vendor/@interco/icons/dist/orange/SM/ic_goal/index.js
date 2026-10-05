function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticGoal = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5
}, /*#__PURE__*/React.createElement("path", {
  d: "M14.667 8A6.667 6.667 0 1 1 8 1.333"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.333 8A3.333 3.333 0 1 1 8 4.667"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "m14.438 4.39-3.771.943.942-3.77 2.829 2.828Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m7.838 8.162 3.3-3.3"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0H16V16H0z"
}))));
export default ComponenticGoal;