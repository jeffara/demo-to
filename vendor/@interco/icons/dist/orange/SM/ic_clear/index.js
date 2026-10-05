function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticClear = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM6.707 5.293a1 1 0 0 0-1.414 1.414L6.586 8 5.293 9.293a1 1 0 0 0 1.414 1.414L8 9.414l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 8l1.293-1.293a1 1 0 0 0-1.414-1.414L8 6.586 6.707 5.293Z",
  clipRule: "evenodd"
}));
export default ComponenticClear;