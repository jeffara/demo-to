import { jsxs as r, jsx as e } from "react/jsx-runtime";
const l = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", fill: "none", children: [
  /* @__PURE__ */ e("g", { filter: "url(#successBaseBlur)", children: /* @__PURE__ */ e("circle", { cx: "32", cy: "32", r: "28", fill: "#10A100", fillOpacity: "0.7" }) }),
  /* @__PURE__ */ e("g", { filter: "url(#successCheckInnerShadow)", children: /* @__PURE__ */ e(
    "path",
    {
      d: "M47.4064 26.4404C48.1979 25.6728 48.1979 24.4282 47.4064 23.6606L45.2566 21.5757C44.4651 20.8081 43.1818 20.8081 42.3903 21.5757L29.492 34.0849L21.6097 26.4404C20.8182 25.6728 19.5349 25.6728 18.7434 26.4404L16.5936 28.5252C15.8021 29.2929 15.8021 30.5374 16.5936 31.3051L28.0588 42.4243C28.8503 43.1919 30.1336 43.1919 30.9251 42.4243L47.4064 26.4404Z",
      fill: "#F3FFDF"
    }
  ) }),
  /* @__PURE__ */ r("defs", { children: [
    /* @__PURE__ */ r(
      "filter",
      {
        id: "successBaseBlur",
        x: "-16",
        y: "-16",
        width: "96",
        height: "96",
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
          /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: "3" }),
          /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              type: "matrix",
              values: "0 0 0 0 0.916471 0 0 0 0 0.996078 0 0 0 0 0.831373 0 0 0 0.3 0"
            }
          ),
          /* @__PURE__ */ e("feBlend", { in2: "shape", result: "effect1_innerShadow_0_95" })
        ]
      }
    ),
    /* @__PURE__ */ r(
      "filter",
      {
        id: "successCheckInnerShadow",
        x: "16",
        y: "21",
        width: "32",
        height: "23",
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
          /* @__PURE__ */ e("feBlend", { in2: "shape", result: "effect1_innerShadow_0_84" })
        ]
      }
    )
  ] })
] });
export {
  l as SuccessIcon
};
