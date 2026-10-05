function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFlash = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M14.412 3a1 1 0 0 0-1.76-.65l-9.412 11A1 1 0 0 0 4 15h5.588v6a1 1 0 0 0 1.76.65l9.412-11A1 1 0 0 0 20 9h-5.588V3Zm-2.824 11a1 1 0 0 0-1-1H6.172l6.24-7.293V10a1 1 0 0 0 1 1h4.416l-6.24 7.293V14Z",
  clipRule: "evenodd"
}));
export default ComponenticFlash;