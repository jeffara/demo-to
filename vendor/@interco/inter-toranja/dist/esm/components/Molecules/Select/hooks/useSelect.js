import { useId as X, useState as K, useRef as b, useEffect as a, useCallback as Y } from "react";
import { resolveSelectPanelFlags as Z, findSelectedOption as ee, shouldSuppressSelectVisualLabel as te, getDesktopPickerInputProps as se, handleSelectTriggerClick as R, resolveFieldValue as ne, handleSelectTriggerKeyDown as re } from "../utils/selectPanel.js";
import { useClickOutside as le } from "../../BottomSheet/hooks/useClickOutside.js";
import { classNamesMerge as x } from "../../../../utils/classNamesMerge.js";
import { STATE as B } from "../../../../utils/pattern.js";
import { getToranjaSurface as V } from "../../../../utils/useToranjaSurface/useToranjaSurface.js";
const me = (N) => {
  const {
    label: A = "Texto",
    state: c = B.ENABLED,
    options: i,
    onOptionSelect: u,
    onClick: P,
    onClickHelper: d,
    onChange: l,
    value: h,
    disabled: y,
    readOnly: E,
    id: M,
    hideLabelWhenFilled: $,
    ...j
  } = N, S = X(), p = M ?? `select-${S}`, v = `select-panel${S.replace(/:/g, "")}`, T = `${v}-listbox`, [s, n] = K(!1), [D, H] = K(V), O = b(null), _ = b(null), I = b(null), { hasDesktopPicker: t, isDisabled: w, isReadOnly: W, isPanelBlocked: C, canOpenPanel: g } = Z({
    surface: D,
    options: i,
    disabled: y,
    readOnly: E,
    state: c
  }), f = ne(h), m = ee(i, f), q = (m == null ? void 0 : m.label) ?? h, z = t && te($, f);
  a(() => {
    const e = new MutationObserver(() => {
      H(V());
    });
    return e.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["toranja-surface"]
    }), () => {
      e.disconnect();
    };
  }, []);
  const o = Y(
    (e) => {
      if (n(!1), !(e != null && e.restoreFocus))
        return;
      const r = document.getElementById(p);
      r instanceof HTMLElement && r.focus();
    },
    [p]
  );
  a(() => {
    t || n(!1);
  }, [t]), a(() => {
    s && n(!1);
  }, [D]), le({
    ref: _,
    extraRef: I,
    isActive: s && t,
    onClickOutside: () => o()
  }), a(() => {
    if (!s || !t)
      return () => {
      };
    const e = O.current;
    if (!e)
      return () => {
      };
    const r = (F) => {
      F.key === "Escape" && (F.preventDefault(), o({ restoreFocus: !0 }));
    };
    return e.addEventListener("keydown", r), () => {
      e.removeEventListener("keydown", r);
    };
  }, [s, t, o]);
  const G = x("select", {
    "select--open": s && t
  }), J = x("select__trigger", {
    "select__trigger--disabled": w,
    "select__trigger--readonly": W && !w,
    "select__trigger--skeleton": c === B.SKELETON
  }), Q = () => {
    n(!0);
  }, k = () => {
    n((e) => !e);
  }, U = (e) => {
    R({
      event: e,
      isPanelBlocked: C,
      canOpenPanel: g,
      onClick: P,
      togglePanel: k
    });
  }, L = (e) => {
    e.stopPropagation(), R({
      event: e,
      isPanelBlocked: C,
      canOpenPanel: g,
      onClick: P,
      togglePanel: k
    });
  };
  return {
    rootClasses: G,
    triggerClasses: J,
    panelClasses: "select__panel",
    rootRef: O,
    panelRef: _,
    triggerRef: I,
    isPanelOpen: s,
    hasDesktopPicker: t,
    panelId: v,
    listboxId: T,
    triggerId: p,
    selectedValue: f,
    options: i,
    handleTriggerClick: U,
    handleHelperClick: (e) => {
      e && e.stopPropagation(), d == null || d();
    },
    handleOptionSelect: (e) => {
      l == null || l(e.value), u == null || u(e), o({ restoreFocus: !0 });
    },
    inputBaseProps: {
      ...j,
      state: c,
      value: q,
      onChange: l,
      disabled: y,
      readOnly: E,
      suppressVisualLabel: z,
      onClick: L,
      ...se({
        hasDesktopPicker: t,
        isPanelOpen: s,
        listboxId: T,
        onKeyDown: (e) => {
          re({
            event: e,
            canOpenPanel: g,
            openPanel: Q,
            togglePanel: k
          });
        },
        onClick: L
      })
    },
    label: A
  };
};
export {
  me as useSelect
};
