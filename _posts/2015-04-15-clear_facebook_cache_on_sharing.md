---
layout: post
title: Очищаем кэш Вконтакте и FaceBook при шаринге
categories: front-end
tags: >
  facebook поделиться не работает шаринг другая картинка share кеш очистить кэш 404 cache фейсбук вконтакте вк
description: >
  Не работает шаринг в Facebook или Вконтакте? Показывает «Страница не найдена 404» при шаринге (share)? Вам нужно очистить КЭШ и все заработает.
image:
  path: /assets/img/facebook_sharing_error/facebook_sharing_error.png
  width: 550
  height: 280
  caption: Ошибка при шаринге в Facebook — 404 Страница не найдена
---

Иногда Facebook не желает расшаривать наши страницы, по крайней мере у меня так бывает часто. После нажатия на кнопку «_поделиться_», Facebook сообщает нам, что страница не найдена. Или быть может при попытке поделиться у вас показывается совсем _другая картинка_. Надо это как-то исправлять.

{% include media-post-image.html %}

Но это легко исправить, нужно только знать как. Как много все-таки в мире легких вещей, если только знать как и что делать :-)

Чтобы исправить ошибку «Страница не найдена» при шаринге, нужно _очистить КЭШ_ у Facebook. Для этого нужно перейти по ссылке в <a href="https://developers.facebook.com/tools/debug/">Debugger</a>. Вы увидите поле, в которое нужно ввести ссылку, которую у вас не получилось расшарить и нажать на кнопку <mark>Debug</mark>.

{%
	include media-image.html
	url="facebook_sharing_error/facebook_debugger.png"
	width="947"
	height="353"
	caption="Debugger — окно для очистки КЭШа в Facebook"
%}

После этого, нужно нажать на кнопку <mark>Fetch new scrape information</mark>, для того, чтобы Facebook обновил информацию о нашей странице в своей базе. Кстати, этот способ так-же подойдет, если вы изменили заголовок или описание вашей страницы, а при шаринге отображаются старые.

{%
	include media-image.html
	url="facebook_sharing_error/facebook_debugger_refetch.png"
	width="936"
	height="200"
	caption="Debugger — окно для очистки КЭШа в Facebook"
%}

Теперь Facebook почистил свой кэш и обновил информацию о вашей странице. И её теперь можно легко расшарить с правильными данными.

**UPD #1** Вконтакте тоже бывают такие проблемы, для этого есть <a href="https://vk.com/dev/pages.clearCache">отдельная страница</a> в которой нужно ввести url страницы.

{%
	include media-image.html
	url="facebook_sharing_error/vk_sharing.png"
	width="500"
	height="380"
	caption="Форма очиститки кэша при шаринге Вконтакте"
%}
