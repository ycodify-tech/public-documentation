---
title: Actions
---

## Publishing the schema

First you will need to publish the modifications made to the schema

[Click here](/docs/project-schema/publish-schema) to see more information about it

## 1. Select

Go to **Data Api** > **entity** (in this case, **livros**) and select the operation **Read**. If no filter is specified, all the table data will be returned

![Image](/images/yc-web/read.png)

You can also see the data in the table format. To do this, click on table button in lower right corner of the console response

![Image](/images/yc-web/read2.png)
![Image](/images/yc-web/read3.png)

### 1.1 Filtering results

To filter the results, you need to specify in the object the fields you want to filter and their values

![Image](/images/yc-web/read6.png)

> For fields of **STRING** or **TEXT** type, it is possible to use the **LIKE** operator to search for part of the text, you just need to add the **%** symbol before and after the text you want to search

### 1.2 Request code in JavaScript

If you want to see how it can be done in javascript, click on the download button at lower right corner of the console. It will open a slide showing you the code of the whole operation

![Image](/images/yc-web/read4.png)
![Image](/images/yc-web/read5.png)

## 2. Insert

Go to **Data Api** > **entity** (in this case, **livros**) and select the operation **Create**, and select the fields you want to insert direct through the sidebar

{% callout type="warning" title="Be aware!" %}
Make sure to select all the fields that are required for that entity
{% /callout %}

![Image](/images/yc-web/insert1.png)

Then, with all the fields selected, fill the fields with the values you want and click on the play button. In the case of our entity, we filled the fields with following format:

```
"livros": {
  "title": "Memórias Póstumas de Brás Cubas",
  "author": "Machado de Assis",
  "genre": "Romance"
}
```

When perfoming the operation, the response will be at the right side of console

![Image](/images/yc-web/insert2.png)

The return of the operation, in sucess case, it will be the created object, along with your primary key **id**

## 3. Update

Go to **Data Api** > **entity** (in this case, **livros**) and select the operation **Update**. you will need to specify the field **id** of the register you want to update and the whole object,with the fields to be updated and the ones that won't be updated

![Image](/images/yc-web/update1.png)

The register with the specified **id** will be replaced by the new register

## 4. Delete

Go to **Data Api** > **entity** (in this case, **livros**) and select the operation **Delete**. you will need to specify the fields you want to filter and their values

![Image](/images/yc-web/delete1.png)
