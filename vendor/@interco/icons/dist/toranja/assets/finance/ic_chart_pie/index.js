function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticChartPie = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M11 3a1 1 0 0 1 1 1v8h8a1 1 0 0 1 1 1c0 5.523-4.477 10-10 10S1 18.523 1 13 5.477 3 11 3Zm-1 2.062A8.002 8.002 0 0 0 11 21a8.002 8.002 0 0 0 7.939-7H11a1 1 0 0 1-1-1V5.062ZM15 1a8 8 0 0 1 8 8 1 1 0 0 1-1.001 1H15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm1.001 7h4.916A6.005 6.005 0 0 0 16 3.083L16.001 8Z"
}));
export default ComponenticChartPie;