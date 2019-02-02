---
layout: paper
categories: papers
key: graph-playground
permalink: papers/graph-playground
title: Large Graph Exploration via Subgraph Discovery and Decomposition
---

{% assign pub = site.data.publications | where:"id", page.key | first %}

# {{ page.title }}
<p>
{% for person in pub.authors %}
  {% if forloop.last == false %}
    {% include person.html person=person %}{% for p in pub.equal-contribution %}{% if person == p %}*{% endif %}{% endfor %},
  {% else if forloop.last == true %}
    {% include person.html person=person %}{% for p in pub.equal-contribution %}{% if  person  == p %}*{% endif %}{% endfor %}
  {% endif %}
{% endfor %}
</p>

  
<figure>
    <img class="single" src="/images/papers/18-playground-arxiv.png">
    <figcaption class="single">
    The Graph Playground user interface.
    Graph Playground is composed of three main views: the 3D Overview (left), the Graph Ribbon (middle), and the Layers view (right).
    The Graph Ribbon that splits the display can be dragged left and right to adjust the visible screen real estate that either the Overview or Layers view shows.
    In the figure, the vertex "caeciliidae" is selected, coloring it blue in both the Overview and Layers view.
    Here we see "caeciliidae" (a worm-like amphibian) in layer 30 bridges two quasi-cliques (families of birds and families of sea snails) together, while its clone in layer 25 participates in another single quasi-clique (families of land creatures).

    </figcaption>
</figure>

## Abstract
We are developing an interactive graph exploration system called Graph Playground for making sense of large graphs.
Graph Playground offers a fast and scalable edge decomposition algorithm, based on iterative vertex-edge peeling, to decompose million-edge graphs in seconds.
Graph Playground introduces a novel graph exploration approach and a 3D representation framework that simultaneously reveals (1) peculiar subgraph structure discovered through the decomposition's layers, (e.g., quasi-cliques), and (2) possible vertex roles in linking such subgraph patterns across layers.


<!-- ## Materials -->
<!-- [PDF][18-playground-arxiv-pdf] | [BibTeX][18-playground-arxiv] -->

## Citation
{% include publication.html pub=pub %}

<!-- **[Large Graph Exploration via Subgraph Discovery and Decomposition][18-playground-arxiv]**  
[James Abello][james], [Fred Hohman][fred], [Varun Bezzam][varun], [Duen Horng Chau][polo]    
*arXiv:1808.04414. Aug 13, 2018.*  
<span class="paper-misc">
<span class="cv-website-marker">[Site][18-playground-arxiv]</span> | [PDF][18-playground-arxiv-pdf] | [BibTeX][18-playground-arxiv]
</span> -->

## BibTeX
```
<!-- {{ pub.bibtex }} -->
```

[fred]: http://fredhohman.com "Fred Hohman"
[james]: https://www.cs.rutgers.edu/faculty/james-abello-monedero "James Abello"
[varun]: https://www.linkedin.com/in/varun-bezzam/ "Varun Bezzam"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"

[18-playground-arxiv]: {{ site.url }}/papers/graph-playground
[18-playground-arxiv-pdf]: https://arxiv.org/pdf/1808.04414.pdf