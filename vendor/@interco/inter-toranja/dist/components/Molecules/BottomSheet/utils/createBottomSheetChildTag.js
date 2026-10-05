const n = "BottomSheet", i = (t, r) => {
  if (t)
    return (o) => {
      t((s) => {
        const e = o(s);
        return {
          ...e,
          CustomParameters: {
            ...e.CustomParameters,
            nested_in: n,
            nested_title: r
          }
        };
      });
    };
};
export {
  i as createBottomSheetChildTag
};
