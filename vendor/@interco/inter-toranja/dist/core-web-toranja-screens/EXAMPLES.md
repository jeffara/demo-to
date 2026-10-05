# Toranja Screens Examples

Todos os exemplos seguem regras fixas:

- Sempre consultar `.cursor/skills/toranja/toranja-skill.md` antes de mapear componentes/props/tokens.
- Nunca usar hexadecimal; somente tokens Toranja.
- Nunca recriar componente de DS com `div`/`span` estilizada.
- Nunca fazer commit.
- Sempre mapear todos os blocos do design Figma para componentes Toranja.
- Em qualquer projeto (mesmo sem codigo-fonte do Toranja), usar a skill `toranja` como fonte de verdade para props, variantes, estados e tokens.
- Nao inferir API de componente por leitura de `src/components` local quando a skill `toranja` estiver disponivel.

Cada exemplo abaixo e um template dinamico: adapte os nomes dos dados e secoes conforme o prompt recebido.

## Exemplo 1: Dashboard com cards de status

**User says**

> "Implementar dashboard financeiro a partir deste Figma."

**Mapeamento visual -> componente**

- header da pagina -> `SectionTitle` + `Text`
- resumo de indicadores -> `Card` + `Tag` + `Icon`
- blocos de grafico/lista -> `Card` + `ListItemGeneral` + `Divider`
- estado de carregamento -> `Spinner`

**Checkpoint de variantes/estados**

- `Card`: `state` (`enabled`, `disabled`, `skeleton`)
- `Tag`: `color`, `hierarchy`, `size`, `state`
- `Button` (se CTA): `hierarchy`, `variant`, `state`

**Modelo TypeScript minimo**

```ts
type DashboardCard = {
  id: string
  title: string
  value: string
  trend: 'up' | 'down' | 'neutral'
  tagLabel: string
}
```

**Resultado esperado**

- secoes do dashboard fieis ao Figma
- tokens aplicados sem hex

## Exemplo 2: Formulario com validacao

**User says**

> "Criar tela de cadastro com validacao e feedback."

**Mapeamento visual -> componente**

- campos simples -> `InputText`, `InputPassword`
- data e valor -> `InputDate`, `InputMoney`
- selecao unica -> `Radio` (`Radio.Option`)
- selecao de opcao -> `Select`
- observacoes -> `TextArea`
- feedback e CTA -> `Alert` + `Button`

**Checkpoint de variantes/estados**

- inputs: `state` (`enabled`, `error`, `disabled`, `readonly`, `skeleton`)
- `InputMoney`: validar `typeValue`, `currency`, `variantNumeric`
- `Alert`: validar `variant` e `description`

**Modelo TypeScript minimo**

```ts
type FormData = {
  nome: string
  email: string
  nascimento: string
  renda: number
  perfil: 'pf' | 'pj'
  observacao: string
}
```

**Resultado esperado**

- formulario completo com estados corretos
- sem props inventadas

## Exemplo 3: Lista com acoes por item

**User says**

> "Implementar lista de itens com acao rapida e controles."

**Mapeamento visual -> componente**

- bloco de cabecalho -> `SectionTitle`
- item informativo -> `ListItemGeneral`
- item com CTA -> `ListItemAction`
- item com switch/checkbox/radio -> `ListItemControl`
- separacao entre blocos -> `Divider`

**Checkpoint de variantes/estados**

- `ListItemAction`: `trailingVariant` (`button`, `iconButton`, `neutralIconButton`)
- `ListItemControl`: `trailingVariant` (`checkbox`, `radio`, `switch`, `stepper`)
- `ListItemGeneral`: `variant`, `state`, `showDivider`

**Modelo TypeScript minimo**

```ts
type ListRow = {
  id: string
  label: string
  description?: string
  mode: 'general' | 'action' | 'control'
}
```

**Resultado esperado**

- lista navegavel e consistente
- interacoes e estados aderentes ao DS

## Exemplo 4: Hub de navegacao

**User says**

> "Criar home de atalhos e navegacao por categoria."

**Mapeamento visual -> componente**

- titulo e contexto -> `SectionTitle` + `Text`
- atalhos em grid -> `MenuItem`
- navegacao secundaria -> `Tabs`
- area de perfil/acoes -> `Avatar` + `NeutralIconButton` + `IconChip`

**Checkpoint de variantes/estados**

- `MenuItem`: `variant` (`icon` ou `avatar`) e `size`
- `Tabs`: array com minimo de 2 tabs
- `Avatar`: `variant`, `size`, `state`, `color`

**Modelo TypeScript minimo**

```ts
type Shortcut = {
  id: string
  label: string
  icon: IconName
}
```

**Resultado esperado**

- navegacao clara e responsiva
- componentes de hub alinhados ao Figma

## Exemplo 5: Perfil e configuracoes

**User says**

> "Implementar tela de perfil com secoes expansivas e preferencias."

**Mapeamento visual -> componente**

- cabecalho de usuario -> `Avatar` + `Text` + `Link`
- secoes expansivas -> `Accordion`
- preferencias por linha -> `ListItemControl` + `ListItemGeneral`
- divisores de secao -> `Divider`

**Checkpoint de variantes/estados**

- `Accordion`: `state`, `showDivider`, `contentVariant`
- `ListItemControl`: validar tipo de controle por linha
- `Link`: validar `state` e tamanho

**Modelo TypeScript minimo**

```ts
type PreferenceGroup = {
  id: string
  title: string
  items: Array<{ id: string; label: string; control: 'switch' | 'checkbox' | 'radio' }>
}
```

**Resultado esperado**

- experiencia de configuracao consistente
- estrutura escalavel por grupos

## Exemplo 6: Onboarding e feedback

**User says**

> "Montar tela de onboarding com progresso e mensagens de status."

**Mapeamento visual -> componente**

- etapa atual -> `Text` + `Tag`
- bloco principal -> `Banner` ou `Image`
- feedback de status -> `Alert`
- acao de progresso -> `Button` + `Spinner` (quando loading)

**Checkpoint de variantes/estados**

- `Alert`: `variant` coerente com contexto (info/warning/error)
- `Button`: `state=loading` quando em progresso
- `Banner`: `variant` e fallback de erro

**Modelo TypeScript minimo**

```ts
type OnboardingStep = {
  id: string
  title: string
  description: string
  status: 'pending' | 'active' | 'done' | 'error'
}
```

**Resultado esperado**

- fluxo orientado por estado
- fidelidade visual e semantica de feedback

## Exemplo 7: Detalhe de produto ou transacao

**User says**

> "Criar tela de detalhe com resumo, status e acoes."

**Mapeamento visual -> componente**

- resumo principal -> `Card` + `Text` + `Tag`
- metadados -> `ListItemGeneral`
- acoes -> `ListItemAction` + `Button`
- suporte visual -> `Image` + `Flag` + `Icon`

**Checkpoint de variantes/estados**

- `Tag`: status semantico por cor/hierarchy
- `ListItemAction`: variante de trailing conforme acao
- `Card`: interatividade e estado

**Modelo TypeScript minimo**

```ts
type DetailSection = {
  id: string
  title: string
  rows: Array<{ label: string; value: string }>
}
```

**Resultado esperado**

- leitura rapida de informacoes criticas
- acoes claras e consistentes com DS

## Exemplo 8: Modal, drawer ou bottom sheet

**User says**

> "Implementar modal de confirmacao com opcoes avancadas."

**Mapeamento visual -> componente**

- cabecalho -> `SectionTitle` + `Text`
- opcoes de ajuste -> `ListItemControl`
- acoes -> `Button` (primary/secondary/tertiary)
- divisao interna -> `Divider`

**Checkpoint de variantes/estados**

- `Button`: validar combinacao `hierarchy` + `variant`
- `ListItemControl`: mapear controle correto para cada opcao
- acessibilidade: foco inicial e ordem de tab

**Modelo TypeScript minimo**

```ts
type ModalAction = {
  id: string
  label: string
  hierarchy: 'primary' | 'secondary' | 'tertiary'
}
```

**Resultado esperado**

- hierarquia de acao bem definida
- fluxo de interacao previsivel

## Exemplo 9: Busca e filtros

**User says**

> "Criar tela com busca, filtros e lista de resultados."

**Mapeamento visual -> componente**

- entrada de busca -> `InputSearch`
- filtros rapidos -> `Tag`, `Select`, `Radio` (`Radio.Option`)
- resultados -> `ListItemGeneral` ou `ListItemAction`
- navegacao por categoria -> `Tabs`

**Checkpoint de variantes/estados**

- `InputSearch`: estado e comportamento de limpeza
- `Tag`: filtros ativos/inativos por `state`
- `Tabs`: tab selecionada inicial e estado por item

**Modelo TypeScript minimo**

```ts
type SearchState = {
  query: string
  selectedTab: string
  selectedFilters: string[]
}
```

**Resultado esperado**

- busca responsiva com filtros consistentes
- layout escalavel para multiplos cenarios de dados

## Checklist dinamico para qualquer prompt

Use este checklist em todos os exemplos/cenarios:

- [ ] consultei a skill `toranja` antes do mapeamento
- [ ] listei todos os blocos do Figma sem lacunas
- [ ] mapeei cada bloco para componente Toranja oficial
- [ ] validei props/variantes/estados dos componentes principais
- [ ] apliquei somente tokens Toranja (sem hex)
- [ ] estruturei dados com tipos e arrays antes do JSX
- [ ] validei fidelidade visual secao por secao
- [ ] nao executei commit
- [ ] usei a skill `toranja` como fonte de verdade mesmo em projeto externo sem codigo-fonte do DS
