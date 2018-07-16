---
layout: page
title: Monthly Music
permalink: monthly-music/
---

I've been sharing music with friends for as long as I can remember, so I started making monthly public playlists for anyone who wants to tune in.
Each playlist features ten tracks and with an accompanying Spotify playlist.
For fans of indie rock, electronic music, and related genres.

<div style="text-align: center;">
  {% for post in site.categories.monthly-music %}
  {% capture currentyear %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% if currentyear != year %}
  {% unless forloop.first %}
  {% endunless %}
  <h2 style="text-align: left; max-width: 35rem; margin-left: auto; margin-right: auto;">{{ currentyear }}</h2>
  {% capture year %}{{ currentyear }}{% endcapture %}
  {% endif %}
  <a href="{{site.url}}/{{post.permalink}}" class="card-link">
    {% assign permalink = post.permalink | split: '-' %}
    <div class="card">
      <div class="card-inner {{ permalink | slice: 0 }}">
        <div class="card-label">{{ permalink | slice: 0 }} jams</div>
        <div class="card-inner-hole">&nbsp;</div>
        <div class="card-label-year">{{ permalink | slice: 1 }}</div>
      </div>
    </div>
  </a>
  {% endfor %}
</div>

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
