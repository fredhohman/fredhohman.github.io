---
layout: cv
title: CV
permalink: cv/
---

# Fred Hohman
<span class="cv-subtitle">
*<span class="cv-ai">Data science</span> + <span class="cv-vis">visualization</span> researcher*
</span>

<span class="cv-max-width">
I’m a Ph.D. student studying [Computational Science and Engineering][cse] at [Georgia Tech][gt] advised by [Polo Chau][polo] and [Alex Endert][alex].
</span>

<!-- <div style="background-color:#cccccc; display: flex">
	<div style="flex: 2">asdf</div>
	<div style="flex: 1">
		<figure>
		  <img class="full" src="/images/me6.jpg" alt="That's me.">
		</figure>
	</div>
</div> -->

<span class="cv-max-width">
My research applies a human-centered approach to designing and developing interactive interfaces that help people understand and explain **<span class="cv-ai">machine learning models</span>**.
I also write, design, and build explorable explanations, dynamic expositions, and **<span class="cv-vis">interactive data visualizations</span>** that illustrate complex ideas simply and tangibly.
</span>

<span class="cv-max-width">
In 2018 I received the [NASA Space Technology Research Fellowship][nstrf]. 
</span>

<a href="http://fredhohman.com"><img class="social-icon" src="/images/footer/home-color.svg">fredhohman.com</a>  
<a href="https://twitter.com/fredhohman"><img class="social-icon" src="/images/footer/twitter-color.svg">@fredhohman</a>  
<a href="https://github.com/fredhohman"><img class="social-icon" src="/images/footer/github-color.svg">github.com/fredhohman</a>  
<a href="https://scholar.google.com/citations?user=1w0TLT8AAAAJ&hl=en&oi=ao"><img class="social-icon" src="/images/footer/graduation-color.svg">Google Scholar</a>  

<hr width="30%">

<a href="http://fredhohman.com/cv.pdf"><img class="social-icon" src="/images/footer/file-pdf-o-color.svg"></a> [CV PDF][cv]  
<time datetime="{{ site.time | date: "%B %-d, %Y" }}" class="post-date">Updated: {{ site.time | date: "%B %d, %Y" }}</time>

***


## Education


{% for degree in site.data.education %}
{% include degree.html degree=degree %}
{% endfor %}


## Industry Research Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'industry' %}
{% include experience.html experience=experience %}
{% endif %}
{% endfor %}


## Academic Research Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'academic' %}
{% include experience.html experience=experience %}
{% endif %}
{% endfor %}


## Honors and Awards

{% for award in site.data.awards %}
{% include award.html award=award %}
{% endfor %}


## Publications

{% for pub in site.data.publications %}
{% include publication.html pub=pub %}
{% endfor %}


## Talks

{% assign talktitles = site.data.talks | group_by:"title" %}
{% for title in talktitles %}
{% include talk.html talk=title %}
{% endfor %}


## Press

{% for article in site.data.press %}
{% include article.html article=article %}
{% endfor %}


## Teaching

{% for teach in site.data.teaching %}
{% include teaching.html teach=teach %}
{% endfor %}


## Mentoring

{% for mentee in site.data.mentoring %}
{% include mentee.html mentee=mentee %}
{% endfor %}


## Grants and Funding

{% for fund in site.data.funding %}
{% include fund.html fund=fund %}
{% endfor %}


## Explorable Explanations

{% for explorable in site.data.explorables %}
{% include explorable.html explorable=explorable %}
{% endfor %}


## Design

{% for design in site.data.designs %}
{% include design.html design=design %}
{% endfor %}


## Technology Skills

{% for skill in site.data.skills %}
{% include skill.html skill=skill %}
{% endfor %}


## Service

<p style="margin-bottom: 0rem"><strong>Program Commitee</strong></p>
{% for venue in site.data.pc %}
{% include venue.html venue=venue %}
{% endfor %}

<p style="margin-top: 0.7rem; margin-bottom: 0rem"><strong>Reviewer</strong></p>
{% for venue in site.data.reviewer %}
{% include venue.html venue=venue %}
{% endfor %}

<p style="margin-top: 0.7rem; margin-bottom: 0rem"><strong>Member</strong></p>
{% for member in site.data.memberships %}
{% include member.html member=member %}
{% endfor %}


## References

{% for reference in site.data.references %}
{% include reference.html reference=reference %}
{% endfor %}


## Contact

Fred Hohman  
`fredhohman@gatech.edu`  
Klaus Advanced Computing Building  
Georgia Tech  
266 Ferst Dr NW  
Atlanta, GA 30332  
<span style="background: linear-gradient(0deg, #34495e, #3498db); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: block">
—  
USA  
Earth  
Solar System  
Milky Way  
Local Group  
Universe  
</span>


[cv]: {{ site.url }}/cv.pdf "My CV."

[poloclub]: http://poloclub.gatech.edu "Polo Club of Data Science"
[gt]: http://gatech.edu "Georgia Tech"
[cse]: http://cse.gatech.edu "GT Computational Science and Engineering"
[coc]: http://www.cc.gatech.edu "GT College of Computing"
[intj]: http://en.wikipedia.org/wiki/INTJ "INTJ"
[ugamath]: "http://math.uga.edu" "UGA Mathematics"
[ugaphysics]: http://www.physast.uga.edu "UGA Physics"
[uga]: http://www.uga.edu "University of Georgia"
[mined]: http://mined.gatech.edu "GT MINED Research Group"
[thingiverse]: http://www.thingiverse.com/fredhohman/about "My Thingiverse Profile"
[fairfield]: http://faculty.fairfield.edu/srafalski/reu/ "Fairfield University REU"
[sr]: http://www.shanonreckinger.com "Dr. Shanon Reckinger"
[apsdfd]: http://www.aps.org/units/dfd/ "American Physical Society Division of Fluid Dynamics"
[jmm]: http://jointmathematicsmeetings.org/jmm "Joint Mathematics Meetings"
[randb]: http://www.redandblack.com/uganews/science_health/uga-talks-tech-google-glass-seen-as-first-step-into/article_138dd768-f7ca-11e2-bed1-001a4bcf6878.html "Red and Black Article"
[uga-math-feature]: http://www.math.uga.edu/news-and-events/math-department-newsletter-spring-2015##studentprofile "UGA Math Department Feature"
[trefoil]: {{ site.url }}/projects/3d-printing-the-trefoil-knot-and-its-pages "3D Printing the Trefoil Knot and its Pages"
[reu]: {{ site.url }}/projects/mathematics-&-computational-science-reu/ "Mathematics & Computational Science REU"
[trefoil]: {{ site.url }}/projects/3d-printing-the-trefoil-knot-and-its-pages "3D Printing the Trefoil Knot and its Pages"
[gg]: {{ site.url }}/projects/materials-informatics-grain-growth "Material Informatics: Grain Growth"

[fred]: http://fredhohman.com "Fred Hohman"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"
[alex]: http://va.gatech.edu/endert/ "Alex Endert"
[nathan]: https://signatures.pnnl.gov/bios/nathan-hodas "Nathan Hodas"
[gay]: https://euclidlab.org/david-gay/ "David Gay"
[shanon]: http://www.shanonreckinger.com "Shanon Reckinger"
[sk]: http://www.me.gatech.edu/faculty/kalidindi "Surya Kalidindi"
[scott-davidoff]: http://scottdavidoff.com/research "Scott Davidoff"
[arun]: https://www.linkedin.com/in/arunaviswanathan/ "Arun Viswanathan"
[james]: https://www.cs.rutgers.edu/faculty/james-abello-monedero "James Abello"
[thomas]: http://www.imperial.ac.uk/people/t.gibson15 "Thomas Gibson"
[theresa]: https://scripps.ucsd.edu/profiles/t4morris "Theresa Morrison"
[scott-reckinger]: http://www.montana.edu/ce/instructors_professors/all_faculty.html#Reckinger "Scott Reckinger"
[robert]: https://www.cc.gatech.edu/~rpienta3/ "Robert Pienta"
[acar]: https://acartamersoy.github.io/ "Acar Tamersoy"
[navathe]: https://en.wikipedia.org/wiki/Shamkant_Navathe "Shamkant Navathe"
[hanghang]: http://tonghanghang.org/ "Hang Hang Tong"
[nilaksh]: http://nilakshdas.com/ "Nilaksh Das"
[madhuri]: https://www.linkedin.com/in/madhuri-shanbhogue/ "Madhuri Shanbhogue"
[shang]: https://www.cc.gatech.edu/~schen351/ "Shang-Tse Chen"
[li]: https://www.linkedin.com/in/li-chen-phd-b2a10289/ "Li Chen"
[michael]: https://www.researchgate.net/profile/Michael_Kounavis "Michael E. Kounavis"
[andy]: https://cv.andyfang.me/ "Dezhi Fang"
[peter]: https://petepolack.com/ "Peter Polack"
[hillol]: https://www.linkedin.com/in/hillolsarker/ "Hillol Sarker"
[brian]: http://minsuk.com/ "Minsuk Kahng"
[moushumi]: https://facultyweb.cs.wwu.edu/~sharmim/ "Moushumi Sharmin"
[mustafa]: http://d.umn.edu/~bml/people/alabsi.html "Mustafa al'Absi"
[kevin]: http://pages.cs.wisc.edu/~roundy/ "Kevin Roundy"
[chris]: https://www.linkedin.com/in/csgates/ "Chris Gates"
[sandeep]: http://sandeepsoni.github.io/ "Sandeep Soni"
[ian]: http://ianbstewart.github.io/ "Ian Stewart"
[stasko]: https://www.cc.gatech.edu/~stasko/ "John Stasko"
[caleb]: http://calebrob.com/ "Caleb Robinson"
[bistra]: http://www.cc.gatech.edu/~bdilkina/ "Bistra Dilkina"
[bob]: https://rsli.github.io/ "Siwei Li"
[steven-drucker]: https://www.microsoft.com/en-us/research/people/sdrucker/ "Steven Drucker"
[angel]: http://cabreraalex.com/ "Alex Cabrera"
[jason]: http://jlin.xyz/ "Jason Lin"
[prasenjeet]: https://www.linkedin.com/in/prasenjeetbiswal/ "Prasenjeet Biswal"
[varun]: https://www.linkedin.com/in/varun-bezzam/ "Varun Bezzam"
[matt]: https://mathisonian.com/ "Matthew Conlen"
[alok]: http://www.aloktripathy.me/ "Alok Tripathy"
[oded]: https://www.linkedin.com/in/oded-green-2a179a19/ "ODed Green"


[17-playground-vast]: {{ site.url }}/papers/playground
[17-playground-vast-pdf]: {{ site.url }}/papers/17-playground-vast.pdf
[17-playground-vast-video-youtube]: https://www.youtube.com/watch?v=CV-0CIKg1CA&feature=youtu.be
[17-playground-vast-video-vimeo]: https://vimeo.com/groups/480818/videos/230837562
[17-playground-vast-poster]: {{ site.url }}/papers/17-playground-vast-poster.pdf

[17-dashboard-ubicomp]: {{ site.url }}/papers/dashboard
[17-dashboard-ubicomp-pdf]: {{ site.url }}/papers/17-dashboard-ubicomp.pdf
[17-dashboard-ubicomp-video]: https://www.youtube.com/watch?v=vpvozWf1aCc&feature=youtu.be
[17-dashboard-ubicomp-poster]: {{ site.url }}/papers/17-dashboard-ubicomp-poster.pdf

[17-shapeshop-chi]: {{ site.url }}/papers/shapeshop
[17-shapeshop-chi-pdf]: {{ site.url }}/papers/17-shapeshop-chi.pdf
[17-shapeshop-chi-video-poloclub]: https://www.youtube.com/watch?v=XL3fFwZ1DDQ&feature=youtu.be
[17-shapeshop-chi-video-chi]: https://www.youtube.com/watch?v=wRX1xEdrD1g
[17-shapeshop-chi-github]: https://github.com/fredhohman/shapeshop
[17-shapeshop-chi-poster]: {{ site.url }}/papers/17-shapeshop-chi-poster.pdf

[17-defense-arxiv]: {{ site.url }}/papers/defense
[17-defense-arxiv-pdf]: https://arxiv.org/abs/1705.02900

[17-got-vis4dh]: {{ site.url }}/papers/got
[17-got-vis4dh-pdf]: {{ site.url }}/papers/17-got-vis4dh.pdf
[17-got-vis4dh-github]: https://github.com/fredhohman/a-viz-of-ice-and-fire
[17-got-vis4dh-data]: https://github.com/fredhohman/a-viz-of-ice-and-fire/tree/master/vis/data
[17-got-vis4dh-demo]: http://fredhohman.com/a-viz-of-ice-and-fire

[17-vigor-vast]: {{ site.url }}/papers/vigor
[17-vigor-vast-pdf]: https://www.cc.gatech.edu/~dchau/papers/17-vast-vigor.pdf
[17-vigor-vast-video]: https://www.youtube.com/watch?v=-jeck0yrT_Q&index=3&list=PLM5RAudXfaumbXG2vOk1eFMHY3rkPCRNR
[17-vigor-vast-preview]: https://vimeo.com/groups/480818/videos/230830163

[17-visage-sigmod]: {{ site.url }}/papers/visage
[17-visage-sigmod-pdf]: https://www.cc.gatech.edu/~dchau/papers/17-sigmod-visage.pdf
[17-visage-sigmod-video]: https://www.youtube.com/watch?v=l2L7Y5mCh1s&index=2&list=PLM5RAudXfaumbXG2vOk1eFMHY3rkPCRNR
[17-visage-sigmod-poster]: http://www.cc.gatech.edu/~rpienta3/data/posters/17-sigmod-visage-poster.pdf

<!-- [17-deeppop-sigspatial]: {{ site.url }}/papers/deeppop -->
[17-deeppop-sigspatial]: https://deeppop.github.io/
[17-deeppop-sigspatial-pdf]: {{ site.url }}/papers/17-deeppop-sigspatial.pdf

[18-deepvis-tvcg]: https://fredhohman.com/visual-analytics-in-deep-learning/
[18-deepvis-tvcg-pdf]: https://arxiv.org/abs/1801.06889
[18-deepvis-tvcg-code]: https://github.com/fredhohman/visual-analytics-in-deep-learning
[18-deepvis-tvcg-video-poloclub]: https://youtu.be/TI_sXHt2d8s
[18-deepvis-tvcg-video-tvcg]: https://vimeo.com/groups/vis18previews/videos/289789596


[18-shield-kdd]: {{ site.url }}/papers/shield
[18-shield-kdd-pdf]: https://arxiv.org/abs/1802.06816
[18-shield-kdd-code]: https://github.com/poloclub/jpeg-defense
[18-shield-kdd-video]: https://www.youtube.com/watch?v=zUB2-i7rSb4

[18-compression-kdd]: {{ site.url }}/papers/compression
[18-compression-kdd-pdf]: http://nilakshdas.com/papers/18-compression-kdd.pdf
[18-compression-kdd-code]: https://github.com/poloclub/jpeg-defense

[18-interactive-cvpr]: {{ site.url }}/papers/interactive-classification
[18-interactive-cvpr-pdf]: {{ site.url }}/papers/18-interactive-cvpr.pdf
[18-interactive-cvpr-code]: https://github.com/poloclub/interactive-classification
[18-interactive-cvpr-video]: https://youtu.be/llub5GcOF6w

[18-playground-arxiv]: {{ site.url }}/papers/graph-playground
[18-playground-arxiv-pdf]: https://arxiv.org/pdf/1808.04414.pdf

[18-kcore-bigdata]: {{ site.url }}/papers/kcore
[18-kcore-bigdata-pdf]: https://www.researchgate.net/publication/328874544_Scalable_K-Core_Decomposition_for_Static_Graphs_Using_a_Dynamic_Graph_Data_Structure

[sketches-of-topology]: https://sketchesoftopology.wordpress.com/2014/04/25/mathematics-with-3d-printing/
[makerhome-day-311]: http://makerhome.blogspot.com/2014/07/day-311-trefoil-trumpet.html
[3dprint-1]: https://3dprint.com/28780/math-3d-printed-trefoil-knot/
[3dprint-2]: https://3dprint.com/95127/3d-printed-trumpety-trefoil/
[mitgcm]: http://mitgcm.org/2015/02/17/falling-water/
[uga-math-profile]: http://www.math.uga.edu/news-and-events/math-department-newsletter-spring-2015
[gt-cc-deeppop]: https://www.cse.gatech.edu/news/599787/georgia-tech-team-use-microsoft-grant-study-human-migration-dynamics
[gt-cse-fellowship]: https://www.cse.gatech.edu/news/605258/cse-phd-students-claim-three-prestigious-fellowships
[gt-cse-shield]: https://www.cc.gatech.edu/news/606678/georgia-tech-teams-intel-protect-artificial-intelligence-malicious-attacks-using-shield

[trophy]: {{ site.url }}/projects/cube-decomposition-trophy "Cube Decomposition Trophy."
[keychain]: {{ site.url }}/projects/uga-keychain "UGA Keychain."
[brad-myers-tree]: http://fredhohman.com/brad-myers-advisee-tree/ "Brad Myers Academic Tree."
[idea2017]: http://poloclub.gatech.edu/idea2017/ "IDEA 2017 Workshop."
[idea2018]: http://poloclub.gatech.edu/idea2018/ "IDEA 2018 Workshop."
[cse-6242]: http://poloclub.gatech.edu/cse6242/2017spring/ "CSE 6242 Spring 2017."

[jpl]: https://www.jpl.nasa.gov/ "NASA Jet Propulsion Lab"
[hi]: https://www.hi.jpl.nasa.gov/ "Human Interfaces Group at NASA JPL"
[pnnl]: https://www.pnnl.gov/ "Pacific Northwest National Laboratory"
[dsa]: http://www.pnnl.gov/nationalsecurity/technical/capabilities/computing/data_sciences.stm "Data Sciences and Analytics Group at PNNL"
[msr]: https://www.microsoft.com/en-us/research/ "Microsoft Research."
[msr-hci]: https://www.microsoft.com/en-us/research/group/human-computer-interaction/ "HCI@MSR."

[twitter]: https:/www.twitter.com/fredhohman
[github]: https:/www.github.com/fredhohman
[nstrf]: https://www.nasa.gov/strg/nstrf "NASA Space Technology Research Fellowship."

[google]: https://www.google.com/ "Google."
[airbnb]: https://www.airbnb.com/ "Airbnb."
[oath]: https://www.oath.com/ "Oath."

[card-shuffling]: https://fredhohman.com/card-shuffling/ "The Math of Card Shuffling."
[dr]: https://idyll.pub/post/dimensionality-reduction-293e465c2a3443e8941b016d/ "The Beginner's Guide to Dimensionality Reduction."
[pancakes]: https://idyll.pub/post/blueberry-pancakes-28b1a2e1a8986c44ac091f08/ "Blueberry Pancakes."
