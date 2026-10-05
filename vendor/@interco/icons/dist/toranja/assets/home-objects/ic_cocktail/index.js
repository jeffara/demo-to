function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCocktail = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M20 8a1 1 0 0 1 .707 1.707L13 17.414V20h4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h4v-2.586L3.293 9.707A1 1 0 0 1 4 8h16ZM6.414 10 12 15.586 17.586 10H6.414ZM19 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
}));
export default ComponenticCocktail;