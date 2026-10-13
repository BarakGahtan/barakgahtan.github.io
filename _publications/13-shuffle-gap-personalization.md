---
title: "The Shuffle Gap: Diagnosing Personalization Collapse in LLMs"
order: 13
authors: "Barak Gahtan, Ido Galil, Alex M. Bronstein"
venue: "Under review"
status: preprint
thumbnail: "thumb-shuffle-gap.jpg"
permalink: /publication/13
excerpt: "Personalized language models are usually judged by held-out perplexity after conditioning on a user's history, which cannot tell whether the model used that user's data or merely learned a population-level adapter. The shuffle gap, the change in perplexity when each user's support set is swapped for another user's, exposes cases where large aggregate gains coexist with near-zero dependence on the matched user, making it a necessary audit for perplexity-based personalization claims."
---

Personalized language models are often evaluated by held-out perplexity after conditioning on a user's history, but aggregate perplexity cannot tell whether a model used the matched user's support or merely learned a population-level adapter. We study this ambiguity through the shuffle gap: the perplexity change when each user's support set is replaced by another user's support. In a hypernetwork case study, WARM START substantially reduces Blog Authorship perplexity, yet its shuffle gap remains near zero under random and topic-controlled support shuffles. Global LoRA, in-context learning, noise-floor, discriminability, bottleneck, P2P, WildChat, PersonaFeedback, and synthetic controls support a conservative conclusion: large aggregate gains can coexist with loss-level personalization collapse. The shuffle gap is therefore a necessary support-sensitivity audit for perplexity-based personalization.

Preprint.
