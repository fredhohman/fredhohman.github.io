---
layout: paper
categories: papers
permalink: papers/electrolens
id: electrolens
title: "ElectroLens: Understanding Atomistic Simulations through Spatially-resolved Visualization of High-dimensional Features"
authors: 
    - Xiangyun Lei
    - Fred Hohman
    - Duen Horng (Polo) Chau
    - Andrew Medford
venue: IEEE Visualization Conference
venue-shorthand: VIS
location: Vancouver, Canada
year: 2019
url: /papers/electrolens
pdf: https://arxiv.org/abs/1908.08381
code: https://github.com/ray38/ElectroLens
feature-title: ElectroLens
feature-description: "Scaling deep learning interpretability by visualizing activation and attribution summarizations"
image: /images/featured/electrolens.png
featured: false
type: conference
figure: /images/papers/19-electrolens-vis.png
doi: "10.1109/VISUAL.2019.8933647"
bibtex: |-

    @article{lei2019electrolens,
        title={ElectroLens: Understanding Atomistic Simulations through Spatially-resolved Visualization of High-dimensional Features},
        author={Lei, Xiangyun and Hohman, Fred and Chau, Duen Horng (Polo) and Medford, Andrew},
        journal={IEEE Visualization Conference (VIS)},
        year={2019},
        publisher={IEEE},
        doi={10.1109/VISUAL.2019.8933647}
    }
---

In recent years, machine learning (ML) has gained significant popularity in the field of chemical informatics and electronic structure theory.
These techniques often require researchers to engineer abstract "features" that encode chemical concepts into a mathematical form compatible with the input to machine-learning models.
However, there is no existing tool to connect these abstract features back to the actual chemical system, making it difficult to diagnose failures and to build intuition about the meaning of the features.
We present ElectroLens, a new visualization tool for high-dimensional spatially-resolved features to tackle this problem.
The tool visualizes high-dimensional data sets for atomistic and electron environment features by a series of linked 3D views and 2D plots.
The tool is able to connect different derived features and their corresponding regions in 3D via interactive selection.
It is built to be scalable, and integrate with existing infrastructure.
