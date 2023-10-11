---
layout: paper
categories: papers
permalink: papers/compression
id: compression
title: "Model Compression in Practice: Lessons Learned from Practitioners Creating On-device Machine Learning Experiences"
authors: 
  - Fred Hohman
  - Mary Beth Kery
  - Donghao Ren
  - Dominik Moritz
venue: arXiv:2310:04621
venue-shorthand: arXiv
year: 2023
url: /papers/compression
pdf: https://arxiv.org/abs/2310.04621
type: preprint
figure: /images/papers/23-compression-arxiv.png
selected: true
feature-title: Model Compression in Practice
feature-description: Lessons learned from practitioners creating on-device machine learning experiences
image: /images/featured/compression.png
featured: true
bibtex: |-

    @article{hohman2023model,
        title={Model Compression in Practice: Lessons Learned from Practitioners Creating On-device Machine Learning Experiences},
        author={Hohman, Fred and Kery, Mary Beth and Ren, Donghao and Moritz, Dominik},
        journal={arXiv preprint arXiv:2310.04621},
        year={2023}
    }
---

On-device machine learning (ML) promises to improve the privacy, responsiveness, and proliferation of new, intelligent user experiences by moving ML computation onto everyday personal devices.
However, today's large ML models must be drastically compressed to run efficiently on-device, a hurtle that requires deep, yet currently niche expertise.
To engage the broader human-centered ML community in on-device ML experiences, we present the results from an interview study with 30 experts at Apple that specialize in producing efficient models.
We compile tacit knowledge that experts have developed through practical experience with model compression across different hardware platforms.
Our findings offer pragmatic considerations missing from prior work, covering the design process, trade-offs, and technical strategies that go into creating efficient models.
Finally, we distill design recommendations for tooling to help ease the difficulty of this work and bring on-device ML into to more widespread practice.
