# Mask Banao

## Installation

Please see [jekyll](https://jekyllrb.com/docs/) instructions on how to install jekyll. I recommend using [rvm](https://rvm.io/) to handle ruby. 


Once all is set up just run:
```bash
bundle exec jekyll serve
```

The site should work on localhost:4000

(note will soon switch to webpack but for now this should work)

## Blogging

To write a new blog post, create a file titled `_posts/YYYY-MM-DD-yourtitle.md`. Prepopulate the header with:

```
---
layout: post
title: "Your Title"
author: Name
---
```

The blog post directory page that lists all the blog posts is `/blog.md`.

## Navigation

The navigation bar is currently in `_data/navigation.yml`. There are more advanced configuration options [here](https://jekyllrb.com/tutorials/navigation/).

Each post or page can also configure a `permalink:` option (also known as a front matter in Jekyll lingo) to set the website URL corresponding to the page or post.
