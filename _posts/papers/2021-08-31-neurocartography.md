---
layout: paper
id: neurocartography
categories: papers
permalink: papers/neurocartography
title: "NeuroCartography: Scalable Automatic Visual Summarization of Concepts in Deep Neural Networks"
authors: 
  - Haekyu Park
  - Nilaksh Das
  - Rahul Duggal
  - Austin P. Wright
  - Omar Shaikh
  - Fred Hohman
  - Duen Horng (Polo) Chau
venue: IEEE Transactions on Visualization and Computer Graphics
venue-shorthand: TVCG
location: New Orleans, LA, USA
year: 2022
url: /papers/neurocartography
demo: https://poloclub.github.io/neuro-cartography/
pdf: https://arxiv.org/abs/2108.12931
recording: https://www.youtube.com/watch?v=gx0dDNXFJA0
code: https://github.com/poloclub/neuro-cartography
feature-title: NeuroCartography
feature-description: "Scalable automatic visual summarization of concepts in deep neural networks"
featured: false
selected: false
highlight: Top 4 TVCG Papers invited to SIGGRAPH
type: journal
figure: /images/papers/21-neurocartography-vis.png
doi: "10.1109/TVCG.2021.3114858"
bibtex: |-

  @article{park2022neurocartography,
    title={NeuroCartography: Scalable Automatic Visual Summarization of Concepts in Deep Neural Networks},
    author={Park, Haekyu and Das, Nilaksh and Duggal, Rahul and Wright, Austin P. and Shaikh, Omar and Hohman, Fred and Chau, Duen Horng},
    journal={IEEE Transactions on Visualization and Computer Graphics (TVCG)},
    year={2022},
    publisher={IEEE},
    doi={10.1109/TVCG.2021.3114858},
    url={https://poloclub.github.io/neuro-cartography/}
  }
---
    
Existing research on making sense of deep neural networks often focuses on neuron-level interpretation, which may not adequately capture the bigger picture of how concepts are collectively encoded by multiple neurons.
We present NeuroCartography, an interactive system that scalably summarizes and visualizes concepts learned by neural networks.
It automatically discovers and groups neurons that detect the same concepts, and describes how such neuron groups interact to form higher-level concepts and the subsequent predictions.
NeuroCartography introduces two scalable summarization techniques: (1) neuron clustering groups neurons based on the semantic similarity of the concepts detected by neurons (e.g., neurons detecting “dog faces” of different breeds are grouped); and (2) neuron embedding encodes the associations between related concepts based on how often they co-occur (e.g., neurons detecting “dog face” and “dog tail” are placed closer in the embedding space).
Key to our scalable techniques is the ability to efficiently compute all neuron pairs’ relationships, in time linear to the number of neurons instead of quadratic time
NeuroCartography scales to large data, such as the ImageNet dataset with 1.2M images.
The system’s tightly coordinated views integrate the scalable techniques to visualize the concepts and their relationships, projecting the concept associations to a 2D space in Neuron Projection View, and summarizing neuron clusters and their relationships in Graph View.
Through a large-scale human evaluation, we demonstrate that our technique discovers neuron groups that represent coherent, human-meaningful concepts.
And through usage scenarios, we describe how our approaches enable interesting and surprising discoveries, such as concept cascades of related and isolated concepts.
The NeuroCartography visualization runs in modern browsers and is open-sourced.
