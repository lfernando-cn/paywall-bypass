# Paywall Bypass Service

Este projeto fornece um serviço para contornar paywalls de artigos online. O serviço utiliza a técnica de emular um bot de pesquisa (Googlebot) para acessar conteúdo bloqueado por paywalls e retornar o conteúdo de forma acessível.

## Funcionalidades

- **Acesso a Artigos**: A partir de uma URL fornecida, o serviço tenta acessar o conteúdo de um artigo bloqueado por paywall.
- **Modificação de HTML**: O HTML do artigo é alterado para permitir navegação interna no conteúdo.
- **Compatibilidade com Googlebot**: O serviço emula uma requisição do Googlebot para acessar conteúdo restrito.

## Passos para Rodar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/paywall-bypass-service.git
   cd paywall-bypass-service
   
   
2. **Instale as dependências:**

	```bash
   	npm install
   	
3. **Configuração do arquivo .env:**

   O arquivo .env está disponível no repositório. Ele contém as variáveis necessárias para o funcionamento do serviço. Certifique-se de preenchê-lo corretamente:



4. **Inicie o servidor com o ts-node:**

	```bash
	npm start index.ts
	
## Como Usar

Envie uma requisição GET para o endpoint /article com o parâmetro url contendo a URL do artigo que você deseja acessar.

Exemplo de requisição:

    GET http://localhost:5000/article?url=https://exemplo.com/artigo-pago
	
O conteúdo do artigo será retornado em formato HTML. Você pode navegar no conteúdo, que terá a funcionalidade de redirecionamento para links internos.
	
	
