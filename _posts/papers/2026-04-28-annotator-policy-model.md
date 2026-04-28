---
layout: paper
categories: papers
permalink: papers/annotator-policy-models
id: annotator-policy-models
title: "Understanding Annotator Decision-making with Interpretability"
authors: 
  - Alex Oesterling
  - Donghao Ren
  - Yannick Assogba
  - Dominik Moritz
  - Sunnie S. Y. Kim
  - Leon Gatys
  - Fred Hohman
venue: ACM Conference on Fairness, Accountability, and Transparency
venue-shorthand: FAccT
year: 2026
url: /papers/annotator-policy-models
# pdf: https://machinelearning.apple.com/research/semantic-regexes
# code: https://github.com/apple/ml-semantic-regex
# demo: https://apple.github.io/ml-semantic-regex/
# preview: 
# video: 
coming-soon: true
doi: 10.1145/3805689.3806472
type: conference
# figure: /images/papers/
selected: false
# feature-title: 
# feature-description: 
# image: /images/featured/
featured: false
feature-order: 0
bibtex: |-

    @inproceedings{oesterling2026understanding,
      title={Understanding Annotator Decision-making with Interpretability},
      author={Oesterling, Alex and Ren, Donghao and Assogba, Yannick and Moritz, Dominik and Kim, Sunnie S. Y. and Gatys, Leon and Hohman, Fred},
      booktitle={ACM Conference on Fairness, Accountability, and Transparency},
      year={2026},
      doi={10.1145/3805689.3806472}
    }
---

Safety policies define what constitutes safe and unsafe AI outputs, guiding data annotation and model development. 
However, annotation disagreement is pervasive and can stem from multiple sources such as operational failures (annotators misunderstand or misexecute the task), policy ambiguity (policy wording leaves room for interpretation), or value pluralism (different annotators hold different perspectives on safety).
Distinguishing these sources matters.
For example, operational failures call for quality control, ambiguity calls for policy clarification, and pluralism calls for deliberation about incorporating diverse perspectives.
Yet understanding why annotators disagree is difficult.
Directly asking annotators for their reasoning is costly, substantially increasing annotation burden, and can be unreliable for both human and LLM annotators as self-reported reasoning often fails to reflect actual decision processes.

We introduce Annotator Policy Models (APMs), interpretable models that learn annotators' internal safety policies from labeling behavior alone, making annotator reasoning visible and comparable without additional annotation effort.
We validate that APMs accurately model annotator safety policy (>80% accuracy), faithfully predict responses to counterfactual edits, and recover known policy differences in controlled settings.
Applying APMs to LLM and human annotations, we demonstrate two core applications: (1) surfacing policy ambiguity by revealing how annotators interpret safety instructions differently, and (2) surfacing value pluralism by uncovering systematic differences in safety priorities across demographic groups.
Together, these capabilities support more targeted, transparent, and inclusive safety policy design.