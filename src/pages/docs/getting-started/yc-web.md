---
title: Ycodify Web - Getting started
---

Um guia introdutório ao Ycodify Web

---

## 1. Criar uma conta

Navegue até a [página de cadastro](https://ycodify-console.vercel.app/) e crie sua conta clicando na sessão de **sign up**.

![Image](/images/yc-web/login.png)

Ao clicar em **sign up**, você vai ver um novo formulário de criação de usuário

![Image](/images/yc-web/createAccount.png)

Ao preencher o formulário, clique em **create user** e você criara seu usuário e entrará no sistema

## 2. Criar um projeto

Após fazer o login, você vai estar na dashboard de projetos, para criar um novo projeto, clique em **New Project**

![Image](/images/yc-web/dashboard.png)

Com isso vai abrir um slide para configurar o seu novo projeto, para um projeto do zero você deve adicionar um nome e selecionar um plano

![Image](/images/yc-web/dashboardCreateProject.png)

Caso já tenha um projeto pronto no formato **.txt**, você pode importar o projeto e com isso irá abrir um editor para configurar o seu projeto, nesse editor você deve adicionar **c:** no nome do schema para que ele seja criado

![Image](/images/yc-web/dashboardCreateProject3.png)

Após ter configurado o projeto e selecionado o plano, você deve clicar em **Create project**

![Image](/images/yc-web/dashboardCreateProject2.png)

## 3. Criar tabelas no seu schema

Ao concluir a criação você vai estar na aba de **Schema Manager**, na sessão **Entities**, para criar uma entidade, clique no botão **Create entity**

![Image](/images/yc-web/createEntity1.png)

Após isso você vai se deparar com o formulário de criação de entidade

![Image](/images/yc-web/createEntity2.png)

Adicione os atributos que quiser e quanto preencher o formulário completamente, termine a criação clicando em **Create entity**

![Image](/images/yc-web/createEntity3.png)

## 5. Criando relacionamentos no seu schema

Para isso, criaremos uma nova tabela **cliente** e relacionaremos o campo **clientid** com a tabela **livro**

**imagem de exemplo criando a tabela cliente com clientid e nome**

Também criaremos o campo clientid na tabela **livro**. Para isso, navegaremos no menu **Schema Manager** > **livro** e clicaremos em **Add attribute**

**imagem de exemplo criando o campo clientid na tabela livro**

Por fim, navegaremos no menu **Schema Manager** > **livro** e clicaremos na aba **Associations**, então, criaremos uma associação com nome clientid referenciando a entidade cliente e podendo ser nullable, pois um livro pode não estar associado a um cliente.

**imagem de exemplo criando a associação**

## 6. Retorno das operações

Você poderá visualizar o retorno da operação em formato Json ou tabela, e copiar o código referente àquela operação ao clicar em **Code exporter**

![Image](/images/yc-web/7.png)

## 7. Exclusão de schema

Para excluir um schema, basta voltar ao dashboard e clicar na engrenagem ao lado do nome do schema que deseja excluir, clicar em **Delete schema** e confirmar a exclusão.

_**Lembre-se que essa ação não pode ser desfeita**_

**imagem de exemplo excluindo o schema**
