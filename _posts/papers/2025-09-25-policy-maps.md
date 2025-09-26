---
layout: paper
categories: papers
permalink: papers/policy-maps
id: policy-maps
title: "Policy Maps: Tools for Guiding the Unbounded Space of LLM Behaviors"
authors: 
  - Michelle S. Lam
  - Fred Hohman
  - Dominik Moritz
  - Jeffrey P. Bigham
  - Kenneth Holstein
  - Mary Beth Kery
venue: ACM Symposium on User Interface Software and Technology
venue-shorthand: UIST
year: 2025
url: /papers/policy-maps
pdf: https://arxiv.org/abs/2409.18203
code: https://github.com/apple/ml-policy-projector
# preview: 
# video: 
doi: 10.1145/3746059.3747680
type: conference
figure: /images/papers/25-policy-maps-uist.png
selected: false
feature-title: Policy Maps
feature-description: Tools for guiding the unbounded space of LLM behaviors
image: /images/featured/policy-projector.png
featured: false
feature-order: 0
bibtex: |-

    @inproceedings{lam2025policy,
        title={{Policy Maps: Tools for Guiding the Unbounded Space of LLM Behaviors}},
        author={Lam, Michelle S. and Hohman, Fred and Moritz, Dominik and Bigham, Jeffrey P. and Holstein, Kenneth and Kery, Mary Beth},
        booktitle={Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology},
        year={2025},
        publisher={ACM},
        doi={10.1145/3746059.3747680}
    }
---

AI policy sets boundaries on acceptable behavior for AI models, but this is challenging in the context of large language models (LLMs): how do you ensure coverage over a vast behavior space?
We introduce policy maps, an approach to AI policy design inspired by the practice of physical mapmaking.
Instead of aiming for full coverage, policy maps aid effective navigation through intentional design choices about which aspects to capture and which to abstract away.
With Policy Projector, an interactive tool for designing LLM policy maps, an AI practitioner can survey the landscape of model input-output pairs, define custom regions (e.g., "violence"), and navigate these regions with if-then policy rules that can act on LLM outputs (e.g., if output contains "violence" and "graphic details," then rewrite without "graphic details").
Policy Projector supports interactive policy authoring using LLM classification and steering and a map visualization reflecting the AI practitioner's work.
In an evaluation with 12 AI safety experts, our system helps policy designers craft policies around problematic model behaviors such as incorrect gender assumptions and handling of immediate physical safety threats.
