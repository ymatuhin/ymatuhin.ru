---
layout: post
title: Переносим межбуквенный интервал из Фотошопа в CSS
description: >-
  Объясняю, как корректно переносить значение межбуквенного интервала из Photoshop в CSS.
  Разбираю формулу перевода в letter-spacing, чтобы текст в макете и браузере выглядел одинаково.
tags:
  - development
  - frontend
  - css
  - typography
image:
  path: letter-spacing/table_of_contents.gif
  alt: Виллу Тоотс. Современный шрифт.
excerpt: Межбуквенный интервал в Фотошопе регулирует расстояние между символами в тексте. В CSS это свойство letter-spacing.
redirects:
  - /front-end/convert_photoshop_letter_spacing_to_css/
  - /tools/convert_photoshop_letter_spacing_to_css/
---

{% mediaImage image.path, image.alt, "eager" %}

Межбуквенный интервал в Фотошопе регулирует расстояние между символами в тексте. В CSS это свойство `letter-spacing`.
Проблема в том, что межбуквенный интервал в Фотошопе не конвертируется 1:1 к межбуквенному интервалу в CSS.

{% mediaImage "letter-spacing/letter-spacing.png", "Межбуквенный интервал letter-spacing в Фотошопе" %}

Хотя это легко считается по пропорции **1000** межбуквенного интервала в Фотошопе = **1em** в CSS.

Все что вам нужно, это разделить число из Фотошопа на 1000, чтобы получить значение в **em**.

## Примеры

В фотошопе|В CSS
1000|1em
200|0.2em
30|0.03em
10|0.01em
