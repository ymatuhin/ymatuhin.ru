---
layout: post
title: Быстрый дебаг CSS слоев с Pesticide
description: >-
  Показываю, как быстро находить проблемы в верстке с помощью Pesticide и похожих инструментов.
  Инструмент подсвечивает границы элементов и ускоряет отладку слоев, отступов и позиционирования.
tags:
  - development
  - frontend
  - tools
  - css
  - debugging
image:
  path: pesticide/logo.png
  alt: Pesticide — библиотека для дебага CSS
redirects:
  - /front-end/faster_debug_css_with_pesticide/
---

{% mediaImage image.path, image.alt, "eager" %}

Как часто у вас бывали проблемы со схлопыванием плавающих элементов? Или элемент уезжал непонятно куда? Эти и другое
проблемы, связанные с позиционированием элементов на странице решает маленькая CSS/Sass/LESS библиотека — **Pesticide
**.

Что делает этот ваш Pesticide? На официальном сайте: «Kill your CSS layout bugs. Without 2000 clicks in Chrome Dev
Tools». На самом деле принцип её работы очень прост, и я думаю многие разработчики писали у себя в стилях во
время разработки нечто вроде этого:

```css
* {
  outline: red;
}
```

Но Адам Морс (Adam Morse) пошел дальше, и добавил свой цвет для каждого элемента. И теперь, если немного привыкнуть,
то по цвету можно определять цвет элемента и его область.

Сам CSS файл до смешного прост, познакомиться подробнее с Pesticide можно на официальном
сайте [pesticide.io](http://pesticide.io). Посмотреть исходники и скачать файл можно
с [github](https://github.com/mrmrs/pesticide).

{% mediaImage "pesticide/github.png", "Пример использования Pesticide на Github" %}

{% mediaImage "pesticide/ya.png", "Пример использования Pesticide на Yandex" %}

Мне кажется, что подключать эту библиотеку как css файл на свой проект не рационально. Особенно когда у неё есть
расширения для
браузеров ([
Chrome](https://chrome.google.com/webstore/detail/bblbgcheenepgnnajgfpiicnbbdmmooh), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/pesticide/)).

Но с расширениями есть одна проблема — они сбрасывается при перезагрузке страницы. В таком случае нам придется
обязательно подключать pesticide как css файл чтобы избежать этого.

Я предложил Адаму исправить это положение вещей в расширении для хрома, но он не поддержал меня и решил не
включать мои изменения в расширение. Поэтому было решено опубликовать еще одну версию этого расширения для хрома только
без необходимости каждый раз нажимать на кнопку, чтобы увидеть библиотеку в действии. Так и
появился [
Pesticide for Chrome with autoupdate](https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/eipbgplchlidkojmppclhkechkhmlefi).

Какое расширение будете использовать вы — дело исключительно ваше. Но я думаю, не мне одному будет удобна моя
модификация.

Красивой CSS разметки вам вместе с Pesticide :)
