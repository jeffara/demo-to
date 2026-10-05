function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEllipsis = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M3 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM17 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
}));
export default ComponenticEllipsis;