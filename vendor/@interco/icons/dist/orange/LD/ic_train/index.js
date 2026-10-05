function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTrain = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M6.667 29.334h18.666m-16-8H10m12 0h.666m-13.333 8V28m13.333 1.334V28"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M28 8H16m0 0H4m12 0v9.333m0 0h12m-12 0H4m2.667 8h18.666A2.667 2.667 0 0 0 28 22.667V9.332a6.667 6.667 0 0 0-6.667-6.667H10.667A6.667 6.667 0 0 0 4 9.334v13.333a2.667 2.667 0 0 0 2.667 2.667Z"
}));
export default ComponenticTrain;