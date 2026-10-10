import { useState as _, useMemo as U, useCallback as r } from "react";
const s = "ib-home", V = (e) => e.reduce((t, a) => t + a, 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }), W = (e) => {
  if (!e)
    return 0;
  const o = e.replace(/\./g, "").replace(",", ".").replace(/[^\d.-]/g, ""), t = Number(o);
  return Number.isFinite(t) ? t : 0;
}, Y = (e) => {
  const [o, t] = _(!1), [a, i] = _([]), p = s, d = `${s}__shell`, m = `${s}__sidebar`, C = `${s}__main`, u = `${s}__container`, $ = `${s}__header-bar`, h = `${s}__header-toolbar`, b = `${s}__header-search`, g = `${s}__header-meta`, x = `${s}__grid`, y = `${s}__statement-panel`, f = `${s}__approvals-panel`, k = `${s}__aside`, A = `${s}__pix-panel`, v = `${s}__banner`, S = `${s}__quick-access-panel`, M = `${s}__balance-block`, B = `${s}__balance-header`, w = `${s}__balance-row`, I = `${s}__statement-list`, L = `${s}__statement-month`, T = `${s}__quick-access-grid`, q = `${s}__approvals-list`, P = `${s}__approvals-summary`, R = `${s}__pix-body`, O = `${s}__pix-fields`, F = `${s}__pix-amount`, H = `${s}__pix-key`, K = `${s}__pix-key-row`, N = "ib-home-show-statement-trigger", z = a.length, G = e.length, j = U(() => {
    const n = e.filter((l) => a.includes(l.id)).map((l) => W(l.amount));
    return V(n);
  }, [e, a]), D = r(() => {
    t(!0);
  }, []), E = r(() => {
    t(!1);
  }, []), J = r((n, l) => {
    i((c) => l ? c.includes(n) ? c : [...c, n] : c.filter((Q) => Q !== n));
  }, []);
  return {
    rootClasses: p,
    shellClasses: d,
    sidebarClasses: m,
    mainClasses: C,
    containerClasses: u,
    headerBarClasses: $,
    headerToolbarClasses: h,
    headerSearchClasses: b,
    headerMetaClasses: g,
    gridClasses: x,
    statementPanelClasses: y,
    approvalsPanelClasses: f,
    asideClasses: k,
    pixPanelClasses: A,
    bannerClasses: v,
    quickAccessPanelClasses: S,
    balanceBlockClasses: M,
    balanceHeaderClasses: B,
    balanceRowClasses: w,
    statementListClasses: I,
    statementMonthClasses: L,
    quickAccessGridClasses: T,
    approvalsListClasses: q,
    approvalsSummaryClasses: P,
    pixBodyClasses: R,
    pixFieldsClasses: O,
    pixAmountClasses: F,
    pixKeyClasses: H,
    pixKeyRowClasses: K,
    statementModalTriggerId: N,
    isStatementModalOpen: o,
    selectedApprovalIds: a,
    selectedCount: z,
    totalApprovals: G,
    selectedTotalLabel: j,
    handleOpenStatementModal: D,
    handleCloseStatementModal: E,
    handleToggleApproval: J
  };
};
export {
  Y as useHomeInternetBanking
};
