import { IconName } from '../../components/Atoms/Icon/types';
export interface HomeInternetBankingStatementItem {
    id: string;
    label: string;
    paragraph?: string;
    value: string;
    valueColor: 'primary' | 'success';
    leadingIcon: IconName;
}
export interface HomeInternetBankingStatementGroup {
    monthLabel: string;
    periodLabel: string;
    periodBalanceValue: string;
    items: HomeInternetBankingStatementItem[];
}
export interface HomeInternetBankingApprovalItem {
    id: string;
    label: string;
    paragraph: string;
    dateLabel: string;
    amount: string;
    pendingTag: string;
}
export interface HomeInternetBankingQuickAccessItem {
    id: string;
    label: string;
    icon: IconName;
}
export interface HomeInternetBankingBanner {
    id: string;
    url: string;
    alt: string;
}
