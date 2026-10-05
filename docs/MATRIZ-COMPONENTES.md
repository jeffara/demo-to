> Histórico da versão 1.0. Para a versão 2.0, consulte ../README.md, DEPLOY-V2.md e REVISAO-V2.html.

# Matriz de componentes e propriedades

Gerada a partir dos contratos da versão 2.0. São 31 tipos de bloco Toranja, 17 tipos de item filho, 53 modelos totais e 220 campos (incluindo estrutura/página).

| Bloco | Campos do contêiner/bloco | Tipo filho e campos |
|---|---|---|
| accordion | `classes_behavior` | `accordion-item`: `question`, `answer` |
| alert-inline | `title`, `message`, `classes_variant`, `classes_dismissible` | — |
| app-download | `title`, `titleType`, `subtitle`, `appleStoreUrl`, `googlePlayUrl`, `qrCodeImage`, `qrCodeImageAlt` | — |
| banner | `icon`, `title`, `description`, `cta`, `ctaText`, `classes_variant`, `classes_dismissible` | — |
| breadcrumb | `separator`, `classes_show-home` | `breadcrumb-item`: `label`, `link` |
| cards | `classes_variant`, `classes_columns` | `cards-item`: `image`, `imageAlt`, `content` |
| carousel | `interval`, `classes_autoplay`, `classes_show-indicators`, `classes_show-arrows` | `carousel-item`: `image`, `imageAlt`, `content` |
| comparison-table | `title`, `titleType`, `subtitle`, `highlightColumn` | `comparison-table-item`: `feature`, `value1`, `value2`, `value3` |
| contact-channels | `title`, `titleType`, `subtitle` | `contact-channels-item`: `channel`, `info`, `hours` |
| cta-banner | `headline`, `headlineType`, `description`, `primaryCta`, `primaryCtaText`, `secondaryCta`, `secondaryCtaText`, `classes_theme` | — |
| flywheel | `eyebrow`, `title`, `titleType`, `description`, `cta`, `ctaText` | `flywheel-item`: `number`, `title`, `description` |
| footer | `copyright`, `description`, `seals`, `classes_show-regulatory-seals` | `footer-item`: `title`, `links` |
| form | `title`, `titleType`, `subtitle`, `submitLabel`, `successMessage`, `endpoint`, `consent` | `form-item`: `fieldName`, `label`, `kind`, `placeholder`, `required`, `options` |
| header | `logo`, `logoAlt`, `loginUrl`, `cta`, `ctaText`, `brandTag`, `countries`, `classes_variant`, `classes_show-country-selector` | `header-item`: `label`, `link`, `children` |
| hero | `eyebrow`, `headline`, `headlineType`, `description`, `primaryCta`, `primaryCtaText`, `secondaryCta`, `secondaryCtaText`, `checklist`, `image`, `imageAlt`, `classes_portal-variant`, `classes_theme` | — |
| in-page-nav | `title`, `classes_sticky`, `classes_scroll-spy` | `in-page-nav-item`: `label`, `link` |
| manifesto | `quote`, `attribution`, `classes_align` | — |
| modal | `modalId`, `title`, `titleType`, `content`, `trigger` | — |
| moments-journey | `moment`, `headline`, `headlineType`, `description`, `cta`, `ctaText`, `disclaimer`, `image`, `imageAlt`, `classes_portal-variant` | — |
| pagination | `currentPage`, `totalPages`, `baseUrl`, `classes_variant` | — |
| quick-moment-rail | `label`, `classes_behavior` | `quick-moment-rail-item`: `label`, `link` |
| search-bar | `placeholder`, `indexEndpoint`, `label`, `classes_instant-search` | — |
| segment-showcase | `title`, `titleType`, `subtitle`, `defaultSegment` | `segment-showcase-item`: `segmentId`, `label`, `criteria`, `tier`, `perks`, `cta`, `ctaText` |
| simulator | `title`, `titleType`, `subtitle`, `defaultValue`, `minValue`, `maxValue`, `cdiRate`, `cta`, `ctaText` | — |
| stats-counter | `classes_variant`, `classes_animated` | `stats-counter-item`: `value`, `label` |
| tabs | `defaultTab` | `tabs-item`: `label`, `content` |
| teaser | `eyebrow`, `title`, `titleType`, `description`, `cta`, `ctaText`, `image`, `imageAlt`, `classes_variant` | — |
| testimonials | `title`, `titleType`, `subtitle` | `testimonials-item`: `quote`, `author`, `role`, `rating` |
| timeline | `classes_variant` | `timeline-item`: `title`, `description` |
| tooltip | `term`, `definition`, `classes_position` | — |
| video-player | `videoUrl`, `posterImage`, `posterImageAlt`, `title`, `caption`, `classes_portal-variant` | — |

Os campos de configuração também são editados pelo painel de propriedades. Nem todos têm um elemento visual independente: limites numéricos, identificadores, URLs de serviço e opções controlam o comportamento do bloco.

A matriz cobre o conteúdo do ZIP recebido. Não é uma declaração de equivalência com uma biblioteca externa completa ou uma lista de 64 componentes React que não esteja neste pacote.
