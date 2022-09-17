---
title: Insert
---


## 1. Publishing the schema

First you will need to publish the modifications made to the schema

![Image](/images/yc-web/publishSchema.png)

## 2. Inserting data

Go to **Data Manager** > **entity** (in this case, **livros**) and select the operation **Create**, and select the fields you want to insert direct through the sidebar

![Image](/images/yc-web/insert1.png)

Then, with all the fields selected, fill the fields with the values you want and click on the play button. In the case of our entity, we filled the fields with following format:
```
"livros": {
  "genero": "Romance",
  "nome": "Memórias Póstumas de Brás Cubas",
  "autor": "Machado de Assis"
}
```

When perfoming the operation, the response will be at the right side of console
Ao executar a operação, a resposta estará no lado direito do console

![Image](/images/yc-web/insert2.png)

The return of the operation, in sucess case, it will be the created object, along with your primary key **id**