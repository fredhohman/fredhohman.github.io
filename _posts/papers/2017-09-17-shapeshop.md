---
layout: paper
categories: papers
permalink: papers/shapeshop
title: ShapeShop
---

# ShapeShop: Towards Understanding Deep Learning Representations via Interactive Experimentation
[Fred Hohman][fred], [Nathan Hodas][nathan], [Duen Horng Chau][polo]  

<figure>
     <img class="single" src="/images/papers/17-shapeshop-chi.png">
    <figcaption class="single">
        The ShapeShop system user interface is divided into two main sections.
        The Model Builder (top) contains the training data, model, and hyperparameter selection options where a user follows enumerated steps, concluding with the system building and training an N-image classifier, where each training image selected corresponds to one class.
        In the Experiment Results section (bottom), each time the "Train and Visualize" button is clicked a new set of results appears including the class activation maximization of each class.
    </figcaption>
</figure>

## Abstract
Deep learning is the driving force behind many recent technologies; however, deep neural networks are often viewed as "black-boxes" due to their internal complexity that is hard to understand.
Little research focuses on helping people explore and understand the relationship between a user's data and the learned representations in deep learning models.
We present our ongoing work, ShapeShop, an interactive system for visualizing and understanding what semantics a neural network model has learned.
Built using standard web technologies, ShapeShop allows users to experiment with and compare deep learning models to help explore the robustness of image classifiers.   

## Materials
[PDF][17-shapeshop-chi-pdf] | Video ([Polo Club][17-shapeshop-chi-video-poloclub], [CHI][17-shapeshop-chi-video-chi]) | [Github][17-shapeshop-chi-github] | [Poster][17-shapeshop-chi-poster] | [BibTeX][17-shapeshop-chi]

## Citation
**[ShapeShop: Towards Understanding Deep Learning Representations via Interactive Experimentation][17-shapeshop-chi]**  
[Fred Hohman][fred], [Nathan Hodas][nathan], [Duen Horng Chau][polo]  
*Late-Breaking Work, ACM Conference on Human Factors in Computing Systems (CHI). May 6-11, 2017. Denver, CO, USA.*  
<span class="paper-misc">
[PDF][17-shapeshop-chi-pdf] | Video ([Polo Club][17-shapeshop-chi-video-poloclub], [CHI][17-shapeshop-chi-video-chi]) | [Github][17-shapeshop-chi-github] | [Poster][17-shapeshop-chi-poster] | [BibTeX][17-shapeshop-chi]
</span>

## BibTeX
```
@inproceedings{hohman2017shapeshop,
  title={ShapeShop: Towards Understanding Deep Learning Representations via Interactive Experimentation},
  author={Hohman, Fred and Hodas, Nathan and Chau, Duen Horng},
  booktitle={Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems},
  pages={1694--1699},
  year={2017},
  organization={ACM}
}
```

[fred]: http://fredhohman.com "Fred Hohman"
[nathan]: https://signatures.pnnl.gov/bios/nathan-hodas "Nathan Hodas"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"

[17-shapeshop-chi-pdf]: {{ site.url }}/papers/17-shapeshop-chi.pdf
[17-shapeshop-chi-video-poloclub]: https://www.youtube.com/watch?v=XL3fFwZ1DDQ&feature=youtu.be
[17-shapeshop-chi-video-chi]: https://www.youtube.com/watch?v=wRX1xEdrD1g
[17-shapeshop-chi-github]: https://github.com/fredhohman/shapeshop
[17-shapeshop-chi-poster]: {{ site.url }}/papers/17-shapeshop-chi-poster.pdf
[17-shapeshop-chi]: {{ site.url }}/papers/shapeshop