---
title: "Effective Residual-Stream Depth of Language Models"
order: 12
excerpt: "A residual-stream diagnostic for measuring how many statistically distinguishable representation states decoder-only language models traverse."
thumbnail: "thumb-depth.jpg"
#collection: publications
permalink: /publication/12
venue: "Preprint"
---

We introduce effective depth ($D_{\text{eff}}$), a scalar diagnostic that treats the layer-wise residual stream of a transformer as a discrete-time process, measures how representation similarity decays with layer distance, and aggregates that profile into one number. Across sixteen decoder-only language models, $D_{\text{eff}}$ separates structural consequences of residual accumulation from empirical signatures of correlated residual updates. Matched references, token-normalisation, position controls, and top-principal-component controls show that the observed sub-reference regime is not reducible to simple BOS or top-PC artefacts. Intermediate checkpoints further suggest that the regime can be established early and remain stable through training. The diagnostic is best read as a global accumulated-state measure, not as a capability score or pruning recipe.

Preprint.
