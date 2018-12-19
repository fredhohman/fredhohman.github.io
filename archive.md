---
layout: page
title: Archive
permalink: archive/
---

The one-stop shop, including all posts from the Blog, Monthly Music, and Projects.

<dl>

{% for post in site.posts %}
  {% capture currentyear %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% if currentyear != year %}
    {% unless forloop.first %}
    </ul>
    {% endunless %}
    <h1>{{ currentyear }}</h1>
    <ul>
    {% capture year %}{{ currentyear }}{% endcapture %}
  {% endif %}
  <li><a href="{{ post.url }}">{{ post.title }}</a>&nbsp;<small style="color: #c0c0c0">{{ post.categories }}</small></li>
{% endfor %}

<!-- </dl> -->