---
title: Consuming Backend Services
---

The following are examples of using the Ycodify platform backend service endpoints for your application.

## 1. Create, get and update an account of your application

To start with the app persistence service, before it you will need to create and maintained an user account for your backend.

### 1.1. Create a new user account for your application

TO create an account in your app, see a example below how to do it.

#### Request [by curl]

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
  }' https://api.Ycodify.com/api/caccount-mngr/account
```

#### Success return:

This operation, if it **succeed**, it wull return HTTP Status 201, besides the following JSON:

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

#### Error return

If it had an **error**, the returned message will look like this:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

The kind of errors _HTTP Status_: 400 (**Malformed request**); 404 (Data ** not found**); 417 (**Operation failure** - unforeseen reason
); 500 (
Service logic internal failure - **Server error**).

> **Ok, now that you have your account**, we going to see how to create and maintain your data models. One for each app you own!

&nbsp;

### 1.2. For log in

After you have an registered service account, you will need to authenticate to access your workspace, and then you can create and maintain your models. See how to do this:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -u "frontend:13579" \
  -d "username=stark@mark&password=12345&grant_type=password" \
  https://api.Ycodify.com/api/csecurity/oauth/token
```

#### _Successfully return_

The operation, if **successfully**, it will return HTTP 200 and the message below:

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

#### _Error return_

If the operation had an **error**, the return will ve HTTP Status 400, with this message below:

```javascript
{
  "erro":"invalid_grant",
  "erro_description":"Bad credentials"
}
```

&nbsp;

### 1.3. Get account data

Now you've got an **token** (the `access_token` above) that identifies you in the platform, you can use it to
request services and information from the platform. _Of course_, information that pertains to your workspace, your applications. For example, you can query your account profile data with:

#### Request [by curl]

```shell
$ curl -i -X GET -H "X-TenantID: stark@mark" -H "Authorization: Bearer <access_token>" https://api.Ycodify.com/api/caccount-mngr/account/username/tony
```

#### Request [by curl]

```shell
$ curl -i -X GET -H "X-TenantID: stark@mark" -H "Authorization: Bearer <access_token>" https://api.Ycodify.com/api/caccount-mngr/account
```

> It's **important** <font color="red">only app admin user</font> is allowed to make request to this terminal.

#### _Successfully return_

The operation, if **successfully**, it will return HTTP 200 and the message below:

#### _in case you want to see all accounts of your app_

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

#### _in case you want to see the data of a single account_

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

#### _Error return_

If the operation had an **error**, the return will have HTTP Status 400, as following body:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":404,
  "erro":"Not Found",
  "message":"account for that username not founded."
}
```

&nbsp;

### 1.4. Update data account

Using the `access_token` you can update your account:

#### _Request [by curl]_

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
   }' https://api.Ycodify.com/api/client-account-mngr/account/tony/version/0
```

> It's **important** to see the attribute `version`. Its value must be retrieved from the one defined in subsection **1.2**

> **If you want to <font color=red>desativate</font> a client account**, send the same request as above with the attribute `status` with value **0**.

#### _Successfully return_

The operation, if **successfully**, it will return HTTP 200 and the message below:

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

#### _Error return_

If the operation had an **error**, the return will have HTTP Status 400 or 404, with the following body:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":404,
  "erro":"Not Found",
  "message":"account for that username not founded."
}
```

&nbsp;

## 2. Create, get, update and remove related data to your data _schema_

Here you will find information about how to consume our backend services for your app. The usage condition is account creation and data schema, covered in the previous section

&nbsp;

### 2.1. Create and persist a new _Object_

Now that you have an account and a defined data schema, to create new data and keep it in your application database you should use the following endpoint as follows:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "CREATE", \
    "armor": { \
      "name": "Mark II", \
    } \
  }'  https://api.ycodify.com/api/v0/interpreter-p/s
```

Your application, when sending a persistence request for a newly created data, you will necessarily need to inform the "X-TenantID" headers. It is also necessary for the app to inform the access token to your app, given after a user authentication of your app

#### _Successfully return_

The operation, if **successfully**, it will return HTTP 201 and the message below:

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

**Important**: the object class defined as _armor_, has more attributes than the created ones. The Ycodify platform creates, for each defined class, six other attributes definitions. And they are:

> | Field     | Description                                                      |
> | --------- | ---------------------------------------------------------------- |
> | id        | Unique identifier for this object and it's value space           |
> | user      | User name that has requested the backend operation               |
> | role      | Identifies which _role_ this user belongs to                     |
> | createdat | Indicates the date this data was first persisted in the database |
> | updatedat | Informs the last update operation of this data in the base       |
> | version   | It can be used to perform concurrency control                    |

All of this six attribute are exclusive controlled by the platform, the user has no control about it's values.

#### _Error return_

If the operation had an **error**, the return will always have this format:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

**The possible errors are**

> | Code | Description                                       |
> | ---- | ------------------------------------------------- |
> | 400  | **Malformed request**                             |
> | 406  | **Conflict** - Object already exists              |
> | 417  | **Operation failure** - Unforeseen reason         |
> | 500  | Service logic internal failure - **Server error** |

&nbsp;

### 2.2. Get persisted _Objects_

There's two ways to request a data read. The first one describes how to get an unique object, based on your `id` attribute. The second one involves retrieving an instance list of data based on the use of filters. The next two subsections will show this.

#### 2.2.1. Get a persistence _Object_

Get an unique data register:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "READ", \
    "armor": { \
      "id": 1 \
    } \
  }'  https://api.Ycodify.com/api/v0/interpreter-p/s
```

Your application, must send a exclusion request of a persisted data, necessarily need to inform the headers "X-TenantID" (an association between your username and the name of your data schema). It is also necessary for the app to provide the access token to your app (note that it is not the access token to your workspace on the Ycodify platform)

#### _Successfully return_

The operation, if **successfully**, it will return HTTP 200 and without message!

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

#### _Error return_

If the operation had an **error**, the return will always have this format:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

**The possible errors are**

> | Code | Description                                       |
> | ---- | ------------------------------------------------- |
> | 400  | **Malformed request**                             |
> | 406  | **Conflict** - Object already exists              |
> | 417  | **Operation failure** - Unforeseen reason         |
> | 500  | Service logic internal failure - **Server error** |

#### 2.2.2. Get a list of persistence _Objects_

Here, get a list of persistence objects as follows:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "READ", \
    "armor": { \
      "name": {
        "IN": ["Mark I","Mark II"]
      }
    } \
  }'  https://api.Ycodify.com/api/v0/interpreter-p/s
```

Your application, when sending a request for retrieval of persistent data, will necessarily need to inform the "X-TenantID" headers (an association between your username and the name of your data schema). It is also necessary for the app to provide the access token to your app (note that it is not the access token to your workspace on the Ycodify platform).

#### _Successfully return_

The operation, if **successfully**, it will return HTTP 200 and without message!

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

#### _Error return_

If the operation had an **error**, the return will always have this format:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

**The possible errors are**

> | Code | Description                                       |
> | ---- | ------------------------------------------------- |
> | 400  | **Malformed request**                             |
> | 406  | **Conflict** - Object already exists              |
> | 417  | **Operation failure** - Unforeseen reason         |
> | 500  | Service logic internal failure - **Server error** |

&nbsp;

### 2.3. Update an _Object_

Now that there are persisted objects in your database, you can update them as follows:

#### _Request [by curl]_

```shell
$ curl -i -X POST \
  -H 'Authorization: Bearer <access_token>' \
  -H 'X-TenantID: stark@mark' \
  -H 'Content-Type: application/json' \
  -d '{ \
    "action": "UPDATE", \
    "armor": { \
      "id": 1, \
      "name": "Mark I" \
    } \
  }'  https://api.Ycodify.com/api/v0/interpreter-p/s
```

Your application, when sending a persistence request to update data, will necessarily need to inform the "X-TenantID" headers (an association between your username and the name of your data schema). It is also necessary for the app to provide the access token to your app (note that it is not the access token to your workspace on the Ycodify platform).

#### _Successfully return_

The operation, if **successfully**, it will return HTTP 200 and without message!

```javascript
HTTP Message without body
```

#### _Error return_

If the operation had an **error**, the return will always have this format:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

The _HTTP Status_ errors types: 400 (**Malformed request**); 404 (Data **Not found**); 406 (**Conflict** - Object already exists); 417 (**Operation failure** - Unforeseen reason); 500 (Service logic internal failure - **Server error**).

&nbsp;

### 2.4. Delete a persisted _Object_

You can delete a persisted \_Object as follows:

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
  }'  https://api.Ycodify.com/api/v0/interpreter-p/s
```

Your application, when sending a request to delete persistent data, will necessarily need to inform the "X-TenantID" headers (an association between your username and the name of your data schema). It is also necessary for the app to provide the access token to your app (note that it is not the access token to your workspace on the Ycodify platform).

#### _Successfully return_

The operation, if **successfully**, it will return HTTP 200 and without message!

```javascript
HTTP Message without body
```

#### _Error return_

If the operation had an **error**, the return will always have this format:

```javascript
{
  "timestamp":"2021-05-28T13:51:38.115+00:00",
  "status":400,
  "erro":"Bad Request",
  "message":"username field must be present."
}
```

**The possible errors are**

> | Code | Description                                       |
> | ---- | ------------------------------------------------- |
> | 400  | **Malformed request**                             |
> | 406  | **Conflict** - Object already exist               |
> | 417  | **Operation failure** - Unforeseen reason         |
> | 500  | Service logic internal failure - **Server error** |

&nbsp;

## 3. Consulting the Status of Service Consumption

## 4. Others resources

### 4.1. File Management Service

### 4.1.1. Upload a file:

### 4.1.2. Download a file:
