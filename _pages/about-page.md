---
permalink: /about-page/
#title: "About"
author_profile: true
redirect_from: 
  - /about_page/
#  - /about.html
---

## About

I’m a PhD candidate in Computer Science at the Technion, supervised by Prof. Alex Bronstein and Prof. Reuven Cohen. I build **task-specific deep learning systems for complex temporal and spatiotemporal data**, especially in settings where data is noisy, partially missing, and collected outside controlled lab conditions. My work sits at the intersection of learning, structure, and real-world constraints: I try to bring domain structure (physiology, geometry/physics, or network behavior) into modern models so they are not only accurate, but also interpretable and reliable in practice.

In exercise physiology, I develop methods that estimate **VO₂ and related metabolic dynamics**—traditionally measured using expensive lab equipment (e.g., Cosmed K5)—from lower-friction signals such as **smartwatch data** and **video**. A recurring approach in my work is to treat physiology as a dynamical state-estimation problem, using tools like **neural ODEs** and **neural kalman filtering** to model how latent physiological states evolve over time and how they manifest in observable signals. Alongside this, I work with large-scale wearable datasets to support long-horizon understanding of behavior and recovery, including **activity recognition under weak supervision** and **physiologically informed strategies for handling missing data**. I also collaborate on applied medical machine learning problems, such as readmission risk and analyses connecting **CGM** with accelerometer-derived activity patterns.

I’m also interested in **differentiable solvers and inverse problems**, where you want to learn from data while preserving meaningful structure. One example is my work on **wildfire propagation modeling** via **differentiable eikonal-equation solvers**: the eikonal equation captures wavefront-style propagation, and by making classical fast methods (e.g., fast sweeping) differentiable—typically via **implicit differentiation**—we can learn propagation-related parameters from observations while keeping the solver grounded in the underlying geometry. This direction appeals to me because it blends learning with structure and interpretability, rather than replacing the model with a black box.

In communication networks, I use real traffic and telemetry to build models that help **understand and optimize performance in modern systems**. This includes analyzing **encrypted QUIC dynamics** to infer aspects of server–client interactions, and developing learning-based approaches for teleoperation settings (e.g., teleoperated driving), where predicting and adapting to network behavior is critical for reliability and latency.

Across projects, I like going end-to-end: understanding the problem, building the data pipeline, designing the right model, and evaluating it carefully. I also occasionally provide professional guidance—whether it’s on modeling choices, evaluation design, or turning a research idea into a working system. (See the Publications section for paper links and details.)

## Outside of work

I’m married to Shir Cohen, who also holds a PhD in Computer Science. I’m a proud father to Romy and Elay, and we share our home with Zeus, our loyal German Shepherd. When I’m not spending time with my family, I’m usually running, coaching amateur long-distance runners, or reading about the sport. I’m a proud member of the ASICS Front Runner team and hold a personal best of **2:43** from the Valencia Marathon.

![Shir and I](https://www.barakgahtan.com/images/wedding.jpg)