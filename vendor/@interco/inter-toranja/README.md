# 🍊 Toranja Design System

<div align="center">

  <img src="https://cdn.zeroheight.com/styleguide_logos/116778-default/777d316ffda64da519be40da_Logo.svg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVyb2hlaWdodC5jb20vc3R5bGVndWlkZV9sb2dvcy8xMTY3NzgtZGVmYXVsdC83NzdkMzE2ZmZkYTY0ZGE1MTliZTQwZGFfTG9nby5zdmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MzkyODA5NzB9fX1dfQ__&Signature=rfxRutNPbeH7o0o4jXvdXiDHrANIkW2892bWIFcttQpXrrztoOgi5hAyXEe7IGWOYEHRpcSpAXJB9FVNCzC5-hy2AUemj0HTmWfgOuh9QlgYA90lcp~hucsGs7H5sxHS4xpEBSs1RJJgmW8ONO9qJEi6TMI5osDxT72UOFmO-ak~eQUakDkyBfBLNeTTSBW7VgEY~PcA8jG5ZoNpEGlET3FTK4wtKF2V~pWuBBNqpDLfWb49aJdETyN~t53fNzEV~NUaYhZY8XwBGpKojV1SxbzxyZq82TNyW66r85BbEAIdE5Um-x8hPKlJ18iI6PZoYmdhEVZ~QUHu1slArqLzAw__&Key-Pair-Id=KDUNFXWNWK45P" alt="Logo" width="350"  />

</div>

O Toranja Design System é um conjunto de componentes ReactJS, estilos e diretrizes de design para a criação de interfaces de usuário consistentes e de alta qualidade. Este projeto utiliza tecnologias como React, TypeScript, Storybook, Vite, ESLint, Prettier, Jest, etc.

### 🔧 Processamento CSS

O projeto utiliza **Autoprefixer** para adicionar automaticamente prefixos de vendor (`-webkit-`, `-moz-`, `-ms-`) aos arquivos CSS durante o build. Isso garante compatibilidade automática com browsers antigos, especialmente iOS Safari. Os prefixos são adicionados baseados em dados atualizados do [Can I Use](https://caniuse.com/) e na configuração de browsers definida no arquivo `.browserslistrc`.

**Browsers suportados:**

- iOS Safari 12+
- Safari desktop 12+
- Últimas 2 versões de browsers modernos
- Browsers com > 0.5% de uso global

Você não precisa se preocupar em adicionar prefixos manualmente - o Autoprefixer cuida disso automaticamente durante o build.

### 📐 Suporte a Aspect Ratio

Os componentes de imagem utilizam a propriedade CSS nativa `aspect-ratio` para manter proporções consistentes. Para navegadores que não suportam essa funcionalidade (como iOS Safari < 15), implementamos um fallback utilizando a técnica de **padding-top trick**.

#### Como funciona

O fallback calcula o padding necessário usando a fórmula:

```
padding-top = (1 / aspect-ratio) × 100
```

**Exemplos de proporções suportadas:**

| Proporção        | Aspect Ratio | Padding-Top |
| ---------------- | ------------ | ----------- |
| 1:1 (Quadrado)   | 1            | 100%        |
| 3:4 (Portrait)   | 0.75         | 133.33%     |
| 2:3 (Portrait)   | 0.67         | 149.25%     |
| 9:16 (Portrait)  | 0.56         | 178.57%     |
| 2:1 (Landscape)  | 2            | 50%         |
| 16:9 (Landscape) | 1.78         | 56.18%      |

O `padding-top` é proporcional à largura do elemento, garantindo que a altura gerada mantenha a proporção desejada mesmo em navegadores antigos que não reconhecem `aspect-ratio`.

#### Exemplo de uso

```jsx
// Componente mantém proporção 3:4
<Image src="photo.jpg" className="image--ratio-portrait-3-4" alt="Descrição" />
```

Não é necessário calcular esses valores manualmente — eles já estão definidos e otimizados nos componentes!

## 🚀 Começando

Para utilizar a biblioteca em seu projeto, instale-a através do [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable):

```bash
yarn add @interco/inter-toranja
```

Em seguida, importe o arquivo CSS principal em seu projeto. Ele já inclui as fontes necessárias.

```html
<link
  rel="stylesheet"
  href="https://cdn.bancointer.com.br/inter-frontend-toranja/latest/toranja.css"
/>

<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Sora:wght@400..600&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
  rel="stylesheet"
/>
```

> **Nota sobre fontes**: A partir da versão atual, a biblioteca inclui fontes Citrina locais que são automaticamente carregadas quando você importa os estilos. As fontes CDN continuam necessárias para Inter e Roboto Mono. A fonte Citrina local oferece melhor performance e reduz dependências externas.

```jsx
import { Button } from '@interco/inter-toranja'

function MyApp() {
  return <Button>Clique aqui</Button>
}
```

> **Nota:** Lembre-se que este é um pacote privado. Seu projeto deve conter um arquivo `.npmrc` ou `.yarnrc` configurado para o registro privado da empresa.

### 🎨 Aplicando Temas

Para aplicar um tema do Toranja, adicione o atributo `toranja-theme` na tag `<html>` do seu projeto.

As opções de temas disponíveis são:

- `pf-dark`: Pessoa Física Dark
- `pf-light`: Pessoa Física Light
- `pj-dark`: Pessoa Jurídica Dark
- `pj-light`: Pessoa Jurídica Light

Ao adicionar o atributo `toranja-theme` na tag HTML, todos os componentes do Toranja Design System em sua aplicação adotam o estilo do tema escolhido.

```html
<html toranja-theme="pf-light">
  <!-- Seu código aqui do index.html -->
</html>
```

### Fundo da página (default do tema)

Com `toranja.css` carregado, `toranja-theme` no `<html>` aplica automaticamente:

- `background-color: var(--color-background-neutral-default)`
- `color: var(--color-text-neutral-primary)`

**Escape hatch (webview transparente):**

```html
<html toranja-theme="pf-dark" class="toranja-transparent"></html>
```

ou

```html
<html toranja-theme="pf-dark" toranja-transparent></html>
```

> **Breaking:** hosts que dependiam de `html` transparente com `toranja-theme` setado passam a ter fundo do tema, salvo uso do escape hatch.

### Superfície / canal (`toranja-surface`)

`toranja-theme` controla **segmento + modo**. O canal de produto (webview vs desktop / IB) é ortogonal e usa `toranja-surface`.

| Valor     | Significado                               | Default                                |
| --------- | ----------------------------------------- | -------------------------------------- |
| `webview` | Canal app / webview (comportamento atual) | **Sim** — atributo ausente = `webview` |
| `desktop` | Canal Internet Banking / browser desktop  | Opt-in do host                         |

**Viewport não é canal:** largura de tela (breakpoints) controla layout e tipografia; `toranja-surface` controla comportamento de canal.

Exemplo Internet Banking (PJ):

```html
<html toranja-theme="pj-light" toranja-surface="desktop">
  <!-- Shell do IB -->
</html>
```

Webviews não precisam setar o atributo (ou podem setar `toranja-surface="webview"` explicitamente).

Contrato completo, política de release (tipos A/B/C) e anti-padrões: [ADR — toranja-surface](./docs/desktop/adr-toranja-desktop-surface.md).

## 📚 Documentação

Para explorar os componentes em detalhes, acesse nossa documentação e Storybook.

- **Documentação (Zeroheight):** [ZeroHeight](https://zeroheight.com/0ddbeb219/p/909b6b-toranja-design-system)
- **Storybook (Componentes):** [Storybook](https://toranja.inter.co/?path=/docs/documentation-getting-started--docs)
- **Atualizar pacote e skills:** [Atualizar o Toranja e as skills](https://toranja.inter.co/?path=/docs/documentation-updating-toranja--docs)

## 🤖 Integração com Cursor AI

Você pode gerar um arquivo de skills para que o Cursor AI conheça todos os componentes e tokens do Toranja.

- **Geração automática (opt-in)**: `TORANJA_GENERATE_SKILLS=true yarn add @interco/inter-toranja`
- **Geração manual**: `npx toranja-copy-skills`

O comando cria `.cursor/skills/toranja/toranja-skill.md` no projeto consumidor com:

- Lista de componentes exportados
- Tipos e props disponíveis
- Tokens CSS globais
- Tokens por tema (PF/PJ Light/Dark)

Passo a passo para atualizar o pacote e as skills em projetos consumidores: [Atualizar o Toranja e as skills](https://toranja.inter.co/?path=/docs/documentation-updating-toranja--docs).

## 🤝 Como Contribuir

Este é um projeto de código aberto interno. Encorajamos a contribuição de todas as equipes. Para saber como, consulte nosso [Guia de Contribuição](https://toranja.inter.co/?path=/docs/documentation-contributing--docs).
