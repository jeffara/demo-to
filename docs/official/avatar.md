---
name: toranja-avatar
description: Tipos e props do componente Avatar do @interco/inter-toranja.
---

# Avatar

**Categoria:** Molecules
**Versão:** 1.1.0 (05/11/2025)
**Importação:**
```tsx
import { Avatar } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `AvatarProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `AvatarVariant`
- `AvatarColor`
- `InitialCategory`

**Types:**
- `PictureProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Seleciona a variante do avatar; | — | — |
| size | Seleciona o tamanho do avatar; | SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE | — |
| state | Seleciona o estado do avatar; | STATE.ENABLED, STATE.DISABLED, STATE.SKELETON | — |
| color | Seleciona a cor do avatar; | soft, softest, image | — |
| icon | — | — | — |
| label | — | — | — |
| category | Categoria utilizada para compor a variant initial; | — | — |
| src | — | — | — |
| alt | — | — | — |
| onError | — | — | — |
| hasBadge | Define se o avatar possui um badge; Disponível somente nos tamanhos small e medium | — | — |
| badgeProps | — | — | — |
| edit | Define se o avatar possui a opção de edição e mostra o ícone | — | — |
| editIcon | Nome do ícone exibido no botão de edição; disponível somente no tamanho large. Default: ic_edit | — | — |
| flag | Nome da Flag exibida no avatar; disponível somente nos tamanhos medium e large | — | — |
| onEdit | — | — | — |

## Definição de tipos completa

```typescript
import type { BadgeProps } from '@/components/Atoms/Badge/types'
import type { FlagName } from '@/components/Atoms/Flag/types'
import type { IconName } from '@/components/Atoms/Icon/types'
import type { TagProps } from '@/types/shared'
import type { SIZE, STATE } from '@/utils/pattern'

export enum AvatarVariant {
  Icon = 'icon',
  Initial = 'initial',
  Picture = 'picture',
}

export enum AvatarColor {
  Image = 'image',
  Soft = 'soft',
  Softest = 'softest',
}

export enum InitialCategory {
  Business = 'business',
  Person = 'person',
}

type IconProps = {
  icon: IconName
  variant: `${AvatarVariant.Icon}`
}

type InitialProps = {
  category: `${InitialCategory}`
  label: string
  variant: `${AvatarVariant.Initial}`
}

export type PictureProps = {
  alt: string
  onError?: () => void
  src: string
  variant: `${AvatarVariant.Picture}`
}

type ContentProps = IconProps | InitialProps | PictureProps

type SizeBadgeProps = {
  badgeProps?: BadgeProps
  hasBadge?: boolean
}

type SmallProps = {
  size: `${SIZE.SMALL}`
  edit?: never
  onEdit?: never
  editIcon?: never
  flag?: never
} & SizeBadgeProps

type MediumProps = {
  size: `${SIZE.MEDIUM}`
  edit?: never
  onEdit?: never
  editIcon?: never
  flag?: FlagName
} & SizeBadgeProps

type LargeEditProps = {
  size: `${SIZE.LARGE}`
  edit: true
  onEdit: () => void
  editIcon?: IconName
  flag?: never
}

type LargeWithoutEditProps = {
  size: `${SIZE.LARGE}`
  edit?: false
  onEdit?: never
  editIcon?: never
  flag?: FlagName
}

type SizeProps = SmallProps | MediumProps | LargeEditProps | LargeWithoutEditProps

export type AvatarProps = {
  color: `${AvatarColor}`
  onTag?: (data: TagProps) => void
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void
  state: `${STATE.DISABLED | STATE.ENABLED | STATE.SKELETON}`
} & ContentProps &
  SizeProps

```
