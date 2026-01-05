---
layout: post
title: Исключаем папки из обычного и Fuzzy поиска в Atom
categories: tools
tags: >
  atom github текстовый редактор кода поиск fuzzy node modules bower components
description: >
  Как исключить некоторые папки (к примеру node_modules, bower_components) из поиска в текстовом редакторе Atom.
---

Порой, чтобы открыть нужный файл, нужно знать все его название. А все из-за того, что у нас очень много файлов в папках `node_modules` и `bower_components` и они мешают открытию написанных нами файлов.

Решается эта <em>проблема</em> достаточно легко. Заходим в настройки Config (Atom → Open Your Config). Ищем там строку `core` и дописываем туда `ignoredNames`:

```bash
core:
  ignoredNames: [
    "node_modules"
    "bower_components"
    ".tmp"
  ]
```

Теперь все файлы внутри этих папок исключены из поиска обычного и Fuzzy. И нужные нам файлы легко будет найти.
