import { LeadingAvatarProps, LeadingFlagProps, LeadingIconProps, LeadingIndicatorProps, LeadingPaymentMethodProps, LeadingType } from '../types';
interface GetLeadingTagDataParams {
    type: LeadingType;
    avatarProps?: LeadingAvatarProps;
    flagProps?: LeadingFlagProps;
    iconProps?: LeadingIconProps;
    indicatorProps?: LeadingIndicatorProps;
    paymentMethodProps?: LeadingPaymentMethodProps;
}
export declare const getLeadingTagData: (params: GetLeadingTagDataParams) => Record<string, unknown>;
export {};
