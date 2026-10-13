---
title: "From Lab to Wrist: Bridging Metabolic Monitoring and Consumer Wearables for Heart Rate and Oxygen Consumption Modeling"
order: 9
authors: "Barak Gahtan, Sanketh Vedula, Gil Samuelly Leichtag, Einat Kodesh, Alex M. Bronstein"
venue: '27th ACM International Conference on Multimodal Interaction (ICMI 2025), oral presentation'
status: published
arxiv: "https://arxiv.org/abs/2505.00101"
pdf: "/files/Lab-to-Wrist-final.pdf"
thumbnail: "thumb-labtowrist.jpg"
permalink: /publication/9
excerpt: "Instantaneous oxygen consumption (VO₂) is the reference measure of metabolic demand, but it normally requires a lab-grade breath analyzer. This framework predicts full VO₂ trajectories from smartwatch and chest-strap data alone: a physiologically constrained ODE with a neural Kalman filter models heart rate at 2.81 bpm MAE on over 3 million observations, and a sequence-to-sequence VO₂ model needs only one second of calibration to reach about 11% MAPE."
---

Understanding physiological responses during running is critical for
performance optimization, tailored training prescriptions, and athlete health
management. We introduce a comprehensive framework---what we believe to be the
first capable of predicting instantaneous oxygen consumption (VO$_{2}$)
trajectories exclusively from consumer-grade wearable data. Our approach
employs two complementary physiological models: (1) accurate modeling of heart
rate (HR) dynamics via a physiologically constrained ordinary differential
equation (ODE) and neural Kalman filter, trained on over 3 million HR
observations, achieving 1-second interval predictions with mean absolute errors
as low as 2.81\,bpm (correlation 0.87); and (2) leveraging the principles of
precise HR modeling, a novel VO$_{2}$ prediction architecture requiring only
the initial second of VO$_{2}$ data for calibration, enabling robust,
sequence-to-sequence metabolic demand estimation. Despite relying solely on
smartwatch and chest-strap data, our method achieves mean absolute percentage
errors as low as 11.4\%, effectively capturing rapid physiological
transitions and steady-state conditions across diverse running intensities. Our
synchronized dataset, complemented by blood lactate measurements, further lays
the foundation for future noninvasive metabolic zone identification. By
embedding physiological constraints within modern machine learning, this
framework democratizes advanced metabolic monitoring, bridging laboratory-grade
accuracy and everyday accessibility, thus empowering both elite athletes and
recreational fitness enthusiasts.

Accepted for publication in the 27th ACM International Conference on Multimodal Interaction (ICMI 2025).

[URL for the paper](https://arxiv.org/abs/2505.00101) | [Download PDF](/files/Lab-to-Wrist-final.pdf)
