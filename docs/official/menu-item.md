---
name: toranja-menu-item
description: Tipos e props do componente MenuItem do @interco/inter-toranja.
---

# MenuItem

**Categoria:** Molecules
**Versão:** 1.2.0 (14/05/2025)
**Importação:**
```tsx
import { MenuItem } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `MenuItemProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `BaseMenuItemProps`
- `IconMenuItemProps`

**Types:**
- `AvatarMenuItemProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| label | — | — | — |
| skeleton | Habilita o modo esqueleto do componente. | — | — |
| tag | — | — | teste |
| icon | Ícone a ser exibido dentro do botão. | ic_orange, ic_piggy_bank | — |
| variant | Ícone a ser exibido dentro do botão. | icon, avatar | — |
| avatarVariant | Define a variação do avatar no MenuItem. | AvatarVariant.Picture, AvatarVariant.Initial | — |
| category | Categoria utilizada para gerar as iniciais do avatar. | InitialCategory.Person, InitialCategory.Business | — |
| onClick | — | — | — |
| size | Tamanho do botão, pode ser pequeno ou grande. | — | — |
| src | URL da imagem utilizada na variant avatar. | — | — |
| alt | Texto alternativo para a imagem do avatar. | — | — |

## Definição de tipos completa

```typescript
import type { IconName } from '@/components/Atoms/Icon/types'
import type { TagProps as TagPropsComponents } from '@/components/Atoms/Tag/types'
import type { AvatarVariant, InitialCategory } from '@/components/Molecules/Avatar/types'
import type { Size, TagProps } from '@/types/shared'
import type { VARIANT } from '@/utils/pattern'

export interface BaseMenuItemProps {
  tag?: string
  size: `${Size}`
  label: string
  color?: string
  hierarchy?: string
  skeleton?: boolean
  children?: React.ReactNode
  onClick: () => void
  onTag?: (data: TagProps) => void
}

interface AvatarMenuItemBase extends BaseMenuItemProps {
  variant: `${VARIANT.AVATAR}`
}

interface AvatarMenuItemPicture extends AvatarMenuItemBase {
  avatarVariant?: `${AvatarVariant.Picture}`
  src: string
  alt: string
}

interface AvatarMenuItemInitial extends AvatarMenuItemBase {
  avatarVariant: `${AvatarVariant.Initial}`
  category?: `${InitialCategory}`
}

export type AvatarMenuItemProps = AvatarMenuItemPicture | AvatarMenuItemInitial

export interface IconMenuItemProps extends BaseMenuItemProps {
  variant: `${VARIANT.ICON}`
  icon: IconName
}

type MenuItemProps = AvatarMenuItemProps | IconMenuItemProps

type TagPropsMenuItem = Partial<Omit<TagPropsComponents, 'size'>>

export type { MenuItemProps, TagPropsMenuItem }

```
