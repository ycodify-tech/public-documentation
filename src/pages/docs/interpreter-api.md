---
title: Interpreter API
description:
---

Base URL: _backend/api/v0/modeler_

## 1. Project Controller

### 1.1. GET

Required parameters for all

| Name          | Description                                                          | Type   | Field  |
| ------------- | -------------------------------------------------------------------- | ------ | ------ |
| Authorization | The Authorization header of the request. Value it with the JWT token | string | header |
| UserIDToken   | UserIDToken                                                          | string | header |

---

**/project-name** => Get all projects/schemas descriptions

---

**/project-name/{projectName}** => Get detailed project/schema

Also requires

| Name        | Description                                              | Type   | Field |
| ----------- | -------------------------------------------------------- | ------ | ----- |
| projectName | The URL parameter that describes the project/schema name | string | path  |

---

**/project-name/{projectName}/schema/taggeds** => Get all tagged projects

| Name        | Description                                              | Type   | Field |
| ----------- | -------------------------------------------------------- | ------ | ----- |
| projectName | The URL parameter that describes the project/schema name | string | path  |

---

**/project-name/{projectName}/schema/tagged-by/{tag}** => Get a tagged project

| Name        | Description                                              | Type   | Field |
| ----------- | -------------------------------------------------------- | ------ | ----- |
| projectName | The URL parameter that describes the project/schema name | string | path  |
| tag         | The tag for a project                                    | string | path  |

---

### 1.2. POST

Required parameters for all

| Name          | Description                                                          | Type   | Field  |
| ------------- | -------------------------------------------------------------------- | ------ | ------ |
| Authorization | The Authorization header of the request. Value it with the JWT token | string | header |
| UserIDToken   | UserIDToken                                                          | string | header |
| body          |                                                                      |        | body   |

---

**/project-name** => Create project/schema

Also requires

| Name          | Description                | Type | Field |
| ------------- | -------------------------- | ---- | ----- |
| body<protect> | Project object description |      | ()    |

---

### 1.3. PUT

Required parameters for all

| Name          | Description                                                          | Type   | Field  |
| ------------- | -------------------------------------------------------------------- | ------ | ------ |
| Authorization | The Authorization header of the request. Value it with the JWT token | string | header |
| UserIDToken   | UserIDToken                                                          | string | header |
| body          |                                                                      |        | body   |
| body<protect> | The project instance to update                                       |        | ()     |
| projectName   | The URL parameter that describes the project/schema name             | string | path   |

---

**project-name/{projectName}** => Update project

---

### 1.4. DELETE

Required parameters for all

| Name          | Description                                                          | Type   | Field  |
| ------------- | -------------------------------------------------------------------- | ------ | ------ |
| Authorization | The Authorization header of the request. Value it with the JWT token | string | header |
| UserIDToken   | UserIDToken                                                          | string | header |
| projectName   | The URL parameter that describes the project/schema name             | string | path   |

---

**/project-name/{projectName}** => Delete project

---

**/project-name/{projectName}/schema/tagged-by/{tag}** => Delete a tagged project

Also requires

| Name | Description              | Type   | Field |
| ---- | ------------------------ | ------ | ----- |
| tag  | Tag for a project/schema | string | path  |
