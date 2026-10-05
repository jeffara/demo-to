function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDoorlock = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 14,
  height: 20,
  x: 5,
  y: 2,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 7
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M12.895 11.79a2 2 0 1 0-1.79 0l-1.381 2.763A1 1 0 0 0 10.618 16h2.764a1 1 0 0 0 .894-1.447l-1.381-2.764Z",
  clipRule: "evenodd"
}));
export default ComponenticDoorlock;