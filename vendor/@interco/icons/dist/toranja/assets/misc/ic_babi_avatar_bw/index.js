function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBabiAvatarBw = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 24,
  fill: "#B6B7BB",
  rx: 12
}), /*#__PURE__*/React.createElement("mask", {
  id: "c",
  width: 24,
  height: 24,
  x: 0,
  y: 0,
  maskUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 12,
  fill: "#C4C4C4"
})), /*#__PURE__*/React.createElement("g", {
  mask: "url(#c)"
}, /*#__PURE__*/React.createElement("path", {
  fill: "url(#d)",
  d: "M-25.641-11.026H46.615V106.61500000000001H-25.641z"
})))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
  id: "d",
  width: 1,
  height: 1,
  patternContentUnits: "objectBoundingBox"
}, /*#__PURE__*/React.createElement("use", {
  xlinkHref: "#e",
  transform: "matrix(.0004 0 0 .00024 0 0)"
})), /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M0 0H24V24H0z"
})), /*#__PURE__*/React.createElement("clipPath", {
  id: "b"
}, /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 24,
  fill: props.color,
  rx: 12
}))));
export default ComponenticBabiAvatarBw;