function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M14.422 4.38 4.016 14.784a2.5 2.5 0 0 0 0 3.535l9.664 9.664a2.5 2.5 0 0 0 3.536 0L27.62 17.578a2.5 2.5 0 0 0 .645-2.425L26.195 7.56a2.5 2.5 0 0 0-1.754-1.754l-7.593-2.071a2.5 2.5 0 0 0-2.426.644Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 21.105,
  cy: 10.896,
  r: 2,
  fill: props.color,
  transform: "rotate(45 21.105 10.896)"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0H32V32H0z"
}))));
export default ComponenticTag;