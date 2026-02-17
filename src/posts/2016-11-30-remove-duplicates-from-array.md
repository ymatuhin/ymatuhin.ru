---
layout: post
title: Код. Удаляем дубликаты из массива
description: >-
  Короткая заметка по теме «Код. Удаляем
  дубликаты из массива» с основными выводами.
tags:
  - development
  - frontend
  - javascript
  - arrays
  - tips
image:
  path: tips/array_uniq.jpg
  alt: Убрать дубликаты из массива в JavaScript
redirects:
  - /front-end/remove-duplicates-from-array/
---

{% mediaImage image.path, image.alt, "eager" %}

## ES5

```js
var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos
  })
}
```

## ES6 (ES2015)

```js
var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => arr.indexOf(elem) == pos)
}

// или
const uniqEs6 = (array) => [ ...new Set(array) ]
```

Поддержка транспайлерами и браузерами `Set` — [http://kangax.github.io/compat-table/es6/#test-Set](http://kangax.github.io/compat-table/es6/#test-Set)

А чем пользуетесь вы?
