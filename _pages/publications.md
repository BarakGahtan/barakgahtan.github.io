---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
<section class="site-section">
<p class="pubs-intro">Peer-reviewed papers first, then preprints and papers under review, each with a two-sentence summary. Also on <a href="https://scholar.google.com/citations?user=Uph8rcwAAAAJ&hl=en&oi=ao">Google Scholar</a>.</p>

{% include base_path %}

{% assign sorted_pubs = site.publications | sort: "order" | reverse %}
{% assign published_pubs = sorted_pubs | where: "status", "published" %}
{% assign review_pubs = sorted_pubs | where_exp: "p", "p.status != 'published'" %}

<h2 class="publications__group">Peer-reviewed publications</h2>
<div class="publications-grid">
  {% for post in published_pubs %}
    {% include archive-single.html %}
  {% endfor %}
</div>

<h2 class="publications__group">Preprints and papers under review</h2>
<div class="publications-grid">
  {% for post in review_pubs %}
    {% include archive-single.html %}
  {% endfor %}
</div>
</section>
