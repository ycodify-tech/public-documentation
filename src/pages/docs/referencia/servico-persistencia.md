---
title: Descriptins about persinstence service
---

---

## 1. To **create a new data register** for a modeled data schema

You can send a request to the persinstence service endpoint without JWT access control. That is, using only authorization hash.

Endpoint: _https://api.yco.../api/v0/persistence-p/s/no-ac_

```javascript
POST: [{
  "action":"CREATE",
  "aluno": {
    "nome":"capitão carverna",
    "idade": "1264"
  }
},*]
```

Notice that the '_classUID_' is gone. The object vector key itself specifies the type of entities (in the root node) that will go in this vector. There's no need of attribute '_\_role_'. besides it, you don't send an object, but a vector of objects.

## 2. To **make a query on database**

You can send an object as bellow

Endpoint: _https://api.yco.../api/v0/persistence-p/s/no-ac_

```javascript
POST: {
  "action":"READ",
  "livro":{
    "nome":"O Silêncio"
  }
}
```

The same observations for the construction of this JSON apply here too. It is important to remember that in case of the query doesn't find any data, the return will have the 200 status code and the register array will be empty.

## 3. About the authorization hash

It's the value that is in TenantAC, that come when you get the specification of the schema (by endpoint '_..../api/v0/modeler/.../parser/reverse_'), or the attribute of the same name that come of the schema list that a client has created, it is delivered by a GET to the endpoint '_..../api/v0/modeler/.../project-name_'

**IMPORTANT**

> If you are using the authorization hash, the request will have to use the endpoint '_https://api.ycodify.com/api/v0/interpreter-p/s/no-ac_' and have the header '_X-TenantAC_', besides '_X-TenantID_'. Otherwise, the endpoint will be exactly the same as the old version (_https://api.ycodify.com/api/v0/interpreter-p/s_), with the same headers.

> Besides, in the declaration of any **ACTIONs**, the '_body_' will have to keep declaring value to '_\_role_' (but without needing '_classUID_')

## 4. About the **declaration of associations between entities** made only using the **YCL language**

To **specify associations between entities** with the language, follow the example below

```javascript
entity turma {
  nome (
    String 32
    !nullable
  )
}
entity aluno {
  turma { // dec de atributo
    turma // dec do tipo
  }
}
```

In case of analysis between entity '_turma_' e '_aluno_'. Note that the declaration of an association is a particular type of attribute declaration. So, the semantics of the declaration for the two objects are preserved. What changes is that in the case of declaring association, you declare as an attribute type an entity in **your** model. In the second one, a primitive type is declared
