---
title: "Estimating the number of HTTP/3 Responses in QUIC Using Deep Learning"
#collection: publications
#permalink: /publication/2009-10-01-paper-title-number-1
#excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2025-02-08
#venue: 'IEEE International Conference on Machine Learning for Communication and Networking'
#slidesurl: ''
paperurl: 'https://arxiv.org/abs/2410.06140'
#citation: '@inproceedings{gahtan2023using,
#  title={Using Deep Reinforcement Learning for mmWave Real-Time Scheduling},
#  author={Gahtan, Barak and Cohen, Reuven and Bronstein, Alex M and Kedar, Gil},
#  booktitle={2023 14th International Conference on Network of the Future (NoF)},
#  pages={71--79},
#  year={2023},
#  organization={IEEE}
#}'
---

QUIC, a new and increasingly used transport protocol, enhances TCP by offering improved security, performance, and stream multiplexing.
These features, however, also impose challenges for network middle-boxes that need to monitor and analyze web traffic. This paper proposes a novel method to estimate the number of HTTP/3 responses in a given QUIC connection by an observer. This estimation reveals server behavior, client-server interactions, and data transmission efficiency, which is crucial for various applications such as designing a load balancing solution and detecting HTTP/3 flood attacks. The proposed scheme transforms QUIC connection traces into image sequences and uses machine learning (ML) models, guided by a tailored loss function, to predict response counts. Evaluations on more than seven million images—derived from 100,000 traces collected across 44,000 websites over four months—achieve up to 97% accuracy in both known and unknown server settings and 92\% accuracy on previously unseen complete QUIC traces.

Accepted to IEEE International Conference on Machine Learning for Communication and Networking (ICMLCN 2025).