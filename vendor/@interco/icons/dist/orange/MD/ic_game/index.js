function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticGame = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M9.8 5.541c-1.614-.472-3.33-.974-4.598.09C2.876 7.581.55 17.056 3.134 18.728c1.465.948 3.363-.787 4.773-2.076.58-.53 1.078-.986 1.43-1.148.965-.446 2.206-.604 2.663-.622.457.018 1.698.176 2.663.622.352.162.85.618 1.43 1.148 1.41 1.29 3.308 3.024 4.773 2.076 2.584-1.672.258-11.146-2.068-13.097-1.269-1.064-2.984-.562-4.597-.09-.778.228-1.532.449-2.201.484-.67-.035-1.423-.256-2.2-.484Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  d: "M16 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 9a.664.664 0 0 0-.667.662v.671h-.662A.67.67 0 0 0 6 11c0 .368.3.667.671.667h.662v.671c0 .366.299.662.667.662a.664.664 0 0 0 .667-.662v-.671h.662A.67.67 0 0 0 10 11a.67.67 0 0 0-.671-.667h-.662v-.671A.664.664 0 0 0 8 9Z"
}));
export default ComponenticGame;