---
layout: post
title: 'Ускоряем загрузку ресурсов для сайта: preconnect, prefetch, prerender, preloading…'
categories: front-end
description: HTML5 Link Prefetch указывает браузеру какие ресурсы вам понадобятся в будущем на сайте и максимально подготовит их дальнейшую загрузку.
tags: [cdn, preconnect, prefetch, prerender, preloading, оптимизация]

image:
  path: /assets/img/link_prefetch/html5_link_prefetch.png
  caption: Стадии загрузки ресурса / HTML5 Link Prefetch
  width: 1144
  height: 564
---

{% include media-post-image.html %}

Сегодня мы рассмотрим «HTML5 Link Prefetch», а именно dns-prefetch, prefetch, preconnect, subresource, prerender и еще неработающий preload. HTML5 Link Prefetch уменьшит время загрузки для ресурсов, которые нам понадобятся позже.



## Dns-prefetch

Перед тем, как начать загружать сожержимое сайта `http://example.com`, браузеру нужно установить его IP адрес. И только после этого он сможет загрузить от туда содержимое. Конечно, на это потребуется какое-то время.

Если вам нужно что-то загрузить с другого домена, укажите `<link rel='dns-prefetch' href='//example.com'>`. Браузер преобразует имя домена в IP адрес в фоне. Теперь, когда очередь дойдет до ресурсов, они загрузятся минуя стадию prepresolve. [Поддержка браузерами](http://caniuse.com/#search=dns-prefetch){:rel='nofollow'} и пример:

~~~html
<meta http-equiv="x-dns-prefetch-control" content="on">
<link rel="dns-prefetch" href="//ajax.googleapis.com">
~~~

Пример для Amazon CDN:

~~~html
<meta http-equiv='x-dns-prefetch-control' content='on'>
<link rel='dns-prefetch' href='http://g-ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://z-ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://completion.amazon.com'>
<link rel='dns-prefetch' href='http://fls-na.amazon.com'>
~~~

## Preconnect

Похоже на dns-prefetch, только круче. Помимо DNS устанавливает TCP, TLS связь. Помогает предгрузить соединение для веб сокетов. [Поддержка браузерами](http://caniuse.com/#search=preconnect){:rel='nofollow'} и пример:

~~~html
<link rel="preconnect" href="//www.example.com">
~~~

## Prefetch

Указываем браузеру что этот ресурс потребуется нам и браузер загрузит его с низким приоритетом и положит в кэш.

Браузер может не загрузить большие файлы при медленном соединении, а Firefox загружает ресурсы только в режиме простоя. [Поддержка браузерами](http://caniuse.com/#search=prefetch){:rel='nofollow'} и пример:

~~~html
<!-- всю страницу -->
<link rel="prefetch" href="https://ymatuhin.ru">

<!-- только изображение -->
<link rel="prefetch" href="https://ymatuhin.ru/img/yury_matuhin.jpg">
~~~


## Subresource

То-же что и prefetch, только с высоким приоритетом. Поэтому я бы рекомендовал добавлять этот атрибут для критических стилей. [Поддержка браузерами](http://caniuse.com/#search=subresource){:rel='nofollow'} и пример:

~~~html
<link rel="subresource" href="critical/app.js">
<link rel="subresource" href="critical/style.css">
~~~

## Prerender

Этот параметр заранее загружает ресурс или страницу и всё её содержимое в фоне. Это как открытие страницы в фоновой вкладке. Браузер загрузит все ресурсы, построит DOM, применит CSS и JS. А когда пользователь перейдет по ссылке, скрытая страница станет заместо текущей и загрузится моментально.

В Google поиске давно действует такая штука под названием Instant Pages, Microsoft недавно объявили что они будут использовать prerender в Bing на IE11. [Поддержка браузерами](http://caniuse.com/#search=prerender){:rel='nofollow'} и пример:

~~~html
<link rel="prerender" href="https://ymatuhin.ru/index.html">
~~~

## Preloading

Эта штука еще не работает, но её внесли в [спецификацию](https://w3c.github.io/preload/){:rel='nofollow'}. Работает так-же как и prefetch, но браузер всегда загрузит ресурс. Аналог прелоадеров для картинок, только нативный. Пока он не поддерживается, используйте prefetch. Пример:

~~~html
<link rel="preload" href="image.png">
~~~

## Добавление через JavaScript

Не обязательно указывать эти теги в HTML, генерируйте по мере необходимости для нужных ресурсов:

~~~javascript
function add_hint(type, url) {
    if (!type || !url) return;

    var el = document.createElement("link");
    el.setAttribute("rel", type);
    el.setAttribute("href", url);
    document.getElementsByTagName("head")[0].appendChild(el);
}

add_hind('prefetch', 'http://ya.ru');
~~~

### Дополнительная информация
На этом сайте я использую prefetch для подготовке к загрузке файла, который подсвечивает код, если такой блок находится на странице. Dns-prefetch для ускорения загрузки яндекс метрики. И скрипт, для ускорения переходов между страницами:

~~~javascript
document.addEventListener("mousemove", function (e) {
    if (!e.target.href ||
        e.target.href.indexOf(location.host) == -1 ||
        e.target.hintAdded) return;

    // функция описана выше
    add_hint('prerender', e.target.href);
    e.target.hintAdded =  true;
});
~~~

Если браузер не поддерживает HTML5 Link Prefetch, то проигнорирует эти атрибуты, поэтому их можно безопасно использовать.

### Cсылки
* [Eliminating Roundtrips with Preconnect](https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/){:rel='nofollow'}
* [MDN link prefetching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ){:rel='nofollow'}
* [W3C resource-hints](http://www.w3.org/TR/resource-hints/){:rel='nofollow'}
