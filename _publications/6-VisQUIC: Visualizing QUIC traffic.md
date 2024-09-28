---
title: "Exploring QUIC Dynamics: A Large-Scale Dataset for Encrypted Traffic Analysis"
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

QUIC, a new and increasingly used transport protocol, addresses and resolves the limitations of TCP by offering improved security, performance, and features such as stream multiplexing and connection migration. These features, however, also present challenges for network operators who need to monitor and analyze web traffic. In this paper, we introduce \textit{VisQUIC}, a labeled dataset comprising over 100,000 QUIC traces from more than 44,000 websites (URLs), collected over a four-month period. These traces provide the foundation for generating more than seven million images, with configurable parameters of window length, pixel resolution, normalization, and labels. These images enable an observer looking at the interactions between a client and a server to analyze and gain insights about QUIC encrypted connections. To illustrate the dataset's potential, we offer a use-case example of an observer estimating the number of HTTP/3 responses/requests pairs in a given QUIC, which can reveal server behavior, client--server interactions, and the load imposed by an observed connection. We formulate the problem as a discrete regression problem, train a machine learning (ML) model for it, and then evaluate it using the proposed dataset on an example use case.
Currently under review.      