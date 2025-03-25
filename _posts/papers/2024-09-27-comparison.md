---
layout: paper
categories: papers
permalink: papers/comparison
id: comparison
title: "Compress and Compare: Interactively Evaluating Efficiency and Behavior Across ML Model Compression Experiments"
authors: 
  - Angie Boggust
  - Venkatesh Sivaraman
  - Yannick Assogba
  - Donghao Ren
  - Dominik Moritz
  - Fred Hohman
equal-contribution:
  - Angie Boggust
  - Venkatesh Sivaraman
venue: IEEE Transactions on Visualization and Computer Graphics
venue-shorthand: TVCG
location: St. Pete Beach, Florida, USA
year: 2025
url: /papers/comparison
pdf: https://arxiv.org/abs/2408.03274
code: https://github.com/apple/ml-compress-and-compare
# preview: 
video: https://www.youtube.com/watch?v=ESst2nxcXuA&t=3210s
doi: 10.1109/TVCG.2024.3456371
type: journal
figure: /images/papers/24-comparison-vis.png
selected: false
feature-title: Compress and Compare
feature-description: Interactively evaluating efficiency and behavior across ML model compression experiments
image: /images/featured/comparison.png
featured: false
feature-order: 0
bibtex: |-

    @inproceedings{boggust2025compress,
        title={{Compress and Compare: Interactively Evaluating Efficiency and Behavior Across ML Model Compression Experiments}},
        author={Boggust, Angie and Sivaraman, Venkatesh and Assogba, Yannick and Ren, Donghao and Moritz, Dominik and Hohman, Fred},
        booktitle={IEEE Transactions on Visualization and Computer Graphics},
        year={2025},
        organization={IEEE},
        doi={10.1109/TVCG.2024.3456371}
    }
---

To deploy machine learning models on-device, practitioners use compression algorithms to shrink and speed up models while maintaining their high-quality output.
A critical aspect of compression in practice is model comparison, including tracking many compression experiments, identifying subtle changes in model behavior, and negotiating complex accuracy-efficiency trade-offs. However, existing compression tools poorly support comparison, leading to tedious and, sometimes, incomplete analyses spread across disjoint tools.
To support real-world comparative workflows, we develop an interactive visual system called Compress and Compare.
Within a single interface, Compress and Compare surfaces promising compression strategies by visualizing provenance relationships between compressed models and reveals compression-induced behavior changes by comparing models' predictions, weights, and activations.
We demonstrate how Compress and Compare supports common compression analysis tasks through two case studies, debugging failed compression on generative language models and identifying compression artifacts in image classification models.
We further evaluate Compress and Compare in a user study with eight compression experts, illustrating its potential to provide structure to compression workflows, help practitioners build intuition about compression, and encourage thorough analysis of compression's effect on model behavior.
Through these evaluations, we identify compression-specific challenges that future visual analytics tools should consider and Compress and Compare visualizations that may generalize to broader model comparison tasks.
