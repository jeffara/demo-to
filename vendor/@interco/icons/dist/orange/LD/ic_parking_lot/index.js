function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticParkingLot = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M14 12v-1a1 1 0 0 0-1 1h1Zm0 8h-1a1 1 0 0 0 1 1v-1Zm4.408 1a1 1 0 0 0 0-2v2Zm.163-8a1 1 0 1 0 0-2v2ZM14 15a1 1 0 1 0 0 2v-2Zm3.429 2a1 1 0 1 0 0-2v2ZM13 12v8h2v-8h-2Zm1 9h4.408v-2H14v2Zm0-8h4.571v-2H14v2Zm0 4h3.429v-2H14v2Zm13-1c0 6.075-4.925 11-11 11v2c7.18 0 13-5.82 13-13h-2ZM16 27C9.925 27 5 22.075 5 16H3c0 7.18 5.82 13 13 13v-2ZM5 16C5 9.925 9.925 5 16 5V3C8.82 3 3 8.82 3 16h2ZM16 5c6.075 0 11 4.925 11 11h2c0-7.18-5.82-13-13-13v2Z"
}));
export default ComponenticParkingLot;