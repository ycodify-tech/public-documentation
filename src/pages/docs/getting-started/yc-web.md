---
title: Ycodify Web - Getting started
---

Um guia introdutório ao Ycodify Web

---

## 1. Criar uma conta

Navegue até a [página de cadastro](https://api.ycodify.com/app/index.html?do=r) e crie sua conta.

## 2. Criar um projeto

![Image](/images/yc-web/1.png)

## 3. Criar tabelas no seu schema

![Image](/images/yc-web/2.png)

Adicione os atributos que quiser e proceda com **Create entity**

![Image](/images/yc-web/3.png)

## 4. Realizando operações no seu schema

Primeiramente será necessário publicar as modificações feitas no schema

![Image](/images/yc-web/4.png)

Após isso, navegue no menu **Data Manager** > **entity** (no caso, **livro**) e selecione a operação que deseja realizar

### 4.1 Inserindo dados

![Image](/images/yc-web/5.png)

Com a operação selecionada, adicione os campos necessários para inserir dados naquela tabela e aperta o botão **play**

Lembre-se de inserir todos os campos que não são **nullable**

![Image](/images/yc-web/6.png)

### 4.2 Lendo dados

Para ler dados, selecione a operação **READ**. Caso não seja especificado nenhum filtro, todos os dados da tabela serão retornados.

**imagem de exemplo selecionando todos os dados**

Para campos do tipo **STRING** ou **TEXT**, é possível utilizar o operador **LIKE** para realizar buscas por parte do texto, basta adicionar o símbolo **%** antes e/ou depois do texto que deseja buscar.

Caso deseje filtrar os resultados, especifique no objeto os campos que deseja filtrar e seus respectivos valores

**imagem de exemplo filtrando os dados**

### 4.3 Atualizando dados

Para atualizar dados, selecione a operação **UPDATE**. Será necessário especificar o campo **id** do registro que deseja atualizar e o objeto inteiro, com os campos a serem atualizados e os que não serão atualizados.

**imagem de exemplo atualizando os dados**

### 4.4 Apagando dados

Para apagar dados, basta selecionar a operação **DELETE** e especificar os campos que deseja filtrar e seus respectivos valores

**imagem de exemplo apagando uma entrada**

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
