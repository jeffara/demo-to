function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBeachball = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 36,
  cy: 36,
  r: 30,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5
}), /*#__PURE__*/React.createElement("circle", {
  cx: 30,
  cy: 27,
  r: 9,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M34.5 36s.955 8.502 3 13.5c2.4 5.864 9 13.5 9 13.5M39 28.5s9.619-.888 15 1.5c4.936 2.19 10.5 9 10.5 9M34.5 18s2.188-4.201 4.5-6c2.924-2.274 9-3 9-3M24 19.5s-.506-2.937-1.5-4.5c-.89-1.398-3-3-3-3M21 27s-4.759.314-7.5 1.5c-3.442 1.49-7.5 6-7.5 6M22.5 34.5S19.018 40.657 18 45c-1.337 5.703 0 15 0 15"
}));
export default ComponenticBeachball;