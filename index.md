---
layout: home
title: Home
---

<h1 class="intro-title">Hello, I'm Fred Hohman.</h1>
<!-- *But you can call me Fred. Nice to meet you.* -->

<!-- {% include nav.html %} -->

<div class="intro">
	
	<div class="intro-text">
		<p markdown="1">
		I’m a Ph.D. student in the [College of Computing][coc] at [Georgia Tech][gt] advised by [Polo Chau][polo] and [Alex Endert][alex]. 
		</p>
		<p markdown="1">
		My research applies a human-centered approach to designing and developing interactive interfaces that help people understand and explain **machine learning models**.
		I also write, design, and build explorable explanations, dynamic expositions, and **interactive data visualizations** that illustrate complex ideas simply and tangibly.
		</p>
		<p markdown="1">
		I have worked at Microsoft Research, NASA Jet Propulsion Laboratory, and Pacific Northwest National Laboratory.
		</p>
		<p markdown="1">
		<!-- <img style="display:inline; width:25px; vertical-align: middle" src="/images/nasa.png"> -->
		I am a 2018 [NASA Space Technology Research Fellow][nstrf].
		</p>
	</div>

	<div class="intro-image">
	  <img src="/images/me7.jpg" style="border-radius: 2px;">
	  <p style="padding-left: 10px; padding-right: 10px; padding-top: 10px">
		<a style="color: #515151 !important" href="https://twitter.com/fredhohman"><img class="social-icon" src="/images/footer/twitter-color.svg">@fredhohman</a>
		<br>
		<a style="color: #515151 !important" href="https://github.com/fredhohman"><img class="social-icon" src="/images/footer/github-color.svg">github.com/fredhohman</a>
		<br>
		<a style="color: #515151 !important" href="https://scholar.google.com/citations?user=1w0TLT8AAAAJ&hl=en&oi=ao"><img class="social-icon" src="/images/footer/graduation-color.svg">Google Scholar</a>
	  </p>

	<!-- <hr style="margin-left:0; margin-top: 15px; margin-bottom: 15px"> -->

	
		<div class="intro-cv-wrapper">
		<span class="intro-cv" markdown="1">
		Here's my [CV][cv].
		</span>
		</div>
	

	</div>

</div>

<div style="padding-top:15px;" ></div>

<!-- <span class="message">
Here's my [CV][cv].
</span> -->



<!-- <div class="cover-wrapper-double"> -->


<!-- <div class="cover-warpper-with-title"> -->
<!-- <hr class="hr-text" data-content="Featured Publications"> -->

<h2 style="margin-left:20px;">Featured Publications</h2>
<div class="cover-wrapper">
<!-- 	<div class="cover-side">
		<strong>Feature Research Publications</strong>
	</div> -->
{% assign sortedPublications = site.data.publications | sort: 'feature-order' %}
{% for feature in sortedPublications %}
{% if feature.featured == true %}

{% include feature.html feature=feature %}

{% endif %}
{% endfor %}
</div>	

<!-- </div> -->

<!-- <div style="border-left:1px solid #cccccc;height:750px;"></div> -->


<!-- <div class="cover-warpper-with-title"> -->
<!-- <hr class="hr-text" data-content="Featured Explorable Explanations"> -->
<h2 style="margin-left:20px;">Featured Explorable Explanations</h2>

<div class="cover-wrapper">
{% assign sortedExplorables = site.data.explorables | sort: 'feature-order' %}
{% for feature in sortedExplorables %}
{% if feature.featured == true %}

{% include feature.html feature=feature %}

{% endif %}
{% endfor %}
<!-- </div> -->
</div>


<!-- </div> -->




<!-- # [Projects][projects]
Things I do, including research, academic course projects, and miscellaneous interests.

# [Blog][blog]
Things I think about, read, and write.

# [Other][other]
Everything else. -->

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

[cv]: {{ site.url }}/cv
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau."
[alex]: http://va.gatech.edu/endert/ "Alex Endert."
[poloclub]: http://poloclub.gatech.edu "Polo Club of Data Science."
[nstrf]: https://www.nasa.gov/strg/nstrf "NASA Space Technology Research Fellowship."