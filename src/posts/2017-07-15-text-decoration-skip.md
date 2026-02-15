---
layout: post
title: Адекватное подчеркивание ссылок
description: 'Как исправить поведение text-decoration: underline'
tags:
  - development
  - frontend
  - css
  - links
image:
  path: text-decoration/preview.png
  alt: Пример css свойства text-decoration-skip
redirects:
  - /front-end/text-decoration-skip/
---
{% mediaImage image.path, image.alt %}

Стандартное подчеркивание — ад перфекциониста. Оно нагло перекрывает висячие символы в тексте, его становится сложнее
читать, и это режет глаза.

Для решения этой проблемы есть разные способы: SASS-миксины и JS-библиотеки. Эти методы не лишины недостатков, для
миксинов нужен был однородный фон, а для библиотеки сами по себе большие и неудобные.

Благо ребята из w3с стандартизировали
свойство [text-decoration-skip](https://www.w3.org/TR/css-text-decor-3/#text-decoration-skip), указав которое, можно
заставить подчеркивание прерываться на висячих символах. Всего пара строчек, и моментально ваш сайт станет чуточку
удобнее и лучше.

```css
a {
    -webkit-text-decoration-skip: ink;
    text-decoration-skip: ink;
}
```

[Демка](https://codepen.io/ymatuhin/pen/rwRvQr?editors=1100){:class="bigger"} и поддержка бразузерами.

{% mediaImage "text-decoration/support.png", "Данные о свойстве text-decoration-skip c сайта caniuse.com" %}

### Примечания

* В сафари на macOS подчеркивание выглядит хорошо и без text-decoration-skip
* В хроме можно установить
  расширение [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)
  и добавить туда:
    ```css
    a {
        -webkit-text-decoration-skip: ink;
        text-decoration-skip: ink;
    }
    ```
  Это исправит подчеркивание на всех сайтах.
