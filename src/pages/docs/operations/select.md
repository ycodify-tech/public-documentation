---
title: Select
---


## 1. Publicando schema

Primeiramente será necessário publicar as modificações feitas no schema

![Image](/images/yc-web/publishSchema.png)

## 2. Lendo dados

Navegue no menu **Data Manager** > **entity** (no caso, **livros**) e selecione a operação **Read**. Caso não seja especificado nenhum filtro, todos os dados da tabela serão retornados

![Image](/images/yc-web/read.png)

Você pode ver os dados em formato de tabela. Para isso, clique no botão de tabela no canto inferior direito da resposta do console

![Image](/images/yc-web/read2.png)
![Image](/images/yc-web/read3.png)

### 2.1 Filtrando resultados

Para filtrar os resultados, especifique no objeto os campos que deseja filtrar e seus respectivos valores

![Image](/images/yc-web/read6.png)

>Para campos do tipo **STRING** ou **TEXT**, é possível utilizar o operador **LIKE** para realizar buscas por parte do texto, basta adicionar o símbolo **%** antes e/ou depois do texto que deseja buscar.

Para ver como seria isso em código JavaScript, clique no botão de download no canto inferior direito do editor do console. Isso abrirá um slide mostrando o código da operação realizada

![Image](/images/yc-web/read4.png)
![Image](/images/yc-web/read5.png)