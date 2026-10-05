import { AvatarColor } from '../../Molecules/Avatar/types';
import { SIZE, STATE } from '../../../utils/pattern';
export declare enum PAYMENT {
    ALELO = "alelo",
    AMAZON = "amazon",
    AMEX = "amex",
    APPLEPAY = "applepay",
    CARDDEFAULT = "cardDefault",
    DINERSCLUB = "dinersclub",
    DISCOVER = "discover",
    ELO = "elo",
    GOOGLEPAY = "googlepay",
    HIPERCARD = "hipercard",
    JCB = "jcb",
    MASTERCARD = "mastercard",
    PAYPAL = "paypal",
    PLAID = "plaid",
    PLUXEE = "pluxee",
    TICKET = "ticket",
    VISA = "visa",
    VR = "vr"
}
export interface PaymentMethodsProps {
    paymentMethod?: `${PAYMENT}`;
    size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`;
    state?: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`;
    color?: `${AvatarColor.Soft}` | `${AvatarColor.Softest}`;
}
/** @deprecated Use PaymentMethodsProps instead */
export type IconPaymentProps = PaymentMethodsProps;
