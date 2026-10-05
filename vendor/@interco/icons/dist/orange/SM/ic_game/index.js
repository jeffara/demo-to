function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticGame = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 1.5,
  d: "M6.533 3.694c-1.076-.315-2.22-.65-3.065.06-1.551 1.3-3.102 7.617-1.379 8.731.977.632 2.242-.524 3.182-1.384.387-.353.719-.657.953-.765.644-.297 1.471-.403 1.776-.415.305.012 1.132.118 1.776.415.234.108.566.412.952.765.94.86 2.206 2.016 3.183 1.384 1.722-1.114.172-7.43-1.379-8.731-.846-.71-1.99-.375-3.065-.06-.518.152-1.021.299-1.467.322-.446-.023-.949-.17-1.467-.322Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M10.667 6.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM10.667 9.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM10 7.333a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0ZM12 8a.667.667 0 1 0 0-1.333A.667.667 0 0 0 12 8ZM5.333 6a.443.443 0 0 0-.444.441v.448h-.441A.446.446 0 0 0 4 7.333c0 .246.2.445.448.445h.44v.447c0 .244.2.442.445.442a.443.443 0 0 0 .445-.442v-.447h.441a.446.446 0 0 0 .448-.445c0-.245-.2-.444-.448-.444h-.441V6.44A.443.443 0 0 0 5.333 6Z"
}));
export default ComponenticGame;