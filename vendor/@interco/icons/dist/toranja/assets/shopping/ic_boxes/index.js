function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBoxes = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M16.5 2a1 1 0 0 1 1 1v8H21a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3.5V3a1 1 0 0 1 1-1h9ZM4 13v7h7v-7H4Zm9 0v7h7v-7h-7Zm-4.5 2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Zm9 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Zm-9-11v7h7V4h-7ZM13 6a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Z"
}));
export default ComponenticBoxes;