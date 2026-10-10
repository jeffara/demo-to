const e = {
  accountNumber: "9538461-1",
  companyName: "LOJA DO WAGÃO LTDA",
  avatarLabel: "LW",
  balanceCurrency: "R$",
  balanceAmount: "23.456,78",
  balanceDescription: "Em processamento: R$ 0,00",
  balanceTooltipDescription: "Saldo disponível para movimentação imediata."
}, a = [
  {
    monthLabel: "Outubro",
    periodLabel: "Seg, 01/10/2024",
    periodBalanceValue: "R$ 10.000,00",
    items: [
      {
        id: "oct-card",
        label: "Fatura Cartão Inter",
        paragraph: "Fatura Cartão Inter",
        value: "- R$ 345,00",
        valueColor: "primary",
        leadingIcon: "ic_credit_card"
      },
      {
        id: "oct-pix-out",
        label: "Pix enviado",
        paragraph: "João Carlos Maciel",
        value: "- R$ 80,00",
        valueColor: "primary",
        leadingIcon: "ic_arrow_up"
      },
      {
        id: "oct-income",
        label: "Recebimento de proventos",
        paragraph: "Banco Inter",
        value: "R$ 4.820,00",
        valueColor: "success",
        leadingIcon: "ic_coin"
      }
    ]
  },
  {
    monthLabel: "Setembro",
    periodLabel: "Dom, 30/09/2024",
    periodBalanceValue: "R$ 750,00",
    items: [
      {
        id: "sep-pix-in",
        label: "Pix recebido",
        paragraph: "Júlia Silva Castro",
        value: "R$ 80,00",
        valueColor: "success",
        leadingIcon: "ic_arrow_down"
      }
    ]
  }
], i = [
  {
    id: "approval-debit",
    label: "Débito automático",
    paragraph: "Colégio Redentor",
    dateLabel: "14 de fevereiro",
    amount: "",
    pendingTag: "3 aprovações pendentes"
  },
  {
    id: "approval-payroll",
    label: "R$ 100.000,00",
    paragraph: "Folha de Pagamento | 20 transações",
    dateLabel: "10 de Fevereiro",
    amount: "R$ 100.000,00",
    pendingTag: "3 aprovações pendentes"
  },
  {
    id: "approval-pix-1",
    label: "R$ 5.000,00",
    paragraph: "Pix | Guilherme Mota",
    dateLabel: "10 de Fevereiro",
    amount: "R$ 5.000,00",
    pendingTag: "3 aprovações pendentes"
  }
], o = [
  { id: "darf", label: "DARF", icon: "ic_receipt" },
  { id: "special-key", label: "Cheque Especial", icon: "ic_key" },
  { id: "terminal", label: "Solicitar Maquininha", icon: "ic_card_machine" },
  { id: "fgi", label: "FGI Peac", icon: "ic_handshake" },
  { id: "pronampe", label: "Pronampe", icon: "ic_coin" },
  { id: "receivables", label: "Antecipação de Recebíveis", icon: "ic_calendar_money" },
  { id: "protection", label: "Empresa protegida", icon: "ic_store_shield" }
], n = [
  { id: "home", label: "Início", icon: "ic_house", selected: !0 },
  { id: "pix", label: "Pix", icon: "ic_orange" },
  { id: "payments", label: "Pagamentos", icon: "ic_barcode" },
  { id: "cards", label: "Cartões", icon: "ic_credit_card" },
  { id: "invest", label: "Investimentos", icon: "ic_trending_up" }
], r = [
  {
    id: "banner-onboarding",
    url: "https://static-core.bancointer.com.br/images/7d7e26-login-onboarding-ar-step2.png",
    alt: "Banner de onboarding Inter Empresas"
  },
  {
    id: "banner-permissions",
    url: "https://static-core.bancointer.com.br/images/706228-flyer-gestor-permissoes.png",
    alt: "Banner do gestor de permissões"
  }
];
export {
  e as HOME_INTERNET_BANKING_ACCOUNT,
  i as HOME_INTERNET_BANKING_APPROVALS,
  r as HOME_INTERNET_BANKING_BANNERS,
  o as HOME_INTERNET_BANKING_QUICK_ACCESS,
  n as HOME_INTERNET_BANKING_SIDEBAR_ITEMS,
  a as HOME_INTERNET_BANKING_STATEMENT_GROUPS
};
