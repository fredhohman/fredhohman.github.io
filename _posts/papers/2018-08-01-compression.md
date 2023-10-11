---
layout: paper
categories: papers
permalink: papers/multi-modal-defense
id: multi-modal-defense
title: "Compression to the Rescue: Defending from Adversarial Attacks Across Modalities"
authors:
    - Nilaksh Das
    - Madhuri Shanbhogue
    - Shang-Tse Chen
    - Fred Hohman
    - Siwei Li
    - Li Chen
    - Michael E. Kounavis
    - Duen Horng (Polo) Chau
venue: Project Showcase, ACM SIGKDD Conference on Knowledge Discovery and Data Mining
venue-shorthand: KDD
location: London, UK
year: 2018
url: /papers/multi-modal-defense
pdf: http://nilakshdas.com/papers/18-compression-kdd.pdf
code: https://github.com/poloclub/jpeg-defense
type: workshop
feature-title: Multi-modal Defense
feature-description: "Compression to the rescue: defending from adversarial attacks across modalities"
bibtex: |-

    @inproceedings{das2018compression,
        author={Das, Nilaksh and Shanbhogue, Madhuri and Chen, Shang-Tse and Hohman, Fred and Li, Siwei and Chen, Li and Kounavis, Michael E. and Chau, Duen Horng},
        title={Compression to the Rescue: Defending from Adversarial Attacks Across Modalities},
        booktitle={Project Showcase, Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery \& Data Mining (KDD)},
        year={2018},
        publisher={ACM}
    } 

---

Research in the upcoming field of adversarial ML has revealed that machine learning, especially deep learning, is highly vulnerable to imperceptible adversarial perturbations, both in the domain of vision as well as speech.
This has induced an urgent need to devise fast and practical approaches to secure deep learning models from adversarial attacks, so that they can be safely deployed in real-world applications. 
In this showcase, we put forth the idea of compression as a viable solution to defend against adversarial attacks across modalities. 
Since most of these attacks depend on the gradient of the model to craft an adversarial instance, compression, which is usually non-differentiable, denies a useful gradient to the attacker. 
In the vision domain we have JPEG compression, and in the audio domain we have MP3 compression and AMR encoding -- all widely adopted techniques that have very fast implementations on most platforms, and can be feasibly leveraged as defenses. 
We will show the effectiveness of these techniques against adversarial attacks through live demonstrations, both for vision as well as speech.
These demonstrations would include real-time computation of adversarial perturbations for images and audio, as well as interactive application of compression for defense. 
We would invite and encourage the audience to experiment with their own images and audio samples during the demonstrations. 
This work was undertaken jointly by researchers from Georgia Institute of Technology and Intel Corporation.
