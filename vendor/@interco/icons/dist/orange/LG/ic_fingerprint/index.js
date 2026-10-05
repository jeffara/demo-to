function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFingerprint = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M6.478 6.667c2.42-2.469 5.792-4 9.522-4 7.364 0 13.333 5.97 13.333 13.333 0 1.394-.214 2.737-.61 4M3.276 12a13.328 13.328 0 0 0-.61 4c0 1.394.213 2.737.61 4M8 16v10.667M24 16v10.667"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M18.667 29.333V16a2.667 2.667 0 1 0-5.334 0v1.333m0 12v-6.666M24 16c0-1.457-.39-2.823-1.07-4M8 16a8 8 0 0 1 10.667-7.545"
}));
export default ComponenticFingerprint;