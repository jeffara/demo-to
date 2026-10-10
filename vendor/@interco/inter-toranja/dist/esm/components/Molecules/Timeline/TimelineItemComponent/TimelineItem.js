import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { useRef as A, useEffect as B } from "react";
import { TimelineItemContentRenderer as g } from "./ContentComponent/ContentComponent.js";
import { StepComponent as z } from "./StepComponent/StepComponent.js";
import { TextWeight as p, TextSize as d, TextType as N } from "../../../Atoms/Text/types.js";
import { TimelineStepStatusEnum as t, TimelineStateEnum as C } from "../utils/enums.js";
import { getTimelineClasses as G } from "../utils/getTimelineClasses.js";
import '../../../../assets/components/Molecules/Timeline/Timeline.modules.css';/* empty css                       */
import P from "../../../../node_modules/uuid/dist/esm-browser/v4.js";
import { TAGGING_EVENT as U } from "../../../../utils/pattern.js";
import { Text as f } from "../../../Atoms/Text/Text.js";
const b = ({
  title: n,
  date: r,
  status: m,
  state: i,
  showLine: h = !0,
  contents: c = [],
  onTag: l
}) => {
  const S = A(
    Array(c.length).fill("").map(() => P())
  ), a = [
    t.CURRENT,
    t.INCOMPLETE,
    t.SUCCESS
  ].includes(m), T = i !== C.SKELETON;
  B(() => {
    m === t.CURRENT && i === C.ENABLED && typeof l == "function" && l((o) => ({
      ...o,
      name: U.DISPLAY,
      ComponentProperties: {
        name_event: "TimelineItemCurrent",
        component_name: "Timeline",
        state: i,
        title: n,
        date: r,
        step_status: m
      }
    }));
  }, [m, i, l, n, r]);
  const {
    containerClass: E,
    markerClass: x,
    contentClass: v,
    itemClassName: y,
    headerClassName: u,
    titleClassName: R,
    markerLineClassName: I,
    contentClassName: _
  } = G({
    status: m,
    state: i,
    isSmaller: a,
    showLine: h
  });
  return /* @__PURE__ */ e("div", { className: y, children: /* @__PURE__ */ s("div", { className: E, children: [
    /* @__PURE__ */ s("div", { className: x, children: [
      /* @__PURE__ */ e(z, { status: m, state: i, isSmaller: a }),
      /* @__PURE__ */ e("div", { className: I })
    ] }),
    /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ s("div", { className: R, children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        f,
        {
          textType: N.Body,
          textSize: d.Small,
          textWeight: p.Bold,
          state: i,
          children: n
        }
      ) }),
      /* @__PURE__ */ e("div", { children: r && /* @__PURE__ */ e(
        f,
        {
          as: "span",
          textType: N.Body,
          textSize: d.Small,
          textWeight: p.Regular,
          state: i,
          children: r
        }
      ) })
    ] }) }),
    T && /* @__PURE__ */ e("div", { className: _, children: c.map((o, L) => /* @__PURE__ */ e("div", { className: `${v}__${o.type}`, children: /* @__PURE__ */ e(
      g,
      {
        content: o,
        state: i,
        title: n,
        date: r,
        stepStatus: m,
        onTag: l
      },
      S.current[L]
    ) })) })
  ] }) });
};
export {
  b as TimelineItem
};
