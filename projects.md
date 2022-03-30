---
layout: page
title: Projects
permalink: projects/
---

Things I do, including research, academic course projects, and miscellaneous interests.

### Research
<ul>
    {% for pub in site.categories.papers %}
    {% assign title = pub.id | split: "/" %}
    <li><a href="{{ pub.url }}" style="text-transform: capitalize">{{ title[2] }}</a> <small style="color: #c0c0c0">{{ pub.year }}</small></li>
    {% endfor %}
</ul>


### Interactive Articles
<ul>
    {% for article in site.data.articles %}
        {% unless article.feature-only %}
            <li><a href="{{ article.url }}" style="text-transform: capitalize">{{ article.title }}</a> <small style="color: #c0c0c0">{{ article.year }}</small></li>
        {% endunless %}
    {% endfor %}
</ul>

### Parametric Press Articles
<ul>
    {% for article in site.data.parametric-articles %}
        <li><a href="{{ article.url }}" style="text-transform: capitalize">{{ article.title }}</a> <small style="color: #c0c0c0">{{ article.year }}</small></li>
    {% endfor %}
</ul>

### Undergraduate Thesis
[3D Printing the Trefoil Knot and its Pages][trefoil] <small style="color: #c0c0c0">2015</small>

### REU
[Math & Computational Science REU][reu] <small style="color: #c0c0c0">2014</small>

### Academic
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

### Other
<ul>
<li><a href="https://github.com/fredhohman/fredhohman.github.io"><code>fredhohman.com</code> on Github</a></li>
<li><a href="{{ site.url }}/projects/raspberry-pi-case">Raspberry Pi Case</a> <small style="color: #c0c0c0">2013</small></li>
<li><a href="{{ site.url }}/projects/road-bike-restoration">Road Bike Restoration</a> <small style="color: #c0c0c0">2012</small></li>
</ul>

[trefoil]: {{ site.url }}/projects/3d-printing-the-trefoil-knot-and-its-pages "3D Printing the Trefoil Knot and its Pages"
[reu]: {{ site.url }}/projects/mathematics-&-computational-science-reu "Mathematics & Computational Science REU"
