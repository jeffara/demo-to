function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTicket = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  d: "M15.992 11.044a.144.144 0 0 0-.115-.101l-2.59-.396-1.159-2.463A.141.141 0 0 0 12 8a.143.143 0 0 0-.129.084l-1.158 2.464-2.59.395a.145.145 0 0 0-.116.101.155.155 0 0 0 .036.155l1.875 1.917-.443 2.709a.154.154 0 0 0 .057.146.136.136 0 0 0 .15.011L12 14.704l2.317 1.278a.138.138 0 0 0 .15-.01.155.155 0 0 0 .058-.147l-.443-2.708 1.875-1.918c.04-.04.053-.1.035-.155Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M20 4H4a2 2 0 0 0-2 2v3a3 3 0 1 1 0 6v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a3 3 0 1 1 0-6V6a2 2 0 0 0-2-2Z"
}));
export default ComponenticTicket;