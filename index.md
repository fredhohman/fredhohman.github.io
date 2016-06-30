---
layout: default
title: Home
---

# Hello, I'm Frederick.

#### But you can call me Fred. Nice to meet you.

I’m a Ph.D. student at [Georgia Tech][gt] studying [Computational Science and Engineering][cse] in the [College of Computing][coc].

Here's my [CV][cv] and [resume][resume].

<figure>
  <img class="full" src="/images/me.JPG" alt="That's me.">
  <figcaption>That's me.</figcaption>
</figure>

# [About][about]
Besides my studies, I'm an [INTJ][intj] born on the coast in Melbourne, Florida but currently live in Midtown in Atlanta, Georgia. I’m interested in a multitude of topics spanning the various disciplines of **data science**, **visual analytics**, **applied mathematics**, **digital design**, and **consumer technology**.

# [Projects][projects]
Things I do, including research, academic course projects, and misellaneous interests.

# [Blog][blog]
Things I think about, read, and write.

# [Other][other]
Everything else.

<!-- {% for page in site.pages %}
<article class="post" style="margin-bottom:1em;">
<h2 class="post-title">
  <a href="{{ site.baseurl }}{{ post.url }}">
    {{ post.title }}
  </a>
</h2>

<time datetime="{{ post.date | date: "%B %-d, %Y" }}" class="post-date">
  {{ post.date | date: "%B %-d, %Y" }}
</time>
</article>
{% endfor %} -->

[about]: {{ site.url }}/about
[projects]: {{ site.url }}/projects
[blog]: {{ site.url }}/blog
[other]: {{ site.url }}/other
[stuff-i-use]: {{ site.url }}/stuff-i-use
[photos]: {{ site.url }}/photos
[monthly-music]: {{ site.url }}/monthly-music

[gt]: http://www.gatech.edu "Georgia Tech."
[cse]: http://cse.gatech.edu "GT Computational Science and Engineering."
[coc]: http://www.cc.gatech.edu "GT College of Computing."
[intj]: http://en.wikipedia.org/wiki/INTJ "INTJ."

[cv]: {{ site.url }}/assets/fredhohman-cv.pdf "My CV."
[resume]: {{ site.url }}/assets/fredhohman-resume.pdf "My Resume."