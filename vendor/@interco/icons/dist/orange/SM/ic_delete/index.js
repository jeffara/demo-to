function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDelete = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M2 4.667h12"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M4.667 3.5a1.5 1.5 0 0 1 1.5-1.5h3.666a1.5 1.5 0 0 1 1.5 1.5v1.167H4.667V3.5ZM3.333 4.667h9.334V12.5a1.5 1.5 0 0 1-1.5 1.5H4.833a1.5 1.5 0 0 1-1.5-1.5V4.667Z"
}));
export default ComponenticDelete;