function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPill = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M27.374 23.838a2.5 2.5 0 0 0-3.535 3.536l3.535-3.535Zm28.072 10.394L34.232 55.445l3.536 3.536L58.98 37.768l-3.535-3.536Zm-38.891 3.536 21.213-21.213-3.536-3.536L13.02 34.232l3.536 3.536Zm0 17.677c-4.882-4.881-4.882-12.796 0-17.677l-3.536-3.536c-6.834 6.834-6.834 17.915 0 24.749l3.536-3.536Zm17.677 0c-4.881 4.882-12.796 4.882-17.677 0l-3.536 3.536c6.834 6.834 17.915 6.834 24.749 0l-3.536-3.536Zm21.214-38.89c4.881 4.881 4.881 12.796 0 17.677l3.535 3.536c6.834-6.835 6.834-17.915 0-24.75l-3.535 3.537Zm3.535-3.536c-6.834-6.834-17.914-6.834-24.749 0l3.536 3.536c4.882-4.882 12.796-4.882 17.678 0l3.535-3.536Zm-10.607 31.82-21-21-3.535 3.535 21 21 3.535-3.535Z"
}));
export default ComponenticPill;