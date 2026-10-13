---
title: "The Residual Stream's Effective Depth"
order: 12
authors: "Barak Gahtan, Ido Galil, Alex M. Bronstein"
venue: "Asian Conference on Machine Learning (ACML 2026), PMLR"
status: published
featured: true
venue_short: "ACML 2026 · PMLR"
takeaway: "A calibrated scalar for how much of a transformer's depth is distinct computation: fifteen of sixteen decoder-only models fall below the orthogonal-update reference, and matched controls trace the gap to correlated residual updates."
arxiv: "https://arxiv.org/abs/2609.31098"
thumbnail: "thumb-depth.jpg"
permalink: /publication/12
excerpt: "Adding layers does not guarantee that a language model performs more distinct computation, and there was no calibrated way to measure how much of its depth is actually used. Effective depth treats the residual stream as a layer-indexed process and summarizes how quickly representations decorrelate: fifteen of sixteen decoder-only models (Qwen3.5, OLMo-2, Pythia) fall below the closed-form orthogonal-update reference, and matched controls attribute the gap to correlated residual updates rather than unused depth."
---

We introduce effective depth ($D_{\text{eff}}$), a scalar diagnostic that treats the layer-wise residual stream of a transformer as a discrete-time process, measures how representation similarity decays with layer distance, and aggregates that profile into one number. Across sixteen decoder-only language models, $D_{\text{eff}}$ separates a structural consequence of residual accumulation from an empirical one: even maximally diverse orthogonal updates have the closed-form reference $F_L = 2L/(L+1) < 2$, yet fifteen of sixteen default measurements lie below $F_L$ (Qwen3.5: 32-44%, OLMo-2: 40-41%, Pythia: 23-28%). Matched references show that the gap is not caused by the persistent initial state or update-size imbalance, but is largely a calibrated signature of correlated residual updates rather than evidence that depth is unused. Symmetric position-0, token-normalisation, and top-PC controls show the regime is not reducible to BOS or top-PC artefacts: the lone above-reference default outlier joins the same regime, and all sixteen models are sub-reference after token-normalisation or top-1-PC removal. Intermediate checkpoints show that the regime is established early in OLMo-2 and stable through 5T tokens, while Pythia-1.4B follows a distinct decreasing trajectory. A controlled residual-carry intervention supports the mechanism, and $D_{\text{eff}}$ is best read as a global accumulated-state diagnostic, not as a capability score or pruning method.

Accepted at the Asian Conference on Machine Learning (ACML 2026), to appear in Proceedings of Machine Learning Research (PMLR). With Ido Galil and Alex M. Bronstein. Preprint: [arXiv:2609.31098](https://arxiv.org/abs/2609.31098).
