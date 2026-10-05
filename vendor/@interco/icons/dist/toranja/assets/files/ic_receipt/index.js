function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticReceipt = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M8 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM8 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M6 2h12a3 3 0 0 1 3 3v16a1 1 0 0 1-1.447.894l-3.447-1.723L12.6 22.8a1 1 0 0 1-1.2 0l-3.506-2.63-3.447 1.724A1 1 0 0 1 3 21V5a3 3 0 0 1 3-3Zm12 2H6a1 1 0 0 0-1 1v14.382l2.553-1.276A1 1 0 0 1 8.6 18.2l3.4 2.55 3.4-2.55a1 1 0 0 1 1.047-.094L19 19.382V5a1 1 0 0 0-1-1Z",
  clipRule: "evenodd"
}));
export default ComponenticReceipt;