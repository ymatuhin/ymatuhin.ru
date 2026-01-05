---
layout: post
title: Связывание текстового редактора с Git
description: Как указать текстовый редактор по умолчанию для Git. VSCode, Atom, TextMate, Nano, Sublime Text и другие
categories: tools
tags: [git, tools, editor]
---

При редактировании сообщений комита Git по умолчанию открывает Vim. Для тех кто с ним не знаком, это может стать серьезной проблемой. Хорошо что это поведение легко изменить выполнив одну команду в терминале.

## Visual Studio Code
```
git config --global core.editor "code --wait"
```

## Atom
```
git config --global core.editor "atom --wait"
```

## TextMate
```
git config --global core.editor "mate -w"
```

## nano
```
git config --global core.editor "nano -w"
```

## Text Wrangler (Mac)
```
git config --global core.editor "edit -w"
```

## Sublime Text (Mac)
```
git config --global core.editor "subl -n -w"
```

## Sublime Text (Win, x32)
```
git config --global core.editor "'c:/program files (x86)/sublime text 3/sublime_text.exe' -w"
```

## Sublime Text (Win, x64)
```
git config --global core.editor "'c:/program files/sublime text 3/sublime_text.exe' -w"
```

## Notepad++ (Win, x32)
```
git config --global core.editor "'c:/program files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```

## Notepad++ (Win, x64)
```
git config --global core.editor "'c:/program files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```

## Kate (Linux)
```
git config --global core.editor "kate"
```

## Gedit (Linux)
```
git config --global core.editor "gedit --wait --new-window"
```

## Scratch (Linux)
```
git config --global core.editor "scratch-text-editor"
```

## emacs
```
git config --global core.editor "emacs"
```

## vim
```
git config --global core.editor "vim"
```


Я привязал VSCode к гиту. Пригождается когда нужно изменить сообщение комита `git commit --amend`.

