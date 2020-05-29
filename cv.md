---
layout: cv
title: CV
permalink: cv/
jsarr:
- js/scripts.js
---

<h1 id="cv-title"><a href="{{ site.url }}">Fred Hohman</a></h1>

<p id="cv-subtitle"><i><span class="cv-ai">Data science</span> + <span class="cv-vis">visualization</span> researcher</i></p>

I research how to enable <b><span class="cv-ai">machine learning interpretability</span></b> at scale and for everyone, by designing and developing interactive interfaces to help people confidently understand data-driven systems. Besides building tools, I also create <b><span class="cv-vis">data visualizations</span></b> and write interactive articles to simply communicate complex ideas.

I have collaborated with researchers, designers, developers, and artists while working at Apple, Microsoft Research, NASA Jet Propulsion Lab, and Pacific Northwest National Lab.

My research is supported by a [NASA Space Technology Research Fellowship][nstrf].

<div class="cv-image-links-wrapper">
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 1 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 2 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
</div>

***

## Education
{::nomarkdown}
{% for degree in site.data.education %}
{% include cv/degree.html degree=degree %}
{% endfor %}
{:/}

## Industry Research Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'industry' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}


## Academic Research Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'academic' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}


## Honors and Awards

{% for award in site.data.awards %}
{% include cv/award.html award=award %}
{% endfor %}


<!-- <div style="height:100px"></div> -->


## Publications

### Selected: Latest & Greatest

{% assign selectedBoolForBibtex = true %}
{% for pub in site.data.publications %}
{% if pub.selected %}
{% include publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endif %}
{% endfor %}

### All Publications

{% assign selectedBoolForBibtex = false %}
{% for pub in site.data.publications %}
{% include publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %}


## Talks

{% assign talktitles = site.data.talks | group_by:"title" %}
{% for title in talktitles %}
{% include cv/talk.html talk=title %}
{% endfor %}


## Press

{% for press in site.data.press %}
{% include cv/press.html press=press %}
{% endfor %}


## Teaching

{% for teach in site.data.teaching %}
{% include cv/teaching.html teach=teach %}
{% endfor %}


## Mentoring

{% for mentee in site.data.mentoring %}
{% include cv/mentee.html mentee=mentee %}
{% endfor %}


## Grants and Funding

{% for fund in site.data.funding %}
{% include cv/fund.html fund=fund %}
{% endfor %}


## Interactive Articles

{% for article in site.data.articles %}
{% include cv/article.html article=article %}
{% endfor %}


<!-- ## Technology Skills

{% for skill in site.data.skills %}
{% include cv/skill.html skill=skill %}
{% endfor %} -->


## Service

<p style="margin-bottom: 0rem"><strong>Organizer</strong></p>
{% for venue in site.data.organizer %}
{% include cv/venue.html venue=venue %}
{% endfor %}

<p style="margin-top: 0.7rem; margin-bottom: 0rem"><strong>Program Commitee</strong></p>
{% for venue in site.data.pc %}
{% include cv/venue.html venue=venue %}
{% endfor %}

<p style="margin-top: 0.7rem; margin-bottom: 0rem"><strong>Reviewer</strong></p>
{% for venue in site.data.reviewer %}
{% include cv/venue.html venue=venue %}
{% endfor %}

<p style="margin-top: 0.7rem; margin-bottom: 0rem"><strong>Institutional</strong></p>
{% for institution in site.data.institutional %}
{% include cv/institutional.html institution=institution %}
{% endfor %}

<p style="margin-top: 0.7rem; margin-bottom: 0rem"><strong>Member</strong></p>
{% for member in site.data.memberships %}
{% include cv/member.html member=member %}
{% endfor %}


## Design

{% for design in site.data.designs %}
{% include cv/design.html design=design %}
{% endfor %}


## References

{% for reference in site.data.references %}
{% include cv/reference.html reference=reference %}
{% endfor %}

<!-- 
## Contact

Fred Hohman  
`fredhohman@gatech.edu`  
CODA Tech Square  
Georgia Tech  
756 W Peachtree St NW  
Atlanta, GA 30308
<span style="background: linear-gradient(0deg, #34495e, #3498db); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: block">
—  
USA  
Earth  
Solar System  
Milky Way  
Local Group  
Universe  
</span> -->


[cv]: {{ site.url }}/cv.pdf "My CV."

[poloclub]: http://poloclub.gatech.edu "Polo Club of Data Science"
[gt]: http://gatech.edu "Georgia Tech"
[cse]: http://cse.gatech.edu "GT Computational Science and Engineering"
[coc]: http://www.cc.gatech.edu "GT College of Computing"

[fred]: http://fredhohman.com "Fred Hohman"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"
[alex]: http://va.gatech.edu/endert/ "Alex Endert"

[jpl]: https://www.jpl.nasa.gov/ "NASA Jet Propulsion Lab"
[hi]: https://www.hi.jpl.nasa.gov/ "Human Interfaces Group at NASA JPL"
[pnnl]: https://www.pnnl.gov/ "Pacific Northwest National Laboratory"
[dsa]: http://www.pnnl.gov/nationalsecurity/technical/capabilities/computing/data_sciences.stm "Data Sciences and Analytics Group at PNNL"
[msr]: https://www.microsoft.com/en-us/research/ "Microsoft Research"
[msr-hci]: https://www.microsoft.com/en-us/research/group/human-computer-interaction/ "HCI@MSR"

[twitter]: https:/www.twitter.com/fredhohman "@fredhohman"
[github]: https:/www.github.com/fredhohman "github.com/fredhohman"
[nstrf]: https://www.nasa.gov/strg/nstrf "NASA Space Technology Research Fellowship"
