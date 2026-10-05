---
name: toranja-progress-bar
description: Tipos e props do componente ProgressBar do @interco/inter-toranja.
---

# ProgressBar

**Categoria:** Atoms
**Versão:** 1.0.0 (21/11/2024)
**Importação:**
```tsx
import { ProgressBar } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ProgressBarProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `ProgressBarVariant`

**Types:**
- `ProgressBarSteppedProps`
- `ProgressBarDefaultProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| progress | Define a porcentagem do progresso. | — | — |
| variant | Define o tipo da ProgressBar. | — | — |
| state | Define o estado da ProgressBar. | — | — |
| steps | Define a quantidade de passos, no minimo 3 e no máximo 6. | — | — |
| active | Informa ao componente quantos passos foram completados até o momento. | — | — |

## Definição de tipos completa

```typescript
import type { STATE } from '@/utils/pattern'

export enum ProgressBarVariant {
  Default = 'default',
  Stepped = 'stepped',
  FullWidth = 'fullWidth',
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type ProgressBarBaseProps = {
  state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`
}

export type ProgressBarSteppedProps = ProgressBarBaseProps & {
  variant: `${ProgressBarVariant.Stepped}`
  steps: IntRange<3, 7> | 0
  active: IntRange<0, 7>
}

export type ProgressBarDefaultProps = ProgressBarBaseProps & {
  variant: `${ProgressBarVariant.Default}` | `${ProgressBarVariant.FullWidth}`
  progress: IntRange<0, 101>
}

export type ProgressBarProps = ProgressBarSteppedProps | ProgressBarDefaultProps

```
