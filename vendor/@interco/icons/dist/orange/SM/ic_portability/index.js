function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPortability = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M5.333 4H4.166a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h7.667a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1.167M12 2l2 2-2 2M4 10l-2 2 2 2"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 10.667,
  cy: 4,
  fill: props.color,
  rx: 0.667,
  ry: 0.667
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 8,
  cy: 12,
  fill: props.color,
  rx: 0.667,
  ry: 0.667
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 8,
  cy: 4,
  fill: props.color,
  rx: 0.667,
  ry: 0.667
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 5.333,
  cy: 12,
  fill: props.color,
  rx: 0.667,
  ry: 0.667
}));
export default ComponenticPortability;