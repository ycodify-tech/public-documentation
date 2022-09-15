---
title: Insert
---


## 1. Publicando schema

Primeiramente será necessário publicar as modificações feitas no schema

![Image](/images/yc-web/publishSchema.png)

## 2. Inserindo dados

Navegue no menu **Data Manager** > **entity** (no caso, **livros**). Selecione a operação **Create**, e no sidebar selecione os campos para ser inseridos (é necessário todos os que não são **nullable**)

![Image](/images/yc-web/insert1.png)

Após isso, com os campos marcados, preencha os dados clique no botão de play. No caso da nossa entidade, preencheremos no seguinte formato
```
"livros": {
  "genero": "Romance",
  "nome": "Memórias Póstumas de Brás Cubas",
  "autor": "Machado de Assis"
}
```

Ao executar a operação, a resposta estará no lado direito do console

![Image](/images/yc-web/insert2.png)

O retorno da operação, em caso de sucesso, será o objeto recém criado, junto com a sua chave primária **id**