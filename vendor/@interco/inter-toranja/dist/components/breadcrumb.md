---
name: toranja-breadcrumb
description: Tipos e props do componente Breadcrumb do @interco/inter-toranja.
---

# Breadcrumb

**Categoria:** Molecules
**Versão:** 1.0.0 (09/09/2026)
**Importação:**
```tsx
import { Breadcrumb } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `BreadcrumbItem`
- `BreadcrumbProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `BreadcrumbTrailItem`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| items | Trilha de navegação. O último item é sempre a página atual. | — | — |
| ariaLabel | Rótulo acessível do landmark de navegação. | — | — |

## Definição de tipos completa

```typescript
import type { MouseEventHandler } from 'react'

import type { TagProps } from '@/types/shared'

export interface BreadcrumbItem {
  id: string
  label: string
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  ariaLabel?: string
  onTag?: (data: TagProps) => void
}

export interface BreadcrumbTrailItem {
  id: string
  label: string
  href?: string
  isCurrent: boolean
  isInteractive: boolean
  showSeparator: boolean
  handleClick?: MouseEventHandler<HTMLAnchorElement>
}

```
