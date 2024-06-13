---
layout: post
title: Масштабируемый пиксель арт
categories: front-end
description: Управляем сглаживаем для pixel art иллюстраций в браузере через CSS свойство image-rendering.
tags: [pixel art]
image:
  path: /assets/img/pixel-art/pixel-art.gif
  caption: "Пиратский сюжет, автор: <a href='http://bugpixel.com/' rel='nofollow'>bugpixel</a>."
  width: 652
  height: 486
  pixelart: true
---

{% include media-post-image.html %}

Мне нравится пиксель арт. Только взгляните на этот предмет искусства выше. Восьмибитная ностальгия, красота и простота. Но с пиксель артом в вебе одна проблема — **сглаживание**.

Сложно передать красоту иллюстрации, когда её портит стандартное сглаживание. Это актуально для ретины и телефонов, когда исходное изображение масштабируется. Чего не хватает? Возможности управлять сглаживанием, чтобы как в фотошопе Nearest Neighbor. Этим мы и займемся.



Как пример, я возьму анимацию бегущего война. Оригинальный размер 32×32 пикселя. С таким размером нельзя демонстрировать анимацию людям, её нужно растянуть хотя бы до 256×256. И тут начинается проблема. Посмотрите как это выглядит.

{%
	include media-image.html
	url="pixel-art/walking_man.gif"
	alt="Бегущий воин, pixel Art, стандартное сглаживание в браузере"
	caption="Автор: <a href='http://www.manningkrull.com/' rel='nofollow'>Leonard Krull</a>"
	width="256"
	height="256"
%}

Ужасно, не правда ли? Конечно можно сделать саму анимацию в размере 256×256, но это не поможет если рисунок должен масштабироваться или на него посмотрят на экранах с большой плотностью пикселей. Монитор размоет анимацию.

Но что если мы можем на это повлиять? Посмотрите на следующую анимацию.

{%
	include media-image.html
	url="pixel-art/walking_man.gif"
	alt="Бегущий воин, pixel Art, улучшеное сглаживание в браузере"
	caption="Автор: <a href='http://www.manningkrull.com/' rel='nofollow'>Leonard Krull</a>"
	width="256"
	height="256"
    pixelart=""
%}

Другое дело, и работает в IE 7+, Safari 6+, Firefox 3.6+, Opera 12, 26+, Chrome 41+.
Впечатляет? Вот наглядная разница в масштабировании между стандартным методом и пиксельным в формате «было — стало».


{%
	include media-image.html
	url="pixel-art/difference.png"
	caption="Разница между двумя методами"
	pixelart=""
	width="557"
	height="286"
%}

## Как сделать

За сглаживание в CSS отвечает свойство `image-rendering`. Подробнее читайте в [документации](//developers.google.com/web/updates/2015/01/pixelated){:rel='nofollow'}, а я лучше покажу вам код:

```css
.pixel-art {
  -ms-interpolation-mode: nearest-neighbor; /* IE 7+ (не стандартное свойство) */
  image-rendering: -webkit-optimize-contrast; /* Safari 6, UC Browser 9.9 */
  image-rendering: -webkit-crisp-edges; /* Safari 7+ */
  image-rendering: -moz-crisp-edges; /* Firefox 3.6+ */
  image-rendering: -o-crisp-edges; /* Opera 12 */
  image-rendering: pixelated; /* Chrome 41+ and Opera 26+ */
}
```

Минус данного метода в том, что такое сглаживание не работает в Edge и Opera Mini ([поддержка](//caniuse.com/#feat=css-crisp-edges){:rel='nofollow'}). Но это в любом случае лучше чем ничего, общая доля поддержки на дату публикации составляет 84.63% в мире и 78.26% в России.

Я рекомендую использовать этот способ форумам, сайтам и порталам для пиксельной графики. Что касается Edge и оперы, то генерируйте изображения сразу в большом размере, чтобы было хорошо видно со стандартным сглаживанием.

Еще один способ применения этого способа — QR код. Это тоже пиксель арт. После применения этого способа устройству пользователя будет легче сканировать код.
