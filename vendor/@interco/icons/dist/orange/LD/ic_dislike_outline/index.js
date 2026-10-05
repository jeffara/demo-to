function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDislikeOutline = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M2.667 18.667 8 18.65V3.985L2.667 4v14.667ZM22.867 25.977c0 2.442-4.2 2.442-4.2 1.221.325-5.628-2.497-8.213-4.619-9.472-.43-.256-.715-.708-.715-1.21V6c0-.736.597-1.333 1.333-1.333h10.001C26 4.667 27.558 6.323 28 8c.442 1.677 1.333 6.112 1.333 7.333s-.133 3.318-2.533 3.318h-2.602c-.736 0-1.331.597-1.331 1.334v5.992Z"
}));
export default ComponenticDislikeOutline;