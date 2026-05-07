---
title: "Matched Effective Sample Size for Temporal Evaluation with Conservative TCN Bounds"
order: 10
excerpt: "Dependence-aware temporal evaluation protocol that matches operational effective sample size, with conservative TCN bounds for beta-mixing sequences."
thumbnail: "thumb-betamixing.jpg"
#collection: publications
permalink: /publication/10
venue: "Submitted to NeurIPS 2026"
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
Temporal dependence makes raw sequence length a poor proxy for statistical information, yet temporal deep-learning benchmarks often compare regimes at fixed raw $N$. We propose a dependence-aware evaluation protocol that matches an operational effective sample size $N_{\text{eff}}$: estimate integrated autocorrelation time, allocate raw lengths to a common information budget, verify achieved $N_{\text{eff}}$, and report both fixed-$N$ and matched-$N_{\text{eff}}$ views. In controlled AR(1), AR(2), and Beijing PM2.5 diagnostics, the protocol shows that stronger dependence does not necessarily increase signed or absolute train-test gaps once comparisons control for effective information. We complement the protocol with a conservative TCN baseline for exponentially beta-mixing sequences by combining standard blocking/coupling with existing convolutional norm bounds. This guarantee controls population risk against anchor empirical risk and serves as a worst-case reference for dependence and architecture scaling.

Submitted to NeurIPS 2026.

Manuscript under review.
