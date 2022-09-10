---
title: Select
---


## 1. Publicando schema

Primeiramente será necessário publicar as modificações feitas no schema

![Image](/images/yc-web/publishSchema.png)

Após isso, navegue no menu **Data Manager** > **entity** (no caso, **livros**) e selecione a operação que deseja realizar

## 2. Lendo dados

Para ler dados, selecione a operação **READ**. Caso não seja especificado nenhum filtro, todos os dados da tabela serão retornados.

![Image](/images/yc-web/read.png)

Você pode ver os dados por meio de uma tabela caso prefira, para isso é necessário clicar no botão de tabela no canto inferior direito da resposta do console

![Image](/images/yc-web/read2.png)
![Image](/images/yc-web/read3.png)

Para campos do tipo **STRING** ou **TEXT**, é possível utilizar o operador **LIKE** para realizar buscas por parte do texto, basta adicionar o símbolo **%** antes e/ou depois do texto que deseja buscar.

Caso deseje filtrar os resultados, especifique no objeto os campos que deseja filtrar e seus respectivos valores

![Image](/images/yc-web/read6.png)

Para ver como seria isso no código, você pode clicar no botão de download no canto inferior direito do editor do console, com isso abrirá um slide mostrando como seria em javascript aquela operação realizada

![Image](/images/yc-web/read4.png)
![Image](/images/yc-web/read5.png)