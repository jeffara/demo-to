---
name: toranja-header
description: Tipos e props do componente Header do @interco/inter-toranja.
---

# Header

**Categoria:** Molecules
**Importação:**
```tsx
import { Header } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `HeaderIconSlot`
- `HeaderProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Types:**
- `HeaderAvatarConfig`
- `HeaderChipConfig`
- `HeaderSegmentedControlConfig`
- `HeaderTrailingProps`


## Definição de tipos completa

```typescript
import type { HeaderLogo, HeaderType, HeaderVariant } from './constants'
import type { IconName } from '@/components/Atoms/Icon/types'
import type {
  AvatarColor,
  AvatarVariant,
  InitialCategory,
} from '@/components/Molecules/Avatar/types'
import type { ChipProps } from '@/components/Molecules/Chip/types'
import type { InputSearchProps } from '@/components/Molecules/InputSearch/types'
import type { SegmentedControlProps } from '@/components/Molecules/SegmentedControl/types'
import type { TagProps } from '@/types/shared'
import type { SIZE, STATE } from '@/utils/pattern'

export type HeaderIconSlot = {
  icon: IconName
  onClick?: () => void
  'aria-label': string
}

type HeaderSearchControlProps = {
  isSearchOpen?: boolean
  onSearchOpenChange?: (isOpen: boolean) => void
  searchProps?: Omit<InputSearchProps, 'state'>
}

type HeaderSharedProps = HeaderSearchControlProps & {
  state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`
  stacked?: boolean
  scrollContainer?: HTMLElement | null
  onTag?: (data: TagProps) => void
}

type TrailingIconsProps = {
  showStartIcon?: boolean
  startIcon?: HeaderIconSlot
  showMiddleIcon?: boolean
  middleIcon?: HeaderIconSlot
  showEndIcon?: boolean
  endIcon?: HeaderIconSlot
}

type HeaderAvatarBase = {
  color: `${AvatarColor}`
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void
  onTag?: (data: TagProps) => void
}

export type HeaderAvatarConfig =
  | (HeaderAvatarBase & {
      variant: `${AvatarVariant.Initial}`
      category: `${InitialCategory}`
      label: string
    })
  | (HeaderAvatarBase & {
      variant: `${AvatarVariant.Picture}`
      color: `${AvatarColor.Image}`
      src: string
      alt: string
      onError?: () => void
    })
  | (HeaderAvatarBase & {
      variant: `${AvatarVariant.Icon}`
      icon: IconName
    })

export type HeaderChipConfig = Omit<ChipProps, 'state'>

export type HeaderSegmentedControlConfig = Omit<SegmentedControlProps, 'state'>

type TitleTopPagesProps = HeaderSharedProps &
  TrailingIconsProps & {
    variant: `${HeaderVariant.TopPages}`
    type: `${HeaderType.Title}`
    size?: `${SIZE.SMALL}`
    title?: string
    onBackClick?: () => void
  }

type TitleInnerSmallProps = HeaderSharedProps &
  TrailingIconsProps & {
    variant: `${HeaderVariant.InnerPages}`
    type: `${HeaderType.Title}`
    size?: `${SIZE.SMALL}`
    title: string
    onBackClick: () => void
  }

type TitleInnerLargeProps = HeaderSharedProps &
  TrailingIconsProps & {
    variant: `${HeaderVariant.InnerPages}`
    type: `${HeaderType.Title}`
    size: `${SIZE.LARGE}`
    title: string
    onBackClick: () => void
  }

type TitleModalSmallProps = HeaderSharedProps &
  TrailingIconsProps & {
    variant: `${HeaderVariant.ModalPages}`
    type: `${HeaderType.Title}`
    size?: `${SIZE.SMALL}`
    title: string
    onCloseClick: () => void
  }

type TitleModalLargeProps = HeaderSharedProps &
  TrailingIconsProps & {
    variant: `${HeaderVariant.ModalPages}`
    type: `${HeaderType.Title}`
    size: `${SIZE.LARGE}`
    title: string
    onCloseClick: () => void
  }

type TitleChipProps = HeaderSharedProps & {
  variant: `${HeaderVariant.InnerPages}`
  type: `${HeaderType.TitleChip}`
  size?: `${SIZE.SMALL}`
  title: string
  onBackClick: () => void
  chip: HeaderChipConfig
}

type LogoProps = HeaderSharedProps &
  TrailingIconsProps & {
    variant: `${HeaderVariant.TopPages}`
    type: `${HeaderType.Logo}`
    size?: `${SIZE.SMALL}`
    logo?: `${HeaderLogo}`
  }

type AvatarHeaderProps = HeaderSharedProps &
  TrailingIconsProps & {
    variant: `${HeaderVariant.TopPages}`
    type: `${HeaderType.Avatar}`
    size?: `${SIZE.SMALL}`
    title?: string
    avatar: HeaderAvatarConfig
  }

type AvatarFlagHeaderProps = HeaderSharedProps &
  Pick<TrailingIconsProps, 'showStartIcon' | 'startIcon' | 'showMiddleIcon' | 'middleIcon'> & {
    variant: `${HeaderVariant.TopPages}`
    type: `${HeaderType.AvatarFlag}`
    size?: `${SIZE.SMALL}`
    title?: string
    avatar: HeaderAvatarConfig
    chip: HeaderChipConfig
  }

type AvatarSegmentedControlHeaderProps = HeaderSharedProps &
  Pick<TrailingIconsProps, 'showStartIcon' | 'startIcon'> & {
    variant: `${HeaderVariant.TopPages}`
    type: `${HeaderType.AvatarSegmentedControl}`
    size?: `${SIZE.SMALL}`
    title?: string
    avatar: HeaderAvatarConfig
    segmentedControl: HeaderSegmentedControlConfig
  }

type SearchTrailingIconsProps = Pick<
  TrailingIconsProps,
  'showStartIcon' | 'startIcon' | 'showMiddleIcon' | 'middleIcon'
>

type SearchTopPagesProps = HeaderSharedProps &
  SearchTrailingIconsProps & {
    variant: `${HeaderVariant.TopPages}`
    type: `${HeaderType.Search}`
    size?: `${SIZE.SMALL}`
    onBackClick?: () => void
  }

type SearchInnerPagesProps = HeaderSharedProps &
  SearchTrailingIconsProps & {
    variant: `${HeaderVariant.InnerPages}`
    type: `${HeaderType.Search}`
    size?: `${SIZE.SMALL}`
    onBackClick: () => void
  }

export type HeaderProps =
  | TitleTopPagesProps
  | TitleInnerSmallProps
  | TitleInnerLargeProps
  | TitleModalSmallProps
  | TitleModalLargeProps
  | TitleChipProps
  | LogoProps
  | AvatarHeaderProps
  | AvatarFlagHeaderProps
  | AvatarSegmentedControlHeaderProps
  | SearchTopPagesProps
  | SearchInnerPagesProps

export type HeaderTrailingProps = TrailingIconsProps &
  HeaderSearchControlProps & {
    type: `${HeaderType}`
    isSkeleton: boolean
    isSearchFieldVisible: boolean
    areTrailingIconsHidden: boolean
    onSearchExitComplete?: () => void
    state: `${STATE.ENABLED}` | `${STATE.SKELETON}`
    chip?: HeaderChipConfig
    segmentedControl?: HeaderSegmentedControlConfig
    trailingClasses: string
    onTag?: (data: TagProps) => void
  }

```
