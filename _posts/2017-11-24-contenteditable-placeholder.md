---
layout: post
title: 'Код. Плейсхолдер для [contenteditable]'
description: Placeholder полифил для contenteditable элемента
categories: front-end
tags: [js, contenteditable, placeholder]
image:
    path: /assets/img/contenteditable.jpg
    width: 1200
    height: 400
    alt: '[contenteditable]'
---

{% include media-post-image.html %}

Я&nbsp;уже сильно привык к&nbsp;аттрибуту `placeholder`, и&nbsp;немного грустил зная что `<pre contenteditable></pre>` не&nbsp;работает с `placeholder`. Но&nbsp;чутка погуглив я&nbsp;нашел инетресное решение, которым хочу поделиться с&nbsp;вами.

```js
[contenteditable]:empty:before {
    display: block;
    color: #999;
    content: attr(placeholder);
}
```

## Пример

<p><script async src="//jsfiddle.net/414ced8v/3/embed/html,css,result/"></script></p>

На&nbsp;случай если вы&nbsp;не&nbsp;видите примера выше&nbsp;&mdash; [ссылка на&nbsp;JS&nbsp;Fiddle](http://jsfiddle.net/414ced8v/3/).

Будьте осторожны с `contenteditable`, его поведение разнится в&nbsp;браузерах. В&nbsp;сафари если удалить весь текст в&nbsp;поле все равно остается `<br>` и `:empty` не&nbsp;страбатывает.
