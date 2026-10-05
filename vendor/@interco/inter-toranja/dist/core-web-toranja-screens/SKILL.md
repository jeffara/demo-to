---
name: core-web-toranja-screens
description: Orquestra a implementacao de telas React a partir de designs Figma usando o Design System Toranja. Use quando houver URL do Figma para criar ou atualizar telas, sempre consultando primeiro a skill toranja para componentes, props e tokens.
disable-model-invocation: false
---

# Toranja Screens

## Objetivo

Esta skill acelera a implementacao de telas React a partir de designs Figma com:

1. mapeamento completo de blocos visuais para componentes Toranja
2. uso estrito de tokens do Design System Toranja
3. validacao de props, variantes e estados com a skill `toranja`
4. execucao incremental com alta fidelidade visual

Ela nao substitui a skill `toranja`; ela coordena o fluxo de tela usando a skill `toranja` como fonte primaria.

## Portabilidade entre projetos (critico)

Esta skill deve funcionar em projetos que **nao** possuem o codigo-fonte dos componentes Toranja.

Ordem obrigatoria de consulta para funcionamento, props e tokens:

1. `.cursor/skills/toranja/toranja-skill.md`
2. `.cursor/skills/toranja/components/*.md`
3. somente se necessario, documentacao oficial indicada dentro da skill `toranja`

Regra de portabilidade:

- nunca depender de `src/components` local para descobrir API de componente
- nunca depender de `src/styles` local para descobrir token oficial
- usar sempre a skill `toranja` como fonte de verdade para comportamento, props, variantes e tokens

## Regras Criticas (obrigatorias e inegociaveis)

1. **Sempre consultar a skill `toranja` antes de qualquer implementacao**
   - Primeiro ler `.cursor/skills/toranja/toranja-skill.md`
   - Depois consultar `.cursor/skills/toranja/components/*.md` para props e variantes
2. **Nunca usar hexadecimal na implementacao de estilo**
   - Proibido `#fff`, `#ea7100`, etc.
   - Usar somente tokens Toranja (ex.: `--color-*`, `--spacing-*`, `--radius-*`)
3. **Nunca recriar componente de DS com `div`/`span` estilizada**
   - Se existir componente Toranja equivalente, ele e obrigatorio
4. **Nunca fazer commit**
   - Esta skill nao deve executar commit em nenhuma etapa
5. **Mapear todos os componentes visuais do design**
   - Proibido pular bloco visual sem decisao explicita de mapeamento
6. **A fonte de verdade para funcionamento e API e a skill `toranja`**
   - mesmo que o projeto tenha implementacao local de componentes, priorizar a skill `toranja`
   - em projetos externos sem codigo do Toranja, seguir normalmente usando somente a skill `toranja`

Se a skill `toranja` nao existir no projeto atual, orientar executar:

```bash
npx toranja-copy-skills
```

## Limites desta skill

Use esta skill quando:

- houver URL de design no Figma
- objetivo for criar ou atualizar telas com Toranja

Nao use esta skill para:

- criar componentes novos da biblioteca
- criar tokens novos de design system

## Pre-requisitos

- MCP do Figma ativo e autenticado
- `@interco/inter-toranja` instalado
- CSS do Toranja carregado no app
- arquivo alvo definido (single-file ou multi-file)
- skill `toranja` disponivel localmente

## Quick Reference de Tokens (alto desempenho)

Use este bloco para reduzir releituras de token durante a execucao.

### Spacing

- `--spacing-2`: `0.125rem`
- `--spacing-4`: `0.25rem`
- `--spacing-8`: `0.5rem`
- `--spacing-12`: `0.75rem`
- `--spacing-16`: `1rem`
- `--spacing-24`: `1.5rem`
- `--spacing-32`: `2rem`
- `--spacing-48`: `3rem`
- `--spacing-72`: `4.5rem`
- `--spacing-96`: `6rem`

### Radius

- `--radius-small`: `0.25rem`
- `--radius-medium`: `0.75rem`
- `--radius-large`: `1rem`
- `--radius-full`: `6.25rem`

### Padrões de cores e tipografia

- Background: `--color-background-*`
- Surface: `--color-surface-*`
- Text: `--color-text-*`
- Icon: `--color-icon-*`
- Feedback: `--color-feedback-*`
- Tipografia: `--typography-*`

Regra pratica: se houver duvida de token exato, voltar para a skill `toranja` e confirmar antes de codar.

## Catalogo de Componentes Toranja (cobertura ampla)

Usar como mapa rapido para decidir o componente correto por bloco visual.

- `SectionTitle`: titulo de secao com opcao de acao
- `MenuItem`: atalhos/menus em grid ou lista
- `ListItemGeneral`: item informativo generico
- `ListItemAction`: item com acao (button/iconButton/neutralIconButton)
- `ListItemControl`: item com controle (checkbox/radio/switch/stepper)
- `Button`: CTA principal, secundario, terciario, outlined, estados de loading/skeleton
- `Alert`: feedback informativo/erro/warning
- `Tag`: rotulo de status/categoria
- `Card`: container clicavel/selecionavel
- `InputDate`: data
- `InputMoney`: monetario/numerico
- `InputPassword`: senha
- `InputSearch`: busca
- `InputText`: texto/numerico
- `Radio` (`Radio.Option`): escolha unica
- `Select`: campo seletor
- `Stepper`: incremento/decremento
- `TextArea`: campo multilinha
- `Divider`: separador
- `Accordion`: secoes expansiveis
- `Avatar`: usuario (foto/iniciais/icone)
- `Link`: acao textual
- `Tabs`: navegacao por abas
- `Flag`: bandeiras
- `Icon`: icone avulso
- `IconChip`: botao chip com badge
- `NeutralIconButton`: botao icone neutro
- `IconButton`: botao de icone (via `Button`)
- `Image`: imagem com estados e fallback
- `Banner`: banner de imagem/webview
- `Spinner`: indicador de carregamento
- `Text`: tipografia semantica

### Props minimas mais comuns (para decisao rapida)

- `Button`: `label`, `onClick`
- `MenuItem`: `label`, `variant`, `onClick` (+ `icon` ou `src`/`alt`)
- `ListItemGeneral`: `label`
- `ListItemAction`: `label`, `trailingVariant`
- `ListItemControl`: `label`, `trailingVariant`, `trailingProps`
- `Tag`: `label`, `color`, `hierarchy`, `size`
- `Alert`: `variant`, `title`, `description`
- `Tabs`: `tabs` com minimo de 2 entradas
- `SectionTitle`: `title` (e `onClick` quando `showIcon=true`)
- `InputMoney`: `defaultValue`, `typeValue`, `currency`, `variantNumeric`, `onChange`

## Workflow obrigatorio otimizado (6 etapas)

### 1) Scoping e descoberta paralela

- Confirmar URL Figma, `fileKey`, `nodeId`, arquivo alvo e restricoes de stack
- Buscar `get_design_context` e `get_screenshot` em paralelo
- Definir secoes da tela e ordem de implementacao

### 2) Inventario completo de blocos e mapeamento de componentes

- Percorrer a tela de cima para baixo e listar todos os blocos visuais
- Para cada bloco, decidir componente Toranja equivalente
- Para cada decisao, validar props/variantes na skill `toranja`
- Nao inferir comportamento por implementacao local do projeto quando isso conflitar com a skill `toranja`
- Priorizar sempre componente oficial antes de qualquer estrutura custom

Checklist de inventario (obrigatorio):

- [ ] nenhum bloco visual ficou sem mapeamento
- [ ] nenhum componente DS foi recriado com elemento HTML basico
- [ ] componentes da lista ampla foram avaliados quando fizer sentido para o design

### 3) Mapeamento de tokens (sem hex)

- Converter cor, espacamento, radius e tipografia para tokens Toranja
- Nao usar valores hardcoded de cor em nenhuma circunstancia
- Permitir estilo inline apenas para layout/posicionamento quando nao houver props de DS para isso

### 4) Modelagem de dados TypeScript

- Declarar arrays e objetos tipados antes do JSX
- Importar tipos de `@interco/inter-toranja` quando necessario (`IconName`, `TagProps`, `RegularButtonProps`, etc.)
- Evitar JSX repetitivo: renderizar listas a partir de dados

### 5) Implementacao incremental por secao

- Implementar secao por secao na ordem de prioridade visual
- Comparar cada secao com screenshot do Figma antes de avancar
- Ajustar variante/state primeiro; depois ajustar espacamento/token

### 6) Validacao final rapida

- Confirmar fidelidade visual macro e micro
- Confirmar semantica, acessibilidade basica e responsividade
- Confirmar uso exclusivo de tokens e componentes Toranja

## Estrategia de desempenho (tempo minimo de operacao)

- Ler contexto do Figma uma vez por node e reutilizar durante toda a execucao
- Evitar ida e volta desnecessaria: decidir bloco->componente em lote por secao
- Validar props criticas no ato do mapeamento, nao no fim
- Reutilizar componentes auxiliares locais para blocos repetidos
- Centralizar tokens em constantes para evitar recalculo manual
- Quando o design repetir padroes, clonar estrutura tipada e alterar apenas dados

## Padroes por tipo de tela (dinamico e escalavel)

- **Dashboard**: `Card`, `SectionTitle`, `Text`, `Tag`, `Spinner`, `Divider`
- **Formulario**: `InputText`, `InputDate`, `InputMoney`, `InputPassword`, `Select`, `Radio`, `TextArea`, `Button`, `Alert`
- **Lista**: `ListItemGeneral`, `ListItemAction`, `ListItemControl`, `SectionTitle`, `Divider`
- **Modal/Drawer/Sheet**: foco em hierarquia visual, acoes e fechamento claro
- **Showcase DS**: cobertura de variantes e estados dos componentes principais
- **Hub/Navegacao**: `MenuItem`, `Tabs`, `SectionTitle`, `NeutralIconButton`, `Avatar`
- **Perfil/Configuracoes**: `Accordion`, `ListItemControl`, `ListItemGeneral`, `Avatar`
- **Onboarding/Feedback**: `Alert`, `Banner`, `Button`, `Spinner`, `Text`, `Tag`
- **Detalhe de item**: `Card`, `ListItemGeneral`, `ListItemAction`, `Image`, `Flag`, `Tag`

## Padrao de estruturacao de dados (obrigatorio)

Antes do JSX, modele os dados com tipos:

```ts
type MenuEntry = {
  label: string
  icon: IconName
}

type TagEntry = Omit<TagProps, 'label' | 'icon'> & {
  label: string
  icon?: IconName
}

type ButtonEntry = Pick<RegularButtonProps, 'hierarchy' | 'variant' | 'state' | 'size'> & {
  label: string
  icon?: IconName
}
```

Regras praticas:

- todo grupo repetitivo deve vir de array tipado
- se houver repeticao de 2+ blocos semelhantes, extrair componente auxiliar local
- evitar duplicacao de JSX para manter performance e consistencia visual

## Troubleshooting rapido

- **Componente nao rende como esperado**: revisar props/variantes na skill `toranja`
- **Divergencia de cor/espacamento**: revisar token Toranja (nao usar hex)
- **Estado incorreto**: validar `state`, `variant`, `hierarchy`, `size`
- **Markup muito repetido**: mover para arrays tipados e extrair helper local
- **Bloco sem componente DS**: reavaliar mapeamento no catalogo desta skill e na skill `toranja`
- **Baixa fidelidade com Figma**: corrigir variante/state antes de mexer em layout fino

## Checklist final

- [ ] Consultei a skill `toranja` antes de implementar qualquer bloco
- [ ] Mapeei todos os blocos visuais para componentes Toranja
- [ ] Nao usei nenhuma cor em hexadecimal
- [ ] Usei apenas tokens Toranja para cor, spacing, radius e tipografia
- [ ] Nao recriei componente de DS com `div`/`span` estilizada
- [ ] Estruturei dados em arrays/objetos tipados
- [ ] Validei secao por secao com referencia do Figma
- [ ] Verifiquei acessibilidade basica e responsividade
- [ ] Nao executei commit

## Recursos

- Skill Toranja: `.cursor/skills/toranja/toranja-skill.md`
- Referencia de componentes Toranja: `.cursor/skills/toranja/components/*.md`
- Referencia de tokens Toranja: skill `toranja` e arquivos de componentes da skill
- MCP Figma: `get_design_context` e `get_screenshot`
