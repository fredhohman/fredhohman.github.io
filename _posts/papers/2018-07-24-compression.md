---
layout: paper
categories: papers
permalink: papers/compression
title: Defending from Adversarial Attacks Across Modalities
---

# Compression to the Rescue: Defending from Adversarial Attacks Across Modalities
[Nilaksh Das][nilaksh], [Madhuri Shanbhogue][madhuri], [Shang-Tse Chen][shang], [Fred Hohman][fred], [Siwei Li][bob], [Li Chen][li], [Michael E. Kounavis][michael], [Duen Horng Chau][polo]  

<figure>
    <img class="single" src="/images/papers/18-compression-kdd.png">
    <figcaption class="single">
    <i>Screenshot of Adagio with an example usage scenario.</i>
    (1) Jane uploads an audio file that is transcribed by DeepSpeech (an ASR model); then she performs an adversarial attack on the audio in real time by entering a target transcription after selecting the attack option from the dropdown menu.
    (2) Jane decides to perturb the audio to change the last word of the sentence from "joanna" to "marissa"; she can listen to the original audio and see the transcription by clicking on the "Original" badge.
    (3) Jane applies MP3 compression to recover the original, correct transcription from the manipulated audio;
    clicking on a waveform plays back the  audio from the selected position.
    (4) Jane can experiment with multiple audio samples by adding more cards.

    </figcaption>
</figure>

## Abstract
Research in the upcoming field of adversarial ML has revealed that machine learning, especially deep learning, is highly vulnerable to imperceptible adversarial perturbations, both in the domain of vision as well as speech.
This has induced an urgent need to devise fast and practical approaches to secure deep learning models from adversarial attacks, so that they can be safely deployed in real-world applications. 
In this showcase, we put forth the idea of compression as a viable solution to defend against adversarial attacks across modalities. 
Since most of these attacks depend on the gradient of the model to craft an adversarial instance, compression, which is usually non-differentiable, denies a useful gradient to the attacker. 
In the vision domain we have JPEG compression, and in the audio domain we have MP3 compression and AMR encoding -- all widely adopted techniques that have very fast implementations on most platforms, and can be feasibly leveraged as defenses. 
We will show the effectiveness of these techniques against adversarial attacks through live demonstrations, both for vision as well as speech.
These demonstrations would include real-time computation of adversarial perturbations for images and audio, as well as interactive application of compression for defense. 
We would invite and encourage the audience to experiment with their own images and audio samples during the demonstrations. 
This work was undertaken jointly by researchers from Georgia Institute of Technology and Intel Corporation.

## Materials
[PDF][18-compression-kdd-pdf] | [Github][18-compression-kdd-code] | [BibTeX][18-compression-kdd]

## Citation
**[Compression to the Rescue: Defending from Adversarial Attacks Across Modalities][18-compression-kdd]**  
[Nilaksh Das][nilaksh], [Madhuri Shanbhogue][madhuri], [Shang-Tse Chen][shang], [Fred Hohman][fred], [Siwei Li][bob], [Li Chen][li], [Michael E. Kounavis][michael], [Duen Horng Chau][polo]  
*ACM KDD 2018 Project Showcase. Aug 19, 2018. London, UK.*  
<span class="paper-misc">
<span class="cv-website-marker">[Site][18-compression-kdd]</span> | [PDF][18-compression-kdd-pdf] | [Github][18-compression-kdd-code] | [BibTeX][18-compression-kdd]
</span>

## BibTeX
```
@article{das2018compression,
  title={Compression to the Rescue: Defending from Adversarial Attacks Across Modalities},
  author={Das, Nilaksh and Shanbhogue, Madhuri and Chen, Shang-Tse and Hohman, Fred and Li, Siewi and Chen, Li and Kounavis, Michael E and Chau, Duen Horng},
  journal={ACM KDD 2018 Project Showcase},
  year={2018},
  organization={ACM}
}
```

[nilaksh]: http://nilakshdas.com/ "Nilaksh Das"
[madhuri]: https://www.linkedin.com/in/madhuri-shanbhogue/ "Madhuri Shanbhogue"
[shang]: https://www.cc.gatech.edu/~schen351/ "Shang-Tse Chen"
[fred]: http://fredhohman.com "Fred Hohman"
[bob]: https://rsli.github.io/ "Siwei Li"
[li]: https://www.linkedin.com/in/li-chen-phd-b2a10289/ "Li Chen"
[michael]: https://www.researchgate.net/profile/Michael_Kounavis "Michael E. Kounavis"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"

[18-compression-kdd]: {{ site.url }}/papers/compression
[18-compression-kdd-pdf]: http://nilakshdas.com/papers/18-compression-kdd.pdf
[18-compression-kdd-code]: https://github.com/poloclub/jpeg-defense