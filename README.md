# M-Economy

Um Progressive Web App (PWA) para comparar preços de produtos entre S.Romeu, M.Jessé e S. Zé do Feira, com suporte offline.

## Como Usar
1. Hospede os arquivos no GitHub Pages no repositório `M-Economy`.
2. Acesse o link `https://seu-usuario.github.io/M-Economy/`.
3. Adicione produtos, edite ou exclua-os usando os botões na tabela.
4. No Chrome no Android, clique nos três pontos e selecione "Instalar aplicativo".
5. Offline: Veja produtos salvos e a interface mesmo sem internet.

## Funcionalidades Offline
- Recursos (HTML, CSS, JS, ícones) são cacheados pelo service worker.
- Produtos adicionados são salvos no `localStorage` e exibidos offline.
- Indicador de status mostra se você está online ou offline.

## Interface
- O botão "Adicionar Produto" foi ajustado para ficar dentro do container, com campos de entrada menores para melhor enquadramento.

## Tecnologias
- HTML
- CSS
- JavaScript
- PWA (Manifest e Service Worker)
- `localStorage` para persistência de dados

## Requisitos
- Navegador moderno (Chrome recomendado)
- Ícones `icon.png` (192x192) e `icon-large.png` (512x512) na raiz
- Hospedagem em HTTPS (GitHub Pages já oferece)