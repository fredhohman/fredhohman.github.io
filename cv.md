---
layout: cv
title: CV
permalink: cv/
jsarr:
- js/scripts.js
---

<h1><a style="color: #313131" href="https://fredhohman.com">Fred Hohman</a></h1>

<span class="cv-subtitle">
*<span class="cv-ai">Data science</span> + <span class="cv-vis">visualization</span> researcher*
</span>

<span class="cv-max-width">
I’m a Ph.D. candidate in the [College of Computing][coc] at [Georgia Tech][gt] advised by [Polo Chau][polo] and [Alex Endert][alex].
</span>

<span class="cv-max-width">
My research applies a human-centered approach to designing and developing interactive interfaces that help people understand and explain **<span class="cv-ai">machine learning models</span>**.
I also write, design, and build explorable explanations and **<span class="cv-vis">interactive data visualizations</span>** to simply communicate complex ideas.
</span>

<span class="cv-max-width">
I have worked at Apple, Microsoft Research, NASA Jet Propulsion Lab, and Pacific Northwest National Lab.
</span>

<span class="cv-max-width">
My research is funded by a [NASA Space Technology Research Fellowship][nstrf].
</span>


<div class="cv-image-links-wrapper" style="font-size: 16px; padding-bottom: 0;">
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


## Interactive Articles

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

<p style="margin-bottom: 0rem"><strong>Organizer</strong></p>
{% for venue in site.data.organizer %}
{% include venue.html venue=venue %}
{% endfor %}

<p style="margin-top: 0.7rem; margin-bottom: 0rem"><strong>Program Commitee</strong></p>
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
