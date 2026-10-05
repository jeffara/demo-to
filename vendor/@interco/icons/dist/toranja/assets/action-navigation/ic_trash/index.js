function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTrash = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M15 2a3 3 0 0 1 3 3v1h3a1 1 0 1 1 0 2h-1v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8H3a1 1 0 0 1 0-2h3V5a3 3 0 0 1 3-3h6ZM6 19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H6v11ZM9 4a1 1 0 0 0-1 1v1h8V5a1 1 0 0 0-1-1H9Z"
}));
export default ComponenticTrash;