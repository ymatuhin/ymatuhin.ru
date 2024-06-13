---
title: Время обновить clearfix
description: >
  Исправляем поведение плавающих классов и контейнера с помощью css класса clearfix и его новой, короткой версией.
categories: front-end
tags: clearfix css after div плавающие элементы float обновить класс

image:
  path: /assets/img/clearfix/clearfix.png
  width: 800
  height: 380
  alt: Как работает Clearfix CSS
---

Clearfix — вспомогательный класс в css, с помощью которого мы исправляем схлопывающиеся размеры контейнера у плавающих элементов.

{% include media-post-image.html %}

## Clearfix раньше

Если вы знаете что такое clearfix, то вероятно вы читали о нем в старых статьях и книгах. В которых встречали следующий код или его разновидности:

```css
.clearfix {
  zoom: 1;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
```

Он рабочий, но проблема в том, что он поддерживает устаревшие `IE 6/7`. Вы еще поддерживаете эти браузеры?

## Clearfix сейчас

Если у вас поддержка браузеров начиная с `IE 8`, то воспользуйтесь сокращенной версией:

```css
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```

Немножко экономии и эстетической красоты 😊
Я редко пользуюсь этим классом, ведь установив у контейнера значение `overflow` в `hidden` или `auto` мы добиваемся тех-же результатов.
А вы используете clearfix css в своих проектах? 😉

**UPD #1:** Хорошая статья про виды clearfix и их работе можно прочитать в <a href="http://css-live.ru/tricks/novaya-alternativa-clearfix-u-i-overflowhidden.html">этой статье</a>.
