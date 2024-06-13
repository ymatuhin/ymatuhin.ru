---
layout: post
title: 'Код. Удаляем дубликаты из массива'
description: Простые способы для ES5 и ES2015
categories: front-end
tags: [ JS, Tips, Array ]
image:
  path: /assets/img/tips/array_uniq.jpg
  width: 1440
  height: 480
  alt: Убрать дубликаты из массива в JavaScript
---

{% include media-post-image.html %}

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
