function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEdit = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M4 28v-4.965a2.5 2.5 0 0 1 .732-1.767L20.803 5.197a2.5 2.5 0 0 1 3.626.095l2.622 2.913a2.5 2.5 0 0 1-.123 3.472L10.726 27.3a2.5 2.5 0 0 1-1.735.7H4ZM18 8l5.333 6M17.333 28H28"
}));
export default ComponenticEdit;