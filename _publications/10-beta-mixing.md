---
title: "Matched Effective Sample Size for Temporal Evaluation with Conservative TCN Bounds"
order: 10
excerpt: >-
  Temporal dependence makes raw sequence length a poor proxy for statistical information, yet temporal deep-learning benchmarks often compare regimes at fixed raw $N$. We propose a dependence-aware evaluation protocol that matches an operational effective sample size $N_{\text{eff}}$: estimate integrated autocorrelation time, allocate raw lengths to a common information budget, verify achieved $N_{\text{eff}}$, and report fixed-$N$ and matched-$N_{\text{eff}}$ views. In a 640-run controlled AR(1) sweep, stronger dependence does not necessarily increase signed or absolute train-test gaps once comparisons control for $N_{\text{eff}}$; the apparent ordering can change under fixed-$N$ evaluation. IPS-matched AR(2) and Beijing PM2.5 diagnostics show the same matching mechanics without an oracle AR(1) formula. We complement the protocol with a conservative TCN baseline for exponentially $\beta$-mixing sequences by combining standard blocking/coupling with existing convolutional norm bounds. This guarantee controls population risk against anchor empirical risk, not the full train-test gap, and serves as a worst-case reference for dependence and architecture scaling.
thumbnail: "thumb-betamixing.jpg"
#collection: publications
permalink: /publication/10
venue: "Preprint"
#excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
#date: 2023-10-01
#venue: '27th ACM International Conference on Multimodal Interaction (ICMI 2025)'
#slidesurl: ''
#paperurl: 'https://ieeexplore.ieee.org/document/10302794'
#citation: '@inproceedings{gahtan2023using,
#  title={Using Deep Reinforcement Learning for mmWave Real-Time Scheduling},
#  author={Gahtan, Barak and Cohen, Reuven and Bronstein, Alex M and Kedar, Gil},
#  booktitle={2023 14th International Conference on Network of the Future (NoF)},
#  pages={71--79},
#  year={2023},
#  organization={IEEE}
#}'
---
Temporal dependence makes raw sequence length a poor proxy for statistical information, yet temporal deep-learning benchmarks often compare regimes at fixed raw $N$. We propose a dependence-aware evaluation protocol that matches an operational effective sample size $N_{\text{eff}}$: estimate integrated autocorrelation time, allocate raw lengths to a common information budget, verify achieved $N_{\text{eff}}$, and report fixed-$N$ and matched-$N_{\text{eff}}$ views. In a 640-run controlled AR(1) sweep, stronger dependence does not necessarily increase signed or absolute train-test gaps once comparisons control for $N_{\text{eff}}$; the apparent ordering can change under fixed-$N$ evaluation. IPS-matched AR(2) and Beijing PM2.5 diagnostics show the same matching mechanics without an oracle AR(1) formula. We complement the protocol with a conservative TCN baseline for exponentially $\beta$-mixing sequences by combining standard blocking/coupling with existing convolutional norm bounds. This guarantee controls population risk against anchor empirical risk, not the full train-test gap, and serves as a worst-case reference for dependence and architecture scaling.

Preprint.
