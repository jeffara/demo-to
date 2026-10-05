---
name: toranja-payment-methods
description: Tipos e props do componente PaymentMethods do @interco/inter-toranja.
---

# PaymentMethods

**Categoria:** Atoms
**Versão:** 1.1.0 (15/10/2025'],
  parameters: {
    docs: {
      description: {
        component: `
O componente PaymentMethods é usado para exibir ícones de métodos de pagamento do design system de forma consistente e acessível.

## Características

- **Baseado no Avatar**: Usa o componente Avatar como base para máxima consistência
- **Múltiplos Métodos**: Suporta diversos métodos de pagamento (cartões, wallets, etc.)
**Importação:**
```tsx
import { PaymentMethods } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `IconPaymentProps`
- `PaymentMethodsProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `PAYMENT`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| paymentMethod | Método de pagamento a ser exibido | — | PAYMENT.MASTERCARD |
| size | Tamanho do componente | SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE | SIZE.MEDIUM |
| state | Estado do componente (enabled, disabled, skeleton) | — | STATE.ENABLED |
| color | Variante de cor do componente | AvatarColor.Soft, AvatarColor.Softest | AvatarColor.Soft |

## Definição de tipos completa

```typescript
import type { AvatarColor } from '@/components/Molecules/Avatar/types'
import type { SIZE, STATE } from '@/utils/pattern'

export enum PAYMENT {
  ALELO = 'alelo',
  AMAZON = 'amazon',
  AMEX = 'amex',
  APPLEPAY = 'applepay',
  CARDDEFAULT = 'cardDefault',
  DINERSCLUB = 'dinersclub',
  DISCOVER = 'discover',
  ELO = 'elo',
  GOOGLEPAY = 'googlepay',
  HIPERCARD = 'hipercard',
  JCB = 'jcb',
  MASTERCARD = 'mastercard',
  PAYPAL = 'paypal',
  PLAID = 'plaid',
  PLUXEE = 'pluxee',
  TICKET = 'ticket',
  VISA = 'visa',
  VR = 'vr',
}

export interface PaymentMethodsProps {
  paymentMethod?: `${PAYMENT}`
  size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`
  state?: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`
  color?: `${AvatarColor.Soft}` | `${AvatarColor.Softest}`
}

// Mantém compatibilidade com o nome antigo (deprecated)
/** @deprecated Use PaymentMethodsProps instead */
export type IconPaymentProps = PaymentMethodsProps

```
