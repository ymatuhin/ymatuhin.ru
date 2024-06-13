---
layout: post
title: Улучшаем «быстрый просмотр» (Quick Look) в Mac OS
description: >
  Как установить плагины для просмотра markdown, файлов без расширений, webp изображений, JSON и подсветка синтаксиса к «быстрому просмотру» (Quick Look) в Mac OS
categories: blog
tags: [mac os]

image:
  path: /assets/img/quicklook/preview.png
  width: 500
  height: 250
---

{% include media-post-image.html %}

Quick Look незаменимая вещь для маководов, жаль что она не работает с некоторыми файлами, которые относятся к веб разработке. Было бы неплохо просматривать markdown, JSON, файлы без расширений, подсветка синтаксиса, показ webp изображений...

В этой статье я расскажу о плагинах к «быстрому просмотру» и их установке.



## Теория

Quick Look поддерживает установку сторонних плагинов, которые расширяют функционал «быстрого просмотра». Чтобы установить плагин, скопируйте файл с расширением `.qlgenerator` в папку `~/Library/QuickLook` или `/Library/QuickLook` и перезапустить Finder.

Чтобы перезапустить Finder — нажмите `alt` и кликните правой кнопкой мыши по его иконке в Dock. Выберите нижний пункт `Relaunch`.

## Плагины для Quick Look

* **[QLMarkdown](https://github.com/toland/qlmarkdown)** — добавляет просмотр `markdown` файлов // [скачать файл](https://github.com/downloads/toland/qlmarkdown/QLMarkdown-1.3.zip)

{%
	include media-image.html
	url="quicklook/markdown.png"
	width="806"
	height="640"
	alt="Плагин для Quick Look — QLMarkdown"
%}

* **[QLColorCode](https://code.google.com/p/qlcolorcode/)** — добавляет подсветку синтаксиса // [скачать файл](https://qlcolorcode.googlecode.com/files/QLColorCode-2.0.2.tgz)

{%
	include media-image.html
	url="quicklook/highlight.png"
	width="964"
	height="402"
	alt="Плагин для Quick Look — QLColorCode"
%}

* **[QLStephen](https://github.com/whomwah/qlstephen/releases)** — для просмотра файлов без расширения (README, CHANGELOG и т.д.) // [скачать файл](https://github.com/whomwah/qlstephen/releases)

{%
	include media-image.html
	url="quicklook/changelog.png"
	width="418"
	height="220"
	alt="Плагин для Quick Look — QLStephen"
%}

* **[QuickLookJSON](http://www.sagtau.com/quicklookjson.html)** — предпросмотр JSON с поддержкой фолдинга // [скачать файл](http://www.sagtau.com/media/QuickLookJSON.qlgenerator.zip)

{%
	include media-image.html
	url="quicklook/json.png"
	width="496"
	height="368"
	alt="Плагин для Quick Look — QuickLookJSON"
%}

* **[qlImageSize](https://github.com/Nyx0uf/qlImageSize)** — добавление размера и разрешения в заголовок «быстрого просмотра» // [скачать файл](https://github.com/Nyx0uf/qlImageSize#installation)

{%
	include media-image.html
	url="quicklook/images.png"
	width="375"
	height="220"
	alt="Плагин для Quick Look — qlImageSize"
%}

* **[WebP](https://github.com/dchest/webp-quicklook)** — поддержка формата WebP // [скачать файл](https://github.com/dchest/webp-quicklook/releases)

Плагины работают в OS X El Capitan. Не забудьте перезапустить `Finder`.

**P.S.** Перейти в директорию `/Library/QuickLook` можно через `Finder`. Нажмите в нем `CMD + SHIFT + G` и введите путь. Или через терминал: введите `cd /Library/QuickLook &amp;&amp; open .`.
