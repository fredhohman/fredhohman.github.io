---
layout: paper
categories: papers
permalink: papers/policy-projector
id: policy-projector
title: "AI Policy Projector: Grounding LLM Policy Design in Iterative Mapmaking"
authors: 
  - Michelle S. Lam
  - Fred Hohman
  - Dominik Moritz
  - Jeffrey P. Bigham
  - Kenneth Holstein
  - Mary Beth Kery
venue: arXiv:2409.18203 
venue-shorthand: arXiv
year: 2024
url: /papers/policy-projector
pdf: https://arxiv.org/abs/2409.18203
# code: 
# preview: 
# video: 
doi: 10.48550/arXiv.2409.18203
type: preprint
figure: /images/papers/24-policy-projector-arxiv.png
selected: false
feature-title: AI Policy Projector
feature-description: Grounding LLM policy design in iterative mapmaking
image: /images/featured/policy-projector.png
featured: false
feature-order: 0
bibtex: |-

    @article{lam2024policy,
        title={{AI Policy Projector: Grounding LLM Policy Design in Iterative Mapmaking}},
        author={Lam, Michelle S. and Hohman, Fred and Moritz, Dominik and Bigham, Jeffrey P. and Holstein, Kenneth and Kery, Mary Beth},
        journal={arXiv preprint arXiv:2409.18203},
        year={2024}
    }
---

Whether a large language model policy is an explicit constitution or an implicit reward model, it is challenging to assess coverage over the unbounded set of real-world situations that a policy must contend with.
We introduce an AI policy design process inspired by mapmaking, which has developed tactics for visualizing and iterating on maps even when full coverage is not possible.
With Policy Projector, policy designers can survey the landscape of model input-output pairs, define custom regions (e.g., "violence"), and navigate these regions with rules that can be applied to LLM outputs (e.g., if output contains "violence" and "graphic details," then rewrite without "graphic details").
Policy Projector supports interactive policy authoring using LLM classification and steering and a map visualization reflecting the policy designer's work.
In an evaluation with 12 AI safety experts, our system helps policy designers to address problematic model behaviors extending beyond an existing, comprehensive harm taxonomy.
