function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticGame = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2.5,
  d: "M13.066 7.388c-2.152-.63-4.438-1.299-6.13.12-3.102 2.6-6.203 15.234-2.757 17.463 1.953 1.264 4.483-1.05 6.364-2.769.774-.707 1.437-1.313 1.906-1.53 1.287-.594 2.941-.805 3.551-.829.61.024 2.264.235 3.551.83.469.216 1.133.822 1.906 1.53 1.88 1.719 4.41 4.032 6.364 2.768 3.446-2.23.345-14.862-2.756-17.463-1.693-1.419-3.98-.75-6.13-.12-1.037.304-2.043.598-2.935.645-.892-.047-1.897-.341-2.934-.645Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  d: "M21.333 13.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM21.333 18.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM20 14.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM24 16a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 24 16ZM10.666 12a.886.886 0 0 0-.888.883v.895h-.883a.892.892 0 0 0-.895.889c0 .49.4.889.895.889h.883v.895c0 .487.397.882.888.882s.89-.395.89-.882v-.895h.882a.892.892 0 0 0 .895-.89c0-.49-.4-.888-.895-.888h-.883v-.895a.886.886 0 0 0-.889-.883Z"
}));
export default ComponenticGame;