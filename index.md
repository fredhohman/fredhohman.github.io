---
layout: home
title: Home
---

<div id ="intro-wrapper" class="l-middle">
	<div id="intro-title-wrapper" class="intro-left">
		<h1 id="intro-title">Hi, I'm Fred Hohman</h1>
		<div id="intro-subtitle">
			I'm a Research Scientist at Apple
		</div>
	</div>
	<div class="intro-left">
	<div class="intro-left">
		I design and develop interactive interfaces to help people <b>understand machine learning models</b> and data-driven systems. Besides building tools, I also create <b>data visualizations</b> and write interactive articles to simply communicate complex ideas.
	</div>
	<div style="height: 1rem"></div>
	<div class="intro-left">
		I received my PhD from Georgia Tech where I worked with <a href="http://www.cc.gatech.edu/~dchau/">Polo Chau</a> and <a href="http://va.gatech.edu/endert/">Alex Endert</a> on enabling machine learning interpretability at scale and for everyone.	<a href="/defense">My dissertation</a> was supported by a <a href="https://www.nasa.gov/strg/nstrf">NASA Space Technology Research Fellowship</a>.
	</div>
	<div style="height: 1rem"></div>
	<div>
		I have collaborated with designers, developers, artists, and scientists while working at <img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/apple.svg"> Apple, <img class="intro-logo" style="width: 18px; padding-bottom: 3px;" src="/images/microsoft.svg"> Microsoft Research, <img class="intro-logo" style="width: 24px" src="/images/nasa.svg"> NASA Jet Propulsion Lab, and <img class="intro-logo" style="width: 24px;" src="/images/pnnl.svg"> Pacific Northwest National Lab.
	</div>
	<!-- <div style="height: 1rem"></div>
	<div>
		My research is supported by a <a href="https://www.nasa.gov/strg/nstrf">NASA Space Technology Research Fellowship</a>.
	</div> -->
</div>

<div class="intro-right">
	<img id="intro-image" class="intro-right" src="/images/portrait.jpg">
	<div style="height: 0.5rem"></div>
	<div id="intro-image-links" class="intro-right">
		{% for link in site.data.social-links %}
			{% if link.on-homepage == true %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div style="height: 0.5rem"></div>
	<div id="intro-cv-wrapper" class="intro-right">
		{% for link in site.data.social-links %}
			{% if link.id == "cv-web" %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
		<!-- <div id="intro-cv"><a href="/cv">Here's my CV.</a></div> -->
	</div>
	</div>
</div>

<hr class="l-middle home-hr">

<h2 class="feature-title l-middle">
	Featured <a href="/cv#publications">Research Publications</a>
</h2>
<div class="cover-wrapper l-screen">
	{% assign sortedPublications = site.categories.papers | sort: 'feature-order' %}
	{% for feature in sortedPublications %}
		{% if feature.featured == true %}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

<h2 class="feature-title l-middle">
	Featured <a href="/cv#education">Dissertation Publications</a>
</h2>
<div class="cover-wrapper l-screen">
	{% assign sortedPublications = site.categories.papers | sort: 'feature-order' %}
	{% for feature in sortedPublications %}
		{% if feature.dissertation == true %}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

<h2 class="feature-title l-middle">
	Featured <a href="/cv#interactive-articles">Interactive Articles</a>
</h2>
<div class="cover-wrapper l-screen">
	{% assign sortedArticles = site.data.articles | sort: 'feature-order' %}
	{% for feature in sortedArticles %}
		{% if feature.featured == true %}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

<h2 class="feature-title l-middle">
	<a href="{{ site.url }}/everything-else" style="color: #303030">Everything Else</a>
</h2>
<div id="everything-else" class="l-middle">
	<a href="{{ site.url }}/projects"><div>Projects</div></a>
	<a href="{{ site.url }}/blog"><div>Blog</div></a>
	<a href="{{ site.url }}/stuff-i-use"><div>Stuff I Use</div></a>
	<a href="{{ site.url }}/monthly-music"><div>Monthly Music</div></a>
	<a href="{{ site.url }}/archive"><div>Archive</div></a>
</div>
<!-- <p class="l-middle intro-text" markdown="1">
	Including a list of [projects][projects], the [blog][blog], [monthly music playlists][monthly-music], [stuff I use][stuff-i-use], and the [archive][archive].
</p> -->



[gt]: http://www.gatech.edu "Georgia Tech"
[cse]: http://cse.gatech.edu "Georgia Tech Computational Science and Engineering"
[coc]: http://www.cc.gatech.edu "Georgia Tech College of Computing"

[cv]: {{ site.url }}/cv
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"
[alex]: http://va.gatech.edu/endert/ "Alex Endert"
[poloclub]: http://poloclub.gatech.edu "Polo Club of Data Science"
[nstrf]: https://www.nasa.gov/strg/nstrf "NASA Space Technology Research Fellowship"