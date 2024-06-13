---
layout: post
title: Стилизуем инструменты разработчика (dev tools) в Google Chrome
categories: front-end
tags: >
  dev tools инструменты разработчика google chrome темы

image:
  path: /assets/img/dev_tools/dev_tools.png
  width: 1280
  height: 430
  caption: Темная темя для Chrome Dev Tools
---

{% include media-post-image.html %}

Совсем недавно я узнал, что Chrome поддерживает темы для dev tools. Мне сразу-же захотелось попробовать это. Сразу скажу результат меня не совсем порадовал :-)

## Подготовка
Для того, чтобы установить тему для dev tools, нужно включить экспериментальные функции. Чтобы это сделать введите в адресной строке Google Chrome `chrome://flags/#enable-devtools-experiments`. Рядом с пунктом _Enable Developer Tools experiments_ нажмите _Enable_. Теперь перезапустите браузер (внизу должна быть кнопка).

{%
	include media-image.html
	url="dev_tools/flags.png"
	width="700"
	height="60"
	caption="Google Chrome — флаги"
%}

Откройте инструменты разработчика (`cmd + shif + i / F12`), зайдите в настройки (иконка шестеренки), перейдите во вкладку <strong>Experiments</strong> и поставьте галочку рядом с пунктом «Allow custom UI themes».
Теперь можно спокойно устанавливать темы из магазина.

## Поиск и установка тем
Найти темы можно в магазине <a href="https://chrome.google.com/webstore/category/extensions">Google Chrome</a>. Искать по запросу dev themes. Но это не очень удобно, почти все темы собраны на сайте <a href="http://devthemez.com/themes/chrome-developer-tools">devthemez.com</a>. И там-же есть темы для dev tools.

Теперь переходим в магазин, выбираем нужную нам тему и устанавливаем её. Теперь при открытии инструментов разработчика вы увидите вашу тему.

Теперь немного о неприятном. Темы очень часто выглядят убого. Еще есть проблема с привыканием. К примеру, я привык, что если в консоли цифра синяя — это Number, а если красная — String. Но в каждой теме свои цвета, и становится сложнее в них ориентироваться.

Сейчас я не буду переходить на стилизованные dev tools. Однако если будет крутая, темная тема от Atom то я бы посмотрел на это.
