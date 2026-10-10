# Checklist de verificação — migração consumidor (inter-ui → Toranja Desktop)

Derivado de `docs/desktop/component-acceptance-checklist.md`, adaptado para
**apps consumidores** que não possuem Storybook do Toranja.

Use na fase `/review` após IMPLEMENT (AC13).

---

## A. Antes de abrir o MR

- [ ] `MIGRATION-SPEC.md` aprovado e anexado ou referenciado no MR
- [ ] Todos os imports `@interco/inter-ui` do módulo migrado foram removidos
- [ ] Nenhum `dsType` ou `theme=tamarindo` restante no escopo
- [ ] CSS do Toranja carregado (`@interco/inter-toranja/dist/assets/toranja.css`)
- [ ] `toranja-theme` configurado no `<html>` do app

## B. O que testar

| Cenário            | Como validar                                                    |
| ------------------ | --------------------------------------------------------------- |
| Desktop alvo       | App em viewport **≥ 1240px**; módulo migrado visível            |
| Desktop XL         | Viewport **1440px** se layout L/XL aplicável                    |
| Mobile / webview   | Viewport **393px** — sem regressão se módulo é compartilhado    |
| Tema               | Pelo menos `pj-light` (IB) e um dark se usar cores semânticas   |
| Estados            | enabled, hover (pointer fino), focus-visible, disabled, loading |
| Teclado (overlays) | Tab, Enter/Space, Escape fecha modal/sheet                      |

## C. Qualidade de código

- [ ] Apenas componentes `@interco/inter-toranja` — sem `div` recriando DS
- [ ] Apenas tokens Toranja — sem hexadecimal em estilos novos/alterados
- [ ] `toranja-surface="desktop"` aplicado onde o spec define
- [ ] Hover com `@media (hover: hover)` quando custom CSS necessário
- [ ] Testes do módulo passando (`yarn test` no escopo)
- [ ] Lint nos arquivos tocados

## D. Itens não resolvidos

- [ ] Todos os `MISSING_TORANJA` documentados no MR com plano de follow-up
- [ ] `CUSTOM_WRAP` temporários marcados com comentário mínimo ou Issue link

## E. Critérios de merge

Reviewer só aprova se:

- [ ] Checklist A–D preenchido na descrição do MR
- [ ] Screenshots desktop (1240; 1440 se aplicável)
- [ ] Sem regressão mobile evidenciada (quando escopo compartilhado)
- [ ] `MIGRATION-SPEC.md` ou Issue link presente

## Scorecard rápido

| Resultado      | Condição                                                   |
| -------------- | ---------------------------------------------------------- |
| **READY**      | Todos os itens A–E OK; nenhum blocker aberto               |
| **NEEDS WORK** | Major/minor pendente; sem blocker                          |
| **BLOCKED**    | `MISSING_TORANJA` crítico sem workaround; regressão mobile |
