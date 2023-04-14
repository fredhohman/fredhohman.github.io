---
layout: paper
categories: papers
permalink: papers/chameleon
id: chameleon
title: "Understanding and Visualizing Data Iteration in Machine Learning"
authors: 
  - Fred Hohman
  - Kanit Wongsuphasawat
  - Mary Beth Kery
  - Kayur Patel
venue: ACM Conference on Human Factors in Computing Systems
venue-shorthand: CHI
location: Honolulu, HI, USA
year: 2020
url: /papers/chameleon
pdf: https://machinelearning.apple.com/research/understanding-visualizing-data-iteration-machine-learning
video: https://youtu.be/xWRU88FykpA
preview: https://youtu.be/fXVeBgK-ix4
slides: /slides/20-chameleon-chi-slides.pdf
recording: https://www.youtube.com/watch?v=xA-5sIo1Ma8
selected: false
type: conference
figure: /images/papers/20-chameleon-chi.png
doi: "10.1145/3313831.3376177"
featured: false
feature-order: 4
feature-title: Chameleon
feature-description: Understanding and visualizing data iteration in machine learning
image: /images/featured/chameleon.png
bibtex: |-

  @inproceedings{hohman2020understanding,
    title={Understanding and Visualizing Data Iteration in Machine Learning},
    author={Hohman, Fred and Wongsuphasawat, Kanit and Kery, Mary Beth and Patel, Kayur},
    booktitle={Proceedings of the SIGCHI Conference on Human Factors in Computing Systems},
    year={2020},
    organization={ACM},
    doi={10.1145/3313831.3376177}
  }
---

Successful machine learning (ML) applications require iterations on both modeling and the underlying data.
While prior visualization tools for ML primarily focus on modeling, our interviews with 23 ML practitioners reveal that they improve model performance frequently by iterating on their data (e.g., collecting new data, adding labels) rather than their models.
We also identify common types of data iterations and associated analysis tasks and challenges.
To help attribute data iterations to model performance, we design a collection of interactive visualizations and integrate them into a prototype, Chameleon, that lets users compare data features, training/testing splits, and performance across data versions.
We present two case studies where developers apply Chameleon to their own evolving datasets on production ML projects.
Our interface helps them verify data collection efforts, find failure cases stretching across data versions, capture data processing changes that impacted performance, and identify opportunities for future data iterations.