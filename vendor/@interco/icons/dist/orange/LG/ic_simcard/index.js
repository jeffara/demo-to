function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSimcard = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M5.333 26.833V5.167a2.5 2.5 0 0 1 2.5-2.5h9.798a2.5 2.5 0 0 1 1.768.732l6.535 6.536a2.5 2.5 0 0 1 .733 1.767v15.131a2.5 2.5 0 0 1-2.5 2.5H7.833a2.5 2.5 0 0 1-2.5-2.5Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M10.667 18.667V24M16 18.667V24M21.333 18.667V24"
}));
export default ComponenticSimcard;