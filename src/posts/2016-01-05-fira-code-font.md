---
layout: 'post'
title: 'Fira Code: шрифт с лигатурами для кода'
description: 'Моноширинный шрифт Fira Code объединяет конструкции языков программирования из нескольких символов в один, визуально понятный и приятный.'
categories: 'tools'
tags:
  - 'font'
  - 'text editor'
  - 'settings'
image:
  path: 'fira-code/fira-code.png'
  alt: 'Fira Code: шрифт с лигатурами для кода'
---

{% mediaImage image.path, image.alt %}

В языках программирования много составных операторов, таких как `:=`, `>=`, `<=`, `===`, `!==`. Это одна логическая единица, но она занимает 2 или 3 символа. Это затрудняет чтение и анализ кода, хоть мы и привыкли к этому.

[Fira code](https://github.com/tonsky/FiraCode){:rel='nofollow'} - моноширинный шрифт, в котором используются лигатуры (объединяет несколько символов в один) для общих комбинаций символов в программировании. Это только визуальная надстройка, с которой читать и понимать код быстрее. Символы остаются такими-же, как и были до этого, только выглядят по другому.



## Возможности шрифта

{% mediaImage "fira-code/all_ligatures.png", "Символы заменяемые лигатурами шрифта Fira Code" %}

## Поддержка терминалами

Работает | Не работает
------- | ---------------
**Terminal.app** (OS X терминал по умолчанию) | **iTerm 2** ([топик о поддержке](https://gitlab.com/gnachman/iterm2/issues/3568){:rel='nofollow'})
**Konsole** (за исключением KDE4) | **GNOME Terminal**
**Termux** (Android эмулятор терминала) | **rxvt**

## Поддержка редакторами

Работает | Не работает
--------|----------------
**Atom** 1.1 или выше ([инструкция](https://github.com/tonsky/FiraCode/wiki/Atom-instructions){:rel='nofollow'}) | SublimeText ([голосование](http://sublimetext.userecho.com/topic/1030059-does-sublimetext-support-programming-ligatures-fontlike-fira-code/){:rel='nofollow'})
**IntelliJ**  products (IDEA etc, [инструкция](#https://github.com/tonsky/FiraCode/wiki/Intellij-products-instructions){:rel='nofollow'}) | **Xamarin Studio/Monodevelop**
**Xcode** (c [плагином](https://github.com/robertvojta/LigatureXcodePlugin){:rel='nofollow'}) | **Intellij Idea-based** ([голосование](https://youtrack.jetbrains.com/issue/IDEA-127539){:rel='nofollow'})
**Visual Studio** | **Visual Studio Code** ([голосование](https://github.com/Microsoft/vscode/issues/192){:rel='nofollow'})
**TextMate 2** | **Standalone Emacs** ([workaround](https://github.com/tonsky/FiraCode/wiki/Setting-up-Emacs){:rel='nofollow'})
**MacVim** 7.4 или выше ([инструкция](https://github.com/tonsky/FiraCode/wiki/MacVim-instructions){:rel='nofollow'}) | **gVim**
**Coda 2** | **Notepad++**
**Eclipse** (Linux) | **Eclipse** (Mac и Win, [голосование](https://bugs.eclipse.org/bugs/show_bug.cgi?id=398656){:rel='nofollow'})
**QtCreator** |
**LightTable** ([инструкция](https://github.com/tonsky/FiraCode/wiki/LightTable-instructions){:rel='nofollow'}) |
**BBEdit** ([инструкция](https://github.com/tonsky/FiraCode/wiki/BBEdit-instructions){:rel='nofollow'}) |
**RStudio** |
**Chocolat** |
**Kate, KWrite** (за исключением KDE 4) |
**Mancy** |
**TextAdept** (Linux, Mac) |
**GNOME Builder** |
**Leafpad** |
**Notepad** (Win) |
Возможно работает: **Geany, gEdit, Smultron, Vico** |

> Поддержка постоянно меняется, актуальную таблицу можно найти в [репозитории](https://github.com/tonsky/FiraCode){:rel='nofollow'}.

## Поддержка браузерами

* IE 10+, Edge: работает со свойством `font-feature-settings: "calt" 1;`
* Firefox
* Safari
* Браузеры на Chromium: работают со свйоством `font-variant-ligatures: contextual;` или `text-rendering: optimizeLegibility` (подробнее [571246](https://code.google.com/p/chromium/issues/detail?q=font-variant-ligatures&id=571246&thanks=571246&ts=1450553433&){:rel='nofollow'})
* ACE
* CodeMirror

## Примеры шрифта

### Ruby
{% mediaImage "fira-code/ruby.png", "" %}

### JavaScript
{% mediaImage "fira-code/javascript.png", "" %}

### Erlang
{% mediaImage "fira-code/erlang.png", "" %}

### Go
{% mediaImage "fira-code/go.png", "" %}

### Haskell
{% mediaImage "fira-code/haskell.png", "" %}

### В браузере
{% mediaImage "fira-code/in-browser.png", "" %}

### В редакторе
{% mediaImage "fira-code/in-editor.png", "" %}

### Альтернативы

- [Hasklig](https://github.com/i-tu/Hasklig){:rel='nofollow'} (free)
- [PragmataPro](http://www.fsd.it/fonts/pragmatapro.htm){:rel='nofollow'} (€59)
- [Monoid](http://larsenwork.com/monoid/){:rel='nofollow'} (free)

---

[Скачать](https://github.com/tonsky/FiraCode/archive/master.zip){:rel='nofollow'} шрифт Fira Code архивом. Обновления в twitter  [@FiraCode](https://twitter.com/@FiraCode){:rel='nofollow'}.
