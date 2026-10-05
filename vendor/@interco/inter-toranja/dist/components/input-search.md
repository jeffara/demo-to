---
name: toranja-input-search
description: Tipos e props do componente InputSearch do @interco/inter-toranja.
---

# InputSearch

**Categoria:** Molecules
**Versão:** 1.4.1 (24/03/2025)
**Importação:**
```tsx
import { InputSearch } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `InputSearchProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| placeholder | Texto a ser exibido como placeholder no campo de busca. | — | Pesquisar |
| defaultValue | Valor inicial do campo de busca. | — | — |
| onChange | Função chamada quando o valor do campo de busca muda. | — | — |
| state | Estado visual do campo de busca. | enabled, disabled, loading, skeleton | — |

## Definição de tipos completa

```typescript
import type { InputProps } from '../InputBase/types'

export type InputSearchProps = Omit<
  InputProps<undefined>,
  'phoneType' | 'type' | 'counter' | 'showCounter'
>

```
