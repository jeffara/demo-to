---
name: toranja-table
description: Tipos e props do componente Table do @interco/inter-toranja.
---

# Table

**Categoria:** Organisms
**Importação:**
```tsx
import { Table } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ColumnDef`
- `TableProps`
- `TableToolbarProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `TableSelectionColumnConfig`
- `TableEmptyStateProps`
- `TableHandles`

**Types:**
- `TableSelectionColumnPosition`
- `TableColumnCellType`
- `TableFeedbackVariant`
- `TableLanguage`
- `TableEmptyStateActionHierarchy`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| data | Array de objetos que representam as linhas da tabela. | — | — |
| columns | Definição das colunas (`id`, `accessor`, `header`, `cellType`, `sortable`, `minWidth`, `align`). | — | — |
| getRowId | Função que retorna o identificador único de cada linha. Usada em seleção e paginação manual. | — | — |
| toolbar | Configuração da toolbar acima da tabela (`title` e slot `trailing` para ações). | — | — |
| hideHeader | Oculta o cabeçalho (`<thead>`) da tabela. | — | { summary: 'false |
| showDivider | Exibe divisor entre as linhas do corpo da tabela. | — | { summary: 'false |
| striped | Ativa o modo zebrado alternando o fundo das linhas do corpo da tabela. | — | { summary: 'false |
| isLoading | Ativa o estado de carregamento com spinner centralizado no corpo da tabela. Os headers permanecem visíveis. | — | { summary: 'false |
| skeleton | Ativa o estado skeleton no header e nas linhas, útil para pré-visualizar a estrutura da tabela. | — | { summary: 'false |
| error | Mensagem de erro exibida no lugar do corpo da tabela. Tem prioridade sobre estados vazios. | — | — |
| emptyFeedback | Variante do template de feedback quando não há linhas visíveis: `empty`, `noResults` ou `noFilters`. | empty, noResults, noFilters | { summary: 'empty |
| emptyMessage | Sobrescreve apenas a descrição do template de feedback ativo. | — | — |
| searchTerm | Termo de busca usado para personalizar o título do template `noResults` (ex.: Sem resultado para "{searchTerm}"). | — | — |
| emptyState | Substitui o template de feedback inteiro (título, descrição e ação opcional). | — | — |
| onRetry | Callback executado ao clicar em "Tentar novamente" no estado de erro. | — | — |
| pagination | Habilita a paginação no rodapé da tabela via `Molecules/Pagination`. | — | { summary: 'false |
| initialPageSize | Quantidade inicial de linhas por página quando a paginação está habilitada. | — | { summary: '10 |
| pageSizeOptions | Opções de itens por página exibidas no seletor de paginação. | — | — |
| manualPagination | Ativa paginação server-side. O consumidor controla `pageIndex`, `pageCount` e `totalItems`. | — | { summary: 'false |
| pageCount | Total de páginas disponíveis. Obrigatório em paginação manual. | — | — |
| pageIndex | Índice da página atual (zero-based). Usado em modo controlado de paginação. | — | — |
| totalItems | Total de itens no dataset remoto. Usado em paginação manual para o progresso. | — | — |
| onPaginationChange | Callback disparado quando o índice ou o tamanho da página mudam. | — | — |
| language | Idioma dos textos da paginação e feedback. | ptBR, enUS | { summary: 'ptBR |
| sortBy | Estado de ordenação controlado (`{ columnId, direction }` ou `null`). Usado com `onSortChange`. | — | — |
| onSortChange | Callback disparado ao clicar em um header ordenável. | — | — |
| selectionColumn | Injeta coluna de checkbox para seleção de linhas. `position` define se aparece no início (`START`) ou fim (`END`). | — | — |
| selectedRowIds | Mapa de IDs de linhas selecionadas em modo controlado (`Record<string, boolean>`). | — | — |
| onSelectionChange | Callback disparado quando a seleção muda. Recebe as linhas selecionadas e se todas estão marcadas. | — | — |
| validateBeforeSelectRow | Validação executada antes de selecionar uma linha. Retorna `false` para impedir a seleção. | — | — |
| onRowClick | Callback disparado ao clicar em uma linha da tabela. | — | — |
| onRowDoubleClick | Callback disparado ao dar duplo clique em uma linha da tabela. | — | — |
| filter | Termo de filtro global aplicado client-side sobre os valores acessíveis das colunas. | — | — |
| enableStatus | Habilita borda lateral de status nas linhas, definida por `getStatusColor`. | — | { summary: 'false |
| getStatusColor | Função que retorna a cor da borda de status para cada linha. Requer `enableStatus={true}`. | — | — |

## Definição de tipos completa

```typescript
import type { ReactNode } from 'react'

import type { TableCellAlign } from './components/shared/types'
import type { TableCellType } from './components/TableCell/types'
import type { GetRowIdFn, PaginationState, SortState } from './domain/types'
import type { PaginationLanguage } from '@/components/Molecules/Pagination/types'

export type { GetRowIdFn, PaginationState, SortState }

export type TableSelectionColumnPosition = 'START' | 'END'

export interface TableSelectionColumnConfig {
  position: TableSelectionColumnPosition
}

export type TableColumnCellType = Extract<
  TableCellType,
  | 'checkbox'
  | 'text'
  | 'value'
  | 'status'
  | 'tags'
  | 'avatar'
  | 'paymentMethod'
  | 'signal'
  | 'icon'
  | 'counter'
  | 'button'
  | 'iconButton'
  | 'iconButtonMenu'
>

export type TableFeedbackVariant = 'empty' | 'noResults' | 'noFilters'

export type TableLanguage = PaginationLanguage

export type TableEmptyStateActionHierarchy = 'primary' | 'secondary' | 'tertiary'

export interface TableEmptyStateProps {
  title: string
  description: string
  icon?: ReactNode
  action?: {
    label: string
    onClick: () => void
    hierarchy?: TableEmptyStateActionHierarchy
  }
}

export interface ColumnDef<T extends Record<string, unknown>> {
  id: string
  accessor: keyof T | ((row: T) => unknown)
  sortAccessor?: keyof T | ((row: T) => unknown)
  header: string
  cellType: TableColumnCellType
  minWidth?: number
  align?: TableCellAlign
  sortable?: boolean
}

export interface TableToolbarProps {
  title?: string
  trailing?: ReactNode
}

export interface TableProps<T extends Record<string, unknown>> {
  data: T[]
  columns: ColumnDef<T>[]
  getRowId?: GetRowIdFn<T>
  toolbar?: TableToolbarProps
  hideHeader?: boolean
  showDivider?: boolean
  striped?: boolean
  isLoading?: boolean
  skeleton?: boolean
  error?: string
  emptyFeedback?: TableFeedbackVariant
  emptyMessage?: string
  searchTerm?: string
  emptyState?: TableEmptyStateProps
  onRetry?: () => void
  pagination?: boolean
  initialPageSize?: number
  pageSizeOptions?: number[]
  manualPagination?: boolean
  pageCount?: number
  pageIndex?: number
  totalItems?: number
  onPaginationChange?: (state: PaginationState) => void
  language?: TableLanguage
  sortBy?: SortState
  onSortChange?: (sort: SortState) => void
  selectionColumn?: TableSelectionColumnConfig
  selectedRowIds?: Record<string, boolean>
  onSelectionChange?: (rows: T[], allSelected: boolean) => void
  validateBeforeSelectRow?: (row: T) => boolean
  onRowClick?: (row: T) => void
  onRowDoubleClick?: (row: T) => void
  filter?: string
  enableStatus?: boolean
  getStatusColor?: (row: T) => string
}

export interface TableHandles {
  goToPage: (pageIndex: number) => void
}

```
