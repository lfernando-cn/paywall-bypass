# Paywall Bypass Service

Este projeto fornece um serviço para contornar paywalls de artigos online. O serviço utiliza a técnica de emular um bot de pesquisa (Googlebot) para acessar conteúdo bloqueado por paywalls e retornar o conteúdo de forma acessível.

## Funcionalidades

- **Acesso a Artigos**: A partir de uma URL fornecida, o serviço tenta acessar o conteúdo de um artigo bloqueado por paywall.
- **Modificação de HTML**: O HTML do artigo é alterado para permitir navegação interna no conteúdo.
- **Compatibilidade com Googlebot**: O serviço emula uma requisição do Googlebot para acessar conteúdo restrito.


### Passos para rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/paywall-bypass-service.git
   cd paywall-bypass-service
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn install
O arquivo .env está disponível no repositório. Ele contém as variáveis necessárias para o funcionamento do serviço. Certifique-se de preenchê-lo corretamente:

bash
Copiar
Editar
BASE_URL=http://localhost:5000
USER_AGENT="Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.6533.119 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
Inicie o servidor com o ts-node:

bash
Copiar
Editar
npm start index.ts
O servidor estará rodando em http://localhost:5000.

Como Usar
Envie uma requisição GET para o endpoint /article com o parâmetro url contendo a URL do artigo que você deseja acessar.

Exemplo de requisição:

bash
Copiar
Editar
GET http://localhost:5000/article?url=https://exemplo.com/artigo-pago

O conteúdo do artigo será retornado em formato HTML. Você pode navegar no conteúdo, que terá a funcionalidade de redirecionamento para links internos.

