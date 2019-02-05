---
layout: paper
categories: papers
key: mhealth
permalink: papers/dashboard
---

{% assign pub = site.data.publications | where:"id", page.key | first %}
{% assign paperPage = site.data.paper-pages | where:"id", page.key | first %}

{% include paper-page.html %}