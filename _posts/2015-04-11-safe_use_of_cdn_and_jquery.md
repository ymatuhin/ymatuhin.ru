---
layout: post
title: Безопасное использование CDN для jQuery, Angular, Bootstrap и других библиотек
categories: front-end
tags: [CDN, jQuery, fallback]
tags: >
  jquery cdn google bootstrap бесплатные free yandex сервисы для сайта angular Modernizr
description: >
  Безопасно загружаем JavaScript библиотеки из публичных CDN с fallback-ом на локальную библиотеку. Jquery, Angular JS, Bootstrap и другие.
---

Один из главных советов для оптимизации скорости загрузки сайтов является использование публичных <abbr title="Content Delivery Network">CDN</abbr> с популярными библиотеками, такими как jQuery или AngularJS.

## Преимущества CDN

1. Увеличение скорости загрузки, поскольку пользователь сможет получить контент по оптимальному маршруту за минимальное время из ближайшей точки;
1. Снижение нагрузки на наш сервер, ведь скрипты мы загружаем с чужих серверов.

В настоящий момент, очень многие используют CDN для загрузки своих скриптов. К примеру, часто можно видеть вот такой код:

~~~html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
~~~

Однако многие забывают о том, что нужно проверить, загрузился ли наш скрипт. И если не загрузился, то загрузить его с нашего сайта.

~~~html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
~~~

Конечно, это самый простой способ, применимый для большинства сайтов. Для больших <abbr title="Single Page Application">SPA</abbr> я рекомендовал бы воспользоваться асинхронной загрузкой скриптов через <a href="http://requirejs.org/">RequireJS</a>.

Пример загрузки jQuery из CDN с безопасной загрузкой с нашего сервера если с CDN возникли какие-то проблемы:

~~~js
requirejs.config({
  enforceDefine: true,
  paths: {
  jquery: [
    'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
    // Если из CDN наша библиотека не загрузилась,
    // то загружать из папки lib файл jquery.js
    'lib/jquery'
    ]
  }
});

require(['jquery'], function ($) { /* Ваш код тут */ });
~~~

В примерах использовалась библиотека jQuery, но так-же можно загружать и другие библиотеки.

### Список бесплатных CDN сервисов
1. <a href="https://developers.google.com/speed/libraries/">Google CDN</a> поддерживает Angular JS, Angular Material, Dojo, Ext JS, jQuery, jQuery Mobile, MooTools, Prototype, SWFObject, three.js, SPF и Web Font Loader;
1. <a href="https://tech.yandex.ru/jslibs/">Yandex CDN</a> (RU), из доступных библиотек AngularJS, Backbone.js, Bootstrap, D3.js, Dojo, Highlight.js,jQuery, jQuery UI, Lo-Dash, Modernizr, Raphaёl, SWFObject, Underscore.js;
1. <a href="http://code.jquery.com/">jQuery CDN</a> (только для jQuery);
1. <a href="https://www.asp.net/ajax/cdn">Microsoft CDN</a> поддерживает jQuery/UI/Mobile, Modernizr, JSHint, Bootstrap, ASP.NET Web Forms and Ajax и другие;
1. <a href="https://cdnjs.com/">Cdnjs</a> — тут есть наверное все js библиотеки, поскольку их можно захостить туда любому желающему;
1. <a href="http://www.jsdelivr.com/">jsDelivr</a> — так-же куча библиотек, можно заливать свои;
1. <a href="https://osscdn.com/">OssCDN</a> — тоже много библиотек с возможностью загружать свои;

Из всех, вышеперечисленных сервисов, только Яндекс на русском языке. Поэтому если вы не сильны в английском, я бы рекомендовал именно его. К тому-же, там действительно одни из самых популярных javascript библиотек, в том числе очень популярный бутстрап. Для которого можно так-же воспользоваться <a href="https://www.bootstrapcdn.com/">Bootstrap CDN</a>.

Если вы пишите свой, публичный скрипт, то его можно загрузить в jsDelivr/CDNjs/osscdn и пользоваться им через CDN.

А вы используете CDN для загрузки библиотек на своих проектах?
