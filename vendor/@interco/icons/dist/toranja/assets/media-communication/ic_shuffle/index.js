function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticShuffle = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M17.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L18.586 7H17.14a3 3 0 0 0-2.496 1.336L12.202 12l2.443 3.664A3 3 0 0 0 17.14 17h1.445l-1.293-1.293a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L18.586 19H17.14a5 5 0 0 1-4.16-2.227L11 13.803l-1.98 2.97A5 5 0 0 1 4.86 19H3a1 1 0 1 1 0-2h1.86a3 3 0 0 0 2.495-1.336L9.798 12 7.355 8.336A3 3 0 0 0 4.86 7H3a1 1 0 1 1 0-2h1.86a5 5 0 0 1 4.16 2.227l1.98 2.97 1.98-2.97A5 5 0 0 1 17.14 5h1.446l-1.293-1.293a1 1 0 0 1 0-1.414Z"
}));
export default ComponenticShuffle;