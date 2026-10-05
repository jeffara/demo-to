function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTruck = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M14 4a3 3 0 0 1 3 3h1.102a3 3 0 0 1 2.242 1.007l1.898 2.136A3 3 0 0 1 23 12.136V15a3 3 0 0 1-3 3h-.17a3.001 3.001 0 0 1-5.66 0H9.83a3.001 3.001 0 0 1-5.66 0H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10ZM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM3 15a1 1 0 0 0 1 1h.17a3.001 3.001 0 0 1 5.66 0h4.34c.17-.48.459-.904.83-1.236V12H3v3Zm14-6v5c1.306 0 2.417.835 2.83 2H20a1 1 0 0 0 1-1v-2.864c0-.245-.09-.482-.253-.665L18.85 9.336A1.002 1.002 0 0 0 18.102 9H17ZM4 6a1 1 0 0 0-1 1v3h12V7a1 1 0 0 0-1-1H4Z"
}));
export default ComponenticTruck;