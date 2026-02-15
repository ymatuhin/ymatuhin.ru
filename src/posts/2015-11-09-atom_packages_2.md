---
layout: post
title: 'Плагины для Atom #2'
description: >-
  Продолжение стати «Лучшие плагины для текстового редактора Atom». Я расскажу о новых плагинах,
  которые часто мне помогают.
tags:
  - development
  - tools
  - editors
  - plugins
  - atom
image:
  path: atom/plugins_2/atom-logo.png
redirects:
  - /tools/atom_packages_2/
---

{% mediaImage image.path, image.alt, "eager" %}

Продолжение стати «[Лучшие плагины для текстового редактора Atom](/tools/atom_packages_1/)». Я расскажу о новых
плагинах, которые часто мне помогают. Надеюсь, они помогут и вам.
Осторожно, много картинок.

* [Advanced Open File][open-file]{:rel='nofollow'} — подходит для создания новых папок/файлов и открытия файлов вне
  директории проекта (в проекте удобнее открывать через `cmd+p`).

  {% mediaImage "atom/plugins_2/file.gif", "Advanced Open File" %}

* [Atom TernJS][tern]{:rel='nofollow'} — умное автодополнение и навигация по JavaScript коду.
* [Auto Update Packages][auto-upd]{:rel='nofollow'} — автоматическое обновление плагинов раз в 15 минут.
* [Autocomplete Paths][paths]{:rel='nofollow'} — дополнение для автокомплита, подставляет пути для link, src, require.

  {% mediaImage "atom/plugins_2/path.gif", "Autocomplete Paths" %}

* [Git Projects][git]{:rel='nofollow'} — позволяет переключаться между git репозиториями.

  {% mediaImage "atom/plugins_2/git.gif", "Git Projects" %}

* [Highlight Selected][highlight-selected]{:rel='nofollow'} — при выделении части слова подсвечиваются все слова
  содержащие эту часть.

  {% mediaImage "atom/plugins_2/selected.gif", "Highlight Selected" %}

* [Jumpy][jumpy]{:rel='nofollow'} — замена устаревшему плагину easy-motion. Советую задать размер шрифта 1. С помощью
  него можно так-же выделять участки текста.

  {% mediaImage "atom/plugins_2/jump.gif", "Jumpy" %}

* [Minimap find and replace][minimap]{:rel='nofollow'} — подсвечивает найденные в поиске слова на миникарте.

* [Pigments][pigments]{:rel='nofollow'} — отображает цвета в файлах.

  {% mediaImage "atom/plugins_2/colors.gif", "Pigments" %}

* [Regex Railroad Diagram][regex]{:rel='nofollow'} — гениальный плагин для регулярных выражений. Показывает графически
  как работает регулярные выражения.

  {% mediaImage "atom/plugins_2/regex.png", "Regex Railroad Diagram" %}

* [Space Tab][space-tab]{:rel='nofollow'} — конвертирование пробелов в табы и наоборот.
* [Symbols Tree View][tree]{:rel='nofollow'} — панелька со списком функций и переменных, как в WebStorm. Для удобства
  советую включить все галочки, и написать в AutoHiddenTypes `"variable class", Var, Vars, var`. Это исключит переменные
  из панели и сама панель будет появляться только при наведении на неё.

  {% mediaImage "atom/plugins_2/tree.gif", "Symbols Tree View" %}

* [Synced Sidebar][sidebar]{:rel='nofollow'} — синхронизирует боковую панель выделяя в нем активный файл.

  {% mediaImage "atom/plugins_2/sidebar.gif", "Synced Sidebar" %}

* [Typewriter Sounds][sound1]{:rel='nofollow'} / [Mechanical Keyboard][sound2]{:rel='nofollow'} — два плагина, которые
  добавляют звук во время печати. Мне не очень понравились, но идея прикольная.
* [Zen][zen]{:rel='nofollow'} — устраняет лишний шум из редактора. Подходит для написания статей и заметок. Заменяет
  минималистичные редакторы для писателей под Mac. Из крутых фич — настройка __Typewriter__, при которой ваш курсор
  центрируется на экране по вертикали.

  {% mediaImage "atom/plugins_2/zen.png", "Zen" %}

[zen]: https://atom.io/packages/zen

[open-file]: https://atom.io/packages/advanced-open-file

[tern]: https://atom.io/packages/atom-ternjs

[auto-upd]: https://atom.io/packages/auto-update-packages

[paths]: https://atom.io/packages/autocomplete-paths

[git]: https://atom.io/packages/git-projects

[jumpy]: https://atom.io/packages/jumpy

[minimap]: https://atom.io/packages/minimap-find-and-replace

[pigments]: https://atom.io/packages/pigments

[space-tab]: https://atom.io/packages/space-tab

[tree]: https://atom.io/packages/symbols-tree-view

[regex]: https://atom.io/packages/regex-railroad-diagram

[sidebar]: https://atom.io/packages/synced-sidebar

[sound1]: https://atom.io/packages/typewriter-sounds

[sound2]: https://atom.io/packages/mechanical-keyboard

[highlight-selected]: https://atom.io/packages/highlight-selected
