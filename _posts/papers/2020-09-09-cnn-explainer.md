---
layout: paper
categories: papers
permalink: papers/cnn-explainer
id: cnn-explainer
title: "CNN Explainer: Learning Convolutional Neural Networks with Interactive Visualization"
authors: 
  - Zijie J. Wang
  - Robert Turko
  - Omar Shaikh 
  - Haekyu Park
  - Nilaksh Das
  - Fred Hohman
  - Minsuk Kahng
  - Duen Horng (Polo) Chau
venue: IEEE Transactions on Visualization and Computer Graphics
venue-shorthand: TVCG
location: Salt Lake City, UT, USA
year: 2021
url: /papers/cnn-explainer
pdf: https://arxiv.org/abs/2004.15004
video: https://youtu.be/HnWIHWFbuUQ
code: https://github.com/poloclub/cnn-explainer
demo: https://poloclub.github.io/cnn-explainer/
recording: https://www.youtube.com/watch?v=M-pUfWMjXhQ&feature=youtu.be&ab_channel=IEEEVisConference2020
highlight: Top of Github Trending, Top 4 TVCG Papers invited to SIGGRAPH
type: journal
figure: /images/papers/20-cnnexplainer-tvcg.png
selected: true
doi: "10.1109/TVCG.2020.3030418"
bibtex: |-

  @inproceedings{wang2021cnnexplainer,
    title={CNN Explainer: Learning Convolutional Neural Networks with Interactive Visualization},
    author={Wang, Zijie J. and Turko, Robert and Shaikh, Omar and Park, Haekyu and Das, Nilaksh and Hohman, Fred and Kahng, Minsuk and Chau, Duen Horng (Polo)},
    booktitle={IEEE Transactions on Visualization and Computer Graphics (TVCG)},
    publisher={IEEE},
    year={2021},
    doi={10.1109/TVCG.2020.3030418},
    url={https://poloclub.github.io/cnn-explainer/}
  }
---

Deep learning's great success motivates many practitioners and students to learn about this exciting technology.
However, it is often challenging for beginners to take their first step due to the complexity of understanding and applying deep learning.
We present CNN Explainer, an interactive visualization tool designed for non-experts to learn and examine convolutional neural networks (CNNs), a foundational deep learning model architecture.
Our tool addresses key challenges that novices face while learning about CNNs, which we identify from interviews with instructors and a survey with past students.
CNN Explainer tightly integrates a model overview that summarizes a CNN's structure, and on-demand, dynamic visual explanation views that help users understand the underlying components of CNNs.
Through smooth transitions across levels of abstraction, our tool enables users to inspect the interplay between low-level mathematical operations and high-level model structures.
A qualitative user study shows that CNN Explainer helps users more easily understand the inner workings of CNNs, and is engaging and enjoyable to use.
We also derive design lessons from our study.
Developed using modern web technologies, CNN Explainer runs locally in users' web browsers without the need for installation or specialized hardware, broadening the public's education access to modern deep learning techniques.
