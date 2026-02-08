---
title: "Architecture-Aware Generalization Bounds for Temporal Networks: Theory and Fair Comparison Methodology"
order: 10
excerpt: "Architecture-aware generalization bounds for deep temporal models with beta-mixing sequences."
thumbnail: "thumb-betamixing.jpg"
#collection: publications
permalink: /publication/10
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
Learning from time series is fundamentally different from learning from i.i.d.\ data: temporal dependence can make long sequences effectively information-poor, yet standard evaluation protocols conflate sequence length with statistical information. We propose a dependence-aware evaluation methodology that controls for effective sample size $N_{\text{eff}}$ rather than raw length $N$, and provide end-to-end generalization guarantees for Temporal Convolutional Networks (TCNs) on $\beta$-mixing sequences. Our analysis combines a blocking/coupling reduction that extracts $B = \Theta(N/\log N)$ approximately independent anchors with an architecture-aware Rademacher bound for $\ell_{2,1}$-norm-controlled convolutional networks, yielding $O(\sqrt{D\log p / B})$ complexity scaling in depth $D$ and kernel size $p$. Empirically, we find that stronger temporal dependence can \emph{reduce} generalization gaps when comparisons control for $N_{\text{eff}}$ - a conclusion that reverses under standard fixed-$N$ evaluation, with observed rates of $N_{\text{eff}}^{-0.9}$ to $N_{\text{eff}}^{-1.2}$ substantially faster than the worst-case $O(N^{-1/2})$ mixing-based prediction. Our results suggest that dependence-aware evaluation should become standard practice in temporal deep learning benchmarks.
Under review 

([URL for the paper]https://arxiv.org/abs/2505.00101&#41) | [Download PDF](/files/Betamixing.pdf)