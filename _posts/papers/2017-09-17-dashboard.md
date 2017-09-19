---
layout: paper
categories: papers
permalink: papers/dashboard
title: Discovery Dashboard
---

# mHealth Visual Discovery Dashboard
[Dezhi Fang][andy], [Fred Hohman][fred], [Peter Polack][peter], [Hillol Sarker][hillol], [Minsuk Kahng][brian], [Moushumi Sharmin][moushumi], [Mustafa al'Absi][mustafa], [Duen Horng Chau][polo]  

<figure>
     <img class="single" src="/images/papers/17-dashboard-ubicomp.png">
    <figcaption class="single">
        The Discovery Dashboard interface showing data from a mobile sensor study. Each row corresponds to one participant's data. 
        A user-defined motif (for participant 6012) is selected, and the system automatically finds similar motifs across all participants and highlights them in yellow.
        This particular motif is a recurring pattern for participant 6012, often found near smoking lapses (vertical red dotted lines).
    </figcaption>
</figure>

## Abstract
We present Discovery Dashboard, a visual analytics system for exploring large volumes of time series data from mobile medical field studies. 
Discovery Dashboard offers interactive exploration tools and a data mining motif discovery algorithm to help researchers formulate hypotheses, discover trends and patterns, and ultimately gain a deeper understanding of their data.
Discovery Dashboard emphasizes user freedom and flexibility during the data exploration process and enables researchers to do things previously challenging or impossible to do --- in the web-browser and in real time.
We demonstrate our system visualizing data from a mobile sensor study conducted at the University of Minnesota that included 52 participants who were trying to quit smoking.

## Materials
[PDF][17-dashboard-ubicomp-pdf] | [Video][17-dashboard-ubicomp-video] | [Poster][17-dashboard-ubicomp-poster] | [BibTeX][17-dashboard-ubicomp]

## Citation
**[mHealth Visual Discovery Dashboard][17-dashboard-ubicomp]**  
[Dezhi Fang][andy], [Fred Hohman][fred], [Peter Polack][peter], [Hillol Sarker][hillol], [Minsuk Kahng][brian], [Moushumi Sharmin][moushumi], [Mustafa al'Absi][mustafa], [Duen Horng Chau][polo]  
*Demo, ACM International Joint Conference on Pervasive and Ubiquitous Computing (UBICOMP). Sept 11-15, 2017. Maui, USA.*  
<span class="paper-misc">
[PDF][17-dashboard-ubicomp-pdf] | [Video][17-dashboard-ubicomp-video] | [Poster][17-dashboard-ubicomp-poster] | [BibTeX][17-dashboard-ubicomp]
</span>

## BibTeX
```
@inproceedings{fang2017mhealth,
  title={mHealth visual discovery dashboard},
  author={Fang, Dezhi and Hohman, Fred and Polack, Peter and Sarker, Hillol and Kahng, Minsuk and Sharmin, Moushumi and al'Absi, Mustafa and Chau, Duen Horng},
  booktitle={Proceedings of the 2017 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2017 ACM International Symposium on Wearable Computers},
  pages={237--240},
  year={2017},
  organization={ACM}
}
```

[andy]: https://cv.andyfang.me/ "Dezhi Fang"
[fred]: http://fredhohman.com "Fred Hohman"
[peter]: https://petepolack.com/ "Peter Polack"
[hillol]: https://www.linkedin.com/in/hillolsarker/ "Hillol Sarker"
[brian]: http://minsuk.com/ "Minsuk Kahng"
[moushumi]: https://facultyweb.cs.wwu.edu/~sharmim/ "Moushumi Sharmin"
[mustafa]: http://d.umn.edu/~bml/people/alabsi.html "Mustafa al'Absi"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"

[17-dashboard-ubicomp]: {{ site.url }}/papers/dashboard
[17-dashboard-ubicomp-pdf]: {{ site.url }}/papers/17-dashboard-ubicomp.pdf
[17-dashboard-ubicomp-video]: https://www.youtube.com/watch?v=vpvozWf1aCc&feature=youtu.be
[17-dashboard-ubicomp-poster]: {{ site.url }}/papers/17-dashboard-ubicomp-poster.pdf