# Surface desktop e anti-patterns (consumidor)

Resumo do ADR surface para migração em apps consumidores. Fonte canônica:
`docs/desktop/adr-toranja-desktop-surface.md` (no repo Toranja).

## Contrato surface

| Atributo          | Onde                       | Valores                                      | Uso                |
| ----------------- | -------------------------- | -------------------------------------------- | ------------------ |
| `toranja-theme`   | `<html>`                   | `pf-light`, `pf-dark`, `pj-light`, `pj-dark` | Tema visual        |
| `toranja-surface` | Container do módulo/layout | `webview`, `desktop`                         | Canal de interação |

**Regra:** `toranja-theme` ≠ desktop. Tema e canal são independentes.

## Migração de anti-patterns legados

| Legado inter-ui                   | Ação na migração                                           |
| --------------------------------- | ---------------------------------------------------------- |
| `dsType="tamarindo"`              | **Remover.** Usar `toranja-surface="desktop"` no container |
| `theme="tamarindo"`               | **Remover.** Usar `toranja-theme` no `<html>`              |
| `ThemeProvider` tamarindo         | Remover provider; CSS Toranja + atributos no HTML          |
| Props `styleType` (Table, etc.)   | Consultar API Toranja; não portar cegamente                |
| Breakpoints hardcoded do inter-ui | Usar breakpoints/tokens Toranja                            |

## Comportamento desktop

Aplicar quando `toranja-surface="desktop"`:

- Hover: `@media (hover: hover) and (pointer: fine)`
- Focus: `:focus-visible` (não remover outline sem substituto)
- Overlays: `ModalDialog`, `SideSheet` — focus trap, Escape fecha
- Densidade: validar em viewport ≥ 1240px

## O que nunca fazer

- Portar `dsType` ou criar flag paralela no app
- Fork de tema tamarindo paralelo ao Toranja
- Usar `toranja-theme` para significar "desktop"
- Copiar class names ou estrutura de pastas do inter-ui

## Referência de comportamento (não de API)

O branch `tamarindo` do inter-ui mostra **intenção de interação** histórica.
Use apenas para entender hover/keyboard/overlay — nunca para copiar props ou imports.
