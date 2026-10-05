function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSoccerball = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M10.575 16a2 2 0 0 1-1.89-1.347l-.955-2.762a2 2 0 0 1 .704-2.264l2.38-1.753a2 2 0 0 1 2.372 0l2.38 1.753a2 2 0 0 1 .704 2.264l-.955 2.762A2 2 0 0 1 13.425 16h-2.85ZM2.12 13.554A10.077 10.077 0 0 1 2 12a9.965 9.965 0 0 1 2.667-6.8L5.82 7.277a2 2 0 0 1-.237 2.282L2.12 13.554ZM11.236 21.971a9.998 9.998 0 0 1-7.833-4.86l3.7-.443a2 2 0 0 1 2.026 1.091l2.107 4.212ZM20.597 17.111a9.999 9.999 0 0 1-7.833 4.86l2.107-4.212a2 2 0 0 1 2.027-1.091l3.699.444ZM19.333 5.2A9.965 9.965 0 0 1 22 12c0 .528-.041 1.047-.12 1.554l-3.463-3.996a2 2 0 0 1-.237-2.282l1.153-2.075ZM16.074 2.865A9.965 9.965 0 0 0 12 2c-1.45 0-2.83.309-4.073.865l2.917 2.066a2 2 0 0 0 2.312 0l2.918-2.066Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
}));
export default ComponenticSoccerball;