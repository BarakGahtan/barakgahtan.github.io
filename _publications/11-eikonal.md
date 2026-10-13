---
title: "Differentiable Randers-Finsler Eikonal Solvers"
order: 11
authors: "Barak Gahtan, Jacob Shpund, Alex M. Bronstein"
venue: "Computer Graphics Forum (Proceedings of SGP 2026)"
status: published
paperurl: 'https://doi.org/10.1111/cgf.70489'
arxiv: "https://arxiv.org/abs/2603.00035"
pdf: "/files/Differentiable_Eikonal_Solvers_v4.pdf"
thumbnail: "thumb-eikonal.jpg"
permalink: /publication/11
excerpt: "Direction-dependent (Randers-Finsler) distance fields describe wavefront phenomena such as wildfire spread, but classical Eikonal solvers are not differentiable, so their metrics cannot be learned from data. We make a GPU-friendly fast-sweeping solver exactly differentiable through implicit differentiation, recover spatially varying anisotropic metrics and drift fields from sparse arrival times, and learn data-driven spread models on real wildfire perimeters."
---

Fast and differentiable solvers for anisotropic and asymmetric distance fields are a key primitive in geometry processing, enabling gradient-based optimization over metrics, drift fields, and downstream objectives that depend on geodesic distances and geodesics. We present a differentiable Eikonal solver for Randers–Finsler metrics on Cartesian grids that combines the efficiency of a GPU-friendly column/row fast sweeping with exact gradients obtained by implicit differentiation. Our forward pass uses local one- and two-point upwind updates selected by a causality-valid stencil; the backward pass exploits the induced arrival-time ordering to solve the adjoint system via a single reverse-time back-substitution, avoiding unrolling and substantially reducing memory and runtime. We derive closed-form derivatives of the discrete updates with respect to arrival times and Randers parameters, and we enforce metric feasibility with differentiable projections that guarantee positive definiteness and valid drift magnitude. Although stencil selection is piecewise-smooth, we show gradients are stable under small perturbations and match finite differences away from stencil boundaries. We demonstrate accurate forward solutions and enable inverse problems such as recovering spatially varying anisotropic metrics and drift fields from sparse arrival-time supervision. Finally, we apply the method to learning data-driven spread models on real wildfire perimeters, illustrating scalability and the practical utility of differentiable Randers distance fields.

Presented at the [Symposium on Geometry Processing (SGP 2026)](https://sgp26.org/) and published online in Computer Graphics Forum (August 2026): [doi.org/10.1111/cgf.70489](https://doi.org/10.1111/cgf.70489). With Jacob Shpund and Alex M. Bronstein.

[//]: # (&#40;[URL for the paper]https://arxiv.org/abs/2505.00101&#41&#41; | [Download PDF](/files/Differentiable_Eikonal_Solvers_v4.pdf)
