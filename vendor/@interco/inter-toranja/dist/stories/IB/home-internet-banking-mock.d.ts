import { HomeInternetBankingApprovalItem, HomeInternetBankingBanner, HomeInternetBankingQuickAccessItem, HomeInternetBankingStatementGroup } from './home-internet-banking-types';
export declare const HOME_INTERNET_BANKING_ACCOUNT: {
    readonly accountNumber: "9538461-1";
    readonly companyName: "LOJA DO WAGÃO LTDA";
    readonly avatarLabel: "LW";
    readonly balanceCurrency: "R$";
    readonly balanceAmount: "23.456,78";
    readonly balanceDescription: "Em processamento: R$ 0,00";
    readonly balanceTooltipDescription: "Saldo disponível para movimentação imediata.";
};
export declare const HOME_INTERNET_BANKING_STATEMENT_GROUPS: HomeInternetBankingStatementGroup[];
export declare const HOME_INTERNET_BANKING_APPROVALS: HomeInternetBankingApprovalItem[];
export declare const HOME_INTERNET_BANKING_QUICK_ACCESS: HomeInternetBankingQuickAccessItem[];
export declare const HOME_INTERNET_BANKING_SIDEBAR_ITEMS: readonly [{
    readonly id: "home";
    readonly label: "Início";
    readonly icon: "ic_house";
    readonly selected: true;
}, {
    readonly id: "pix";
    readonly label: "Pix";
    readonly icon: "ic_orange";
}, {
    readonly id: "payments";
    readonly label: "Pagamentos";
    readonly icon: "ic_barcode";
}, {
    readonly id: "cards";
    readonly label: "Cartões";
    readonly icon: "ic_credit_card";
}, {
    readonly id: "invest";
    readonly label: "Investimentos";
    readonly icon: "ic_trending_up";
}];
export declare const HOME_INTERNET_BANKING_BANNERS: HomeInternetBankingBanner[];
