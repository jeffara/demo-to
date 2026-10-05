function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEnvelope = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M19 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14Zm-6.445 11.832a1 1 0 0 1-1.11 0L4 9.868V18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.868l-7.445 4.964ZM5 5a1 1 0 0 0-1 1v1.465l8 5.333 8-5.333V6a1 1 0 0 0-1-1H5Z"
}));
export default ComponenticEnvelope;