import { jsxs as r, jsx as e } from "react/jsx-runtime";
const l = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", fill: "none", children: [
  /* @__PURE__ */ e("g", { filter: "url(#scheduledBaseBlur)", children: /* @__PURE__ */ e("circle", { cx: "32", cy: "32", r: "28", fill: "#10A100", fillOpacity: "0.7" }) }),
  /* @__PURE__ */ e("g", { filter: "url(#scheduledVectorInnerShadow)", children: /* @__PURE__ */ e(
    "path",
    {
      d: "M37.727 19C38.3797 19 38.9092 19.5294 38.9092 20.1821V21.3643H40.0913C42.0492 21.3644 43.6367 22.9517 43.6367 24.9097V29.292C45.1076 30.9586 46 33.1483 46 35.5459C45.9998 40.7672 41.7672 44.9998 36.5459 45C34.1483 45 31.9586 44.1076 30.292 42.6367H23.5454C21.5876 42.6365 20.0002 41.0491 20 39.0913V24.9097C20 22.9517 21.5875 21.3644 23.5454 21.3643H24.7275V20.1821C24.7275 19.5294 25.257 19 25.9097 19C26.5622 19.0002 27.0908 19.5296 27.0908 20.1821V21.3643H36.5459V20.1821C36.5459 19.5296 37.0745 19.0002 37.727 19ZM36.5459 28.4551C32.6298 28.4551 29.4551 31.6298 29.4551 35.5459C29.4553 39.4619 32.6299 42.6367 36.5459 42.6367C40.4618 42.6365 43.6365 39.4618 43.6367 35.5459C43.6367 31.6299 40.4619 28.4553 36.5459 28.4551ZM22.3643 30.8184V39.0913C22.3644 39.7437 22.893 40.2723 23.5454 40.2725H28.356C27.5518 38.882 27.0909 37.2678 27.0908 35.5459C27.0908 33.8238 27.5516 32.209 28.356 30.8184H22.3643ZM36.5459 30.8184C37.1984 30.8185 37.727 31.3479 37.727 32.0005V35.6241L39.5927 36.9447C40.1251 37.322 40.2509 38.0602 39.8737 38.5927C39.4964 39.1251 38.7582 39.2509 38.2256 38.8737L35.8623 37.1989C35.5498 36.9774 35.3639 36.6184 35.3638 36.2354V32.0005C35.3638 31.3478 35.8932 30.8184 36.5459 30.8184ZM23.5454 23.7275C22.8929 23.7277 22.3643 24.2571 22.3643 24.9097V28.4551H30.292C31.9586 26.9841 34.1482 26.0908 36.5459 26.0908C38.2678 26.0909 39.882 26.5518 41.2725 27.356V24.9097C41.2725 24.2571 40.7439 23.7277 40.0913 23.7275H38.9092V24.9097C38.909 25.5622 38.3796 26.0908 37.727 26.0908C37.0746 26.0906 36.5461 25.5621 36.5459 24.9097V23.7275H27.0908V24.9097C27.0906 25.5621 26.5621 26.0906 25.9097 26.0908C25.2571 26.0908 24.7277 25.5622 24.7275 24.9097V23.7275H23.5454Z",
      fill: "#F3FFDF"
    }
  ) }),
  /* @__PURE__ */ r("defs", { children: [
    /* @__PURE__ */ r(
      "filter",
      {
        id: "scheduledBaseBlur",
        x: "-25.0909",
        y: "-25.0909",
        width: "114.1818",
        height: "114.1818",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              in: "SourceAlpha",
              type: "matrix",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
              result: "hardAlpha"
            }
          ),
          /* @__PURE__ */ e("feOffset", { dy: "1.45455" }),
          /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: "4.36364" }),
          /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              type: "matrix",
              values: "0 0 0 0 0.916471 0 0 0 0 0.996078 0 0 0 0 0.831373 0 0 0 0.3 0"
            }
          ),
          /* @__PURE__ */ e("feBlend", { in2: "shape", result: "effect1_innerShadow_0_82" })
        ]
      }
    ),
    /* @__PURE__ */ r(
      "filter",
      {
        id: "scheduledVectorInnerShadow",
        x: "20",
        y: "19",
        width: "26",
        height: "27",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              in: "SourceAlpha",
              type: "matrix",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
              result: "hardAlpha"
            }
          ),
          /* @__PURE__ */ e("feOffset", { dy: "1" }),
          /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: "1" }),
          /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              type: "matrix",
              values: "0 0 0 0 0.121012 0 0 0 0 0.418728 0 0 0 0 0.0939465 0 0 0 0.2 0"
            }
          ),
          /* @__PURE__ */ e("feBlend", { in2: "shape", result: "effect1_innerShadow_0_83" })
        ]
      }
    )
  ] })
] });
export {
  l as ScheduledIcon
};
