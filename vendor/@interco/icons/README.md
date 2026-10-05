# Inter Frontend SVGs

Esta lib tem a finalidade de disponibilizar os ícones do [Orange DS](https://www.figma.com/file/RYPyo16YccXBSelucyi2yM/DS-%2F-Foundation?node-id=477%3A2178) e do [Toranja](https://www.figma.com/file/vicdtDBBlmhxdiACEoGVTC/Toranja)...



## Instalação
 
```console
$ yarn add @interco/icons
```

## Desenvolvimento Local

Para desenvolver e testar localmente, você precisa configurar o token de acesso à API do Figma:

1. **Crie um arquivo `.env.local` na raiz do projeto:**
   ```bash
   cp .env.example .env.local
   ```

2. **Obtenha seu token do Figma:**
   - Acesse: https://www.figma.com/settings
   - Vá em "Personal access tokens"
   - Crie um novo token ou copie um existente
   - Cole no arquivo `.env.local`:
     ```
     FIGMA_TOKEN=seu_token_aqui
     ```

3. **Execute o build:**
   ```bash
   # Modo desenvolvimento (com transpilação Babel)
   yarn dev

   # Ou build completo
   yarn build
   ```

4. **Verifique os arquivos gerados** (entrypoints em `index.js`):
   ```bash
   ls -la dist/toranja/assets/
   ls -la dist/toranja/flags/
   ls -la dist/toranja/payment-methods/
   ls -la dist/orange/
   ```

**Orange DS (Figma Foundations):** os ícones em `dist/orange/{SM|MD|LD|LG|XL}/…` são gerados pela API do Figma a partir do ficheiro configurado em `FIGMA_FILES_ID.orangeDS` (`RYPyo16YccXBSelucyi2yM`). Esperam-se páginas nomeadas exatamente `SM`, `MD`, `LD`, `LG`, `XL`. Detalhes em [docs/figma-orange-foundations.md](docs/figma-orange-foundations.md).

> **Nota:** O arquivo `.env.local` está no `.gitignore` e não será commitado. Use `.env.example` como referência.


## Preview

Antes de `yarn start`, gere a pasta `dist/` com `yarn build` ou `yarn dev` (é necessário um `dist/` completo, com `index.js` em cada pasta de ícone). A aplicação de preview carrega os ícones a partir desse build. Os aliases do Vite apontam `@interco/icons/toranja` e `@interco/icons/orange` para `dist/`; um resolver em `config/vite-resolve-dist-icon-index.ts` mapeia cada import de pasta para o respetivo `index.js`, como o `exports` do pacote faz para quem instala via npm.

No GitLab Pages, o pipeline precisa rodar a geração dos ícones antes do `vite build` (por exemplo `yarn build:pages`).

Site Preview ícones: [DEMO ONLINE](https://icons.bancointer.com.br/)


<br/>

## Importação de Ícones legados na v7

Na v7 da biblioteca de ícones ainda é possível importar ícones do Orange DS. Para isso, basta importar o ícone da seguinte forma:

```tsx
// Orange DS
import Bed from '@interco/icons/orange/MD/bed'

// Toranja Icons
import Bed from '@interco/icons/toranja/assets/accommodation/bed'
```

**Formato (v7):** cada ícone é um módulo em `index.js` (JS transpilado, sem JSX em `dist/`). O `package.json` expõe `import` e `require` para o mesmo ficheiro; use o seu bundler ou runtime habitual (Vite, Webpack 5, Node com resolução de `exports`, etc.).

Alguns ícones do Orange DS permaneceram na versão atual. No entanto, os nomes mudaram. O time de UX/UI mapearam os ícones que mudaram de nome, e disponibilizaram uma planilha para vocês consultarem. Acesse clicando [aqui](https://intermediumsa.sharepoint.com/:x:/r/sites/DigitalExperience-Arquivos/_layouts/15/Doc.aspx?sourcedoc=%7B3AD07F3F-28C6-429E-B97A-502343C79536%7D&file=De%20Para%20de%20%C3%ADcones%20-%20Orange%20DS.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&ct=1732202581796&wdOrigin=OFFICECOM-WEB.START.EDGEWORTH&cid=fea844f0-67f5-42b6-84ca-cd9e721096d1&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=338e9795-51a2-464d-b0b0-6cb65db6f560)


## Utilização

Esta é alimentada por uma integração pela API do Figma, em que os ícones são extraídos e disponibilizados via componente de React e via arquivo SVG.



### Orange DS

Os ícones do Orange DS são extraídos do Figma (Foundations) e ficam em `dist/orange` após o build. A preview (`yarn build:pages` / `dev:prepare`) copia o `dist/` inteiro para a pasta static da sample-app, tal como para o Toranja.

Tomaremos como exemplo o ícone `navigation/list`

![](./docs/orange_ds-list.png)

```tsx
import List from '@interco/icons/orange/SM/list'

export const MyPage = () => (
  <S.Container>
    {/* ... */}
    <List height={40} width={40} color="var(--orange500)" />
    {/* ... */}
  </S.Container>
)
```

### Toranja

Os ícones do Toranja são extraídos e disponibilizados dentro do diretório `toranja`, organizados em subpastas:
- `toranja/assets/` - Ícones principais
- `toranja/flags/` - Bandeiras de países
- `toranja/payment-methods/` - Métodos de pagamento

```tsx
// Ícone principal
import Bed from '@interco/icons/toranja/assets/accommodation/bed'

// Bandeira
import BrazilFlag from '@interco/icons/toranja/flags/brazil'

// Método de pagamento
import Pix from '@interco/icons/toranja/payment-methods/pix'
```

### Reestilizando um ícone

É possível reestilizar um ícone via CSS.

#### Via Styled Components
```tsx
import styled from 'styled-components'
import ArrowRightIcon from '@interco/icons/orange/LD/arrow-right'
import * as S from './styles'

const ArrowRight = styled(ArrowRightIcon).attrs({
  width: 24,
  height: 24,
})`
  path {
    stroke: var(--gray400);
    stroke-width: 2.5;
  }
`

export const MyPage = () => (
  <S.Container>
    {/* ... */}
    <ArrowRight />
    {/* ... */}
  </S.Container>
)
```

#### Via CSS

```css
/* ... */
.arrow-right-icon path {
  stroke: var(--gray400);
  stroke-width: 2.5;
}
/* ... */
```

```tsx
import styled from 'styled-components'
import ArrowRight from '@interco/icons/orange/LD/arrow-right'
import './styles.css'

export const MyPage = () => {
  return (
    <div className="container">
      {/* .... */}
      <ArrowRight className="arrow-right-icon" />
      {/* .... */}
    </div>
  )
}
```
