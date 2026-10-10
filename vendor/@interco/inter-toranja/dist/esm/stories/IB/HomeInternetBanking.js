import { jsxs as l, jsx as a } from "react/jsx-runtime";
import { HOME_INTERNET_BANKING_SIDEBAR_ITEMS as y, HOME_INTERNET_BANKING_ACCOUNT as A, HOME_INTERNET_BANKING_STATEMENT_GROUPS as f, HOME_INTERNET_BANKING_APPROVALS as N, HOME_INTERNET_BANKING_BANNERS as g, HOME_INTERNET_BANKING_QUICK_ACCESS as x } from "./home-internet-banking-mock.js";
import { useHomeInternetBanking as S } from "./hooks/useHomeInternetBanking.js";
import { Divider as M } from "../../components/Atoms/Divider/Divider.js";
import { Icon as L } from "../../components/Atoms/Icon/Icon.js";
import { Avatar as B } from "../../components/Molecules/Avatar/Avatar.js";
import { Banner as _ } from "../../components/Molecules/Banner/Banner.js";
import { BANNER_VARIANT as R } from "../../components/Molecules/Banner/constants.js";
import { Header as P } from "../../components/Molecules/Header/Header.js";
import { InputMoney as D } from "../../components/Molecules/InputMoney/InputMoney.js";
import { VariantNumeric as O, InputTypeValue as k, InputCurrencyMask as z } from "../../components/Molecules/InputMoney/types.js";
import { InputText as V } from "../../components/Molecules/InputText/InputText.js";
import { Link as H } from "../../components/Molecules/Link/Link.js";
import { ListItemGeneral as u } from "../../components/Molecules/ListItemGeneral/ListItemGeneral.js";
import { ListItemViewValueColorEnum as C, ListItemViewValueTypeEnum as v, ListItemViewOrientationEnum as T } from "../../components/Molecules/ListItemView/enums.js";
import { ListItemView as E } from "../../components/Molecules/ListItemView/ListItemView.js";
import { MenuItem as w } from "../../components/Molecules/MenuItem/MenuItem.js";
import { ModalDialog as G } from "../../components/Molecules/ModalDialog/ModalDialog.js";
import { MODAL_DIALOG_OVERLAY as K } from "../../components/Molecules/ModalDialog/types.js";
import { Panel as h } from "../../components/Molecules/Panel/Panel.js";
import { SectionSubtitle as U } from "../../components/Molecules/SectionSubtitle/SectionSubtitle.js";
import { SectionTitle as Y } from "../../components/Molecules/SectionTitle/SectionTitle.js";
import { Sidebar as q } from "../../components/Molecules/Sidebar/Sidebar.js";
import { TooltipDescription as F } from "../../components/Molecules/TooltipDescription/TooltipDescription.js";
import { STATE as m, SIZE as p, HIERARCHY as b, VARIANT as I } from "../../utils/pattern.js";
import '../../assets/stories/IB/HomeInternetBanking.modules.css';/* empty css                                 */
import { Text as t } from "../../components/Atoms/Text/Text.js";
import { TextWeight as Z, TextSize as r, TextType as o } from "../../components/Atoms/Text/types.js";
import { Button as j } from "../../components/Molecules/Button/Button.js";
const d = () => {
}, W = () => {
}, i = (e) => {
  e({ screen_name: "HOME_INTERNET_BANKING_POC" });
}, X = (e) => e === "success" ? "success" : "neutral", $ = (e) => [
  { label: e, color: "gold", hierarchy: "soft" }
], Se = () => {
  const e = S(N), c = A;
  return /* @__PURE__ */ l("div", { className: e.rootClasses, "data-testid": "HomeInternetBanking", children: [
    /* @__PURE__ */ l("div", { className: e.shellClasses, children: [
      /* @__PURE__ */ a("div", { className: e.sidebarClasses, children: /* @__PURE__ */ a(
        q,
        {
          brand: "interEmpresas",
          expansion: "collapsed",
          items: [...y],
          ariaLabel: "Menu principal",
          footer: { label: "Sair", icon: "ic_sign_out", onClick: d },
          onTag: i
        }
      ) }),
      /* @__PURE__ */ a("main", { className: e.mainClasses, children: /* @__PURE__ */ l("div", { className: e.containerClasses, children: [
        /* @__PURE__ */ a("div", { className: e.headerBarClasses, children: /* @__PURE__ */ l("div", { className: e.headerToolbarClasses, children: [
          /* @__PURE__ */ a("div", { className: e.headerSearchClasses, children: /* @__PURE__ */ a(
            P,
            {
              variant: "topPages",
              type: "search",
              size: "small",
              background: "transparent",
              searchProps: { placeholder: "Pesquisar" },
              onTag: i
            }
          ) }),
          /* @__PURE__ */ l("div", { className: e.headerMetaClasses, children: [
            /* @__PURE__ */ a(
              t,
              {
                as: "p",
                textType: o.Label,
                textSize: r.Small,
                textWeight: Z.Bold,
                children: c.accountNumber
              }
            ),
            /* @__PURE__ */ a(t, { as: "p", textType: o.Label, textSize: r.Medium, children: c.companyName }),
            /* @__PURE__ */ a(
              B,
              {
                variant: "initial",
                category: "business",
                label: c.avatarLabel,
                size: p.MEDIUM,
                color: "soft",
                state: m.ENABLED,
                onTag: i
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ l("div", { className: e.gridClasses, children: [
          /* @__PURE__ */ a(
            "div",
            {
              id: e.statementModalTriggerId,
              tabIndex: -1,
              className: e.statementPanelClasses,
              children: /* @__PURE__ */ l(
                h,
                {
                  size: "4",
                  bodyPadding: "flush",
                  footer: {
                    type: "button",
                    primary: {
                      label: "Mostrar extrato",
                      onClick: e.handleOpenStatementModal
                    }
                  },
                  onTag: i,
                  children: [
                    /* @__PURE__ */ l("div", { className: e.balanceBlockClasses, children: [
                      /* @__PURE__ */ a("div", { className: e.balanceHeaderClasses, children: /* @__PURE__ */ a(
                        t,
                        {
                          as: "p",
                          textType: o.Body,
                          textSize: r.Small,
                          colorVariant: "secondary",
                          children: "Saldo em conta"
                        }
                      ) }),
                      /* @__PURE__ */ l("div", { className: e.balanceRowClasses, children: [
                        /* @__PURE__ */ a(t, { as: "p", textType: o.Display, textSize: r.Small, children: c.balanceCurrency }),
                        /* @__PURE__ */ a(t, { as: "p", textType: o.Display, textSize: r.Small, children: c.balanceAmount }),
                        /* @__PURE__ */ a(
                          F,
                          {
                            hierarchy: b.SECONDARY,
                            description: c.balanceTooltipDescription,
                            placement: "top",
                            align: "center",
                            children: /* @__PURE__ */ a(
                              L,
                              {
                                asset: "ic_eye_open",
                                size: p.MEDIUM,
                                color: "Icon/Accent/Orange/Default",
                                contentDescription: "Informações sobre saldo em conta"
                              }
                            )
                          }
                        )
                      ] }),
                      /* @__PURE__ */ a(
                        t,
                        {
                          as: "p",
                          textType: o.Body,
                          textSize: r.Small,
                          colorVariant: "secondary",
                          children: c.balanceDescription
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a("div", { className: e.statementListClasses, children: f.map((s) => /* @__PURE__ */ l("section", { className: e.statementMonthClasses, children: [
                      /* @__PURE__ */ a(Y, { title: s.monthLabel, showIcon: !1 }),
                      /* @__PURE__ */ a(
                        U,
                        {
                          subtitle: s.periodLabel,
                          trailingLabel: "Saldo",
                          trailingValue: {
                            variant: I.DEFAULT,
                            value: s.periodBalanceValue
                          }
                        }
                      ),
                      s.items.map((n) => /* @__PURE__ */ a(
                        u,
                        {
                          interactive: !1,
                          showDivider: !1,
                          label: n.label,
                          paragraph: n.paragraph,
                          leadingProps: {
                            type: "avatar",
                            avatarProps: {
                              variant: "icon",
                              icon: n.leadingIcon,
                              size: p.MEDIUM,
                              color: "soft",
                              state: m.ENABLED,
                              onTag: i
                            }
                          },
                          trailingProps: {
                            type: "text",
                            textProps: {
                              labelTrailing: n.value,
                              labelTrailingColor: X(n.valueColor)
                            }
                          }
                        },
                        n.id
                      ))
                    ] }, s.monthLabel)) })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ a("div", { className: e.approvalsPanelClasses, children: /* @__PURE__ */ l(
            h,
            {
              size: "4",
              title: "Aprovações pendentes",
              showDivider: !0,
              bodyPadding: "flush",
              footer: {
                type: "button",
                primary: { label: "Aprovar", onClick: d },
                secondary: { label: "Reprovar", onClick: d }
              },
              onTag: i,
              children: [
                /* @__PURE__ */ a("div", { className: e.approvalsListClasses, children: N.map((s) => /* @__PURE__ */ a(
                  u,
                  {
                    label: s.label,
                    paragraph: s.dateLabel,
                    paragraphSupport: s.paragraph,
                    tags: $(s.pendingTag),
                    leadingProps: {
                      type: "checkbox",
                      checkboxProps: {
                        state: m.ENABLED,
                        checked: e.selectedApprovalIds.includes(s.id),
                        onChange: (n) => e.handleToggleApproval(s.id, n)
                      }
                    },
                    trailingProps: { type: "tagChevron" },
                    showDivider: !1,
                    onTag: i
                  },
                  s.id
                )) }),
                /* @__PURE__ */ a(M, {}),
                /* @__PURE__ */ l("div", { className: e.approvalsSummaryClasses, children: [
                  /* @__PURE__ */ a(
                    E,
                    {
                      label: "Selecionados",
                      value: `${e.selectedCount} de ${e.totalApprovals}`,
                      orientation: T.HORIZONTAL,
                      valueType: v.TEXT,
                      valueColor: C.PRIMARY,
                      state: m.ENABLED
                    }
                  ),
                  /* @__PURE__ */ a(
                    E,
                    {
                      label: "Valor total",
                      value: e.selectedTotalLabel,
                      orientation: T.HORIZONTAL,
                      valueType: v.TEXT,
                      valueColor: C.PRIMARY,
                      state: m.ENABLED
                    }
                  )
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ l("div", { className: e.asideClasses, children: [
            /* @__PURE__ */ a("div", { className: e.pixPanelClasses, children: /* @__PURE__ */ a(h, { size: "4", title: "Pagar com Pix", showDivider: !0, onTag: i, children: /* @__PURE__ */ l("div", { className: e.pixBodyClasses, children: [
              /* @__PURE__ */ l("div", { className: e.pixFieldsClasses, children: [
                /* @__PURE__ */ l("div", { className: e.pixAmountClasses, children: [
                  /* @__PURE__ */ a(
                    t,
                    {
                      as: "p",
                      textType: o.Body,
                      textSize: r.Medium,
                      colorVariant: "secondary",
                      children: "Valor a pagar"
                    }
                  ),
                  /* @__PURE__ */ a(
                    D,
                    {
                      currency: z.BRL,
                      typeValue: k.Monetary,
                      variantNumeric: O.Decimal,
                      defaultValue: 0,
                      showButtons: !1,
                      onChange: W,
                      onTag: i
                    }
                  )
                ] }),
                /* @__PURE__ */ l("div", { className: e.pixKeyClasses, children: [
                  /* @__PURE__ */ l("div", { className: e.pixKeyRowClasses, children: [
                    /* @__PURE__ */ a(t, { as: "p", textType: o.Label, textSize: r.Medium, children: "Chave" }),
                    /* @__PURE__ */ a(H, { label: "Meus favoritos", href: "#", onTag: i })
                  ] }),
                  /* @__PURE__ */ a(
                    V,
                    {
                      placeholder: "Insira a chave Pix",
                      showHint: !0,
                      hints: ["CPF, CNPJ, celular, e-mail ou aleatória"],
                      onTag: i
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ a(
                j,
                {
                  label: "Continuar",
                  hierarchy: b.SECONDARY,
                  size: p.LARGE,
                  fill: !0,
                  onClick: d,
                  onTag: i
                }
              )
            ] }) }) }),
            g.map((s) => /* @__PURE__ */ a("div", { className: e.bannerClasses, children: /* @__PURE__ */ a(
              _,
              {
                variant: R.IMAGE,
                size: "column4",
                url: s.url,
                alt: s.alt,
                onClick: d,
                onTag: i
              }
            ) }, s.id))
          ] }),
          /* @__PURE__ */ a("div", { className: e.quickAccessPanelClasses, children: /* @__PURE__ */ a(h, { size: "8", title: "Acesso rápido", onTag: i, children: /* @__PURE__ */ a("div", { className: e.quickAccessGridClasses, children: x.map((s) => /* @__PURE__ */ a(
            w,
            {
              variant: I.ICON,
              size: p.LARGE,
              label: s.label,
              icon: s.icon,
              onClick: d,
              onTag: i
            },
            s.id
          )) }) }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ a(
      G,
      {
        title: "Extrato resumido",
        isOpen: e.isStatementModalOpen,
        close: e.handleCloseStatementModal,
        overlay: K.ON,
        restoreFocusId: e.statementModalTriggerId,
        showCloseButton: !0,
        onTag: i,
        slot: /* @__PURE__ */ a(t, { as: "p", textType: o.Body, textSize: r.Medium, children: "PoC Storybook: extrato completo seria exibido aqui com dados mocados de outubro e setembro." })
      }
    )
  ] });
};
export {
  Se as HomeInternetBanking
};
