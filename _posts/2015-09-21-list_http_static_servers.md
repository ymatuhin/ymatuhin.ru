---
layout: post
title: Список статичных HTTP серверов для терминала
categories: front-end
tags: [http, server]

image:
  path: /assets/img/server/http-server.png
  width: 420
  height: 200
  caption: Http-server статики в терминале
---

{% include media-post-image.html %}

Каждая из нижеприведенных команд запускает статичный http сервер в текущей директории. Сервер будет доступен по адресу [http://localhost:8000](http://localhost:8000){:rel="nofollow"}



## Python 2.x
~~~bash
python -m SimpleHTTPServer 8000
~~~

## Python 3.x
~~~bash
python -m http.server 8000
~~~

## Twisted (Python)
~~~bash
twistd -n web -p 8000 --path .
~~~

или

~~~bash
python -c 'from twisted.web.server import Site; from twisted.web.static import File; from twisted.internet import reactor; reactor.listenTCP(8000, Site(File("."))); reactor.run()'
~~~

Зависит от [Twisted](http://twistedmatrix.com/trac/wiki/Downloads).

## Ruby
~~~bash
ruby -rwebrick -e'WEBrick::HTTPServer.new(:Port => 8000, :DocumentRoot => Dir.pwd).start'
~~~

## Ruby 1.9.2+
~~~bash
ruby -run -ehttpd . -p8000
~~~

### adsf (Ruby)
~~~bash
gem install adsf   # устанавливаем зависимость
adsf -p 8000
~~~

### Sinatra (Ruby)
~~~bash
gem install sinatra   # устанавливаем зависимость
ruby -rsinatra -e'set :public_folder, "."; set :port, 8000'
~~~

## Perl
~~~bash
cpan HTTP::Server::Brick   # устанавливаем зависимость
perl -MHTTP::Server::Brick -e '$s=HTTP::Server::Brick->new(port=>8000); $s->mount("/"=>{path=>"."}); $s->start'
~~~

### Plack (Perl)

~~~bash
cpan Plack   # устанавливаем зависимость
plackup -MPlack::App::Directory -e 'Plack::App::Directory->new(root=>".");' -p 8000
~~~


### Mojolicious (Perl)

~~~bash
cpan Mojolicious::Lite   # устанавливаем зависимость
perl -MMojolicious::Lite -MCwd -e 'app->static->paths->[0]=getcwd; app->start' daemon -l http://*:8000
~~~

### http-server (Node.js)

~~~bash
npm install -g http-server   # устанавливаем зависимость
http-server -p 8000
~~~

## node-static (Node.js)

~~~bash
npm install -g node-static   # устанавливаем зависимость
static -p 8000
~~~

## PHP (>= 5.4)

~~~bash
php -S 127.0.0.1:8000
~~~


## Erlang

~~~bash
erl -s inets -eval 'inets:start(httpd,[{server_name,"NAME"},{document_root, "."},{server_root, "."},{port, 8000},{mime_types,[{"html","text/html"},{"htm","text/html"},{"js","text/javascript"},{"css","text/css"},{"gif","image/gif"},{"jpg","image/jpeg"},{"jpeg","image/jpeg"},{"png","image/png"}]}]).'
~~~


## busybox httpd

~~~bash
busybox httpd -f -p 8000
~~~


## webfs

~~~bash
webfsd -F -p 8000
~~~

Зависит от [webfs](http://linux.bytesex.org/misc/webfs.html).

## IIS Express

~~~bash
C:\> "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:C:\MyWeb /port:8000
~~~

Зависит от [IIS Express](http://www.iis.net/learn/extensions/introduction-to-iis-express/iis-express-overview). Путь `/path` должен быть абсолютным.

### Благодарность
На основании списка [web-servers](https://gist.github.com/willurd/5720255) Вильяма Боверса (William Bowers).
