function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEdit = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M3 21v-3.672a2 2 0 0 1 .586-1.414L15.509 3.991a2 2 0 0 1 2.901.076l1.797 1.997a2 2 0 0 1-.098 2.777L8.081 20.44a2 2 0 0 1-1.388.56H3ZM13.5 6l4 4.5M13 21h8"
}));
export default ComponenticEdit;