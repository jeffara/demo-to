---
name: toranja-cross-selling
description: Tipos e props do componente CrossSelling do @interco/inter-toranja.
---

# CrossSelling

**Categoria:** Molecules
**Versão:** 1.0.0 (14/11/2024'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      description: 'Define o título do componente CrossSelling',
    },
    subtitle: {
      control: {
        type: 'text',
      },
      description: 'Define o subtítulo do componente CrossSelling',
    },
    description: {
      control: {
        type: 'text',
      },
      description: 'Define a descrição do componente CrossSelling',
    },
    tag: {
      control: {
        type: 'text',
      },
      description: 'Define a tag do componente CrossSelling',
    },
    link: {
      control: {
        type: 'object',
      },
      description: 'Define o link do componente CrossSelling',
    },
    state: {
      control: {
        type: 'select',
      },
      options: Object.values(STATE)
**Importação:**
```tsx
import { CrossSelling } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `CrossSellingProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `CrossSellingVariant`

**Interfaces:**
- `BaseCrossSellingProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| title | Define o título do componente CrossSelling | — | — |
| subtitle | Define o subtítulo do componente CrossSelling | — | — |
| description | Define a descrição do componente CrossSelling | — | — |
| tag | Define a tag do componente CrossSelling | — | — |
| link | Define o link do componente CrossSelling | — | — |
| state | Define o estado do componente CrossSelling | — | — |
| variant | Define a variante do componente CrossSelling | — | — |

## Definição de tipos completa

```typescript
import type { TagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

export enum CrossSellingVariant {
  Checkbox = 'checkbox',
  Chevron = 'chevron',
}

export interface BaseCrossSellingProps {
  description?: string
  state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`
  subtitle: string
  tag?: string
  title: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onTag?: (data: TagProps) => void
  link?: {
    label: string
    href: string
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  }
}

type CheckboxVariant = {
  variant: CrossSellingVariant.Checkbox | `${CrossSellingVariant.Checkbox}`
  onCheckboxChange: (isChecked: boolean) => void
  isChecked?: boolean
}

type ChevronVariant = {
  variant?: CrossSellingVariant.Chevron | `${CrossSellingVariant.Chevron}`
  onCheckboxChange?: never
  isChecked?: never
}

export type CrossSellingProps = BaseCrossSellingProps & (CheckboxVariant | ChevronVariant)

```
