---
layout: post
title: jQuery.width без округления
description: >-
  Я обнаружил что jQuery.width округляет значения. Из-за этого у меня была проблема в 1px при
  некоторых разрешениях.
tags:
  - development
  - frontend
  - javascript
  - jquery
  - tips
image:
  path: jquery/jquery.jpg
  alt: jQuery.width
redirects:
  - /front-end/jquery-width/
---

{% mediaImage image.path, image.alt %}

Я обнаружил что `jQuery.width()` округляет значения. Так-же, как и `.height()`. Из-за этого у меня была проблема в `1px`
при некоторых разрешениях.

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

Полезная информация этого поста влезает в твит, но твиты уходят в небытие и больше их никто не прочитает. Поэтому я
публикую это в блоге.
