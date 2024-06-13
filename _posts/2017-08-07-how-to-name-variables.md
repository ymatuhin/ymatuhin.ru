---
layout: post
title: Как называть переменные
description: Мой взгляд на соглашения наименования переменных, функций, методов и классов
categories: front-end
tags: [js]
image:
    path: /assets/img/variables/variables.jpg
    width: 800
    height: 400
    alt: Как называть переменные
---

{% include media-post-image.html %}

Для меня основной критерий хорошего когда — его **читаемость**. Поэтому важно чтобы переменные, функции и методы легко читались и понимались. Далее я расскажу как я называю переменные и что мне в этом помогает.

## Строки

Традиционно название строковой переменной — **существительное**. Как и везде, мы должны понимать что находится в переменной по её названию. Со строкой сложно напортачить, используйте существительные и давайте более осмысленные имена, например:

```js
const serverMessage = 'hello from server'
const componentHtml = '<h1>Hello</h1>'
const login = 'username'
const password = 'qwerty'
const ACCESS_TOKEN = 'xxxxx'
```

## Числа

С числами уже интереснее, можно встретить общие практики которые есть почти в каждом проекте:

* код чего-либо (code)
* размер (size, length)
* номер (number)
* количество (count)

Использование этих слов привычно и не вызывает дополнительных вопросов:

```js
const keyCode = 17
const numberFromEnd = 10
const maxWindowSize = 800
const minCharacterLength = 10
const newMessageCount = 2
```

## Булевое значение

Лучшее название для булевой переменной — вопрос с ответом да-нет. Так-же часто встречаются в виде префиксов и суфиксов слова:

* это (is)
* содержит (has/contain)
* может (can)
* должен (shoud)
* возможность (able)

```js
const isPopupOpen = true;
const hasUpperLetters = true;
const containsObject = false;
const shouldUpdate = false;
const disabled = true;
```

## Массивы

Массивы это существительные во множественном числе. Оканчиваются на суффиксы **s** и **es**.

```js
const users = [{ name: 'Yury'}];
const letters = ['A', 'B', 'C'];
const codes = [21, 37];
```

## Объекты

Так-же как и строки. Мне это не очень нравится, т.к. нельзя сразу-же отличить строку от объекта. Можно добавлять суффикс **obj**, но это мне кажется уже лишним.

Важное правило, не дублируйте название объекта в названии свойства или метода:

```js
// Плохо
const user = {
    userName: 'test',
    getUsername() {},
};

// Хорошо
const user = {
    name: 'test',
    getName() {},
};
```

## Функции и методы

Для функций первое слово глагол:

* init/initialize
* compute
* find
* create (object, array...)
* to (string, array...)
* filter

```js
const initApp = () => {};
const computeMaxHeight = () => {};
const findClosestElement = () => {};
const toString = () => {};
const filterUsers = () => {};
```

### Симметричные пары

**Общие**:
* old/new
* begin/end
* first/last
* up/down
* min/max
* next/previous

**Для функций**:
* get/set
* add/remove
* create/destroy
* start/stop
* insert/delete
* increment/decrement
* open/close
* show/hide
* suspend/resume

Если вы новичек в программировании, или плохо знакомы с английским языком, то вот вам лайфхак:

1. Хорошо подумайте и назовите переменную **на русском языке**
2. Переведите её через Google Translate

Это все что я хотел сказать о переменных. Для дополнительного чтения советую статью [90 рекомендаций по стилю написания программ на C++](https://habrahabr.ru/post/172091/).

Я что-то забыл или где-то ошибся, напишите об этом в комментариях. Спасибо.
