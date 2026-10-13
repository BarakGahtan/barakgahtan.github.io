---
layout: single
title: "News"
permalink: /news/
author_profile: true
---

<ul class="newslist newslist--full">
{% for n in site.data.news %}
  <li><time datetime="{{ n.date | date: "%Y-%m" }}">{{ n.date | date: "%-m/%Y" }}</time><span>{% if n.url %}<a href="{{ n.url }}">{{ n.text }}</a>{% else %}{{ n.text }}{% endif %}</span></li>
{% endfor %}
</ul>
