---
layout: page
title: Projects
permalink: projects/
---

Things I do, including research, academic course projects, and miscellaneous interests.

## PhD Dissertation

My dissertation contributed interactive interfaces to enable machine learning interpretability at scale and for everyone.

<div class="cover-wrapper cover-wrapper-1-col l-text">
	{% include dissertation/document.html details=false location=home %}
</div>

<div class="cover-wrapper cover-wrapper-3-col l-page">
	{% assign sortedPublications = site.categories.papers | sort: 'feature-order' %}
	{% for feature in sortedPublications %}
		{% if feature.dissertation == true %}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

<div class="project-spacer-small"></div>

## Research

Research publications for fans of human-computer interaction, data visualization, and machine learning.

<div class="project-spacer-small"></div>

<div class="l-page project-grid">
    {% for project in site.categories.papers %}
    {% include project.html project=project %}
    {% endfor %}
</div>

<div class="project-spacer"></div>

## Interactive Articles

Enhanced reading experiences that demonstrate what's possible when dynamic media are effectively combined.

<div class="project-spacer-small"></div>

<div class="cover-wrapper cover-wrapper-2-col l-middle">
	{% assign sortedArticles = site.data.articles | where: "featured", true %}
	{% assign ia = site.categories.papers | where:"permalink", "papers/interactive-articles" %}

	{% assign feature = sortedArticles[0] %}
	{% include feature.html feature=feature %}

	{% assign feature = ia[0] %}
	{% include feature.html feature=feature %}
</div>

<div class="project-spacer-small"></div>

<ul>
    {% for article in site.data.articles %}
        {% unless article.feature-only %}
            <li><a href="{{ article.url }}" style="text-transform: capitalize">{{ article.title }}</a> <small style="color: #c0c0c0">{{ article.year }}</small></li>
        {% endunless %}
    {% endfor %}
</ul>

<div class="project-spacer-small"></div>

## Apple Chart Design Guidelines

Guidance and best practices to help designers and developers create the best charts for any Apple platform.

<div class="project-spacer-small"></div>

<div class="cover-wrapper cover-wrapper-2-col l-middle">
	{% for feature in site.data.designs %}
		{% if feature.featured == true %}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

<div class="project-spacer"></div>


## Parametric Press Articles

A born-digital, experimental magazine dedicated to showcasing the expository power of the web.

<div class="project-spacer-small"></div>

<div class="cover-wrapper cover-wrapper-2-col l-middle">
	{% assign parametric = site.data.articles | where: "parametric-issue", true %}
	{% for feature in parametric %}
		{% include feature.html feature=feature %}
	{% endfor %}
</div>

<div class="project-spacer-small"></div>

<ul>
    {% for article in site.data.parametric-articles %}
        <li><a href="{{ article.url }}" style="text-transform: capitalize">{{ article.title }}</a> <small style="color: #c0c0c0">{{ article.year }}</small></li>
    {% endfor %}
</ul>

<div class="project-spacer-small"></div>

## Undergraduate Thesis

[3D Printing the Trefoil Knot and its Pages][trefoil] <small style="color: #c0c0c0">2015</small>

<div class="project-spacer-small"></div>

## REU

[Math & Computational Science REU][reu] <small style="color: #c0c0c0">2014</small>

## Course Projects

<ul>
    <li><a href="{{ site.url }}/projects/cs-6750-health-easel">Health Easel</a> <small style="color: #c0c0c0">2017</small></li>
    <li><a href="{{ site.url }}/projects/cs-7450-a-viz-of-ice-and-fire">A Viz of Ice and Fire</a> <small style="color: #c0c0c0">2016</small></li>
    <li><a href="{{ site.url }}/projects/materials-informatics-grain-growth">Materials Informatics: Grain Growth</a> <small style="color: #c0c0c0">2016</small></li>
    <li><a href="{{ site.url }}/projects/cse-6730-bobby-dodd-simulation">Modeling of Pedestrian Traffic Around Bobby-Dodd Stadium</a> <small style="color: #c0c0c0">2016</small></li>
    <li><a href="{{ site.url }}/projects/uga-undergrad-course-projects">UGA Undergrad Course Projects</a></li>
    <ul style="padding-left: 3rem;">
        <li>Image Compression <small style="color: #c0c0c0">2014</small></li>
        <li>Railgun Simulation <small style="color: #c0c0c0">2014</small></li>
        <li>Path Minimization <small style="color: #c0c0c0">2013</small></li>
        <li>Numerical ODE Solution and Integration Project <small style="color: #c0c0c0">2013</small></li>
    </ul>
    <li><a href="{{ site.url }}/projects/cube-decomposition-trophy">Cube Decomposition Trophy</a> <small style="color: #c0c0c0">2014</small></li>
    <li><a href="{{ site.url }}/projects/uga-keychain">UGA Keychain</a> <small style="color: #c0c0c0">2014</small></li>
</ul>

<div class="project-spacer-small"></div>

## Other

<ul>
<li><a href="https://github.com/fredhohman/fredhohman.github.io"><code>fredhohman.com</code> on Github</a></li>
<li><a href="{{ site.url }}/projects/raspberry-pi-case">Raspberry Pi Case</a> <small style="color: #c0c0c0">2013</small></li>
<li><a href="{{ site.url }}/projects/road-bike-restoration">Road Bike Restoration</a> <small style="color: #c0c0c0">2012</small></li>
</ul>

[trefoil]: {{ site.url }}/projects/3d-printing-the-trefoil-knot-and-its-pages "3D Printing the Trefoil Knot and its Pages"
[reu]: {{ site.url }}/projects/mathematics-&-computational-science-reu "Mathematics & Computational Science REU"

