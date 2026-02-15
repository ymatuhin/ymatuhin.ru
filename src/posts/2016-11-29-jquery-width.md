---
layout: post
title: jQuery.width() без округления
categories: front-end
description: >
  Как взять ширину элемента без округления значений до целых чисел без jQuery.
tags: [ Tips, JS, jQuery ]
image:
  path: /assets/img/jquery/jquery.jpg
  alt: jQuery.width
---

{% include "media-post-image.liquid" %}

Я обнаружил что `jQuery.width()` округляет значения. Так-же, как и `.height()`. Из-за этого у меня была проблема в `1px` при некоторых разрешениях.

Если нужен размер &laquo;как есть&raquo;, то используйте нативный метод `getBoundingClientRect`.

## Пример

```js
$(".element")[0].getBoundingClientRect().width
$(".element")[0].getBoundingClientRect().height
// или
$(".element").get(0).getBoundingClientRect().width
$(".element").get(0).getBoundingClientRect().height
```

### Совместимость

Методу в обед сто лет, а узнал только вчера о нем.

{% mediaImage "jquery/support.png", "Поддержка метода getBoundingClientRect" %}

Полезная информация этого поста влезает в твит, но твиты уходят в небытие и больше их никто не прочитает. Поэтому я публикую это в блоге.
