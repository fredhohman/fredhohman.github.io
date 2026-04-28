---
layout: paper
categories: papers
permalink: papers/semantic-regex
id: semantic-regex
title: "Semantic Regexes: Auto-Interpreting LLM Features with a Structured Language"
authors: 
  - Angie Boggust
  - Donghao Ren
  - Yannick Assogba
  - Dominik Moritz
  - Arvind Satyanarayan
  - Fred Hohman
venue: International Conference on Learning Representations
venue-shorthand: ICLR
year: 2026
url: /papers/semantic-regex
pdf: https://machinelearning.apple.com/research/semantic-regexes
code: https://github.com/apple/ml-semantic-regex
demo: https://apple.github.io/ml-semantic-regex/
# preview: 
# video: 
doi: doi.org/10.48550/arXiv.2510.06378
type: conference
figure: /images/papers/26-semantic-regex-iclr.png
selected: true
feature-title: Semantic Regex
feature-description: Auto-interpreting LLM features with a structured language
image: /images/featured/semantic-regex.png
featured: true
feature-order: 0
bibtex: |-

    @inproceedings{boggust2026semantic,
      title={{Semantic Regexes: Auto-Interpreting LLM Features with a Structured Language}},
      author={Boggust, Angie and Ren, Donghao and Assogba, Yannick and Moritz, Dominik and Satyanarayan, Arvind and Hohman, Fred},
      booktitle={International Conference on Learning Representations},
      year={2026},
      url={https://apple.github.io/ml-semantic-regex/}
    }
---

Automated interpretability aims to translate large language model (LLM) features into human understandable descriptions. 
However, these natural language feature descriptions are often vague, inconsistent, and require manual relabeling.
In response, we introduce semantic regexes, structured language descriptions of LLM features.
By combining primitives that capture linguistic and semantic feature patterns with modifiers for contextualization, composition, and quantification, semantic regexes produce precise and expressive feature descriptions.
Across quantitative benchmarks and qualitative analyses, we find that semantic regexes match the accuracy of natural language while yielding more concise and consistent feature descriptions.
Moreover, their inherent structure affords new types of analyses, including quantifying feature complexity across layers, scaling automated interpretability from insights into individual features to model-wide patterns.
Finally, in user studies, we find that semantic regex descriptions help people build accurate mental models of LLM feature activations.
