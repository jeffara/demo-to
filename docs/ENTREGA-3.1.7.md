# Entrega 3.1.7 — validação e limites

Toranja React 1.13.3 fornecido. Vendor inalterado: 9.822 arquivos comparados por SHA-256. 64 componentes e 751 propriedades próprias mapeados. Nenhuma certificação de todas as combinações de propriedades é inferida desses checks.

| Página | Perfil | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS |
|---|---|---:|---:|---:|---:|---:|---:|
| Catálogo completo | desktop | 100 | 63 | 96 | 100 | 0.61s | 0.000 |
| Catálogo completo | mobile | 96 | 63 | 96 | 100 | 2.25s | 0.000 |
| Home | desktop | 100 | 87 | 96 | 100 | 0.61s | 0.000 |
| Home | mobile | 96 | 87 | 96 | 100 | 2.40s | 0.000 |
| Layouts | desktop | 100 | 87 | 96 | 100 | 0.62s | 0.000 |
| Layouts | mobile | 95 | 87 | 96 | 100 | 2.55s | 0.007 |

Medianas de três execuções por página/perfil. Lighthouse 13.5.0, Chromium 153, fixtures locais com gzip; sem equivalência garantida com AEM Media Bus, CDN ou rede de produção. **A meta de 98 mobile permanece pendente.** Nenhum conteúdo foi ocultado para alterar os resultados. Os 64 componentes são montados no catálogo completo.

Checks locais aprovados: 64 renderizações; 24 de aceitação; 16 de integração; 125 de páginas e fluxos (119 páginas); 80 de novas instâncias, temas e conteúdo; 11 de fontes. Persistência real no Universal Editor e Safari físico não foram homologados.

Limitações do fornecedor observadas: contraste do botão primário; ARIA de Card e Tabs; dimensões SVG inválidas; comportamentos declarados de controles aninhados em ListItem que não são repassados pelo pacote. O catálogo inclui os estados disabled/skeleton e não recebe uma nota 100 de acessibilidade. Relatórios completos identificam cada auditoria.

Mudanças de aparência em relação à 3.1.6 são a restauração das variantes oficiais: laranja original, tipografia title válida, Stepper/ListItem/Select/Tabs originais. Hosts EDS acomodam as margens do Banner e permitem rolagem local onde o conteúdo oficial tem largura fixa.

O pacote de conteúdo tem versão interna 3.1.7 e substitui a baseline em /content/demo-to; faça backup. Instale sobre o anterior sem uninstall/delete, valide no Author e republique 119 páginas, incluindo nav/footer, e os assets novos. Não houve instalação ou deploy remoto.

Para a próxima etapa: medir no domínio publicado com o runner incluído; investigar a cadeia crítica de CSR/fontes com os traces reais; encaminhar as auditorias de acessibilidade ao time Toranja; avaliar renderização inicial no servidor com os próprios componentes React caso a meta 98 continue fora do alcance. Não trocar cores/semântica internamente sem incorporar uma versão oficial corrigida.
