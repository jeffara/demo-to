function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTrain = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M5 22h14M7 16h.5m9 0h.5M7 22v-1m10 1v-1"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M21 6h-9m0 0H3m9 0v7m0 0h9m-9 0H3m2 6h14a2 2 0 0 0 2-2V7a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v10a2 2 0 0 0 2 2Z"
}));
export default ComponenticTrain;