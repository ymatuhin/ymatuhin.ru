---
layout: page
title: Как пользоваться автопрефиксером онлайн
s_title: Инструкция к автопрефиксеру онлайн
permalink: /autoprefixer_instruction/index.html
redirect_from:
  - /projects/autoprefixer_instruction.html
description: >
  Инструкция по использованию сервиса Autoprefixer online и настройка фильтра браузеров.
---

В процессе разработки веб сайтов и приложений, разработчик сталкивается с проблемой поддержки всех, нужных для него, браузеров. Но некоторые свойства работают только с вендорными префиксами (в некоторых браузерах). Для это был создан проект **Autoprefixer**.

В идеальном варианте, его нужно встроить в систему сборки проекта (_gulp_ или _grunt_). Но это не всегда возможно. Иногда нам нужно просто проверить нужны ли префиксы для определенного свойства или просто расставить нужные и убрать ненужные. И для этого, а может и для чего-то еще был написан [Autoprefixer online](https://autoprefixer.github.io).

Сервис очень прост в использовании. В левую колонку вставляете свой CSS код, а в правой получается он же, но только после расстановки и удаления вендорных префиксов в зависимости от выбранных вами браузеров (по умолчанию последние 2 версии).



{% mediaImage "autoprefixer/autoprefixer.png", "Autoprefixer online" %}

## <a id="browsers_settings"></a>Настройка поддерживаемых браузеров

Часто у людей, не знакомых с синтаксисом автопрефиксера, возникают проблемы с фильтром для браузеров.

{% mediaImage "autoprefixer/filter.png", "Фильтр браузеров для autoprefixer online" %}

По умолчанию автопрефиксер поддерживает последние 2 версии основных браузеров (таких, как google chrome и т.д.). Но вы можете выбрать, какие браузеры вам нужны по имени (к примеру `"ff 21"` &mdash; это Firefox 21 версии) или по шаблонам.

Последние 2 версии основных браузеров &mdash; `"last 2 versions"`. Браузеры с долей пользования больше чем 1% в мире &mdash; `"> 1%"`. Новые версии браузера начиная с определенной версии &mdash; `"ff > 20"` или `"ff >= 20"`. Или же можно написать просто название и версию браузера &mdash; `iOS 7`

**Список браузеров доступных для использования в фильтре:**

1. `Android`.
1. `BlackBerry` или `bb` для браузера Blackberry.
1. `Chrome` для Google Chrome.
1. `Firefox` или `ff` для Mozilla Firefox.
1. `Explorer` или `ie` для Internet Explorer.
1. `iOS` или `ios_saf` для iOS Safari.
1. `Opera` для Opera.
1. `Safari` для десктопного Safari.
1. `OperaMobile` или `op_mob` для Opera Mobile.
1. `OperaMini` или `op_mini` для Opera Mini.
1. `ChromeAndroid` или `and_chr` для Chrome под Android (очень похож с `Chrome`).
1. `FirefoxAndroid` или `and_ff` для Firefox для Android.
1. `ExplorerMobile` или `ie_mob` для Internet Explorer Mobile.

К примеру у вас нет поддержки мобильных браузеров, Internet Explorer версии 8+ и последние 3 версии основных браузеров.

Для этого вы можете написать `ie >= 8, last 3 versions, > 2%`.

На всякий случай я включил в пример поддержку браузеров с долей выше 2%, на всякий случай.

Дополнения и замечания оставляйте на [github](https://github.com/autoprefixer/autoprefixer.github.io).

Актуальных префиксов вам вместе с [Autoprefixer online](https://autoprefixer.github.io).
