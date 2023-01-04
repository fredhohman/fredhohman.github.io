---
layout: paper
categories: papers
permalink: papers/neuraldivergence
id: neuraldivergence
title: "NeuralDivergence: Exploring and Understanding Neural Networks by Comparing Activation Distributions"
authors: 
  - Haekyu Park
  - Fred Hohman
  - Duen Horng (Polo) Chau
venue: Poster, IEEE Pacific Visualization Symposium
venue-shorthand: PacificVis
location: Bangkok, Thailand 
year: 2019
url: papers/neuraldivergence/
demo: http://haekyu.com/neural-divergence/
pdf: http://haekyu.com/neural-divergence/assets/19_pacificvis_neural_divergence.pdf
demo: http://haekyu.com/neural-divergence/
poster: http://haekyu.com/neural-divergence/assets/19-neural-divergence-poster.pdf
slides: http://haekyu.com/neural-divergence/assets/neural-divergence-presentation.pdf
type: poster
figure: /images/papers/19-neuraldivergence-pacificvis.png
feature-title: NeuralDivergence
feature-description: Exploring and understanding neural networks by comparing activation distributions
bibtex: |-

  @inproceedings{park2019neuraldivergence,
    title={NeuralDivergence: Exploring and Understanding Neural Networks by Comparing Activation Distributions},
    author={Park, Haekyu and Hohman, Fred and Chau, Duen Horng},
    booktitle={Poster, Pacific Visualization Symposium (PacificVis)},
    year={2019},
    publisher={IEEE},
    url={http://haekyu.com/neural-divergence/}
  }
---

As deep neural networks are increasingly used in solving highstake problems, there is a pressing need to understand their internal decision mechanisms. Visualization has helped address this problem by assisting with interpreting complex deep neural networks.
However, current tools often support only single data instances, or visualize layers in isolation.
We present NeuralDivergence, an interactive visualization system that uses activation distributions as a high-level summary of what a model has learned. NeuralDivergence enables users to interactively summarize and compare activation distributions across layers, classes, and instances (e.g., pairs of adversarial attacked and benign images), helping them gain better understanding of neural network models.
