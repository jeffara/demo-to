function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMachine = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M4 9.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334ZM4 11.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334ZM6 10a.667.667 0 1 1 1.333 0A.667.667 0 0 1 6 10ZM6.667 11.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334ZM8.667 10A.667.667 0 1 1 10 10a.667.667 0 0 1-1.333 0ZM9.333 11.333a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M12 4.667h2c.736 0 1.333.597 1.333 1.333v5.333c0 .737-.597 1.334-1.333 1.334h-2m2.667-5.334H12m-9.333 7.334h8c.736 0 1.333-.597 1.333-1.334V2.667c0-.737-.597-1.334-1.333-1.334h-8c-.737 0-1.334.597-1.334 1.334v10.666c0 .737.597 1.334 1.334 1.334Zm2-7.334h4a.667.667 0 0 0 .666-.666v-2A.667.667 0 0 0 8.667 4h-4A.667.667 0 0 0 4 4.667v2c0 .368.298.666.667.666Z"
}));
export default ComponenticMachine;