---
layout: page
title: Monthly Music
permalink: monthly-music/
---

I've been sharing music with friends for as long as I can remember, so I started making monthly public playlists so anyone can tune in. Each playlist contains ten tracks and links to Spotify and Youtube. For fans of indie rock, electronic music, progressive jazz, and related genres.

***

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
<!--     <time datetime="{{ post.date | date: "%B %-d, %Y" }}" class="post-date">
      {{ post.date | date: "%B %-d, %Y" }}
    </time> -->
  </article>
  {% endfor %}
</div>

