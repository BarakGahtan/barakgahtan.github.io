---
title: "Wildfire Simulation with Differentiable Randers-Finsler Eikonal Solvers"
order: 11
excerpt: "Differentiable Randers-Finsler Eikonal solver for GPU-accelerated wildfire spread simulation with learnable anisotropic metrics."
thumbnail: "thumb-eikonal.jpg"
#collection: publications
permalink: /publication/11
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
Fast and differentiable solvers for anisotropic and asymmetric distance fields are a key primitive in geometry processing, enabling gradient-based optimization over metrics, drift fields, and downstream objectives that depend on geodesic distances and geodesics. We present a differentiable Eikonal solver for Randers–Finsler metrics on Cartesian grids that combines the efficiency of a GPU-friendly column/row fast sweeping with exact gradients obtained by implicit differentiation. Our forward pass uses local one- and two-point upwind updates selected by a causality-valid stencil; the backward pass exploits the induced arrival-time ordering to solve the adjoint system via a single reverse-time back-substitution, avoiding unrolling and substantially reducing memory and runtime. We derive closed-form derivatives of the discrete updates with respect to arrival times and Randers parameters, and we enforce metric feasibility with differentiable projections that guarantee positive definiteness and valid drift magnitude. Although stencil selection is piecewise-smooth, we show gradients are stable under small perturbations and match finite differences away from stencil boundaries. We demonstrate accurate forward solutions and enable inverse problems such as recovering spatially varying anisotropic metrics and drift fields from sparse arrival-time supervision. Finally, we apply the method to learning data-driven spread models on real wildfire perimeters, illustrating scalability and the practical utility of differentiable Randers distance fields.

Under review 

[//]: # (&#40;[URL for the paper]https://arxiv.org/abs/2505.00101&#41&#41; | [Download PDF](/files/Differentiable_Eikonal_Solvers_v4.pdf)