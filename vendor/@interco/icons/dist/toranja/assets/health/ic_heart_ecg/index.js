function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHeartEcg = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M16.309 3.008A6 6 0 0 1 22 9c0 2.928-1.888 5.428-3.867 7.344-1.978 1.913-4.36 3.518-5.508 4.437a1 1 0 0 1-1.249 0c-1.149-.919-3.531-2.523-5.509-4.437C3.888 14.428 2 11.928 2 9a6 6 0 0 1 6-6l.287.007A5.976 5.976 0 0 1 12 4.53 5.978 5.978 0 0 1 16 3l.309.008Zm-4.36 12.308a1 1 0 0 1-1.781.239L8.465 13H5.559a15.956 15.956 0 0 0 1.699 1.906c1.625 1.573 3.414 2.824 4.742 3.83 1.328-1.006 3.116-2.256 4.742-3.83a15.954 15.954 0 0 0 1.7-1.906H15a1 1 0 0 1-.757-.347l-.075-.098-.866-1.3-1.354 4.061ZM16 5a3.993 3.993 0 0 0-3.2 1.6 1 1 0 0 1-1.6 0 3.992 3.992 0 0 0-2.957-1.593L8 5a4 4 0 0 0-4 4c0 .676.147 1.343.408 2H9a1 1 0 0 1 .832.445l.865 1.3 1.355-4.061.053-.131a1 1 0 0 1 1.727-.108L15.535 11h4.057c.26-.657.408-1.324.408-2a4 4 0 0 0-3.794-3.995L16 5Z"
}));
export default ComponenticHeartEcg;