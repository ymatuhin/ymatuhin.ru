---
layout: post
title: Подтверждение диалогов через клавиатуру в Mac OS
categories: blog
description: Как включить опцию изменения фокуса в диалогах Mac OS и подтверждать их с клавиатуры.
tags: [mac, osx]
image:
  path: /assets/img/mac/dialog.png
  caption: Диалог смены расширения у файла в Mac OS
  width: 420
  height: 159
---

{% include media-post-image.html %}

При появлении диалога, по умолчанию у нас нет возможности переключить фокус на другую кнопку с помощью клавиатуры, только мышкой или трекпадом. Но это поведение легко исправить.



Нужно только в настройках (System Preferences —> Keyboard & Mouse —> Keyboard Shortcuts) указать внизу пункт «__All controls__».

{%
	include media-image.html
	url="mac/preferences.png"
	caption="Mac OS окно настроек клавиатуры"
	width="668"
	height="581"
%}

Теперь, чтобы переключить фокус между кнопками, нажмите `tab` или `shift + tab`, а чтобы выбрать нужный пункт нажмите пробел.

{%
	include media-image.html
	url="mac/dialog.gif"
	caption="Mac OS — смена расширения файла через клавиатуру"
	width="453"
	height="181"
%}

Я пользуюсь маком уже полтора года, и только сегодня узнал как изменить это поведение. Удивляюсь только почему разработчики не включили эту настройку по умолчанию.

### Дополнение от 17.11.2015

В OS X доступно сочетание клавиш `CMD + D` для нажатия на кнопку «Don't Save». Спасибо `zencoder` за [комментарий](https://disqus.com/home/discussion/ymatuhin/mac_os_95/#comment-2364464096){:rel='nofollow'}.
