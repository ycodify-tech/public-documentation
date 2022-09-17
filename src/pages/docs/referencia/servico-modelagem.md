---
title: Descriptions about modeling service
---

---

## 1. What is send to **create entity**?

```javascript
{
  'name':String,
  '_conf': {},
  'attributes': []
}
```

Being mandatory only the 'name'. what going in '_\_conf_' is the same as before. '_dbType_' in '_\_conf_' has default value '_sql_'.

## 2. what is send to **create attribute**?

```javascript
{
  'name':String,
  'length':Integer,
  'type':PrimitiveType,
  'nullable':Boolean,
  'comment':String
}
```

Being mandatory only the 'name'. A change is that '_isNullable_' is now '_nullable_'

## 3. what is sendo to **create association**?

```javascript
{
  'name':String,
  'type':Entity,
  'nullable':Boolean,
  'comment':String
}
```

Being mandatory the fields '_name_' and '_type_'. A change is that '_isNullable_' is now '_nullable_'
