---
name: toranja-badge
description: Tipos e props do componente Badge do @interco/inter-toranja.
---

# Badge

**Categoria:** Atoms
**Versão:** 1.0.2 (30/07/2024)
**Importação:**
```tsx
import { Badge } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `BadgeProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Estilo do badge, pode ser dot ou label. | dot, label | label |
| count | Quantidade a ser exibida no badge. | — | 111 |

## Definição de tipos completa

```typescript
export type BadgeProps = { variant: 'dot'; count?: never } | { variant: 'label'; count: number }

```
