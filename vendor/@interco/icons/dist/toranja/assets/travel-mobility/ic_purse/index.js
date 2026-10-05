function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPurse = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M13 2a2 2 0 0 1 2 2v7h2.002C18.11 11 19 11.899 19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6c0-1.102.89-2 1.998-2H9V4a2 2 0 0 1 2-2h2ZM7 13v6h10v-6H7Zm4-2h2V4h-2v7Z"
}));
export default ComponenticPurse;