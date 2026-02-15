---
layout: post
title: Правильный сниппет медиа выражений для retina
description: Короткий сниппет media queries для определения retina дисплеев и старые сниппеты, от которых нужно давно избавиться.
tags:
  - frontend
  - css
  - retina
  - лучшие практики
  - media queries
  - медиа выражения
redirects:
  - /front-end/retina_media_quires/
---

Я видел разные способы определения мониторов retina. Одни объемные, другие наоборот. Разберемся, какие из media queries
изпользовать.

## Правильное решение для retina (2x)

```css
@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
    /* CSS правила для retina */
}
```

Этот сниппет определяет только ретина дисплеи (2х), но есть еще и дисплеи с `device-pixel-ratio` больше 1 и меньше
2 — мобильные телефоны. Для них лучше тоже показывать оптимизированные под retina изображения.

У себя в сниппете я проверяю на `120dpi`:

```css
/* 1.25 dpr */
@media
(-webkit-min-device-pixel-ratio: 1.25),
(min-resolution: 120dpi){
    /* CSS правила для retina */
}
```

Какой из них использовать решать вам. Предупрежу, что если `dpi` больше 1 и меньше 2, то это мобильное устройство.
А если загружать для мобильного устройства оптимизированную под ретина дисплеи графику, то сайт будет дольше
загружаться. Что важно для пользователей мобильных устройств.

## Почему эти правила

Ответ найдем в поддержке браузерами этих свойств. Открываем [
caniuse](http://caniuse.com/#feat=css-media-resolution) и видим следующее:

{% mediaImage "media_queries/support.png", "Поддержка Media Queries в браузерах" %}

Зеленые столбцы и столбцы с номером 1 — поддерживают min/max resolution с единицами измерения `dpi`, а столбцы с
номером 3 — поддерживают `-webkit-device-pixel-ratio`. То есть нам требуются только эти два свойства.

<h3>Старые правила (не используйте)</h3>

```css
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1) {
  /* CSS правила для retina */
}
```

Или даже

```css
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {
  /* CSS правила для retina */
}
```
