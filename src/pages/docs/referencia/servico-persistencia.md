---
title: Descrições sobre o serviço de persistência
---

---

## 1. Para **criar um novo registro de dados** para um schema de dados já modelado

Você pode enviar um request para o endpoint do serviço de persistência sem controle de acesso por JWT. Ou seja, usando apenas o hash de autorização.

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

Percebam que sumiu o '_classUID_'. A própria chave do vetor de objetos especifica o tipo das entidades (no nó raiz) que vão nesse vetor. Não tem mais necessidade do atributo '_\_role_'. além disso, você não envia um objeto, mas sim um vetor de objetos.

## 2. Para **realizar uma consulta na base de dados**

Você pode enviar um objeto conforme abaixo

Endpoint: _https://api.yco.../api/v0/persistence-p/s/no-ac_

```javascript
POST: {
  "action":"READ",
  "livro":{
    "nome":"O Silêncio"
  }
}
```

As mesmas observações para a construção desse JSON válidas para a criação/atualização, valem aqui. Importante lembrar que no caso de uma consulta que não encontre dados, o retorno terá o status code 200 e o array de registros será vazio.

## 3. Sobre o hash de autorização

É o valor que está em TenantAC, que vem quando você recupera a especificação do schema (pelo endpoint '_..../api/v0/modeler/.../parser/reverse_'), ou o atributo de mesmo nome que vem na lista de schemas que um cliente tenha criado, que é entregue via GET para o endpoint '_..../api/v0/modeler/.../project-name_'

**IMPORTANTE**

> Se estiver usando o hash de autorização, o request terá que usar o endpoint '_https://api.ycodify.com/api/v0/interpreter-p/s/no-ac_' e ter o cabeçalho '_X-TenantAC_', além do '_X-TenantID_'. Caso contrário, o endpoint é exatamente o mesmo que o da versão anterior (_https://api.ycodify.com/api/v0/interpreter-p/s_), com os mesmos cabeçalhos.
>
> Além disso, na declaração de qualquer das **ACTIONs**, o '_body_' terá que seguir declarando o valor para '_\_role_' (mas sem precisar de '_classUID_').

## 4. Sobre a **declaração de associação entre entidades** feita usando a **linguagem YCL**

Para **especificar associações/relacionamentos entre entidades** com a linguagem, segue o exemplo

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

Um caso de análise entre entidade '_turma_' e '_aluno_'. Tenha em conta que a declaração de uma associação é tipo particular de declaração de atributo. Portanto, está preservada a semântica da declaração para os dois objetos da linguagem. O que muda é que no caso de declarar associação, você declara como tipo de atributo uma entidade em **seu** modelo. No segundo, declara-se um tipo primitivo.
