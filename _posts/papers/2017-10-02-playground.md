---
layout: paper
categories: papers
permalink: papers/playground
id: playground
title: "3D Exploration of Graph Layers via Vertex Cloning"
authors:
    - James Abello
    - Fred Hohman
    - Duen Horng (Polo) Chau
equal-contribution:
    - James Abello
    - Fred Hohman
venue: Poster, IEEE Conference on Visual Analytics Science and Technology
venue-shorthand: VAST
location: Phoenix, AZ, USA
year: 2017
url: https://fredhohman.com/papers/playground
pdf: https://fredhohman.com/papers/17-playground-vast.pdf
video: https://www.youtube.com/watch?v=CV-0CIKg1CA&feature=youtu.be
poster: https://fredhohman.com/papers/17-playground-vast-poster.pdf
type: poster
figure: /images/papers/17-playground-vast.png
feature-title: Graph Playgrounds
feature-description: "3D exploration of graph layers via vertex cloning"
bibtex: |-

    @inproceedings{hohman2017playground,
        title={3D Exploration of Graph Layers via Vertex Cloning},
        author={Abello, James and Hohman, Fred and Chau, Duen Horng},
        booktitle={Poster, IEEE Conference on Visual Analytics Science and Technology (VAST)},
        year={2017},
        publisher={IEEE}
    }

---

We use an iterative edge decomposition approach, derived from the popular iterative vertex peeling strategy, to globally split each vertex egonet (subgraph induced by a vertex and its neighbors) into a collection of edge-disjoint layers. 
Each layer is an edge maximal induced subgraph of minimum degree k that determines the layer density.
This edge decomposition is derived completely from the overall network topology, and since each vertex can appear in multiple layers, we can associate to each vertex a vector profile that can be used to identify its different "roles" across the network.
This allows us to explore a network’s topology at different levels of granularity, e.g., per layer and across layers.
This is only feasible by mapping simultaneously a vertex to a set of 3D coordinates (x, y, and z) where the third coordinate encodes the different layers a vertex belongs to.
This is one of the few instances where 3D visualization enhances graph exploration and navigation in an arguably "natural" way: a graph now becomes a 3D graph playground where a vertex plays a certain "role" per layer that is determined by the overall network topology.
Our approach helps disentangle "hairball" looking embeddings produced by conventional 2D graph drawings.
