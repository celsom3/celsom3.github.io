# Celso's Custom Static Blog Generator

Yet another custom static site generator, this time using Harp.js and Gulp.

## Setup

To start hacking you first need the following installed:

1. Node.js
2. Harp.js (globally)
3. Git

Once you have these ready you need to clone this repo into your machine:

```
git clone --depth 1 https://github.com/celsom3/celsom3.github.io.git
```

Now move to that directory:

```
cd celsom3.github.io
```

Now install all the NPM dependencies:

```
sudo npm install
```

## Developing

To start hacking/developing, simply run:

```
gulp
```
Your default browser should open up to `http://localhost:3001/`. It's a good idea to keep the browser visible as you develop, as any changes you make to files within the `_harp/` directory will cause the browser to refresh as soon as you save.

## Compiling for GitHub Pages

This is a little more involved... two commands.

```
gulp compile
```
then
```
gulp clean
```
This copies the compiles harp site to the root directory, without overwriting existing files, the way harp does this by default.
