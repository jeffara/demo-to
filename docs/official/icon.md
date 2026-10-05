---
name: toranja-icon
description: Tipos e props do componente Icon do @interco/inter-toranja.
---

# Icon

**Categoria:** Atoms
**Importação:**
```tsx
import { Icon } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `IconName`
- `IconProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| asset | **Nome do ícone a ser exibido** Especifica qual ícone SVG será renderizado. O nome deve corresponder exatamente a um dos ícones disponíveis no design system. **Exemplos:** - \`ic_check_circle_fill\` - Para indicar sucesso - \`ic_warning_circle\` - Para alertas - \`ic_user\` - Para perfil/usuário - \`ic_heart_fill\` - Para favoritos | ...ICON_NAMES | ic_orange |
| contentDescription | **Descrição textual para acessibilidade** Texto alternativo que será lido por screen readers. É essencial para acessibilidade. **Diretrizes:** - Use descrições claras e concisas - Descreva a função, não a aparência - Para ícones decorativos, use string vazia - Evite "ícone de" no início **Exemplos:** - ✅ "Salvar documento | — | Ícone laranja |
| size | **Tamanho do ícone** Define as dimensões do ícone baseado nos tokens do design system. **Tamanhos disponíveis:** - \`small\` - Para contextos compactos (16px) - \`medium\` - Tamanho padrão para a maioria dos casos (24px) - \`large\` - Para destaque ou contextos maiores (32px) **Quando usar cada tamanho:** - **Small**: Em tabelas, chips, badges, textos inline - **Medium**: Botões, cards, listas, navegação - **Large**: Headers, call-to-actions, estados vazios | small, medium, large | medium |
| state | **Estado visual do ícone** Controla a aparência e comportamento do ícone baseado no contexto de uso. **Estados disponíveis:** - \`enabled\` - Estado padrão, totalmente funcional - \`disabled\` - Estado inativo, com opacidade reduzida - \`skeleton\` - Estado de carregamento, com animação placeholder **Quando usar cada estado:** - **Enabled**: Ícones interativos e informativos normais - **Disabled**: Botões desabilitados, funcionalidades indisponíveis - **Skeleton**: Durante carregamento de dados ou componentes | enabled, disabled, skeleton | enabled |
| color | **Token de cor do design system** Define a cor do ícone usando tokens semânticos padronizados. Todos os tokens começam com "Icon/". **Categorias de cores:** **Neutral** - Para conteúdo geral - \`Icon/Neutral/Primary\` - Cor principal para texto/ícones - \`Icon/Neutral/Secondary\` - Cor secundária, menos proeminente - \`Icon/Neutral/Inverse\` - Para fundos escuros **Brand** - Cores da marca - \`Icon/Brand/Default\` - Cor principal da marca - \`Icon/Brand/Strong\` - Versão mais intensa - \`Icon/Brand/Stronger\` - Máxima intensidade **Feedback** - Para comunicar status - \`Icon/Feedback/Success/Default\` - Sucesso, confirmação - \`Icon/Feedback/Error/Default\` - Erros, falhas - \`Icon/Feedback/Warning/Default\` - Alertas, atenção - \`Icon/Feedback/Information/Default\` - Informações, dicas **Accent** - Cores temáticas - Disponível em: Red, Brown, Orange, Gold, Yellow, Green, Mint, Cyan, Blue, Purple, Pink - Cada cor tem versões Default e Strong **Static** - Cores fixas - \`Icon/Static/Black\` - Preto absoluto - \`Icon/Static/Orange\` - Laranja da marca - \`Icon/Static/White/Default\` - Branco padrão - \`Icon/Static/White/Soft\` - Branco suavizado | — | IconColors.Neutral.Primary |
| id | **Identificador único do elemento** ID HTML opcional para o elemento raiz do ícone. Útil para testes, estilos específicos ou referências JavaScript. **Nota:** Automaticamente gera um data-testid baseado no ID fornecido. | — | — |

## Definição de tipos completa

```typescript
import type { IconColorToken } from './constants/iconColors'
import type { IconName } from './constants/iconNames'
import type { SIZE, STATE } from '@/utils/pattern'

export type { IconName }

export interface IconProps {
  asset: IconName
  contentDescription?: string
  size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`
  state?: `${STATE.DISABLED}` | `${STATE.ENABLED}` | `${STATE.SKELETON}`
  color?: IconColorToken
  id?: string
  isFlag?: boolean
}

```
