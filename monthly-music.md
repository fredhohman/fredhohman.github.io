---
layout: page
title: Monthly Music
permalink: monthly-music/
---

I've been sharing music with friends for as long as I can remember, so I started making monthly public playlists for anyone who wants to tune in.
Each playlist features ten tracks and with an accompanying Spotify playlist.
For fans of indie rock, electronic music, and related genres.

{% for post in site.categories.monthly-music %}
{% capture currentyear %}{{ post.date | date: "%Y" }}{% endcapture %}
{% if currentyear != year %}
{% unless forloop.first %}
</div>
{% endunless %}
<h2 style="text-align: left">{{ currentyear }}</h2>
<div class="l-page cd-wrapper">
{% capture year %}{{ currentyear }}{% endcapture %}
{% endif %}
<div class="cd">
  {% assign permalink = post.permalink | split: '-' %}
  <a href="{{site.url}}/{{post.permalink}}" class="cd-link">
    <div class="cd-inner {{ permalink | slice: 0 }}">
      <div class="cd-label">{{ permalink | slice: 0 }}</div>
      <div class="cd-inner-hole">&nbsp;</div>
      <div class="cd-label-year">{{ permalink | slice: 1 }}</div>
    </div>
  </a>
</div>
{% endfor %}

<!-- ***

<div class="posts">
  {% for post in site.categories.monthly-music limit:3 %}
  <article class="post">
    <h1 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>

    <time datetime="{{ post.date | date: "%B %-d, %Y" }}" class="post-date">
      {{ post.date | date: "%B %-d, %Y" }}
    </time>

    {{ post.content }}
  </article>
  {% endfor %}
</div>

***

# Monthly Music Archive

<div>
  {% for post in site.categories.monthly-music %}
  <article class="post" style="margin-bottom:1.25em;">
    <h2 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
  </article>
  {% endfor %}
</div>
 -->
