---
name: toranja-accordion
description: Tipos e props do componente Accordion do @interco/inter-toranja.
---

# Accordion

**Categoria:** Molecules
**Versão:** 1.0.1 (19/03/2025)
**Importação:**
```tsx
import { Accordion } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `AccordionProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `CONTENT_VARIANT`
- `LeadingVariant`

**Interfaces:**
- `AccordionLeadingIconProps`
- `AccordionLeadingAvatarProps`
- `AccordionSlotProps`
- `AccordionTextProps`
- `AccordionComponent`

**Types:**
- `AccordionLeadingProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| title | Título do Accordion (obrigatório) | — | Título do Accordion |
| description | Descrição opcional exibida abaixo do título | — | Descrição do accordion que pode ter até duas linhas. O restante será truncado com reticências. |
| expand | Controla se o Accordion está expandido | — | false |
| showLeading | Mostra o elemento à esquerda do heading | — | false |
| sizeTitle | Tamanho do título: medium ou large | TextSize.Medium, TextSize.Large | TextSize.Medium |
| showDivider | Mostra o divisor entre itens | — | false |
| state | Estado do Accordion: enabled, disabled ou skeleton | STATE.ENABLED, STATE.DISABLED, STATE.SKELETON | STATE.ENABLED |
| contentVariant | Tipo de conteúdo: SLOT (customizado) ou TEXT (texto simples) | CONTENT_VARIANT.SLOT, CONTENT_VARIANT.TEXT | CONTENT_VARIANT.SLOT |
| children | Conteúdo do painel - suporta ReactNode (legacy) ou função (nova API) | — | — |

## Exemplos

### Default

```tsx
import { Accordion, CONTENT_VARIANT } from '@interco/inter-toranja'

<Accordion
  title="Accordion padrão"
  description="Use os controles abaixo para testar diferentes configurações"
  contentVariant={CONTENT_VARIANT.TEXT}
>
  {(TextComponent) => (
    <TextComponent>
      Conteúdo do accordion
    </TextComponent>
  )}
</Accordion>
```

### With Leading Icon

```tsx
import { Accordion, LeadingVariant, CONTENT_VARIANT } from '@interco/inter-toranja'

<Accordion
  title="Accordion com ícone"
  description="Accordion com ícone à esquerda do título"
  expand={true}
  showLeading={true}
  leading={{
    variant: LeadingVariant.Icon,
    icon: 'ic_orange'
  }}
  contentVariant={CONTENT_VARIANT.TEXT}
>
  {(TextComponent) => (
    <TextComponent>
      Conteúdo do accordion com ícone leading.
    </TextComponent>
  )}
</Accordion>
```

### With Leading Avatar Icon

```tsx
import { Accordion, LeadingVariant, CONTENT_VARIANT } from '@interco/inter-toranja'
import { AvatarVariant, AvatarColor } from '@interco/inter-toranja/types'

<Accordion
  title="Accordion com Avatar (Ícone)"
  showLeading={true}
  leading={{
    variant: LeadingVariant.Avatar,
    avatar: {
      variant: AvatarVariant.Icon,
      color: AvatarColor.Soft,
      icon: 'ic_piggy_bank'
    }
  }}
  contentVariant={CONTENT_VARIANT.TEXT}
>
  {(TextComponent) => (
    <TextComponent>
      Conteúdo do accordion com Avatar (variante ícone).
    </TextComponent>
  )}
</Accordion>
```

### With Leading Avatar Initial

```tsx
import { Accordion, LeadingVariant, CONTENT_VARIANT } from '@interco/inter-toranja'
import { AvatarVariant, AvatarColor, InitialCategory } from '@interco/inter-toranja/types'

<Accordion
  title="Accordion com Avatar (Iniciais)"
  showLeading={true}
  leading={{
    variant: LeadingVariant.Avatar,
    avatar: {
      variant: AvatarVariant.Initial,
      color: AvatarColor.Soft,
      category: InitialCategory.Person,
      label: "João Silva"
    }
  }}
  contentVariant={CONTENT_VARIANT.TEXT}
>
  {(TextComponent) => (
    <TextComponent>
      Conteúdo do accordion com Avatar (variante iniciais).
    </TextComponent>
  )}
</Accordion>
```

### With Leading Avatar Picture

```tsx
import { Accordion, LeadingVariant, CONTENT_VARIANT } from '@interco/inter-toranja'
import { AvatarVariant, AvatarColor } from '@interco/inter-toranja/types'

<Accordion
  title="Accordion com Avatar (Imagem)"
  showLeading={true}
  leading={{
    variant: LeadingVariant.Avatar,
    avatar: {
      variant: AvatarVariant.Picture,
      color: AvatarColor.Image,
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      alt: "Foto do usuário"
    }
  }}
  contentVariant={CONTENT_VARIANT.TEXT}
>
  {(TextComponent) => (
    <TextComponent>
      Conteúdo do accordion com Avatar (variante imagem).
    </TextComponent>
  )}
</Accordion>
```

### Avatar States Demo

```tsx
import { Accordion, STATE, CONTENT_VARIANT } from '@interco/inter-toranja'

// Avatar herda automaticamente o estado do Accordion
<Accordion
  title="Avatar Estados"
  state={STATE.ENABLED} // Avatar também fica enabled
  showLeading={true}
  leading={{
    variant: LeadingVariant.Avatar,
    avatar: { /* configuração do avatar */ }
  }}
  contentVariant={CONTENT_VARIANT.SLOT}
>
  {(SlotComponent) => (
    <SlotComponent>
      <p>Avatar automaticamente mapeia o estado do Accordion</p>
    </SlotComponent>
  )}
</Accordion>
```

### Function Children Slot Mode

```tsx
import { Accordion, CONTENT_VARIANT } from '@interco/inter-toranja'

<Accordion
  title="Nova API - Modo SLOT"
  contentVariant={CONTENT_VARIANT.SLOT}
>
  {(SlotComponent) => (
    <SlotComponent>
      <div>Conteúdo HTML totalmente customizado</div>
    </SlotComponent>
  )}
</Accordion>
```

### Function Children Text Mode

```tsx
import { Accordion, CONTENT_VARIANT } from '@interco/inter-toranja'

<Accordion
  title="Nova API - Modo TEXT"
  contentVariant={CONTENT_VARIANT.TEXT}
>
  {(TextComponent) => (
    <TextComponent>
      Texto simples com tipografia consistente do design system
    </TextComponent>
  )}
</Accordion>
```

## Definição de tipos completa

```typescript
import type { IconName } from '@/components/Atoms/Icon/types'
import type { TextProps, TextSize, TextType } from '@/components/Atoms/Text/types'
import type {
  AvatarColor,
  AvatarVariant,
  InitialCategory,
} from '@/components/Molecules/Avatar/types'
import type { TagProps } from '@/types/shared'

import { type STATE, VARIANT } from '@/utils/pattern'

export enum CONTENT_VARIANT {
  SLOT = 'slot',
  TEXT = 'text',
}

/**
 * Leading element variants for Accordion component
 * Maps to standard VARIANT enum values
 */
export enum LeadingVariant {
  Icon = VARIANT.ICON,
  Avatar = VARIANT.AVATAR,
}

/**
 * Props for Icon variant of Accordion Leading element
 */
export interface AccordionLeadingIconProps {
  variant: `${LeadingVariant.Icon}`
  /** Icon element to display - can be any React node */
  icon: IconName
}

/**
 * Props for Avatar variant of Accordion Leading element
 * Simplified Avatar props for Accordion context
 */
export interface AccordionLeadingAvatarProps {
  variant: `${LeadingVariant.Avatar}`
  /** Avatar configuration object */
  avatar: {
    /** Avatar variant type */
    variant: `${AvatarVariant.Icon}` | `${AvatarVariant.Initial}` | `${AvatarVariant.Picture}`
    /** Avatar color scheme */
    color: `${AvatarColor}`
  } &
    // Avatar Icon variant
    (| {
          variant: `${AvatarVariant.Icon}`
          /** Icon component to display */
          icon: IconName
        }
      | {
          variant: `${AvatarVariant.Initial}`
          /** Category for initial generation */
          category: `${InitialCategory}`
          /** Label text for generating initials */
          label: string
        }
      | {
          variant: `${AvatarVariant.Picture}`
          /** Image source URL */
          src: string
          /** Alternative text for accessibility */
          alt: string
          /** Error handler for image loading failures */
          onError?: () => void
        }
    )
}

/**
 * Discriminated union for Accordion Leading element
 * Supports both Icon and Avatar variants with type safety
 */
export type AccordionLeadingProps = AccordionLeadingIconProps | AccordionLeadingAvatarProps

/**
 * Props interface for AccordionSlot component
 */
export interface AccordionSlotProps {
  /** Content to be rendered inside the slot */
  children: React.ReactNode
}

export interface AccordionTextProps extends Omit<TextProps, 'textSize' | 'textType' | 'as'> {
  /** Text size - opcional, padrão Medium definido internamente */
  textSize?: TextSize.Medium
  /** Text type - opcional, padrão Body definido internamente */
  textType?: TextType.Body
  /** Text as - opcional, padrão 'p' definido internamente */
  as?: 'p'
}

/**
 * Props interface for Accordion component
 */
export interface AccordionProps {
  /** Accordion title (required) */
  title: string
  /** Optional description displayed below the title */
  description?: string
  /** Controls whether the Accordion is expanded */
  expand?: boolean
  /** Shows the leading element to the left of the heading */
  showLeading?: boolean
  /** Leading element configuration - supports Icon and Avatar variants */
  leading?: AccordionLeadingProps
  /** Title size: 'medium' | 'large' */
  sizeTitle?: TextSize.Medium | TextSize.Large
  /** Shows the divider between items */
  showDivider?: boolean
  /** State of the Accordion */
  state?: STATE.ENABLED | STATE.DISABLED | STATE.SKELETON
  /** Panel content - accepts both function (new) and ReactNode (backwards compatibility) */
  children:
    | ((
        component:
          | React.ComponentType<AccordionSlotProps>
          | React.ComponentType<AccordionTextProps>,
      ) => React.ReactNode)
    | React.ReactNode
  /** Callback for tracking events */
  onTag?: (data: TagProps) => void
  /** Content variant */
  contentVariant?: CONTENT_VARIANT.SLOT | CONTENT_VARIANT.TEXT
}

/**
 * Compound component interface for Accordion
 * Extends React.FC with static properties for compound component pattern
 */
export interface AccordionComponent extends React.FC<AccordionProps> {
  /** Slot component for custom content */
  Slot: React.FC<AccordionSlotProps>
  /** Text component for simple text content */
  Text: React.ComponentType<AccordionTextProps>
}

```
