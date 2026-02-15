---
layout: post
title: Безопасное использование CDN для jQuery, Angular, Bootstrap и других библиотек
description: Безопасно загружаем JavaScript библиотеки из публичных CDN с fallback-ом на локальную библиотеку. Jquery, Angular JS, Bootstrap и другие.
tags:
  - frontend
  - CDN
  - jQuery
  - fallback
  - google
  - bootstrap
  - бесплатные
  - free
  - yandex
  - сервисы
  - сайта
  - angular
  - Modernizr
redirects:
  - /front-end/safe_use_of_cdn_and_jquery/
---

Один из главных советов для оптимизации скорости загрузки сайтов является использование
публичных <abbr title="Content Delivery Network">CDN</abbr> с популярными библиотеками, такими как jQuery или
AngularJS.

## Преимущества CDN

1. Увеличение скорости загрузки, поскольку пользователь сможет получить контент по оптимальному маршруту за
   минимальное время из ближайшей точки;
1. Снижение нагрузки на наш сервер, ведь скрипты мы загружаем с чужих серверов.

В настоящий момент, очень многие используют CDN для загрузки своих скриптов. К примеру, часто можно видеть вот такой
код:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
```

Однако многие забывают о том, что нужно проверить, загрузился ли наш скрипт. И если не загрузился, то загрузить его
с нашего сайта.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
```

Конечно, это самый простой способ, применимый для большинства сайтов. Для больших <abbr title="Single Page Application">
SPA</abbr> я рекомендовал бы воспользоваться асинхронной загрузкой скриптов через [
RequireJS](http://requirejs.org/).

Пример загрузки jQuery из CDN с безопасной загрузкой с нашего сервера если с CDN возникли какие-то проблемы:

```js
requirejs.config({
  enforceDefine: true,
  paths: {
  jquery: [
    'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
    // Если из CDN наша библиотека не загрузилась,
    // то загружать из папки lib файл jquery.js
    'lib/jquery'
    ]
  }
});

require(['jquery'], function ($) { /* Ваш код тут */ });
```

В примерах использовалась библиотека jQuery, но так-же можно загружать и другие библиотеки.

### Список бесплатных CDN сервисов

1. [Google CDN](https://developers.google.com/speed/libraries/) поддерживает Angular JS, Angular Material,
   Dojo, Ext JS, jQuery, jQuery Mobile, MooTools, Prototype, SWFObject, three.js, SPF и Web Font Loader;
1. [Yandex CDN](https://tech.yandex.ru/jslibs/) (RU), из доступных библиотек AngularJS, Backbone.js,
   Bootstrap, D3.js, Dojo, Highlight.js,jQuery, jQuery UI, Lo-Dash, Modernizr, Raphaёl, SWFObject, Underscore.js;
1. [jQuery CDN](http://code.jquery.com/) (только для jQuery);
1. [Microsoft CDN](https://www.asp.net/ajax/cdn) поддерживает jQuery/UI/Mobile, Modernizr, JSHint, Bootstrap,
   ASP.NET Web Forms and Ajax и другие;
1. [Cdnjs](https://cdnjs.com/) — тут есть наверное все js библиотеки, поскольку их можно захостить туда
   любому желающему;
1. [jsDelivr](http://www.jsdelivr.com/) — так-же куча библиотек, можно заливать свои;
1. [OssCDN](https://osscdn.com/) — тоже много библиотек с возможностью загружать свои;

Из всех, вышеперечисленных сервисов, только Яндекс на русском языке. Поэтому если вы не сильны в английском, я бы
рекомендовал именно его. К тому-же, там действительно одни из самых популярных javascript библиотек, в том числе
очень популярный бутстрап. Для которого можно так-же воспользоваться [Bootstrap
CDN](https://www.bootstrapcdn.com/).

Если вы пишите свой, публичный скрипт, то его можно загрузить в jsDelivr/CDNjs/osscdn и пользоваться им через CDN.

А вы используете CDN для загрузки библиотек на своих проектах?
