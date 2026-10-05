---
name: toranja-flag
description: Tipos e props do componente Flag do @interco/inter-toranja.
---

# Flag

**Categoria:** Atoms
**Versão:** 1.0.0 (06/01/2025)
**Importação:**
```tsx
import { Flag } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `FlagProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Types:**
- `FlagName`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| iconFlag | Nome do ícone de bandeira a ser exibido | ic_flag_brazil, ic_flag_brazil_bw, ic_flag_argentina, ic_flag_argentina_bw, ic_flag_united_states, ic_flag_united_states_bw, ic_flag_spain, ic_flag_spain_bw, ic_flag_cayman_islands, ic_flag_cayman_islands_bw, ic_flag_globe, ic_flag_globe_bw | — |
| size | Tamanho da bandeira | — | SIZE.MEDIUM |
| state | Estado da bandeira | — | STATE.ENABLED |
| contentDescription | Descrição para leitores de tela | — | — |
| id | ID do elemento | — | — |

## Definição de tipos completa

```typescript
import type { IconName } from '../Icon/types'
import type { SIZE, STATE } from '@/utils/pattern'

export interface FlagProps {
  iconFlag: FlagName
  contentDescription?: string
  size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`
  state?: `${STATE.DISABLED}` | `${STATE.ENABLED}` | `${STATE.SKELETON}`
  id?: string
}

export type FlagName = Extract<IconName, `ic_flag_${string}`>

```
