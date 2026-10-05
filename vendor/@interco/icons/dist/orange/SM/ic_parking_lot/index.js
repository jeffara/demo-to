function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticParkingLot = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M7 6v-.5a.5.5 0 0 0-.5.5H7Zm0 4h-.5a.5.5 0 0 0 .5.5V10Zm2.204.5a.5.5 0 0 0 0-1v1Zm.082-4a.5.5 0 1 0 0-1v1ZM7 7.5a.5.5 0 0 0 0 1v-1Zm1.714 1a.5.5 0 0 0 0-1v1ZM6.5 6v4h1V6h-1Zm.5 4.5h2.204v-1H7v1Zm0-4h2.286v-1H7v1Zm0 2h1.714v-1H7v1Zm6.5-.5A5.5 5.5 0 0 1 8 13.5v1A6.5 6.5 0 0 0 14.5 8h-1ZM8 13.5A5.5 5.5 0 0 1 2.5 8h-1A6.5 6.5 0 0 0 8 14.5v-1ZM2.5 8A5.5 5.5 0 0 1 8 2.5v-1A6.5 6.5 0 0 0 1.5 8h1ZM8 2.5A5.5 5.5 0 0 1 13.5 8h1A6.5 6.5 0 0 0 8 1.5v1Z"
}));
export default ComponenticParkingLot;