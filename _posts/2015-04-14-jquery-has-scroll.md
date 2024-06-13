---
layout: post
title: Минималистичный jQuery плагин, который проверяет элемент на наличие полосы прокрутки
categories: front-end
tags: >
  полоса прокрутки скролл scroll jquery javascript плагин наличие документ элемент
description: >
  Как проверить наличие полосы прокрутки (скролла) у документа и элементов в jQuery и JavaScript? Воспользуйтесь моим небольшим плагином.
---

Сегодня, столкнулся с задачей, в которой нужно было определить есть ли полоса прокрутки (скролл) у элемента (в моем случае у) или нет. Немного погуглив, нашел несколько интересных вариантов, которыми я хочу с вами поделиться.

~~~js
(function($) {
    $.fn.hasScrollBar = function() {
        var hasScrollBar = {},
            e = this.get(0);
        hasScrollBar.vertical = e.scrollHeight > e.clientHeight;
        hasScrollBar.horizontal = e.scrollWidth > e.clientWidth;
        return hasScrollBar;
    }
})(jQuery);

// Пример
$('html').hasScrollBar().vertical
$('html').hasScrollBar().horizontal
~~~

В дополнение к этому нашел _Vanilla JS_ версию, которая проверяет на наличие вертикальной полосы прокрутки:

~~~js
function hasVerticalScroll(node) {
  if ( node == undefined ) {
    if ( window.innerHeight )
      return document.body.offsetHeight > innerHeight;
    else
      return document.documentElement.scrollHeight >
          document.documentElement.offsetHeight ||
          document.body.scrollHeight > document.body.offsetHeight;
  }
  else { return node.scrollHeight > node.offsetHeight; }
}

// Пример (если не передать параметр node — то проверит у body)
hasVerticalScroll()
~~~

Оба примеры рабочие, причем на втором отлично видны костыли для `html/body` и высчитыванием скролла. В то время как для обычных элементов достаточно проверить только `node.scrollHeight > node.offsetHeight`.
