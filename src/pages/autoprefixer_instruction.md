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

В&nbsp;процессе разработки веб сайтов и&nbsp;приложений, разработчик сталкивается с&nbsp;проблемой поддержки всех, нужных для него, браузеров. Но&nbsp;некоторые свойства работают только с&nbsp;вендорными префиксами (в&nbsp;некоторых браузерах). Для это был создан проект **Autoprefixer**.

В&nbsp;идеальном варианте, его нужно встроить в&nbsp;систему сборки проекта (_gulp_ или _grunt_). Но&nbsp;это не&nbsp;всегда возможно. Иногда нам нужно просто проверить нужны&nbsp;ли префиксы для определенного свойства или просто расставить нужные и&nbsp;убрать ненужные. И&nbsp;для этого, а&nbsp;может и&nbsp;для чего-то еще был написан <a href="https://autoprefixer.github.io">Autoprefixer online</a>.

Сервис очень прост в&nbsp;использовании. В&nbsp;левую колонку вставляете свой CSS код, а&nbsp;в&nbsp;правой получается он-же, но&nbsp;только после расстановки и&nbsp;удаления вендорных префиксов в&nbsp;зависимости от&nbsp;выбранных вами браузеров (по&nbsp;умолчанию последние 2&nbsp;версии).



{%
	include "media-image.liquid",
	url: "autoprefixer/autoprefixer.png",
	width: "1280",
	height: "701",
	caption: "Autoprefixer online"
%}

## <a id="browsers_settings"></a>Настройка поддерживаемых браузеров

Часто у&nbsp;людей, не&nbsp;знакомых с&nbsp;синтаксисом автопрефиксера, возникают проблемы с&nbsp;фильтром для браузеров.

{%
	include "media-image.liquid",
	url: "autoprefixer/filter.png",
	width: "397",
	height: "40",
	caption: "Фильтер браузеров для autoprefixer online"
%}

По&nbsp;умолчанию автопрефиксер поддерживает последние 2&nbsp;версии основных браузеров (таких как google chrome и&nbsp;т.д.). Но&nbsp;вы&nbsp;можете выбрать, какие браузеры вам нужны по&nbsp;имени (к&nbsp;примеру `&quot;ff 21&quot;` &mdash; это Firefox 21&nbsp;версии) или по&nbsp;шаблонам.

Последние 2&nbsp;версии основных бразуеров&nbsp;&mdash; `&quot;last 2&nbsp;versions&quot;`. Браузеры с&nbsp;долей пользования больше чем&nbsp;1% в&nbsp;мире&nbsp;&mdash; `&quot;&gt; 1%&quot;`. Новые версии браузера начиная с&nbsp;определенной версии&nbsp;&mdash; `&quot;ff &gt; 20&quot;` или `&quot;ff &gt;= 20&quot;`. Или&nbsp;же можно написать просто название и&nbsp;версию браузера&nbsp;&mdash; `iOS 7`

**Список браузеров доступных для использования в&nbsp;фильтре:**

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

К&nbsp;примеру у&nbsp;вас нет поддержки мобильных браузеров, Internet Explorer версии 8+&nbsp;и&nbsp;последние 3&nbsp;версии основных браузеров.

Для этого вы&nbsp;можете написать `ie &gt;= 8, last 3&nbsp;versions, &gt; 2%`.

На&nbsp;всякий случай я&nbsp;включил в&nbsp;пример поддержку браузеров с&nbsp;долей выше&nbsp;2%, на&nbsp;всякий случай.

Дополнения и&nbsp;замечания оставляйте на&nbsp;<a href="https://github.com/autoprefixer/autoprefixer.github.io">github</a>.

Актуальных префиксов вам вместе с&nbsp;<a href="https://autoprefixer.github.io">Autoprefixer online</a>.
