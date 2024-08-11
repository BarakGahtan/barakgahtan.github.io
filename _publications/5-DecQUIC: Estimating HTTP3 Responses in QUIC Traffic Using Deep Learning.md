---
title: "Estimating the number of HTTP/3 Responses in QUIC Using Deep Learning"
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

QUIC, a new and increasingly used transport protocol, enhances TCP by providing better security, performance, and features like stream multiplexing. These features, however, also impose challenges for network middle-boxes that need to monitor and analyze web traffic. This paper proposes a novel solution for estimating the number of HTTP/3 responses in a given QUIC connection by an observer. This estimation reveals server behavior, client-server interactions, and data transmission efficiency, which is crucial for various applications such as designing a load balancing solution and detecting HTTP/3 flood attacks. The proposed scheme transforms QUIC connection traces into a sequence of images and trains machine learning models to predict the number of responses. Then, by aggregating images of a QUIC connection, an observer can estimate the total number of responses. As the problem is formulated as a discrete regression problem, we introduce a dedicated loss function. The proposed scheme is evaluated on a dataset of over two million images, generated from $72,000$ traces collected from over $9,000$ websites over a four-month period. The scheme achieves up to 97\% cumulative accuracy in both known and unknown web server settings and 92\% accuracy in estimating the total number of responses in unseen QUIC traces.
Currently under review.      