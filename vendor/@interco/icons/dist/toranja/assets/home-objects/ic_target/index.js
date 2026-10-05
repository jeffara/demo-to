function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTarget = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M12 1a1 1 0 1 1 0 2 9 9 0 1 0 9 9 1 1 0 1 1 2 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm0 5a1 1 0 1 1 0 2 4 4 0 1 0 4 4 1 1 0 1 1 2 0 6 6 0 1 1-6-6Zm5.148-4.62a1 1 0 0 1 .973.256l4.243 4.243a1 1 0 0 1-.465 1.677l-5.388 1.347-4.046 4.046a1.001 1.001 0 0 1-1.415-1.414l4.047-4.047 1.347-5.387a1 1 0 0 1 .704-.721Zm.243 5.183.047.046 2.263-.565-1.745-1.745-.565 2.263Z"
}));
export default ComponenticTarget;