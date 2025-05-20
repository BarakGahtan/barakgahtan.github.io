---
title: "Exploring QUIC Dynamics: A Large-Scale Dataset for Encrypted Traffic Analysis"
#collection: publications
permalink: /publication/5
#excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
#date: 2023-10-01
venue: '2025 Mediterranean Conference on Networks and Communications (MeditCom)'
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

QUIC, an increasingly adopted transport protocol, addresses limitations of TCP by offering improved security, performance, and features such as stream multiplexing and connection migration. However, these enhancements also introduce challenges for network operators in monitoring and analyzing web traffic, especially due to QUIC's encryption. Existing datasets are inadequate—they are often outdated, lack diversity, anonymize critical information, or exclude essential features like SSL keys—limiting comprehensive research and development in this area. We introduce VisQUIC, a publicly available dataset of over 100,000 labeled QUIC traces with corresponding SSL keys, collected from more than 40,000 websites over four months. By generating visual representations of the traces, we facilitate advanced machine learning (ML) applications and in-depth analysis of encrypted QUIC traffic. To demonstrate the dataset's potential, we estimate the number of HTTP/3 request-response pairs in a QUIC connection using only encrypted traffic, achieving up to 92\% accuracy. This estimation provides insights into server behavior, client-server interactions, and connection load—crucial for tasks like load balancing and intrusion detection. Our dataset enables comprehensive studies on QUIC and HTTP/3 protocols and supports the development of tools for encrypted traffic analysis.

Accepted for publication in the 2025 Mediterranean Conference on Networks and Communications (MeditCom).

[URL for the paper](https://arxiv.org/abs/2410.03728)
