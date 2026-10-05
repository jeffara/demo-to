function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAttachment = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M10 3a3 3 0 0 0-3 3v10a5 5 0 0 0 10 0V6a1 1 0 1 1 2 0v10a7 7 0 1 1-14 0V6a5 5 0 0 1 10 0v10a3 3 0 1 1-6 0V6a1 1 0 0 1 2 0v10a1 1 0 1 0 2 0V6a3 3 0 0 0-3-3Z"
}));
export default ComponenticAttachment;