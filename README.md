# Sammè Cosmetics

## Abrir no VS Code
1. Descompacte o ZIP. 2. No VS Code: Arquivo > Abrir Pasta > `samme-cosmetics`.

## Live Server
1. Instale a extensão "Live Server" (Ritwick Dey). 2. Clique com o botão direito em `index.html` > "Open with Live Server".
(Também funciona abrindo o `index.html` direto no navegador.)

## Git / GitHub
```
git init
git add .
git commit -m "Site Sammè"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/samme-cosmetics.git
git push -u origin main
```
Para publicar: GitHub > Settings > Pages > Branch: main.

## Adicionar produtos
Edite os arrays `HERO_SLIDES` e `PRODUCTS` no topo de `assets/js/script.js`.

## Número do WhatsApp
No topo de `assets/js/script.js`, preencha `WHATSAPP_NUMBER` com código do país + DDD + número, só dígitos (ex.: `"5511999999999"`).
Enquanto estiver vazio, o WhatsApp abre com a mensagem pronta para você escolher o contato.

## Funcionalidades
Carrinho lateral (salvo no navegador), pesquisa em tempo real (atalho `/`), tela de produto com transição, checkout só com nome e envio do pedido pelo WhatsApp.
Os campos `long`, `benefits` e `gallery` de cada item em `PRODUCTS` controlam a tela de produto.
