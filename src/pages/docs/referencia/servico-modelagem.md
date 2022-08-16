---
title: Descrições sobre o serviço de modelagem
---

---

## 1. O que é enviado no **create entity**?

```javascript
{
  'name':String,
  '_conf': {},
  'attributes': []
}
```

Sendo que obrigatório aí é apenas 'name'. O que vai em '_\_conf_' é o mesmo que ia anteriormente. '_dbType_' em '_\_conf_' tem valor padrão '_sql_'.

## 2. O que é enviado para o **create attribute**?

```javascript
{
  'name':String,
  'length':Integer,
  'type':PrimitiveType,
  'nullable':Boolean,
  'comment':String
}
```

Sendo obrigatório apenas 'name'. Destaque que agora '_isNullable_' é '_nullable_'

## 3. O que é enviado para o **create association**?

```javascript
{
  'name':String,
  'type':Entity,
  'nullable':Boolean,
  'comment':String
}
```

Sendo obrigatório os campos '_name_' e '_type_'. Destaque que agora '_isNullable_' é '_nullable_'
