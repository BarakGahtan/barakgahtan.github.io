---
title: "ML-ENHANCE: A Machine Learning Framework for Hospital Readmission Prediction with Cost-Optimized Decision Thresholds"
order: 8
authors: "Barak Gahtan, Yakir Segev, Alex M. Bronstein, Howard Amital, Avishai M. Tsur"
venue: "Under review"
status: preprint
pdf: "/files/ML_ENHANCE.pdf"
thumbnail: "ENHANCE-thnm.jpg"
permalink: /publication/8
excerpt: "Thirty-day hospital readmissions affect 15 to 20% of patients and cost over 40 billion dollars a year, yet common risk scores ignore the cost of acting on a prediction. Trained on 113,312 internal-medicine admissions, ML-ENHANCE reaches AUC 0.752 against 0.696 for the clinical ENHANCE score and 0.676 for HOSPITAL, and its cost-optimized thresholds avoid thousands of unnecessary interventions per year at matched sensitivity."
---

Hospital readmissions within 30 days affect 15--20\% of patients, generating over \$40 billion in potentially preventable costs annually. We developed two prediction models using 113,312 internal medicine admissions (2017--2023): ENHANCE, an interpretable clinical score, and ML-ENHANCE, a machine learning ensemble. Using decision-theoretic threshold optimization across cost ratios from 0.5:1 to 20:1, we demonstrate that ML-ENHANCE (AUC 0.752) substantially outperforms ENHANCE (AUC 0.696) and HOSPITAL (AUC 0.676). At the 5:1 cost ratio, ML-ENHANCE matches ENHANCE sensitivity (76.9\%) while achieving 8.3 percentage points higher specificity, translating to 7,400 fewer unnecessary interventions annually and projected savings of \$69.3 million versus \$14.7 million for ENHANCE. ML-ENHANCE achieves 4--5 times greater economic impact, supporting deployment in automated population health applications.


[Download PDF](/files/ML_ENHANCE.pdf)
