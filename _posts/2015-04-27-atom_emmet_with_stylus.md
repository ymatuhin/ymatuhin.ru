---
layout: post
title: Фиксим Emmet под Atom для работы со Stylus файлами
categories: tools
tags: >
  atom github текстовый редактор кода плагины дополнения emmet stylus фикс
description: >
  Фиксим работоспособность плагина Emmet под Atom для препроцессора Stylus.

image:
  path: /assets/img/atom/atom_stylus_emmet.jpg
  width: 800
  height: 450
  alt: Atom + Emmet + Stylus
---

{% include media-post-image.html %}

Расширение **Emmet** отлично работает с html, css, sass, scss, less. Но есть одна проблема — *Stylus*. Видимо из-за того, что этот препроцессор не так распространен то в Emmet официально нет его поддержки. То есть наши правила на подобии `bd+` не раскрываются.

Несмотря на то, что в дополнении Stylus уже идут многие сниппеты похожие на Emmet, но не все. А переучиваться не хочется, ведь Emmet более распространен среди текстовых редакторов. Значит нужно что-то придумать для этого.

Решение нашлось очень простое, выглядит как небольшой костыль, но оно полностью рабочее. Основной смысл в том, чтобы принудительно вызывать Emmet при нажатии на Tab в файлах Stylus.

Заходим в настройки Keymap (Atom → Open Your Keymap). И в самом низу дописываем следующие строки:

```bash
'atom-text-editor[data-grammar~="stylus"]:not([mini])':
    'tab': 'emmet:expand-abbreviation-with-tab'
```

Теперь все работает хорошо.

<br><b>UPD #1</b> Добавляем поддержку Emmet для руби файлов `.erb`. Код который поможет:

```bash
'atom-text-editor[data-grammar="text html erb"]:not([mini])':
    'tab': 'emmet:expand-abbreviation-with-tab'
```
