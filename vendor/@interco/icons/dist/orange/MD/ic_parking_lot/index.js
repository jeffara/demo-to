function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticParkingLot = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M10.5 9V8a1 1 0 0 0-1 1h1Zm0 6h-1a1 1 0 0 0 1 1v-1Zm3.306 1a1 1 0 1 0 0-2v2Zm.123-6a1 1 0 1 0 0-2v2ZM10.5 11a1 1 0 1 0 0 2v-2Zm2.571 2a1 1 0 1 0 0-2v2ZM9.5 9v6h2V9h-2Zm1 7h3.306v-2H10.5v2Zm0-6h3.429V8H10.5v2Zm0 3h2.571v-2H10.5v2Zm9.5-1a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10h-2Zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10v-2Zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12h2Zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10v2Z"
}));
export default ComponenticParkingLot;