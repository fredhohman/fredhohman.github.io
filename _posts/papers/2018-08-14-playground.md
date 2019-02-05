---
layout: paper
categories: papers
key: graph-playground
permalink: papers/graph-playground
---

{% assign pub = site.data.publications | where:"id", page.key | first %}
{% assign paperPage = site.data.paper-pages | where:"id", page.key | first %}

{% include paper-page.html %}