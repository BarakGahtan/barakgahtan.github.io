---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
 {% if site.author.googlescholar %}
  <div class="wordwrap">Below are my publications and preprints. You can also find them on <a href="https://scholar.google.com/citations?user=Uph8rcwAAAAJ&hl=en&oi=ao">my Google Scholar profile</a>.</div>
{% endif %}


{% include base_path %}


{% for post in site.publications reversed %}


  {% include archive-single.html %}


{% endfor %}
