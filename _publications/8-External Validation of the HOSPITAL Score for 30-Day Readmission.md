---
title: "External Validation of the HOSPITAL Score for 30-Day Readmission"
#collection: publications
#permalink: /publication/2009-10-01-paper-title-number-1
#excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
#date: 2023-10-01
#venue: '2023 14th International Conference on Network of the Future (NoF)'
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

**Background.**
Hospital readmissions are a global concern, costly to healthcare systems, and can have adverse effects on patient outcomes. The HOSPITAL score was developed to identify adults at risk of 30-day readmission using seven readily available clinical variables. This tool has been validated in large academic hospitals and several other settings; however, its performance in different populations remains under investigation.

**Objective.**
To comprehensively evaluate the HOSPITAL score's performance and generalizability within a large, single-center internal medicine cohort in Israel, elucidating its potential for targeted readmission prevention strategies.
\textbf{Materials \& Methods.} 
In this retrospective study, we analyzed 77,625 adult discharges from Sheba Medical Center's internal medicine service (2018--2023), excluding short-stay admissions. We calculated the HOSPITAL score (0 to 13+) using laboratory values, admission characteristics, and historical patient data. Comprehensive performance assessment included discrimination metrics (AUROC, precision-recall), calibration tests (Hosmer-Lemeshow, Pearson $\chi^{2}$), and overall predictive performance (Brier score).

**Results.** 
Of 77,625 discharges, 17,963 (23\%) experienced 30-day readmissions. The HOSPITAL score demonstrated moderate discriminative capacity (AUROC: 0.635, 95\% CI: 0.631--0.639) with an average precision of 0.320. The Brier score of 0.180 revealed moderate probabilistic alignment. Despite statistically significant calibration challenges (Hosmer-Lemeshow: $\chi^{2} = 6254.097$, $p = 0.000$; Pearson $\chi^{2} = 5410.160$, $p = 0.000$), the score exhibited a clear risk gradient: readmission rates progressively increased from 20.1\% (low-risk), 33.8\% )med-risk) to 47.0\% (high-risk).

**Discussion.**
Our single-center study confirms the potential utility of the HOSPITAL score in identifying adults at elevated risk for 30-day readmissions. While the discriminative ability (AUROC 0.635) was lower than some prior validations (e.g., 0.77 reported by Robinson in a moderate-sized US hospital), the score retained \textbf{meaningful stratification} power across risk categories. Differences in local practice, cohort size, and the relative weighting of oncology admissions may partly explain performance deviations.

**Conclusions.**
The HOSPITAL score demonstrates \textbf{moderate} utility in our Israeli tertiary hospital setting. Despite its modest predictive performance, the score effectively stratifies patients by risk of readmission. Future refinements or the addition of further predictive features could further enhance accuracy. Nonetheless, our data support the use of the HOSPITAL score as part of a broader interventional strategy to reduce readmissions.Currently under review.      