---
title: "Estimating the Number of HTTP/3 Responses in QUIC Using Deep Learning"
order: 4
authors: "Barak Gahtan, Robert J. Shahla, Reuven Cohen, Alex M. Bronstein"
venue: 'IEEE International Conference on Machine Learning for Communication and Networking (ICMLCN)'
status: published
date: 2025-05-26
paperurl: 'https://ieeexplore.ieee.org/document/11139934'
arxiv: "https://arxiv.org/abs/2410.06140"
pdf: "/files/Estimating%20the%20Number%20of%20HTTP3%20Responses%20in%20QUIC%20Using%20Deep%20Learning.pdf"
thumbnail: "thumb-http3.jpg"
permalink: /publication/3
excerpt: "QUIC encrypts almost everything, so network middleboxes can no longer see how many HTTP/3 responses a connection carries, a quantity that matters for load balancing and flood-attack detection. We turn encrypted QUIC traces into image sequences and train a deep model with a tailored loss, reaching up to 97% accuracy on more than 7 million images from 100,000 traces across 44,000 websites."
---

QUIC, a new and increasingly used transport protocol, enhances TCP by offering improved security, performance, and stream multiplexing. These features, however, also impose challenges for network middle-boxes that need to monitor and analyze web traffic. This paper proposes a novel method to estimate the number of HTTP/3 responses in a given QUIC connection by an observer. This estimation reveals server behavior, client-server interactions, and data transmission efficiency, which is crucial for various applications such as designing a load balancing solution and detecting HTTP/3 flood attacks. The proposed scheme transforms QUIC connection traces into image sequences and uses machine learning (ML) models, guided by a tailored loss function, to predict response counts. Evaluations on more than seven million images-derived from 100,000 traces collected across 44,000 websites over four months-achieve up to 97% accuracy in both known and unknown server settings and 92% accuracy on previously unseen complete QUIC traces.

Presented in the IEEE International Conference on Machine Learning for Communication and Networking (ICMLCN 2025).

[URL for the paper](https://ieeexplore.ieee.org/document/11139934) | [Download PDF](/files/Estimating the Number of HTTP3 Responses in QUIC Using Deep Learning.pdf)