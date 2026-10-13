---
title: "Invertible Query-Key Coupling Composes with Attention Mechanisms"
order: 14
authors: "Barak Gahtan, Alex M. Bronstein"
venue: "Asian Conference on Machine Learning (ACML 2026), PMLR"
status: published
featured: true
venue_short: "ACML 2026 · PMLR"
tile: "q, k ↦ (q′, k′)"
takeaway: "An identity-initialized, invertible coupling applied before scoring that adds 0.3% parameters and composes with Differential Attention, with significant gains at 150M and 455M parameters."
arxiv: "https://arxiv.org/abs/2604.01683"
permalink: /publication/14
excerpt: "Most attention variants change how scores are computed; this work instead transforms each token's query and key jointly before scoring, through an invertible, identity-initialized coupling that adds about 0.3% parameters and leaves the softmax untouched. Because it acts before scoring it composes with existing mechanisms: on WikiText-103 it yields statistically significant perplexity gains on top of Differential Attention at both 150M and 455M parameters."
---

Scaled dot-product attention forms its queries and keys as independent linear projections of the input, so the two never interact before the dot product that produces attention scores. We study coupled query-key dynamics, a pre-scoring transformation that evolves each token's own query and key jointly through a shared invertible coupling before standard scoring, leaving the interaction across token positions to the dot product as usual. We realize it as an alternating affine map in the style of real-valued non-volume-preserving flows: the coupling is the identity at initialization, adds a small fraction of parameters per head, and leaves the softmax and the surrounding architecture unchanged. We therefore place coupling on top of existing attention methods instead of replacing them, and ask whether that composition helps. On WikiText-103 language modeling, adding coupling to Differential Attention improves on it at both 150M and 455M parameters. At 455M the gain is significant at sequence length 512 (p=0.003, six seeds), survives a Bonferroni correction across our family of tests, and replicates on a held-out test split; it also holds across rotary-embedding training lengths of 512, 1024, and 2048, where the 1024 comparison likewise survives the correction. The same additive direction appears when coupling is added to query-key normalization (significant at 150M) and Multi-Token Attention (directional); neither is significant at 455M, where the Differential Attention composition alone holds. On its own, by contrast, coupling lowers perplexity at 60M and 150M (one-sided Welch tests, p < 0.05, three seeds), but this gain narrows with scale and is not significant at 455M. We relate the construction to the expressivity of coupling flows, use an associative-recall study to map where coupling helps and where it degrades sharp retrieval, and state the limitations directly, concluding that coupling is most useful in composition with a scoring-stage method rather than as a standalone change.

Accepted at the Asian Conference on Machine Learning (ACML 2026), to appear in Proceedings of Machine Learning Research (PMLR). With Alex M. Bronstein. Preprint: [arXiv:2604.01683](https://arxiv.org/abs/2604.01683).
