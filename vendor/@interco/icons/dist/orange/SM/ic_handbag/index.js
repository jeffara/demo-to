function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHandbag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M4.667 4.667v8M11.333 4.667v8"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 1.5,
  d: "M1.333 12.166v-7a.5.5 0 0 1 .5-.5h12.334a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H1.833a.5.5 0 0 1-.5-.5Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 1.5,
  d: "M10.667 4.667a2.667 2.667 0 0 0-5.334 0"
}));
export default ComponenticHandbag;