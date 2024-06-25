---
title: "DecQUIC: Estimating HTTP/3 Responses in QUIC Traffic Using Deep Learning"
#collection: publications
#permalink: /publication/2009-10-01-paper-title-number-1
#excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
#date: 2023-10-01
#venue: '2023 14th International Conference on Network of the Future (NoF)'
#slidesurl: ''
#paperurl: 'https://ieeexplore.ieee.org/document/10302794'
#citation: '@inproceedings{gahtan2023using,
  title={Using Deep Reinforcement Learning for mmWave Real-Time Scheduling},
  author={Gahtan, Barak and Cohen, Reuven and Bronstein, Alex M and Kedar, Gil},
  booktitle={2023 14th International Conference on Network of the Future (NoF)},
  pages={71--79},
  year={2023},
  organization={IEEE}
}'
---

We propose a novel solution for estimating the number of HTTP/3 responses in a given QUIC connection by an observer. This estimation reveals server behavior, client-server interactions, and data transmission efficiency, which can pinpoint bottlenecks and improve understanding of application and network performance.  Our approach involves transforming QUIC connection traces into images and training machine learning models to predict the number of responses in a given image. We introduce our own loss function to address the task as a discrete regression problem. We evaluate our approach on a dataset of over two million images generated from 72,000 traces collected from 17 web-servers and over 9,000 websites. We demonstrate up to 97\% cumulative accuracy profile in two scenarios: where the web-server is known to the observer and where it is unknown, showing the model's ability to generalize to unseen client-server dynamics.

Currently under review.      