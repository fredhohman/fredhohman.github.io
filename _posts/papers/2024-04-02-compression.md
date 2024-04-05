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
venue: ACM Conference on Human Factors in Computing Systems
venue-shorthand: CHI
location: Honolulu, Hawai'i, USA
year: 2024
url: /papers/compression
pdf: https://arxiv.org/abs/2310.04621
doi: 10.1145/3613904.3642109
type: conference
figure: /images/papers/24-compression-chi.png
selected: true
feature-title: Model Compression in Practice
feature-description: Lessons learned from practitioners creating on-device machine learning experiences
image: /images/featured/compression.png
featured: true
feature-order: 0
coming-soon: true
bibtex: |-

    @inproceedings{hohman2024model,
        title={{Model Compression in Practice: Lessons Learned from Practitioners Creating On-device Machine Learning Experiences}},
        author={Hohman, Fred and Kery, Mary Beth and Ren, Donghao and Moritz, Dominik},
        booktitle={Proceedings of the SIGCHI Conference on Human Factors in Computing Systems},
        year={2024},
        organization={ACM},
        doi={10.1145/3613904.3642109}
    }
---

On-device machine learning (ML) promises to improve the privacy, responsiveness, and proliferation of new, intelligent user experiences by moving ML computation onto everyday personal devices.
However, today's large ML models must be drastically compressed to run efficiently on-device, a hurtle that requires deep, yet currently niche expertise.
To engage the broader human-centered ML community in on-device ML experiences, we present the results from an interview study with 30 experts at Apple that specialize in producing efficient models.
We compile tacit knowledge that experts have developed through practical experience with model compression across different hardware platforms. 
Our findings offer pragmatic considerations missing from prior work, covering the design process, trade-offs, and technical strategies that go into creating efficient models.
Finally, we distill design recommendations for tooling to help ease the difficulty of this work and bring on-device ML into to more widespread practice.