---
layout: paper
categories: papers
permalink: papers/interactive-classification
title: Interactive Classification
---

# Interactive Classification for Deep Learning Interpretation
[Angel Cabrera][angel], [Fred Hohman][fred], [Jason Lin][jason], [Duen Horng Chau][polo]  

<figure>
    <img class="single" src="/images/papers/18-interactive-cvpr.png">
    <figcaption class="single">
      The modified image (left), originally classified as <i>dock</i> is misclassified as <i>ocean liner</i> when the masts of a couple boats are removed from the original image (right).
      The top five classification scores are tabulated underneath each image.

    </figcaption>
</figure>

## Abstract
We present an interactive system enabling users to manipulate images to explore the robustness and sensitivity of deep learning image classifiers. 
Using modern web technologies to run in-browser inference, users can remove image features using inpainting algorithms to obtain new classifications in real time.
This system allows users to compare and contrast what image regions humans and machine learning models use for classification.

## Materials
[PDF][18-interactive-cvpr-pdf] | [Github][18-interactive-cvpr-code] | [Video][18-interactive-cvpr-video] | [BibTeX][18-interactive-cvpr]

## Citation
**[Interactive Classification for Deep Learning Interpretation][18-interactive-cvpr]**  
[Angel Cabrera][angel], [Fred Hohman][fred], [Jason Lin][jason], [Duen Horng Chau][polo]  
*Demo, Conference on Computer Vision and Pattern Recognition (CVPR). June 18, 2018. Salt Lake City, USA.*  
<span class="paper-misc">
<span class="cv-website-marker">
[Site][18-interactive-cvpr] | [PDF][18-interactive-cvpr-pdf] | [Github][18-interactive-cvpr-code] | [Video][18-interactive-cvpr-video] | [BibTeX][18-interactive-cvpr]
</span>

## BibTeX
```
@article{cabrera2018interactive,
  title={Interactive Classification for Deep Learning Interpretation},
  author={Cabrera, Angel and Hohman, Fred and Lin, Jason and Chau, Duen Horng},
  journal={Demo, Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},
  year={2018},
  organization={IEEE}
}
```

[angel]: http://cabreraalex.com/ "Alex Cabrera"
[fred]: http://fredhohman.com "Fred Hohman"
[jason]: http://jlin.xyz/ "Jason Lin"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"

[18-interactive-cvpr]: {{ site.url }}/papers/interactive-classification
[18-interactive-cvpr-pdf]: {{ site.url }}/papers/18-interactive-cvpr.pdf
[18-interactive-cvpr-code]: https://github.com/poloclub/interactive-classification
[18-interactive-cvpr-video]: https://youtu.be/llub5GcOF6w