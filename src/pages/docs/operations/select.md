---
title: Select
---


## 1. Publishing the schema

First you will need to publish the modifications made to the schema

![Image](/images/yc-web/publishSchema.png)

## 2. Reading the data

Go to **Data Manager** > **entity** (in this case, **livros**) and select the operation **Read**. If no filter is specified, all the table data will be returned

![Image](/images/yc-web/read.png)

And you can see the data in the table format. To do this, click on table button in lower right corner of the console response
Você pode ver os dados em formato de tabela. Para isso, clique no botão de tabela no  da resposta do console

![Image](/images/yc-web/read2.png)
![Image](/images/yc-web/read3.png)

### 2.1 Filtering results

To filter the results, you need to specify in the object the fields you want to filter and their values

![Image](/images/yc-web/read6.png)

>For fields of **STRING** or **TEXT** type, it is possible to use the **LIKE** operator to search for part of the text, you just need to add the **%** symbol before and after the text you want to search

if you want to see how it can be done in javascript, click on the download button at lower right corner of the console. It will open a slide showing you the code of the whole operation

![Image](/images/yc-web/read4.png)
![Image](/images/yc-web/read5.png)