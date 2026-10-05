---
name: toranja-alert
description: Tipos e props do componente Alert do @interco/inter-toranja.
---

# Alert

**Categoria:** Molecules
**Versão:** 1.0.1 (23/12/2024)
**Importação:**
```tsx
import { Alert } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `AlertProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Types:**
- `AlertLink`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Define o tipo do Alert. | FEEDBACK.INFORMATION, FEEDBACK.WARNING, FEEDBACK.ERROR | — |
| state | Define o estado para o Alert. | STATE.ENABLED, STATE.SKELETON | — |
| title | Define o titulo para o Alert. | — | — |
| showDescription | Controla a exibição da descrição. | — | { summary: 'true |
| showLink | Controla a exibição do link. | — | { summary: 'true |
| link | Define o link do Alert. Use `href` para links externos. Para navegação interna (SPA), passe também `onClick` com o mecanismo do roteador (ex.: `navigate`) — o default do anchor é prevenido automaticamente. | — | — |
| onTag | — | — | — |

## Definição de tipos completa

```typescript
import type { MouseEvent } from 'react'

import type { TagProps } from '@/types/shared'
import type { FEEDBACK, STATE } from '@/utils/pattern'

export type AlertLink = {
  label: string
  href: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export type AlertProps = {
  variant: `${FEEDBACK.INFORMATION}` | `${FEEDBACK.WARNING}` | `${FEEDBACK.ERROR}`
  state: `${STATE.ENABLED}` | `${STATE.SKELETON}`
  title: string
  description: string
  showDescription?: boolean
  showLink?: boolean
  link?: AlertLink
  onTag?: (data: TagProps) => void
}

```
