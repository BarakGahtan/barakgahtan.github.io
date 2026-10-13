---
title: "Matched Effective Sample Size for Temporal Evaluation with Conservative TCN Bounds"
order: 10
authors: "Barak Gahtan, Alex M. Bronstein"
venue: "Under review"
status: preprint
arxiv: "https://arxiv.org/abs/2508.06066"
pdf: "/files/Betamixing.pdf"
thumbnail: "thumb-betamixing.jpg"
permalink: /publication/10
excerpt: "Consecutive samples in a time series are correlated, so raw sequence length overstates how much information a temporal benchmark contains. We propose an evaluation protocol that matches an operational effective sample size across regimes, show in a 640-run controlled sweep that fixed-length comparisons can reverse the apparent ordering, and pair it with a conservative generalization bound for temporal convolutional networks on beta-mixing sequences."
---

Temporal dependence makes raw sequence length a poor proxy for statistical information, yet temporal deep-learning benchmarks often compare regimes at fixed raw $N$. We propose a dependence-aware evaluation protocol that matches an operational effective sample size $N_{\text{eff}}$: estimate integrated autocorrelation time, allocate raw lengths to a common information budget, verify achieved $N_{\text{eff}}$, and report fixed-$N$ and matched-$N_{\text{eff}}$ views. In a 640-run controlled AR(1) sweep, stronger dependence does not necessarily increase signed or absolute train--test gaps once comparisons control for $N_{\text{eff}}$; the apparent ordering can change under fixed-$N$ evaluation. IPS-matched AR(2) and Beijing PM2.5 diagnostics show the same matching mechanics without an oracle AR(1) formula. We complement the protocol with a conservative TCN baseline for exponentially $\beta$-mixing sequences by combining standard blocking/coupling with existing convolutional norm bounds. This guarantee controls population risk against anchor empirical risk, not the full train--test gap, and serves as a worst-case reference for dependence and architecture scaling.

Preprint.
