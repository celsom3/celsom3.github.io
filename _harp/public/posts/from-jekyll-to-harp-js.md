So I just spent an entire day converting a [Jekyll](http://Jekyllrb.com/) theme into a [Harp.js](http://harpjs.com/) site and I'd like to share.

It all started with the simple goal of wanting to write a quick blog post. But that led me to remember how dissatisfied I was with the way my website looked. It was, at the time, a Jekyll site hosted on Github Pages.

I really like Jekyll, don't get me wrong. I still want to take the time to learn it better one day. Unfortunately, I somehow messed up my ruby installation. I think I have different versions installed. I sometimes need to use `sudo`. It was mess.

But I did find a [Jekyll theme design](http://jekyllthemes.org/themes/will-jekyll-template/) that I really like.

Then I remembered that I know a bit of Harp.js. In fact, I created a Harp Wireframe [Boilerplate Generator, linked here](https://github.com/celsom3/Harp-Bootstrap-Starter).

So I though:
>Why not convert the Jekyll theme to Harp? Shouldn't be that hard."

It's not that it was hard, but it took a *lot* longer than I should have spent on it.

Either way I finished it to the point that I am happy with it.

I wasn't able to transfer all the features from the Jekyll them, but it is still a very functional site.

Here are some things I wasn't able to port over:

- Modularized CSS (stylus was originally used, while I just quickly converted to Sass)
- Cool search bar

I was able to add some features of my own:

- Ability to change color scheme with just one value
- Fade overlay to header section
- Option to add image for blog header section

How to use it

So let's say you want to use it. You absolutely can. The code is open sourced under the [MIT license](https://opensource.org/licenses/MIT) and here is how you can use it.

1. Install Harp.js (NOTE: this is assuming you have Node.js installed. If not, go to [nodejs.org](https://nodejs.org).)

```
npm install harp
```

2. Clone the repository

```
git clone https://github.com/celsom3/celsom3.github.io.git
```

3. Move into that directory

```
cd celsom3.guthub.io
```

4. Start the server

```
harp server _harp
```

Note that the usual way to start the server is `harp server`, but that is usually when you are _in_ the harp directory.

You will now be able to see your site running on

```
http://localhost:9000
```

Now you can edit the project in `_harp` to your liking. I recommend developing on [Firefox Developer edition](https://www.mozilla.org/en-US/firefox/developer/?utm_medium=paidsearch&utm_source=google&utm_campaign=DEV2015Q4), as they have a 'LiveReload'-like feature. They call it 'Autoreload Preferences' under the 'Tools' menu.

I really like that tool as that is just another tool I don't have to worry about setting up. You can also just live [LiveReload](http://livereload.com/) and develop in your browser of choice.

5. Once you have something you like, you can stop the server by pressing CTRL-C and compile the project with:

```
harp compile _harp ./
```

This tells harp to compile the harp.js project found in `_harp` into the current directory (root of the project).

This project is set up a little differently. Because this is meant for Github Pages, and Github will only serve your site from the root of the repository, we save the root directory for the compiled code, while storing the harp project in the `_harp` directory.
At the end of the day, the time spent was worth it because I was able to learn the intricacies of both Jekyll and Harp.js. To be fair, I learned more about Harp.js.

---

I have been recently getting to know more about static site generators, and I have to say, the no back-end "movement" (if you can call out that) makes sense. Not all the time, but it is a valid option to consider. Once I learn more, I would love to write a blog post about it.

If you would like for me to detail the steps I took to convert the theme, I would consider writing a blog post about it, but only if there is interest.
