---
layout: default
title: Blog
permalink: /blog/
---

{% for post in site.posts %}
   <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
   <h5>{{ post.date | date: '%B %d, %Y' }}</h5>
   {{ post.excerpt }}
{% endfor %}
