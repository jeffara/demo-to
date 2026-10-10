# Guia de estimativa de esforço (EXPLORE — AC3)

## Tamanhos

| Size  | Tempo             | Quando usar                                                               |
| ----- | ----------------- | ------------------------------------------------------------------------- |
| **S** | ≤ 30 min          | `DROP_IN`; `PROP_MAP` com ≤ 3 props                                       |
| **M** | ≤ 2 h             | `PROP_MAP` complexo; `SPLIT`; `COMPOSE` pequeno (2 componentes)           |
| **L** | > 2 h ou bloqueio | `MISSING_TORANJA`; `CUSTOM_WRAP`; refatoração estrutural; muitos arquivos |

## Fatores que aumentam esforço

| Fator                                  | Impacto                  |
| -------------------------------------- | ------------------------ |
| `dsType` / `theme=tamarindo` no módulo | +M (remoção + surface)   |
| Overlay com focus trap custom          | +M                       |
| Table com sorting/pagination/selection | +M–L                     |
| Testes extensos com mocks inter-ui     | +M                       |
| `MISSING_TORANJA` sem workaround       | Bloqueio (L até decisão) |

## Exemplos documentados

| Caso                                                       | Size             | Justificativa              |
| ---------------------------------------------------------- | ---------------- | -------------------------- |
| `Button` → `Button` (só import)                            | S                | DROP_IN                    |
| `Modal` → `ModalDialog` (renomear + 2 props)               | S–M              | PROP_MAP                   |
| `ListItem` genérico → `ListItemAction` + `ListItemGeneral` | M                | SPLIT                      |
| Card + Tag + Text para widget custom                       | M                | COMPOSE                    |
| `ChartBar` sem equivalente                                 | L                | MISSING_TORANJA — bloqueio |
| Módulo com 15 componentes DROP_IN                          | S × 15 → total M | Volume                     |

## Ordem sugerida de execução

1. Remover anti-patterns (`dsType`, theme legado)
2. Itens S com Home IB P0
3. Itens M P0
4. Itens S/M P1
5. Itens L e `MISSING_TORANJA` (decisão humana)

## Conservadorismo

Na dúvida, classificar **um nível acima**. O gate de aprovação humana no
`MIGRATION-SPEC.md` corrige estimativas antes do IMPLEMENT.
