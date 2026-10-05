const t = (e, r, d) => {
  if (!(!e && !r))
    return (p) => {
      const i = (o) => {
        const l = p(o);
        return {
          ...o,
          ...l,
          ComponentProperties: {
            ...l.ComponentProperties,
            value: d.value
          },
          ProductProperties: {
            nested_in: "FeedbackScreen",
            nested_label: d.title
          }
        };
      };
      r == null || r(i), e == null || e(i);
    };
};
export {
  t as wrapNestedOnTag
};
