function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTrain = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  d: "M3.333 14.666h9.334m-8-4H5m6 0h.333m-6.666 4V14m6.666.666V14"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  d: "M14 4H8m0 0H2m6 0v4.667m0 0h6m-6 0H2m1.333 4h9.334c.736 0 1.333-.597 1.333-1.333V4.667a3.333 3.333 0 0 0-3.333-3.333H5.333A3.333 3.333 0 0 0 2 4.667v6.667c0 .736.597 1.333 1.333 1.333Z"
}));
export default ComponenticTrain;