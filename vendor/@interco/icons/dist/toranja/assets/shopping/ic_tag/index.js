function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M10.058 2.629a3.001 3.001 0 0 1 2.91-.774l5.556 1.516a3 3 0 0 1 2.105 2.104l1.515 5.557a3 3 0 0 1-.773 2.91l-7.664 7.665a3 3 0 0 1-4.243 0l-7.07-7.071a3 3 0 0 1 0-4.243l7.664-7.664Zm2.384 1.156a1 1 0 0 0-.97.258l-7.664 7.665a1 1 0 0 0 0 1.414l7.07 7.071a1 1 0 0 0 1.415 0l7.664-7.665a1 1 0 0 0 .258-.97l-1.516-5.556a1 1 0 0 0-.701-.701l-5.556-1.516Zm2.326 3.326a1.5 1.5 0 1 1 2.12 2.122 1.5 1.5 0 0 1-2.12-2.122Z"
}));
export default ComponenticTag;