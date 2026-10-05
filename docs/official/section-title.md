---
name: toranja-section-title
description: Tipos e props do componente SectionTitle do @interco/inter-toranja.
---

# SectionTitle

**Categoria:** Molecules
**Versão:** 2.0.0 (29/10/2025)
**Importação:**
```tsx
import { SectionTitle } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `SectionTitleProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Types:**
- `SectionTitleVariant`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Variante do componente. default: permite personalização do ícone com área de clique apenas no ícone. navigation: ícone fixo (chevronRight) com área de clique em todo o componente. | default, navigation | default |
| state | Estado do componente, pode ser enabled, disabled ou skeleton. | — | enabled |
| title | Título da seção (obrigatório). Sempre limitado a uma única linha. Se ultrapassar o limite, será truncado com reticências. | — | — |
| showDescription | Controla a exibição da descrição do componente. | — | false |
| description | Descrição da seção | — | — |
| showIcon | Controla a exibição do ícone no componente. Quando true, exibe o chevron por padrão ou um ícone customizado, se fornecido. Obrigatório quando variant é do tipo navigation. | — | true |
| icon | Ícone a ser exibido no lado direito do título (apenas para variant default). | ic_orange, ic_house | — |
| iconState | Estado do Neutral Icon Button na variante default. Permite desabilitar o botão sem alterar o estado do título. | STATE.ENABLED, STATE.DISABLED | — |
| maxLines | Número máximo de linhas da descrição. Se omitido, a descrição não tem limite. Se ultrapassar, o texto é truncado com reticências. | — | — |
| onClick | Callback executado quando o componente é clicado. Obrigatório quando variant é navigation ou quando variant é default e showIcon é true. | — | — |

## Definição de tipos completa

```typescript
import type { IconName } from '@/components/Atoms/Icon/types'
import type { TagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

export type SectionTitleVariant = 'default' | 'navigation'

type SectionTitleBaseProps = {
  title: string
  showDescription?: boolean
  description?: string
  maxLines?: number
  state?: `${STATE.ENABLED}` | `${STATE.SKELETON}` | `${STATE.DISABLED}`
  iconState?: `${STATE.ENABLED}` | `${STATE.DISABLED}`
  /**
   * Custom Icon for default variant.
   * When variant is 'navigation', this property is ignored and always uses IcChevronRight.
   */
  icon?: IconName
  onTag?: (data: TagProps) => void
}

type SectionTitleNavigationProps = SectionTitleBaseProps & {
  variant: 'navigation'
  showIcon?: true
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

type SectionTitleDefaultWithIconProps = SectionTitleBaseProps & {
  variant?: 'default'
  showIcon: true
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

type SectionTitleDefaultWithoutIconProps = SectionTitleBaseProps & {
  variant?: 'default'
  showIcon?: false
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export type SectionTitleProps =
  | SectionTitleNavigationProps
  | SectionTitleDefaultWithIconProps
  | SectionTitleDefaultWithoutIconProps

```
