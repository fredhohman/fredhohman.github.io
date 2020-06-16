---
layout: post
title: Modeling of Pedestrian Traffic Around Bobby-Dodd Stadium
categories: projects
permalink: projects/cse-6730-bobby-dodd-simulation
---

College football is often characterized by passionate fans, intense rivalries, and sold-out Saturday games. Georgia Tech, a team with much history, is no different. Saturdays in Atlanta during the college football season are packed with fans: students, alumni, and miscellaneous visitors. Regardless if Georgia Tech wins or loses, a sold-out [Bobby-Dodd][bd] stadium creates a large amount of hustle and bustle on nearby sidewalks and streets.

This project for **CSE 6730 Modeling & Simulation** aims to create a model to simulate the foot traffic after the conclusion of a Georgia Tech football game. My group had just a few weeks to define the conceptual model, make realistic assumptions, collect physical data about typical evacuation trends and distributions, implement the model, and present our results.

Based on the cartography of Google Maps, we use a [cellular automaton][ca] simulation driven by various force fields such as static attractor fields and dynamic fields. We model typical crowd behavior using cellular automaton rules that our simulated fans follow. We identify the ten exits of Bobby-Dodd stadium as the spawning points where people are introduced into the simulation. We then pick five targeted exits on the map around Bobby-Dodd stadium that our fans will walk towards.

<figure class="l-middle">
  <div class="figure-grid">
    <img class="figure-grid-left" src="/images/projects/cse-6730-bobby-dodd-simulation/grid1.png" alt="Google Maps view of Bobby-Dodd.">
    <img class="figure-grid-right" src="/images/projects/cse-6730-bobby-dodd-simulation/grid2.png" alt="Our chosen path network.">
  </div>
  <figcaption>Our chosen simulation path network.</figcaption>
</figure>

We verify and validate our model via visualization. Knowing that Bobby-Dodd stadium can seat 55,000 people, we can visualize our model by overlaying the map with the simulated people color-coordinated by exit.

<figure>
  <img src="/images/projects/cse-6730-bobby-dodd-simulation/50000_people.png" alt="55,000 people evacuating Bobby-Dodd.">
  <figcaption>55,000 people just trying to get home.</figcaption>
</figure>

Here's a sped up animation of a quarter-full stadium evacuation. 

<figure>
  <video class="classic" width="100%" autoplay loop>
    <source src="http://zippy.gfycat.com/AdoredRapidChickadee.webm" type="video/webm">
    <source src="http://zippy.gfycat.com/AdoredRapidChickadee.mp4" type="video/mp4">
  </video>
</figure>

We presented our model, code, and results during an in-class poster session.

<figure class="l-middle">
  <a href="{{ site.url }}/assets/cse-6730-poster.pdf">
    <img src="/images/projects/cse-6730-bobby-dodd-simulation/cse-6730-poster-thumb.png" alt="Project Poster.">
  </a>
  <figcaption>Our project poster. Click to view the full <code>.pdf</code>.</figcaption>
</figure>

Our code is easily scalable to include and remove different paths and roads, simulate larger grids, and consider more physically representative social-based evacuation rules. 

***

## Project Members
* [Devavret Makkar][dev]
* [Nanditha Rajamani][nanditha]

## Links
* [Project Report][report]
* [Project Poster][poster]

[ca]: https://en.wikipedia.org/wiki/Cellular_automaton "Cellular automaton."

[report]: {{ site.url }}/assets/cse-6730-project-report.pdf "Project Report."
[poster]: {{ site.url }}/assets/cse-6730-poster.pdf "Project Report."

[dev]: https://github.com/devavret "Devavret Makkar."
[nanditha]: https://www.linkedin.com/in/nanditha-rajamani-34199a105 "Nanditha Rajamani."

[bd]: https://en.wikipedia.org/wiki/Bobby_Dodd_Stadium "Bobby-Dodd stadium."