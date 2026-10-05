function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSent = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "m6 3 14.422 7.211c1.474.737 1.474 2.84 0 3.578l-14.421 7.21c-1.546.774-3.279-.647-2.824-2.314l1.68-6.159a2 2 0 0 0 0-1.052l-1.68-6.158C2.722 3.648 4.455 2.227 6.001 3ZM5 12h8"
}));
export default ComponenticSent;