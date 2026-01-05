---
layout: post
title: 'Плагины для Atom #2'
categories: tools
description: >
  Плагины и дополнения для текстового редактора Atom: advanced-open-file, ternjs, auto-update, autocomplete-paths, git-projects, highlight-selected, jumpy, minimap, pigments, regex-railroad-diagram, space-tab, symbols-tree-view, synced-sidebar, mechanical-keyboard, zen.
tags: [Atom, плагины, текстовый редактор]

image:
  path: /assets/img/atom/plugins_2/atom-logo.png
  width: 1200
  height: 630
---

{% comment %} include media-post-image.html {% endcomment %} %}

Продолжение стати «[Лучшие плагины для текстового редактора Atom](/tools/atom_packages_1/)». Я расскажу о новых плагинах, которые часто мне помогают. Надеюсь, они помогут и вам.
Осторожно, много картинок.



* [Advanced Open File][open-file]{:rel='nofollow'} — подходит для создания новых папок/файлов и открытия файлов вне директории проекта (в проекте удобнее открывать через `cmd+p`).

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/file.gif"
		width="696"
		height="415"
		alt="Advanced Open File"
	%} {% endcomment %}

* [Atom TernJS][tern]{:rel='nofollow'} — умное автодополнение и навигация по JavaScript коду.
* [Auto Update Packages][auto-upd]{:rel='nofollow'} — автоматическое обновление плагинов раз в 15 минут.
* [Autocomplete Paths][paths]{:rel='nofollow'} — дополнение для автокомплита, подставляет пути для link, src, require.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/path.gif"
		width="435"
		height="233"
		alt="Autocomplete Paths"
	%} {% endcomment %}

* [Git Projects][git]{:rel='nofollow'} — позволяет переключаться между git репозиториями.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/git.gif"
		width="893"
		height="566"
		alt="Git Projects"
	%} {% endcomment %}

* [Highlight Selected][highlight-selected]{:rel='nofollow'} — при выделении части слова подсвечиваются все слова содержащие эту часть.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/selected.gif"
		width="416"
		height="154"
		alt="Highlight Selected"
	%} {% endcomment %}

* [Jumpy][jumpy]{:rel='nofollow'} — замена устаревшему плагину easy-motion. Советую задать размер шрифта 1. С помощью него можно так-же выделять участки текста.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/jump.gif"
		width="801"
		height="646"
		alt="Jumpy"
	%} {% endcomment %}

* [Minimap find and replace][minimap]{:rel='nofollow'} — подсвечивает найденные в поиске слова на миникарте.

* [Pigments][pigments]{:rel='nofollow'} — отображает цвета в файлах.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/colors.gif"
		width="845"
		height="554"
		alt="Pigments"
	%} {% endcomment %}

* [Regex Railroad Diagram][regex]{:rel='nofollow'} — гениальный плагин для регулярных выражений. Показывает графически как работает регулярные выражения.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/regex.png"
		width="798"
		height="717"
		alt="Regex Railroad Diagram"
	%} {% endcomment %}

* [Space Tab][space-tab]{:rel='nofollow'} — конвертирование пробелов в табы и наоборот.
* [Symbols Tree View][tree]{:rel='nofollow'} — панелька со списком функций и переменных, как в WebStorm. Для удобства советую включить все галочки, и написать в AutoHiddenTypes `"variable class", Var, Vars, var`. Это исключит переменные из панели и сама панель будет появляться только при наведении на неё.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/tree.gif"
		width="1459"
		height="815"
		alt="Symbols Tree View"
	%} {% endcomment %}

* [Synced Sidebar][sidebar]{:rel='nofollow'} — синхронизирует боковую панель выделяя в нем активный файл.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/sidebar.gif"
		width="1920"
		height="1080"
		alt="Synced Sidebar"
	%} {% endcomment %}

* [Typewriter Sounds][sound1]{:rel='nofollow'} / [Mechanical Keyboard][sound2]{:rel='nofollow'} — два плагина, которые добавляют звук во время печати. Мне не очень понравились, но идея прикольная.
* [Zen][zen]{:rel='nofollow'} — устраняет лишний шум из редактора. Подходит для написания статей и заметок. Заменяет минималистичные редакторы для писателей под Mac. Из крутых фич — настройка __Typewriter__, при которой ваш курсор центрируется на экране по вертикали.

	{% comment %} {%
		include media-image.html
		url="atom/plugins_2/zen.png"
		width="1280"
		height="800"
		alt="Zen"
	%} {% endcomment %}

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
