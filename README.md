# Shop Back-End

O Shop consiste em uma aplicação para anúncios de produtos, com um sistema de CRUD (Create, Read, Update e Delete) completo. Também foi implementado um sistema de login, com JWT (Json Web Token), para gerar um token ao logar na aplicação e validá-lo nas demais requisições do sistema. Ao entrarmos, podemos visualizar a lista de produtos criados por você e por demais usuários. Podemos adicionar novos produtos, editar os produtos criados por você e deletar seus produtos.

## 🚀 Começando

### Deployada

Para testar a aplicação, você pode acessar este [LINK PARA O PROJETO](https://shop-front-end-red.vercel.app/), criar um novo usuário e testar toda a aplicação.

### Localmnente

Para testar sua aplicação localmente, siga o passo a passo:

  1 - Copie a chave SSH deste repositório: `git@github.com:DanielCavalcantih/shop-back-end.git`;<br />
  2 - Crie uma pasta nova em seu computador, você escolhe o nome (Caso já tenha criado seguindo as instruções do front-end, pode fazer o clone na mesma pasta);<br />
  3 - Abra o terminal dentro desta pasta (clicando com o botão direito do mouse dentro da pasta e "Abrir com o terminal");<br />
  4 - Crie um clone deste reposítorio dentro desta pasta criada utilizando o comando `git clone git@github.com:DanielCavalcantih/shop-back-end.git`, (No caso de máquina windows, é necessário instalar o Git);<br />
  5 - Após clonar o repositório, entre na pastra criada com o nome "shop-back-end", clique com o botão direito e "Abrir com o terminal";<br />
  6 - Com VSCode instalado (Visual Studio Code), rode o comando `code .`, para abrir o editor de código;<br />
  7 - No terminal do próprio VSCode, rode o comando `npm install`, para instalar todas as dependências do projeto;<br />
  8 - Verifique se a porta 3001 não está sendo utilizado na sua máquina com o comando `lsof -i :3001`, se sim, anote o PID (PID é o identificador do serviço rodando na porta 3001) e rode `kill PID`;<br />
  9 - Com a porta 3001 liberada, rode o comando `npm start` para iniciar o servidor;<br />
  10 - Se já passou pela etapa do front-end, pode utilizar a aplicação, se não, vá para o [repositório front-end](https://github.com/DanielCavalcantih/shop-front-end) e siga as instruções para utilizar a aplicação;

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

  joi: Utilizada para validar campos enviados no corpo da requisição, gerando erros mais específicos;<br />
  lucide-react: Uma biblioteca utilizadar para autenticação de usuário. Geramos um token ao logar na aplicação, este token, podemos passa-lo no header da requisição, para passar por uma validação (se é um token válido), retornando para nós a informações do usuário logado;

  ### Link para o repositório [FRONT-END](https://github.com/DanielCavalcantih/shop-front-end)

  ⌨️ Feito por [Daniel Cavalcanti](https://github.com/DanielCavalcantih) 😊
  
  
