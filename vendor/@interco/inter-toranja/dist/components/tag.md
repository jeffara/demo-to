---
name: toranja-tag
description: Tipos e props do componente Tag do @interco/inter-toranja.
---

# Tag

**Categoria:** Atoms
**Versão:** 1.2.1 (02/10/2025)
**Importação:**
```tsx
import { Tag } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `TagProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Types:**
- `Color`
- `SegmentColor`
- `Hierarchy`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| color | Cor da tag - Brand reforça cor da marca, Neutral auxilia outras tags, Accent para status/ofertas, Segment indica segmento de cliente. | blue, brand, brown, cyan, gold, green, mint, neutral, orange, pf-prime, pf-digital, pf-one, pf-win, pink, pj-corporate, pj-digital, pj-enterprise, pj-middle, pj-pro, pj-win, purple, red, yellow | — |
| hierarchy | Hierarquia da tag - Strong para destaque máximo, Soft para menos destaque. | strong, soft | — |
| size | Tamanho da tag - Small para componentes pequenos, Large para equilíbrio visual, ExtraLarge para destaque máximo. | small, large, extraLarge | — |
| state | Estado da tag - Enabled padrão, Disabled evite se conteúdo for importante, Skeleton para pré-carregamento. | enabled, disabled, skeleton | — |
| label | Texto da tag - Deve ocupar só uma linha, truncando se ultrapassar limite. | — | — |
| icon | Ícone da tag - Apenas permitido nos tamanhos Large e ExtraLarge. | — | — |

## Definição de tipos completa

```typescript
export type Color =
  | 'blue'
  | 'brand'
  | 'brown'
  | 'cyan'
  | 'gold'
  | 'green'
  | 'mint'
  | 'neutral'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'yellow'

export type SegmentColor =
  | 'pf-prime'
  | 'pf-digital'
  | 'pf-one'
  | 'pf-win'
  | 'pj-corporate'
  | 'pj-digital'
  | 'pj-enterprise'
  | 'pj-middle'
  | 'pj-pro'
  | 'pj-win'

type State = 'enabled' | 'disabled' | 'skeleton'

export type Hierarchy<T extends Color | SegmentColor> = T extends SegmentColor
  ? 'strong'
  : 'strong' | 'soft'

export type TagProps = {
  color: Color | SegmentColor
  hierarchy: Hierarchy<Color | SegmentColor>
  label: string
  size: 'small' | 'large' | 'extraLarge'
  state?: State
  icon?: React.ReactNode
}

```
