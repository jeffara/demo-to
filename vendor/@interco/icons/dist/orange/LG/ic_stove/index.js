function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticStove = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: "#FF7A00",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M6.667 12h18.666v10.833a2.5 2.5 0 0 1-2.5 2.5H9.167a2.5 2.5 0 0 1-2.5-2.5V12Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M9.333 28v-2.667M22.667 28v-2.667M4 12h24M16 4v2.667M21.333 4v1.333M10.667 4v1.333M13.333 17.333h5.334"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M10.667 9.333A2.667 2.667 0 0 0 8 12h5.333a2.667 2.667 0 0 0-2.666-2.667Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M16 9.333A2.667 2.667 0 0 0 13.333 12h5.334A2.667 2.667 0 0 0 16 9.333Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M21.333 9.333A2.667 2.667 0 0 0 18.667 12H24a2.667 2.667 0 0 0-2.667-2.667Z"
}));
export default ComponenticStove;