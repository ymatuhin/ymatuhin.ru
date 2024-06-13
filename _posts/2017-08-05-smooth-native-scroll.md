---
layout: post
title: Плавный, нативный скрол
description: Выкиньте лишние библиотеки для прокрутки внутри страницы
categories: front-end
tags: [js, scroll]
image:
    path: /assets/img/scroll/scrollbar-windows.jpg
    width: 506
    height: 389
    caption: Полосы прокрутки семейства Windows
---

{% include media-post-image.html %}

Плавная прокрутка до определенного места на странице — очень распространенная фича, особенно в лендингах. Еще один классический случай — плавный переход по хэшу для навигации по странице.

Для решения этих проблем уже написано много решений. В начале карьеры я и сам такое писал сначала на `jQuery`, а потом на `requestAnimationFrame`. К счастью о таких костылях можно забыть, потому что теперь можно передать дополнительный параметр в метод `window.scroll`, в котором можно указать что прокручивать нужно с анимацией.

## Покажи нам код

```js
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});
```

[Демки](http://iamdustan.com/smoothscroll/){:class="bigger"}

Без полифила работает только в Firefox, в Chrome под экспериментальным флагом. Можно добавить [полифил](http://iamdustan.com/smoothscroll/) и заработает везде. Поэтому я советую использовать именно этот метод для прокрутки на странице и отказаться от сторонних библиотек. А через пару лет можно будет и полифил выкинуть.

Работает для методов `scroll`, `scrollTo`, `scrollBy`, `scrollIntoView`.

### Ссылки

1. [Github полифила](https://github.com/iamdustan/smoothscroll)
2. [Черновик спецификации](https://drafts.csswg.org/cssom-view/#extensions-to-the-window-interface)
3. [Документация на MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
