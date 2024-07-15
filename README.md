# Shop Back-End

O Shop consiste em uma aplicação para anúncios de produtos, com um sistema de CRUD (Create, Read, Update e Delete) completo. Também foi implementado um sistema de login, com JWT (Json Web Token), para gerar um token ao logar na aplicação e validá-lo nas demais requisições do sistema. Ao entrarmos, podemos visualizar a lista de produtos criados por você e por demais usuários. Podemos adicionar novos produtos, editar os produtos criados por você e deletar seus produtos.

## 🚀 Começando

Para testar a aplicação, você pode acessar este [LINK PARA O PROJETO](https://shop-front-end-red.vercel.app/), criar um novo usuário e testar toda a aplicação.

## 📋 Pré-requisitos

Dependências do projeto back-end:<br />

  — express;<br />
  — nodemon;<br />
  — joi;<br />
  — jsonwebtoken;<br />
  — sequelize;<br />
  — sequelize-cli;<br />
  — cors;<br />
  — dotenv;<br />
  — mysql2;<br />
  

  ### Observações

  Para o desenvolvimento e aprimoramento deste projeto, utilizei algumas bibliotecas externas como:

  — joi;<br />
  — jsonwebtoken;<br />

  joi: Utilizada para validar campos enviados no corpo da requisição, gerando erros mais específicos;
  lucide-react: Uma biblioteca utilizadar para autenticação de usuário. Geramos um token ao logar na aplicação, este token, podemos passa-lo no header da requisição, para passar por uma validação (se é um token válido), retornando para nós a informações do usuário logado;

  ### Link para o repositório [FRONT-END](https://github.com/DanielCavalcantih/shop-front-end)

  ⌨️ Feito por [Daniel Cavalcanti](https://github.com/DanielCavalcantih) 😊
  
  
