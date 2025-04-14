---
layout: paper
categories: papers
permalink: papers/embedding-cluster
id: embedding-cluster
title: "A Scalable Approach to Clustering Embedding Projections"
authors: 
  - Donghao Ren
  - Fred Hohman
  - Dominik Moritz
venue: arXiv:2504.07285
venue-shorthand: arXiv
year: 2025
url: /papers/embedding-cluster
pdf: https://arxiv.org/abs/2504.07285
# code: 
# preview: 
# video: 
doi: 10.48550/arXiv.2504.07285
type: preprint
figure: /images/papers/25-embedding-cluster-arxiv.png
selected: false
feature-title: Embedding Clustering
feature-description: A scalable approach to clustering embedding projections
# image: /images/featured/
featured: false
feature-order: 0
bibtex: |-

    @article{ren2025scalable,
      title={A Scalable Approach to Clustering Embedding Projections},
      author={Ren, Donghao and Hohman, Fred and Moritz, Dominik},
      journal={arXiv preprint arXiv:2504.07285},
      year={2025}
    }
---

Interactive visualization of embedding projections is a useful technique for understanding data and evaluating machine learning models.
Labeling data within these visualizations is critical for interpretation, as labels provide an overview of the projection and guide user navigation.
However, most methods for producing labels require clustering the points, which can be computationally expensive as the number of points grows.
In this paper, we describe an efficient clustering approach using kernel density estimation in the projected 2D space instead of points.
This algorithm can produce high-quality cluster regions from a 2D density map in a few hundred milliseconds, orders of magnitude faster than current approaches.
We contribute the design of the algorithm, benchmarks, and applications that demonstrate the utility of the algorithm, including labeling and summarization.
