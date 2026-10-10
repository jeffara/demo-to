# Catálogo inter-ui → Toranja Desktop

Mapeamento versionado com o pacote `@interco/inter-toranja`. Baseado no
inventário Tamarindo (`core-web-toranja-tamarindo-adapt/component-inventory.md`).

**Como usar:** na fase EXPLORE, para cada import inter-ui encontrado, localizar a
linha abaixo, validar props na skill `toranja` e registrar o status no
`MIGRATION-SPEC.md`.

## Legenda de status

| Status            | Significado                                    |
| ----------------- | ---------------------------------------------- |
| `DROP_IN`         | Import direto; props equivalentes ou opcionais |
| `PROP_MAP`        | Mesmo componente; renomear/remapar props       |
| `SPLIT`           | Um inter-ui → múltiplos Toranja                |
| `COMPOSE`         | Compor com 2+ componentes Toranja              |
| `MISSING_TORANJA` | Sem equivalente exportado no pacote            |
| `CUSTOM_WRAP`     | Wrapper local até Toranja disponibilizar       |

## Import paths

| inter-ui (legado)                | Toranja (consumidor)              |
| -------------------------------- | --------------------------------- |
| `@interco/inter-ui`              | `@interco/inter-toranja`          |
| `@interco/inter-ui/components/*` | `@interco/inter-toranja` (barrel) |

## Actions

| inter-ui             | Toranja export         | Status     | Home IB | Notas de props                          |
| -------------------- | ---------------------- | ---------- | ------- | --------------------------------------- |
| Button               | `Button`               | `DROP_IN`  | P0      | `hierarchy`, `variant`, `size`, `state` |
| Chip                 | `Chip`                 | `DROP_IN`  | P0      |                                         |
| FloatingActionButton | `FloatingActionButton` | `PROP_MAP` | —       | Verificar responsive desktop            |
| IconButton           | `IconButton`           | `DROP_IN`  | P0      |                                         |
| IconChip             | `IconChip`             | `PROP_MAP` | —       | Desktop hover via surface               |
| MenuItem             | `MenuItem`             | `DROP_IN`  | P1      |                                         |
| NeutralIconButton    | `NeutralIconButton`    | `DROP_IN`  | P0      |                                         |

## Charts

| inter-ui   | Toranja export | Status            | Home IB | Notas                                   |
| ---------- | -------------- | ----------------- | ------- | --------------------------------------- |
| ChartDonut | `ChartDonut`   | `DROP_IN`         | —       |                                         |
| Legend     | —              | `MISSING_TORANJA` | —       | Existe no repo DS, sem export no pacote |
| ChartBar   | `ChartBar`     | `DROP_IN`         | —       |                                         |
| ChartLine  | `ChartLine`    | `DROP_IN`         | —       |                                         |
| ChartMeter | `ChartMeter`   | `DROP_IN`         | —       |                                         |

## Containers

| inter-ui            | Toranja export | Status     | Home IB | Notas                                          |
| ------------------- | -------------- | ---------- | ------- | ---------------------------------------------- |
| Card                | `Card`         | `DROP_IN`  | P0      | Variantes `InterCard*` via props de tamanho    |
| CrossSelling        | `CrossSelling` | `DROP_IN`  | P0      |                                                |
| Widget              | `Widget`       | `DROP_IN`  | P0      |                                                |
| InterCardLarge      | `Card`         | `PROP_MAP` | P0      | Prop de variante/tamanho                       |
| InterCardMedium     | `Card`         | `PROP_MAP` | P0      |                                                |
| InterCardSmall      | `Card`         | `PROP_MAP` | P0      |                                                |
| Panel               | `Panel`        | `DROP_IN`  | —       |                                                |
| SideSheet           | `SideSheet`    | `DROP_IN`  | P0      | Preferir em desktop vs BottomSheet             |
| Modal / ModalDialog | `ModalDialog`  | `PROP_MAP` | P0      | Renomear import; validar focus trap            |
| Table               | `Table`        | `PROP_MAP` | —       | API diferente; não portar `styleType`/`dsType` |
| BottomSheet         | `BottomSheet`  | `DROP_IN`  | —       | Manter em webview; desktop pode usar SideSheet |

## Content Display

| inter-ui           | Toranja export       | Status            | Home IB | Notas                                          |
| ------------------ | -------------------- | ----------------- | ------- | ---------------------------------------------- |
| Banner             | `Banner`             | `DROP_IN`         | P0      |                                                |
| Text               | `Text`               | `DROP_IN`         | —       |                                                |
| DecoratedText      | `DecoratedText`      | `DROP_IN`         | —       |                                                |
| Image              | `Image`              | `PROP_MAP`        | —       |                                                |
| ListItemView       | `ListItemView`       | `DROP_IN`         | P0      |                                                |
| TooltipDescription | `TooltipDescription` | `DROP_IN`         | —       | Desktop-only no Toranja                        |
| TooltipIndicator   | —                    | `MISSING_TORANJA` | —       | Avaliar `CUSTOM_WRAP` com `TooltipDescription` |

## Form Controls

| inter-ui               | Toranja export  | Status            | Home IB | Notas                               |
| ---------------------- | --------------- | ----------------- | ------- | ----------------------------------- |
| Checkbox               | `Checkbox`      | `DROP_IN`         | —       |                                     |
| InputCountry           | `InputCountry`  | `DROP_IN`         | P1      |                                     |
| InputDate              | `InputDate`     | `DROP_IN`         | P1      |                                     |
| InputMoney             | `InputMoney`    | `DROP_IN`         | P1      |                                     |
| InputPassword          | `InputPassword` | `PROP_MAP`        | —       |                                     |
| InputPinCode / PinCode | `PinCode`       | `PROP_MAP`        | —       | Nome pode diferir                   |
| InputSearch            | `InputSearch`   | `DROP_IN`         | —       |                                     |
| InputText              | `InputText`     | `DROP_IN`         | —       |                                     |
| Radio / RadioButton    | `Radio`         | `PROP_MAP`        | —       | `Radio.Option` no Toranja           |
| Select                 | `Select`        | `PROP_MAP`        | —       | Desktop density                     |
| Stepper                | `Stepper`       | `PROP_MAP`        | —       |                                     |
| Switch                 | `Switch`        | `PROP_MAP`        | —       |                                     |
| Textarea / TextArea    | `TextArea`      | `PROP_MAP`        | —       | Casing do export                    |
| DatePicker             | `DatePicker`    | `DROP_IN`         | P1      | Keyboard + overlay desktop          |
| InputMessage           | —               | `MISSING_TORANJA` | P1      | `COMPOSE` com `InputText` + `Text`? |
| InputPayment           | —               | `MISSING_TORANJA` | —       |                                     |

## Iconography

| inter-ui      | Toranja export   | Status     | Home IB | Notas                  |
| ------------- | ---------------- | ---------- | ------- | ---------------------- |
| Icon          | `Icon`           | `DROP_IN`  | —       | `IconName` type        |
| Flag          | `Flag`           | `DROP_IN`  | —       |                        |
| PaymentMethod | `PaymentMethods` | `PROP_MAP` | —       | Nome plural no Toranja |

## List Items

| inter-ui        | Toranja export    | Status    | Home IB | Notas |
| --------------- | ----------------- | --------- | ------- | ----- |
| ListItemAction  | `ListItemAction`  | `DROP_IN` | P1      |       |
| ListItemControl | `ListItemControl` | `DROP_IN` | P1      |       |
| ListItemGeneral | `ListItemGeneral` | `DROP_IN` | P0      |       |

## Navigation

| inter-ui              | Toranja export     | Status            | Home IB | Notas            |
| --------------------- | ------------------ | ----------------- | ------- | ---------------- |
| Accordion             | `Accordion`        | `DROP_IN`         | P0      |                  |
| Avatar                | `Avatar`           | `PROP_MAP`        | —       |                  |
| Divider               | `Divider`          | `DROP_IN`         | —       |                  |
| Link                  | `Link`             | `DROP_IN`         | —       |                  |
| PageIndicator         | `PageIndicator`    | `PROP_MAP`        | —       |                  |
| SectionSubtitle       | `SectionSubtitle`  | `DROP_IN`         | P0      |                  |
| SectionTitle          | `SectionTitle`     | `DROP_IN`         | P0      |                  |
| SegmentedControl      | `SegmentedControl` | `PROP_MAP`        | —       |                  |
| Tabs                  | `Tabs`             | `DROP_IN`         | P0      |                  |
| Sidebar               | `Sidebar`          | `DROP_IN`         | P0      |                  |
| Scroll                | —                  | `MISSING_TORANJA` | —       |                  |
| Breadcrumb            | `Breadcrumb`       | `DROP_IN`         | P1      |                  |
| MenuPopup / MenuPopUp | `MenuPopup`        | `PROP_MAP`        | P1      | Casing do export |

## Progress Indicators

| inter-ui       | Toranja export   | Status     | Home IB | Notas                          |
| -------------- | ---------------- | ---------- | ------- | ------------------------------ |
| ProgressBar    | `ProgressBar`    | `PROP_MAP` | —       | Path pode ser nested no export |
| ProgressCircle | `ProgressCircle` | `PROP_MAP` | —       |                                |
| Spinner        | `Spinner`        | `PROP_MAP` | —       |                                |

## Status

| inter-ui     | Toranja export | Status            | Home IB | Notas                              |
| ------------ | -------------- | ----------------- | ------- | ---------------------------------- |
| Alert        | `Alert`        | `DROP_IN`         | —       |                                    |
| Badge        | `Badge`        | `DROP_IN`         | P0      |                                    |
| Signal       | `Signal`       | `DROP_IN`         | —       |                                    |
| Snackbar     | `Snackbar`     | `DROP_IN`         | P0      |                                    |
| Tag          | `Tag`          | `DROP_IN`         | P0      |                                    |
| Timeline     | `Timeline`     | `PROP_MAP`        | —       |                                    |
| Requirements | —              | `MISSING_TORANJA` | —       | Validar se é componente ou pattern |

## Hooks e utilitários comuns

| inter-ui                               | Toranja                      | Status     | Notas                           |
| -------------------------------------- | ---------------------------- | ---------- | ------------------------------- |
| `useTheme` / `ThemeProvider` tamarindo | `toranja-theme` no `<html>`  | `PROP_MAP` | Remover provider legado         |
| `dsType` prop                          | `toranja-surface` no layout  | `PROP_MAP` | Anti-pattern — remover `dsType` |
| Breakpoints inter-ui                   | Tokens + breakpoints Toranja | `PROP_MAP` | Não portar constantes legadas   |

## Manutenção

- Atualizar este arquivo quando `build:skills` regenerar o inventário Toranja
- Quando um `MISSING_TORANJA` for implementado no pacote, mudar status para `DROP_IN` ou `PROP_MAP`
- Versão do catálogo = versão semver do `@interco/inter-toranja` que o consumidor instalou
