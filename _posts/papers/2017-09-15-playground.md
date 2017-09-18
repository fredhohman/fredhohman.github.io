---
layout: paper
categories: papers
permalink: papers/playground
---

# 3D Exploration of Graph Layers via Vertex Cloning
[James Abello][james], [Fred Hohman][fred], [Duen Horng Chau][polo]  

<figure>
     <img class="single" src="/images/papers/17-playground-vis.png">
    <figcaption class="single">
        (A) The Les Miserables co-occurrence network of the novel’s characters, visualized using standard force-directed layout.
        (B) A graph playground created by applying fixed-point edge decomposition, producing cloned vertices that appear in multiple layers.
        The character Valjean appears in six layers; his clones are connected using a vertical black line, and his egonet is highlighted in every layer.
        (C) The graph playground layers separated and individually redrawn using force-directed layout in 2D, with Valjean’s colored egonet still shown. Our method reveals interesting subgraph structures and distributes them into layers, e.g., stars in layer 1 (blue), and a clique in layer 6 (brown).
        Valjean’s vertex is colored black in every layer he exists in (all layers except layer 9), highlighting his central role in the novel and his diverse participation in different graph patterns.
    </figcaption>
</figure>

## Abstract
We use an iterative edge decomposition approach, derived from the popular iterative vertex peeling strategy, to globally split each vertex egonet (subgraph induced by a vertex and its neighbors) into a collection of edge-disjoint layers. 
Each layer is an edge maximal induced subgraph of minimum degree k that determines the layer density.
This edge decomposition is derived completely from the overall network topology, and since each vertex can appear in multiple layers, we can associate to each vertex a vector profile that can be used to identify its different "roles" across the network.
This allows us to explore a network’s topology at different levels of granularity, e.g., per layer and across layers.
This is only feasible by mapping simultaneously a vertex to a set of 3D coordinates (x, y, and z) where the third coordinate encodes the different layers a vertex belongs to.
This is one of the few instances where 3D visualization enhances graph exploration and navigation in an arguably "natural" way: a graph now becomes a 3D graph playground where a vertex plays a certain "role" per layer that is determined by the overall network topology.
Our approach helps disentangle "hairball" looking embeddings produced by conventional 2D graph drawings.

## Materials
[PDF][17-playground-vis-pdf] | Video ([Youtube][17-playground-vis-video-youtube], [Vimeo][17-playground-vis-video-vimeo])

## Citation
**[3D Exploration of Graph Layers via Vertex Cloning][17-playground-vis-pdf]**  
[James Abello][james], [Fred Hohman][fred], [Duen Horng Chau][polo]  
*Poster, IEEE Information Visualization (VIS). Oct 1-6, 2017. Phoenix, USA.*  
<span class="paper-misc">
[PDF][17-playground-vis-pdf] | Video ([Youtube][17-playground-vis-video-youtube], [Vimeo][17-playground-vis-video-vimeo])
</span>

## BibTeX

```

```

[james]: https://www.cs.rutgers.edu/faculty/james-abello-monedero "James Abello"
[fred]: http://fredhohman.com "Fred Hohman"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"

[17-playground-vis-pdf]: {{ site.url }}/papers/17-playground-vis.pdf
[17-playground-vis-video-youtube]: https://www.youtube.com/watch?v=CV-0CIKg1CA&feature=youtu.be
[17-playground-vis-video-vimeo]: https://vimeo.com/groups/480818/videos/230837562