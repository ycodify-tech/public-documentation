---
title: Relacionamento
---

## 1. Criando relacionamentos no seu schema

Para isso, criaremos uma nova entidade **clientes** e relacionaremos essa entidade com a entidade **livros**

![Image](/images/yc-web/relationship1.png)

Com a entidade criada, clicaremos na entidade **clientes**, e então na aba **Associations**. Nessa aba clique no botão **Add Associations**

![Image](/images/yc-web/relationship2.png)

Com isso veremos o formulário para a criação de um relacionamento

![Image](/images/yc-web/relationship3.png)

Então, criaremos uma associação com nome **livrosDoCliente** referenciando a entidade **livros** e podendo ser **nullable**, pois um cliente pode não ter um livro associado a ele.

![Image](/images/yc-web/relationship4.png)
![Image](/images/yc-web/relationship5.png)

Caso queira editar o nome ou remover o relacionamento, clique em **edit** no relacionamento que quiser editar. Caso queira cancelar a edição, clique em **close** dentro da parte de edição

![Image](/images/yc-web/relationship6.png)
![Image](/images/yc-web/relationship7.png)

