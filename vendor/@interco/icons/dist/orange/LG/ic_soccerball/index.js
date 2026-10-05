function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSoccerball = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M14.1 21.333a2.667 2.667 0 0 1-2.52-1.796l-1.273-3.683a2.667 2.667 0 0 1 .939-3.018l3.172-2.337a2.667 2.667 0 0 1 3.164 0l3.172 2.337c.94.692 1.32 1.915.939 3.018l-1.273 3.683a2.667 2.667 0 0 1-2.52 1.796h-3.8ZM2.827 18.072A13.432 13.432 0 0 1 2.667 16c0-3.5 1.349-6.687 3.556-9.066L7.76 9.702c.545.98.418 2.195-.315 3.041l-4.618 5.329ZM14.98 29.295a13.331 13.331 0 0 1-10.442-6.48l4.932-.591a2.666 2.666 0 0 1 2.703 1.455l2.808 5.616ZM27.462 22.816a13.332 13.332 0 0 1-10.443 6.479l2.808-5.616a2.667 2.667 0 0 1 2.703-1.455l4.932.591ZM25.777 6.934A13.286 13.286 0 0 1 29.333 16c0 .705-.054 1.397-.16 2.072l-4.617-5.329a2.667 2.667 0 0 1-.316-3.041l1.537-2.768ZM21.431 3.82A13.287 13.287 0 0 0 16 2.667c-1.934 0-3.772.412-5.431 1.153l3.89 2.755c.923.654 2.159.654 3.082 0l3.89-2.755Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2.5,
  d: "M29.333 16c0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333C2.667 8.636 8.637 2.667 16 2.667c7.364 0 13.333 5.97 13.333 13.333Z"
}));
export default ComponenticSoccerball;