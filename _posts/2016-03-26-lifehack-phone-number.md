---
layout: post
title: Лайфхак. Номер телефона на сайте
categories: [front-end, blog]
description: Надоели звонки от клиентов в 2 часа ночи? Покажите номер телефона на сайте только в рабочее время. Подробности в статье.
tags: [лайфхак, js, номер, телефон, блокировка в нерабочее время]
image:
  path: /assets/img/phones/phones.jpeg
  width: 770
  height: 513
---

{% include media-post-image.html %}

Если у вас небольшой бизнес, магазин или рабочий номер телефона, который отображается на сайте, и нет средств на круглосуточную поддержку по телефону, то лучше, чтобы вам звонили только в рабочее время.

Решение — написать время работы на сайте. В идеале, показать номер если время рабочее. А если нет, то написать время работы и сделать номер телефон полупрозрачным или скрыть.



Если у вас не статический сайт, то лучше реализовать это на сервере. Как это сделать на PHP описано в «[блоге Жаржана][1]{:rel=’nofollow’}». Но Jekyll и статические сайты набирают популярность, а в них реализовать это можно только на JavaScript.

Как эксперимент я написал простенькую функцию для этого. В ней не используются новые возможности JS, поскольку этот кусочек будет использоваться как «быстрое решение» и никому не захочется возиться с транспайлерами.

```js
function isGoodTime (params) {
    params = params || {};
    var today = new Date();
    var day = today.getDay();
    var user_offset = today.getTimezoneOffset() / 60 * -1;
    var your_offset = +params.offset || 3;
    var diff_offset = your_offset - user_offset;
    var minutes_now = today.getHours() * 60 + today.getMinutes() + diff_offset * 60;

    if (!params.weekends && (day == 6 || day == 0)) return false;
    if (!params.weekdays && (day > 0 || day < 6)) return false;

    if (day > 0 && day < 6) {
        var wd_from = params.weekdays.from.split(':');
        var wd_to = params.weekdays.to.split(':');
        var from = wd_from[0] * 60 + +wd_from[1];
        var to = wd_to[0] * 60 + +wd_to[1];

        if (minutes_now > from && minutes_now < to) return true;
    } else {
        var we_from = params.weekends.from.split(':');
        var we_to = params.weekends.to.split(':');
        var from = we_from[0] * 60 + +we_from[1];
        var to = we_to[0] * 60 + +we_to[1];

        if (minutes_now > from && minutes_now < to) return true;
    }
    return false;
};
```

И пример использования:

```js
var available = isGoodTime({
    offset: '+3',
    weekdays: {
        from:   '08:30',
        to:     '16:30',
    },
    weekends: {
        from:   '08:30',
        to:     '15:30',
    }
});
```

[1]: http://jarjan.xyz/callcenter-lifehack
