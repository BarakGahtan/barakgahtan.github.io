---
title: "Invertible Query-Key Coupling Composes with Attention Mechanisms"
order: 14
excerpt: "An invertible, identity-initialized coupling that jointly transforms each token's query and key before attention scoring, composing with existing attention variants rather than replacing them."
#collection: publications
permalink: /publication/14
venue: "Under review"
---

We introduce an invertible, identity-initialized coupling that jointly transforms each token's query and key before attention scoring, adding roughly 0.3% parameters while leaving the attention mechanism itself unchanged. Because it acts before scoring, the transform composes with existing attention variants rather than replacing them. Across 150M and 455M scales on WikiText-103, the coupling yields statistically significant perplexity improvements over Differential Attention, indicating that pre-scoring query-key geometry is a complementary axis of attention design.

Under review.
