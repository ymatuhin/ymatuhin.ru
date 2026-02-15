---
layout: 'post'
title: 'Код. Плейсхолдер для [contenteditable]'
description: 'Placeholder полифил для contenteditable элемента'
categories: 'front-end'
tags:
  - 'js'
  - 'contenteditable'
  - 'placeholder'
image:
  path: 'contenteditable.jpg'
  alt: '[contenteditable]'
---

{% mediaImage image.path, image.alt %}

Я уже сильно привык к атрибуту `placeholder`, и немного грустил зная что `<pre contenteditable></pre>`
не работает с `placeholder`. Но чутка погуглив я нашел инетресное решение, которым хочу поделиться
с вами.

```css
[contenteditable]:empty:before {
  display: block;
  color: #999;
  content: attr(placeholder);
}
```

## Пример

<p><script async src="//jsfiddle.net/414ced8v/3/embed/html,css,result/"></script></p>

На случай если вы не видите примера
выше &mdash; [ссылка на JS Fiddle](http://jsfiddle.net/414ced8v/3/).

Будьте осторожны с `contenteditable`, его поведение разнится в браузерах. В сафари если удалить весь текст
в поле все равно остается `<br>` и `:empty` не страбатывает.
