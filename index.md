---
layout: default
title: Home
---

<div id ="intro-wrapper" class="l-page">
	<div id="intro-title-wrapper" class="intro-left">
		<h1 id="intro-title">Hi, I'm Fred Hohman</h1>
		<div class="lead">
			I’m a PhD candidate in the College of Computing at Georgia Tech advised by Polo Chau and Alex Endert. 
		</div>
	</div>
	<div class="intro-left">
		I research how to enable <b>machine learning interpretability</b> at scale and for everyone, by designing and developing interactive interfaces to help people confidently understand data-driven systems. Besides building tools, I also create <b>data visualizations</b> and write interactive articles to simply communicate complex ideas.
	</div>
	<div class="intro-left">
		I have collaborated with designers, developers, and scientists while working at <img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/apple.svg"> Apple, <img class="intro-logo" style="width: 18px; padding-bottom: 3px;" src="/images/microsoft.svg"> Microsoft Research, <img class="intro-logo" style="width: 24px" src="/images/nasa.svg"> NASA Jet Propulsion Lab, and <img class="intro-logo" style="width: 24px;" src="/images/pnnl.svg"> Pacific Northwest National Lab.
	</div>
	<div class="intro-left">
		My research is supported by a <a href="https://www.nasa.gov/strg/nstrf">NASA Space Technology Research Fellowship</a>.
	</div>
	<img id="intro-image" class="intro-right" src="/images/portrait.jpg">
	<div id="intro-image-links" class="intro-right">
		{% for link in site.data.social-links %}
		{% if link.on-homepage == true %}
		{% include social-link.html link=link %}
		{% endif %}
		{% endfor %}
	</div>
	<div id="intro-right-cv" class="intro-right">
		<a href="/cv"><span id="intro-cv">Here's my CV.</span></a>
	</div>
</div>



<div style="display:none">

<!-- <div style="padding-top:15px;"></div> -->

<hr style="margin-left: 0;">

<h2 class="feature-title"><span style="font-weight: 400">Featured</span> <a href="/cv#publications" style="color: #303030">Research Publications</a></h2>

<div class="cover-wrapper">
	<!-- <div class="cover-side">
		Featured <a href="/cv#publications" style="color: #303030"><strong>Research Publications</strong></a>
	</div> -->
{% assign sortedPublications = site.data.publications | sort: 'feature-order' %}
{% for feature in sortedPublications %}
{% if feature.featured == true %}

{% include feature.html feature=feature %}

{% endif %}
{% endfor %}
</div>	

<!-- <hr style="margin-left: 0;"> -->

<h2 class="feature-title"><span style="font-weight: 400">Featured</span> <a href="/cv#interactive-articles" style="color: #303030">Interactive Articles</a></h2>


<div class="cover-wrapper">
	<!-- <div class="cover-side">
		Featured <a href="/cv#interactive-articles" style="color: #303030"><strong>Interactive Articles</strong></a>
	</div> -->
{% assign sortedArticles = site.data.articles | sort: 'feature-order' %}
{% for feature in sortedArticles %}
{% if feature.featured == true %}

{% include feature.html feature=feature %}

{% endif %}
{% endfor %}
</div>

<hr style="margin-left: 0;">

<h2 class="everything-else" markdown="1"><a href="/everything-else" style="color: #303030">Everything Else</a></h2>
<p class="everything-else" markdown="1">
Including a list of [projects][projects], the [blog][blog], [monthly music playlists][monthly-music], [stuff I use][stuff-i-use], and the [archive][archive].
</p>
</div>

[about]: {{ site.url }}/about
[projects]: {{ site.url }}/projects
[blog]: {{ site.url }}/blog
[ee]: {{ site.url }}/everything-else
[stuff-i-use]: {{ site.url }}/stuff-i-use
<!-- [photos]: {{ site.url }}/photos -->
[archive]: {{ site.url }}/archive "Archive."
[monthly-music]: {{ site.url }}/monthly-music

[gt]: http://www.gatech.edu "Georgia Tech"
[cse]: http://cse.gatech.edu "Georgia Tech Computational Science and Engineering"
[coc]: http://www.cc.gatech.edu "Georgia Tech College of Computing"

[cv]: {{ site.url }}/cv
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau."
[alex]: http://va.gatech.edu/endert/ "Alex Endert"
[poloclub]: http://poloclub.gatech.edu "Polo Club of Data Science"
[nstrf]: https://www.nasa.gov/strg/nstrf "NASA Space Technology Research Fellowship."