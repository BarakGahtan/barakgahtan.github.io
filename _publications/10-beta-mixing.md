---
title: "Architecture-Aware Generalization Bounds for Temporal Networks: Theory and Fair Comparison Methodology"
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
Deep temporal architectures such as Temporal Convolutional Networks (TCNs) achieve strong predictive performance on sequential data, yet theoretical understanding of their generalization remains limited. We address this gap by providing both the first non-vacuous, architecture-aware generalization bounds for deep temporal models and a principled evaluation methodology.  

For exponentially $\beta$-mixing sequences, we derive bounds scaling as  
$
\mathcal{O}\!\Bigl(R\,\sqrt{\tfrac{D\,p\,n\,\log N}{N}}\Bigr),
$  
where $D$ is network depth, $p$ kernel size, $n$ input dimension, and $R$ weight norm. Our delayed-feedback blocking mechanism transforms dependent samples into effectively independent ones while discarding only $O(1/\log N)$ of the data, yielding $\sqrt{D}$ scaling instead of exponential-implying that doubling depth requires approximately quadrupling the training data.  

We also introduce a fair-comparison methodology that fixes the effective sample size to isolate the effect of temporal structure from information content. Under $N_{\text{eff}}=2{,}000$, strongly dependent sequences ($\rho=0.8$) exhibit $\approx76\%$ smaller generalization gaps than weakly dependent ones ($\rho=0.2$), challenging the intuition that dependence is purely detrimental. Yet convergence rates diverge from theory: weak dependencies follow $N_{\text{eff}}^{-1.21}$ scaling and strong dependencies follow $N_{\text{eff}}^{-0.89}$, both steeper than the predicted $N^{-0.5}$. These findings reveal that temporal dependence can enhance learning under fixed information budgets, while highlighting gaps between theory and practice that motivate future research.  

Under review 

([URL for the paper]&#40;https://arxiv.org/abs/2505.00101&#41) | [Download PDF](/files/Betamixing.pdf)