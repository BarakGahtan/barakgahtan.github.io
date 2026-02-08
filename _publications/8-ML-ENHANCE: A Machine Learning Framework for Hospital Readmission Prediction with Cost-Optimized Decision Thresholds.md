---
title: "ML-ENHANCE: A Machine Learning Framework for Hospital
Readmission Prediction with Cost-Optimized Decision Thresholds"
order: 8
excerpt: "Decision-theoretic ML ensemble for 30-day readmission prediction, outperforming HOSPITAL and clinical scores with AUC 0.752 on 113K    
  admissions."
#collection: publications
permalink: /publication/8
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

Hospital readmissions within 30 days affect 15--20\% of patients, generating over \$40 billion in potentially preventable costs annually. We developed two prediction models using 113,312 internal medicine admissions (2017--2023): ENHANCE, an interpretable clinical score, and ML-ENHANCE, a machine learning ensemble. Using decision-theoretic threshold optimization across cost ratios from 0.5:1 to 20:1, we demonstrate that ML-ENHANCE (AUC 0.752) substantially outperforms ENHANCE (AUC 0.696) and HOSPITAL (AUC 0.676). At the 5:1 cost ratio, ML-ENHANCE matches ENHANCE sensitivity (76.9\%) while achieving 8.3 percentage points higher specificity, translating to 7,400 fewer unnecessary interventions annually and projected savings of \$69.3 million versus \$14.7 million for ENHANCE. ML-ENHANCE achieves 4--5 times greater economic impact, supporting deployment in automated population health applications.


[Download PDF](/files/ML_ENHANCE.pdf)
