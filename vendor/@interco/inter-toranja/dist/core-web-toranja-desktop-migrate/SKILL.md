---
name: core-web-toranja-desktop-migrate
description: >-
  Migra módulos inter-ui/tamarindo para Toranja Desktop em projetos consumidores
  de @interco/inter-toranja. Fase EXPLORE gera MIGRATION-SPEC.md; fase IMPLEMENT
  adapta imports, props, surface e tokens. Integrada ao spec-flow (/explore,
  /implement, /review).
disable-model-invocation: false
---

# Toranja Desktop Migrate (consumidor)

## Objetivo

Esta skill acelera a migração de módulos legados (`@interco/inter-ui` /
`tamarindo`) para `@interco/inter-toranja` em **projetos consumidores** — apps
que dependem do pacote, sem acesso ao código-fonte do DS.

Ela complementa (não substitui):

| Skill                                  | Audiência                  | Direção                              |
| -------------------------------------- | -------------------------- | ------------------------------------ |
| `core-web-toranja-tamarindo-adapt`     | Mantenedor do DS (Grupo A) | Tamarindo → código Toranja no repo   |
| `core-web-toranja-screens`             | Consumidor (Grupo B)       | Figma → tela nova com Toranja        |
| **`core-web-toranja-desktop-migrate`** | **Consumidor (Grupo B)**   | **inter-ui legado → Toranja no app** |

## Portabilidade (crítico)

Ordem obrigatória de consulta:

1. `.cursor/skills/toranja/toranja-skill.md`
2. `.cursor/skills/toranja/components/*.md`
3. `component-mapping-catalog.md` (nesta skill)
4. `references/surface-and-anti-patterns.md`

Se a skill `toranja` local estiver ausente:

```bash
npx toranja-copy-skills
```

Abortar análise até a skill estar disponível.

## Integração spec-flow

| Fase spec-flow | O que esta skill faz                                        | Gate de saída                            |
| -------------- | ----------------------------------------------------------- | ---------------------------------------- |
| `/explore`     | AC1–AC5: inventário, de/para, estimativa, divergências      | `MIGRATION-SPEC.md` aprovado pelo humano |
| `/implement`   | AC6–AC9: migração guiada na ordem definida                  | Código migrado + testes atualizados      |
| `/review`      | AC13: checklist consumidor (`consumer-verify-checklist.md`) | Scorecard pass/fail                      |

**Nunca editar código na fase EXPLORE.**  
**Nunca iniciar IMPLEMENT sem artefato aprovado** (`MIGRATION-SPEC.md` ou Issue com contrato completo).

## Regras críticas (inegociáveis)

1. Usar **somente** componentes de `@interco/inter-toranja` — nunca recriar primitiva com `div`/`span`
2. Usar **somente** tokens Toranja — proibido hexadecimal (`#fff`, `#ea7100`, etc.)
3. **Nunca** portar `dsType`, `theme=tamarindo` ou flags paralelas de design system
4. Comportamento desktop via `toranja-surface="desktop"` + `@media (hover: hover)` — ver ADR surface
5. **Nunca** fazer commit — o humano commita
6. Consultar skill `toranja` antes de cada substituição de componente

## Status de mapeamento (legenda)

| Status            | Significado                                           | Esforço típico |
| ----------------- | ----------------------------------------------------- | -------------- |
| `DROP_IN`         | Troca direta de import; props equivalentes            | S (≤ 30 min)   |
| `PROP_MAP`        | Mesmo componente; renomear/remapar props              | S–M            |
| `SPLIT`           | Um inter-ui virou múltiplos Toranja                   | M (≤ 2 h)      |
| `COMPOSE`         | Compor com 2+ componentes Toranja                     | M–L            |
| `MISSING_TORANJA` | Sem equivalente no pacote atual                       | L / bloqueio   |
| `CUSTOM_WRAP`     | Wrapper local temporário até Toranja ter o componente | L              |

## Workflow EXPLORE (AC1–AC5)

### 1) Pré-requisitos

- Caminho(s) do módulo/arquivo no projeto consumidor definidos
- `@interco/inter-toranja` instalado e CSS carregado
- Skill `toranja` local disponível
- Skill `core-web-toranja-desktop-migrate` disponível (via `npx toranja-copy-skills`)

### 2) Inventário de imports (AC1)

Escanear o(s) caminho(s) informados e listar:

- imports de `@interco/inter-ui` (e aliases locais equivalentes)
- componentes, hooks e utilitários usados
- ocorrências de `dsType`, `theme=tamarindo`, `tamarindo` em props

Padrões de busca:

```bash
rg "@interco/inter-ui" <caminho> --glob "*.{ts,tsx}"
rg "from ['\"]@interco/inter-ui" <caminho> --glob "*.{ts,tsx}"
rg "dsType|theme=['\"]tamarindo" <caminho> --glob "*.{ts,tsx}"
```

### 3) De/para com catálogo (AC2)

Para cada item do inventário:

1. Consultar `component-mapping-catalog.md`
2. Validar props na skill `toranja` (`components/<nome>.md`)
3. Registrar status (`DROP_IN` … `CUSTOM_WRAP`), import Toranja e notas de props

### 4) Estimativa de esforço (AC3)

Por item e total do módulo:

| Tamanho | Critério                                                                     |
| ------- | ---------------------------------------------------------------------------- |
| **S**   | ≤ 30 min — `DROP_IN` ou `PROP_MAP` simples                                   |
| **M**   | ≤ 2 h — `PROP_MAP` complexo, `SPLIT`, `COMPOSE` pequeno                      |
| **L**   | > 2 h ou bloqueio — `MISSING_TORANJA`, `CUSTOM_WRAP`, refatoração estrutural |

Incluir justificativa por item.

### 5) Divergências (AC4)

Listar em seção dedicada com severidade:

| Severidade  | Exemplo                                                     |
| ----------- | ----------------------------------------------------------- |
| **blocker** | `MISSING_TORANJA` sem workaround; API incompatível          |
| **major**   | Mudança de comportamento desktop (hover, overlay, keyboard) |
| **minor**   | Renomeação de prop, ajuste visual aceitável                 |

Categorias: API, surface, breakpoint, comportamento, anti-pattern legado.

### 6) Gerar artefato (AC5)

Preencher `templates/MIGRATION-SPEC.md` no repo consumidor (raiz do módulo ou
`docs/migration/`). Marcar gate:

```md
## Approval gate

- [ ] Human reviewed and approved (required before /implement)
- Approved by: \_\_\_
- Date: \_\_\_
```

**Parar aqui.** Handoff para `/implement` somente após aprovação.

## Workflow IMPLEMENT (AC6–AC9)

### Pré-condição

`MIGRATION-SPEC.md` com gate aprovado **ou** Issue GitLab com contrato completo
e aprovação explícita.

### Ordem de migração (AC6)

1. **Imports** — trocar `@interco/inter-ui` por `@interco/inter-toranja`
2. **Props** — aplicar mapeamentos do spec (`PROP_MAP`, `SPLIT`, `COMPOSE`)
3. **Surface** — `toranja-surface="desktop"` no container do módulo quando desktop
4. **Tokens** — substituir cores/spacing hardcoded por tokens Toranja
5. **Testes** — atualizar/criar testes afetados

Migrar na ordem do `MIGRATION-SPEC.md` (itens S antes de L; P0 antes de P1).

### Substituição de componentes (AC7–AC8)

- Validar cada componente na skill `toranja` antes de codar
- Desktop: hover com `@media (hover: hover) and (pointer: fine)`; focus com `:focus-visible`
- Overlays: preferir `ModalDialog`, `SideSheet` — nunca portar `dsType`
- Remover props legadas (`dsType`, `styleType`, `theme=tamarindo`)

### Encerramento (AC9)

- Rodar testes do escopo migrado
- Listar itens `MISSING_TORANJA` / `CUSTOM_WRAP` não resolvidos
- Sugerir `/review` com `consumer-verify-checklist.md`

## VERIFY consumidor (AC13)

Após implementação, usar `consumer-verify-checklist.md` (derivado do checklist
desktop do DS, adaptado para apps sem Storybook do Toranja).

## Anti-patterns a remover

| Legado inter-ui                  | Ação Toranja                                        |
| -------------------------------- | --------------------------------------------------- |
| `dsType="tamarindo"`             | Remover; usar `toranja-surface="desktop"` no layout |
| `theme="tamarindo"`              | Remover; usar `toranja-theme` no `<html>`           |
| Cores hex inline                 | Tokens `--color-*`, `--spacing-*`                   |
| `div` estilizada como botão/card | Componente Toranja equivalente                      |
| BottomSheet em fluxo desktop IB  | Avaliar `SideSheet` / `ModalDialog`                 |

## Troubleshooting

| Problema                      | Ação                                       |
| ----------------------------- | ------------------------------------------ |
| Skill `toranja` ausente       | `npx toranja-copy-skills` e reiniciar      |
| Componente não no catálogo    | Marcar `MISSING_TORANJA`; não inventar API |
| Props divergentes             | Consultar `toranja/components/<nome>.md`   |
| Comportamento desktop incerto | `references/surface-and-anti-patterns.md`  |
| Confusão com tamarindo-adapt  | Adapt = repo DS; Migrate = app consumidor  |

## Recursos

- Catálogo de/para: `component-mapping-catalog.md`
- Template EXPLORE: `templates/MIGRATION-SPEC.md`
- Checklist VERIFY: `consumer-verify-checklist.md`
- Surface e anti-patterns: `references/surface-and-anti-patterns.md`
- Estimativa: `references/effort-estimation.md`
- Skill Toranja: `.cursor/skills/toranja/toranja-skill.md`
- Spec-flow: `~/.cursor/skills/spec-flow/SKILL.md`
