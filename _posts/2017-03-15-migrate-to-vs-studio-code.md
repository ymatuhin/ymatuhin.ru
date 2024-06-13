---
layout: post
title: Миграция на Visual Studio Code
description: Как безболезненно мигрировать с Atom/Sublime Text на Visual Studio Code
categories: tools
tags: [vscode, tools, editor]
image:
    path: /assets/img/vscode/icon-dribbble.png
    width: 800
    height: 480
    caption: Альтернативная версия иконки для VS Code, автор <a href='https://dribbble.com/shots/2436746-Visual-Studio-Code-replacement-icon'>James Gilyead</a>
---

{% include media-post-image.html %}

Уже 2 недели я использую [Visual Studio Code](https://code.visualstudio.com/) для работы. Он пришел на замену, моему любимому, атому. В этой статье я расскажу почему так произошло и поделюсь впечатлениями.

## Почему захотелось перейти

Основная причина перейти на другой текстовый редактор &mdash; *ужасная тормознутость* Atom. Случайно откроешь не тот файл, который чуть больше половины мегабайта и снова приходится открывать диспетчер задач.

Вторая же причина &mdash; у VS Code встроенный IntelliSense. Т.е. он могет как крутая IDE оставаясь таким же легковесным как Sublime Text.

### Что мешало миграции

Самая большая проблема &mdash; нужно привыкать к новым горячим клавишам (хоткеям). Именно это мне помешало перейти на VS Code пол года назад. В этот раз я основательно подготовился и нашел плагины, которые делают VS Code похожим на Atom:

1. [Atom keymap][1] &mdash; переносит привычные сочетания из Atom в VS Code. Автор плагина &mdash; Microsoft. Как же я рад что они сделали это.
1. [Join lines][2] &mdash; фиксит не работающее сочетание `CMD + J`
1. [Atom One Dark Theme][3] &mdash; привычная тема из Atom
1. [Material Icon Theme][4] &mdash; иконки для файлов
1. [Duplicate action][17] &mdash; дублирование файла/директории через контекстное меню в боковой панели (спасибо *c01nd01r*)

После этого, большинство проблема отпали сами собой.

### Мои расширения под VS Code

Помимо описанных выше, я так-же установил:

1. [Babel ES6/ES7][14] &mdash; подсветка es6/es7
1. [Beautify][5] &mdash; форматирование документа, взято исключительно из-за параметра `wrap_attributes`, который переносит html аттрибуты на новую строчку
1. [Sass][15] &mdash; думаю тут все понятно
1. [Path Intellisense][6] &mdash; автодополнение для путей к файлам
1. [Prettier &mdash; JavaScript formatter][7] &mdash; форматирование при сохранении, временно требуется для NodeJS курсов
1. [Project Manager][8] &mdash; менеджер проектов, такой-же как в Atom
1. [Colorize][9] &mdash; подсветка цветов
1. [Custom CSS and JS Loader][10] &mdash; подгрузка своего CSS и JS для изменений внутри VS Code
1. [Hex-rgba converter][11] &mdash; конвертер цветов
1. [ESLint][12] &mdash; линтер
1. [HTML CSS Support][13] &mdash; автодополнение классов в HTML
1. [EditorConfig for VS Code][16] &mdash; поддержка EditorConfig

### Размышления в конце

Редактором VS Code я доволен. Думаю что всем кому не подошел Atom, подойдет VS Code. Который исправил все проблемы, которые были в атоме и доказал что проблема не в лагучем Electron (читай JavaScript).

Если у вас есть чем дополнить статью или вы хотите поделиться вашим опытом использования этого редактора &mdash; милости прошу в комментарии.

Спасибо за внимание.

#### Из комментариев

1. [Duplicate action][17] &mdash; дублирование файла/директории через контекстное меню в боковой панели (спасибо *c01nd01r*)
1. [SCSS IntelliSense][18] &mdash; автодополнение для переменных в SCSS (спасибо *c01nd01r*)
1. [Express][19] &mdash; управление экспресс сервером (спасибо *Владиславу Алтынцеву*)
1. [Settings Sync][20] &mdash; синхронизация настроек (спасибо *LeusMaximus*)
1. [Untabify][21] &mdash; замена табов на пробелы и наоборот (спасибо *Виталию Юрьеву*)
1. [Jumpy][22] &mdash; прыгает по коду (спасибо *Виталию Юрьеву*)
1. [Git blame][23] &mdash; показыет кто и когда редактировал текующу строку (спасибо *Виталию Юрьеву*)

[1]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings
[2]: https://marketplace.visualstudio.com/items?itemName=wmaurer.join-lines
[3]: https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark
[4]: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme

[5]: https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify
[6]: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
[7]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[8]: https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager
[9]: https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize
[10]: https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css
[11]: https://marketplace.visualstudio.com/items?itemName=medzhidov.hex-rgba-converter
[12]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[13]: https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css
[14]: https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring
[15]: https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented
[16]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

[17]: https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-duplicate
[18]: https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss

[19]: https://marketplace.visualstudio.com/items?itemName=Compulim.vscode-express
[20]: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync

[21]: https://marketplace.visualstudio.com/items?itemName=ilich8086.Untabify
[22]: https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy
[23]: https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame
