function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPlay = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillOpacity: 0.8,
  d: "M4 12.4V3.866c0-1.21 1.36-1.922 2.355-1.232L13.06 7.29a1.5 1.5 0 0 1-.104 2.53L6.25 13.699A1.5 1.5 0 0 1 4 12.399Z"
}));
export default ComponenticPlay;