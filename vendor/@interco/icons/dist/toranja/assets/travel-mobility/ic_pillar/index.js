function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPillar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M10 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM15 10a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M2 4a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6v10a3 3 0 1 1 0 6H5a3 3 0 1 1 0-6V7a3 3 0 0 1-3-3Zm5 13h10V7H7v10Zm-2 2a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5ZM19 5H5a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2Z",
  clipRule: "evenodd"
}));
export default ComponenticPillar;