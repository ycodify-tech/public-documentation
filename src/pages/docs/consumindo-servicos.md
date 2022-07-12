---
title: Quickstart - Consumindo Serviços de Backend para um Schema de Dados
description: Com esse documeto você saberá como consumir os serviços de backend para um schema de dados, criado e mantido por meio do que está apresentado em 1. Quickstart - Criação de Conta e Criação de Schema de Dados.
---

A seguir estão exemplos de uso dos endpoints de serviço de backend da plataforma Ycodify para sua aplicação.

## 1. Criar, Obter and Atualizar uma Conta de sua Aplicação

Para começar com o serviço de persistência de aplicativos, antes será necessário criar e manter uma conta de usuário para seu backend.

### 1.1. Criar uma nova conta de usuário para sua aplicação

Para criar uma conta em seu aplicativo, veja abaixo como fazer.

##### Request [by curl]

```shell
$ curl -i -X POST \
  -H "X-TenantID: stark@mark" \
  -H "Content-Type: application/json" \
  --data '{ \
    "username":"tony", \
    "password":"12345", \
    "email":"tony@stark.com", \
    "status":1, \
    "roles":[{ "name":"ROLE_ADMIN" }]
  }' http://api.Ycodify.com/api/caccount-mngr/account
```

##### Retorno de Sucesso:

Esta operação, se **sucesso**, retornará HTTP Status 201, além do JSON a seguir:

```javascript
{
  "id":1,
  "username":"tony",
  "email":"tony@starck.com",
  "status":1,
  "createdAt":1622209176288,
  "updatedAt":null,
  "version":0,
  "roles":[ {"name":"ROLE_ADMIN"} ]
}
```

##### Retorno com Erro

Se **erro**, a mensagem retornada será semelhante a:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

Os tipos de erro _HTTP Status_: 400 (**Solicitação malformada**); 404 (Dados ** não encontrados**); 417 (**Falha na operação** - motivo imprevisto); 500 (Falha interna da lógica de serviço - **suporte de chamada**).

> **Ok, agora que você tem sua conta** vamos ver como criar e manter seus modelos de dados. Um para cada aplicativo que você possui!

&nbsp;

### 1.2. Para fazer o login

Depois de ter uma conta de serviço registrada, você precisará se autenticar para acessar seu espaço de trabalho e, em seguida, poderá criar e manter seus modelos. Veja como fazer isso:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -u "frontend:13579" \
  -d "username=stark@mark&password=12345&grant_type=password" \
  http://api.Ycodify.com/api/csecurity/oauth/token
```

#### _Retorno com Sucesso_

A operação, se **sucesso**, retornará HTTP Status 200 e a mensagem abaixo:

```javascript
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 7199,
  "scope": "read write",
  "id": 1,
  "email": "tony@stark.com",
  "username": "tony",
  "status": 1,
  "jti": "e27393a5-131a-499f-bd6e-96422deeb896"
}
```

#### _Retorno com Erro_

Se **erro**, o retorno será HTTP Status 400, com essa mensagem:

```javascript
{
  "erro":"invalid_grant",
  "erro_description":"Bad credentials"
}
```

&nbsp;

### 1.3. Recuperar os dados da conta

Agora que você tem um **token** (o `access_token` acima) que o identifica na plataforma, você pode usá-lo para solicitar serviços e informações da plataforma. _Claro_, informações que dizem respeito ao seu espaço de trabalho, suas aplicações. Por exemplo, você pode consultar os dados do perfil da sua conta com:

##### Request [by curl]

```shell
$ curl -i -X GET -H "X-TenantID: stark@mark" -H "Authorization: Bearer <access_token>" http://api.Ycodify.com/api/caccount-mngr/account/username/tony
```

##### Request [by curl]

```shell
$ curl -i -X GET -H "X-TenantID: stark@mark" -H "Authorization: Bearer <access_token>" http://api.Ycodify.com/api/caccount-mngr/account
```

> É **importante** <font color="red">somente o usuário administrador do aplicativo</font> tem permissão para fazer solicitações a este terminal.

#### _Retorno com Sucesso_

A operação, se **sucesso**, retornará HTTP Status 200 e a mensagem abaixo:

##### _caso você deseje todas as contas de sea aplicação_

```javascript
;[
  {
    id: 1,
    username: 'tony',
    email: 'tony@stark.com',
    status: 1,
    createdAt: 1622209176288,
    updatedAt: null,
    version: 0,
    roles: [{ name: 'ROLE_ADMIN' }],
  },
]
```

##### _caso você deseje dados de uma única conta_

```javascript
{
  "id":1,
  "username":"tony",
  "email":"tony@stark.com",
  "status":1,
  "createdAt":1622209176288,
  "updatedAt":null,
  "version":0,
  "roles":[ {"name":"ROLE_ADMIN"} ]
}
```

#### _Retorno com Erro_

Se **erro**, a mensagem de retorno terá o HTTP Status 404, com o corpo conforme segue:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":404,
  "erro":"Not Found",
  "message":"account for that username not founded."
}
```

&nbsp;

### 1.4. Atualizar os dados da conta

Usando o `access_token` você poderá atuazliar sua conta:

##### _Request [by curl]_

```shell
$ curl -i -X PUT \
  -H "X-TenantID: stark@mark" \
  -H "Authorization: Bearer <access_token>" \
  -H "Content-Type: application/json" \
  --data '{ \
    "email":"tony@stark.com", \
    "status":1, \
    "name":"tony stark", \
    "roles":[{ "name":"ROLE_ADMIN" }] \
   }' http://api.Ycodify.com/api/client-account-mngr/account/tony/version/0
```

> É **importante** observar o atributo `version`. Seu valor deve ser recuperado daquele definido na subseção **1.2**.

> **Se você deseja <font color=red>desativar</font> a conta do seu cliente**, envie a mesma solicitação acima com o atributo `status` com valor **0**.

#### _Retorno com Sucesso_

A operação, se **sucesso**, retornará HTTP Status 200 e a mensagem abaixo:

```javascript
{
  "id":1,
  "username":"tony",
  "name":"tony stark",
  "email":"tony@stark.com",
  "status":1,
  "createdAt":1622209227190,
  "updatedAt":1622209243931,
  "version":1,
  "roles":[ {"name":"ROLE_ADMIN"} ]
}
```

#### _Retorno com Erro_

Se **erro**, a mensagem de erro deverá carregar o HTTP Status 404 ou 400 (**Bad Request**), com o seu corpo conforme:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":404,
  "erro":"Not Found",
  "message":"account for that username not founded."
}
```

&nbsp;

## 2. Criar, Obter, Atualizar and Remover dados relacionados ao seu _schema_ de dados

Aqui você encontrará informações sobre como consumir nossos serviços de back-end para seu aplicativo. A condição de uso é a criação da conta e o esquema de dados, abordados na seção anterior.

&nbsp;

### 2.1. Crie e persista um novo _Objeto_

Agora que você tem uma conta e um esquema de dados definidos, para criar novos dados e mantê-los no banco de dados do seu aplicativo, você deve usar o seguinte endpoint da seguinte forma:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "CREATE", \
    "objeto": { \
      "classUID": "armor", \
      "name": "Mark II", \
      "role": "ROLE_ADMIN" \
    } \
  }'  http://api.Ycodify.com/api/interpreters-grid/s
```

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
      "name": "Mark II" \
    }'  http://api.Ycodify.com/interpreters-grid/p/rest/armor
```

Sua aplicação, ao enviar uma solicitação de persistência para um dado recém criado, necessariamente precisará informar os cabeçalhos "X-TenantID". Também é necessário que o aplicativo informe o token de acesso ao seu aplicativo, dado após uma autenticação de usuário de seu aplicativo.

#### _Retorno de Sucesso_

A operação, se **sucesso**, retornará o status HTTP 201 e a mensagem abaixo:

```javascript
{
  "id": 1,
  "name": "Mark II",
  "user": "the_username_logged_into_the_application",
  "role": "the_role_for_username_logged_into_the_application",
  "createdat": 6543213568912,
  "updatedat": null,
  "version": null
}
```

> **Importante**: a classe de objeto definida como _armor_, possui mais atributos do que os criados. A plataforma Ycodify cria, para cada classe definida, outras seis definições de atributos. São eles: `id`, que informa um identificador único para este objeto em seu espaço de valores; `user`, que informa o nome de usuário que solicitou a operação de backend; `role`, que identifica a qual _role_ este usuário pertence; `createdat`, que indica a data em que esses dados foram persistidos pela primeira vez no banco de dados; `updatedat`, que informa a última operação de atualização desses dados na base; e, por fim, `version`, que pode ser usado para realizar o controle de concorrência caso a entidade que detém este atributo tenha sido configurada para realizar o controle de acesso concorrente (de acordo com o que foi configurado em `{ "_classDef": { "_concurrencyControl" : true } }`). Aqui, `version` é `null` porque `_concurrencyControl` para a classe `armor` é `false`.
>
> Todos esses seis atributos são controlados exclusivamente pela plataforma, o usuário não tem controle sobre seus valores.

#### _Retorno com Erro_

Se **erro**, o retorno deverá sempre ter esse formato:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

Os tipos de erro _HTTP Status_: 400 (**Solicitação malformada**); 406 (**Conflito** - objeto já existe); 417 (**Falha na operação** - motivo imprevisto); 500 (Falha interna da lógica de serviço - **suporte de chamada**).

&nbsp;

### 2.2. Obter _Objetos_ persistidos

Existem duas maneiras de solicitar a leitura de dados. A primeira descreve como recuperar um único objeto, com base em seu atributo `id`. A segunda maneira envolve a recuperação de uma lista de instância de dados com base no uso de filtros. As próximas duas subseções mostrarão isso.

#### 2.2.1. Obtenha um _Objeto_ persistente

Recuperar um único registro de dados:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "READ", \
    "objeto": { \
      "classUID": "armor", \
      "id": 1 \
    } \
  }'  http://api.Ycodify.com/interpreters-grid/p
```

```shell
$ curl -i -X GET \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  }'  http://api.Ycodify.com/interpreters-grid/p/rest/armor/id/4
```

Seu aplicativo, ao enviar uma solicitação de exclusão de um dado persistido, necessariamente precisará informar os cabeçalhos "X-TenantID" (uma associação entre seu nome de usuário e o nome do seu esquema de dados). Também é necessário que o aplicativo informe o token de acesso ao seu aplicativo (observe que não é o token de acesso ao seu workspace na plataforma Ycodify).

#### _Retorno de Sucesso_

A operação, se **sucesso**, retornará HTTP Status 200, sem mensagem!

```javascript
{
  "id": 1,
  "name": "Mark I",
  "user": "username_logged_into_the_application",
  "role": "role_for_username_logged_into_the_application",
  "createdat": 6543213568912,
  "updatedat": null,
  "version": null
}
```

#### _Retorno com Erro_

Se **erro**, o retorno sempre terá este formato:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

Os tipos de erro _HTTP Status_: 400 (**Solicitação malformada**); 404 (Dados **Não encontrado**); 417 (**Falha na operação** - motivo imprevisto); 500 (Falha interna da lógica de serviço - **suporte de chamada**).

#### 2.2.2. Obtenha uma lista de _Objetos_ persistentes

Aqui, recupere uma lista de objetos persistidos da seguinte forma:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "READ", \
    "objeto": { \
      "classUID": "armor", \
      "name": {
        "IN": ["Mark I","Mark II"]
      }
    } \
  }'  http://api.Ycodify.com/interpreters-grid/p
```

Seu aplicativo, ao enviar uma solicitação de recuperação de dados persistentes, necessariamente precisará informar os cabeçalhos "X-TenantID" (uma associação entre seu nome de usuário e o nome do seu esquema de dados). Também é necessário que o aplicativo informe o token de acesso ao seu aplicativo (observe que não é o token de acesso ao seu workspace na plataforma Ycodify).

#### _Retorno com Sucesso_

A operação, se **sucesso**, retornará HTTP Status 200, sem mensagem!

```javascript
;[
  {
    id: 1,
    name: 'Mark I',
    user: 'username_logged_into_the_application',
    role: 'role_for_username_logged_into_the_application',
    createdat: 6543213568912,
    updatedat: null,
    version: null,
  },
]
```

#### _Retorno com Erro_

Se **erro**, o retorno sempre terá este formato:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

Os tipos de erro _HTTP Status_: 400 (**Solicitação malformada**); 404 (Dados **Não encontrado**); 417 (**Falha na operação** - motivo imprevisto); 500 (Falha interna da lógica de serviço - **suporte de chamada**).

&nbsp;

### 2.3. Atualizar um _Objeto_

Agora que existem objetos persistidos em seu banco de dados, você pode atualizá-los da seguinte forma:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "UPDATE", \
    "objeto": { \
      "classUID": "armor", \
      "id": 1, \
      "name": "Mark I" \
    } \
  }'  http://api.Ycodify.com/interpreters-grid/p
```

```shell
$ curl -i -X PUT \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
        "name": "Mark I" \
    }'  http://api.Ycodify.com/interpreters-grid/p/rest/armor/id/4
```

Sua aplicação, ao enviar uma solicitação de persistência para atualização de dados, necessariamente precisará informar os cabeçalhos "X-TenantID" (uma associação entre seu nome de usuário e o nome do seu esquema de dados). Também é necessário que o aplicativo informe o token de acesso ao seu aplicativo (observe que não é o token de acesso ao seu workspace na plataforma Ycodify).

#### _Retorno com Sucesso_

A operação, se **sucesso**, retornará HTTP Status 200, sem mensagem!

```javascript
HTTP Message without body
```

#### _Retorno com Erro_

Se **erro**, o retorno sempre terá este formato:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

Os tipos de erro _HTTP Status_: 400 (**Solicitação malformada**); 404 (Dados **Não encontrado**); 406 (**Conflito** - objeto já existe); 417 (**Falha na operação** - motivo imprevisto); 500 (Falha interna da lógica de serviço - **suporte de chamada**).

&nbsp;

### 2.4. Remoção um _Objeto_ persistido

Você pode excluir um objeto persistente da seguinte maneira:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "delete", \
    "objeto": { \
      "classUID": "armor", \
      "id": 1 \
    } \
  }'  http://api.Ycodify.com/interpreters-grid/p
```

```shell
$ curl -i -X DELETE \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  }'  http://api.Ycodify.com/interpreters-grid/p/rest/armor/id/4
```

Seu aplicativo, ao enviar uma solicitação de exclusão de um dado persistente, necessariamente precisará informar os cabeçalhos "X-TenantID" (uma associação entre seu nome de usuário e o nome do seu esquema de dados). Também é necessário que o aplicativo informe o token de acesso ao seu aplicativo (observe que não é o token de acesso ao seu workspace na plataforma Ycodify).

#### _Retorno com Sucesso_

A operação, se **sucesso**, retornará HTTP Status 200, sem mensagem!

```javascript
HTTP Message without body
```

#### _Retorno com Erro_

Se **erro**, o retorno sempre terá este formato:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

Os tipos de erro de status HTTP: 400 (**Solicitação malformada**); 404 (Dados **Não encontrado**); 417 (**Falha na operação** - motivo imprevisto); 500 (Falha interna da lógica de serviço - **suporte de chamada**).

&nbsp;

## 3. Consulting the Status of Service Consumption

## 4. Others resources

### 4.1. File Management Service

### 4.1.1. Upload a file:

### 4.1.2. Download a file:
