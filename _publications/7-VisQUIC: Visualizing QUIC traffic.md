---
title: "Exploring QUIC Dynamics: A Large-Scale Dataset for Encrypted Traffic Analysis"
order: 7
authors: "Barak Gahtan, Robert J. Shahla, Reuven Cohen, Alex M. Bronstein"
venue: 'IEEE International Mediterranean Conference on Communications and Networking (MeditCom 2025)'
status: published
arxiv: "https://arxiv.org/abs/2410.03728"
pdf: "/files/Exploring%20QUIC%20Dynamics-%20A%20Large-Scale%20Dataset%20for%20Encrypted%20Traffic%20Analysis.pdf"
thumbnail: "thumb-visquic.jpg"
permalink: /publication/5
excerpt: "Public QUIC datasets are outdated, small, or stripped of the SSL keys needed to label encrypted traffic. VisQUIC releases over 100,000 labeled QUIC traces with keys from more than 40,000 websites, together with image representations that let models estimate HTTP/3 request-response counts from encrypted traffic alone at up to 92% accuracy."
---

QUIC, an increasingly adopted transport protocol, addresses limitations of TCP by offering improved security, performance, and features such as stream multiplexing and connection migration. However, these enhancements also introduce challenges for network operators in monitoring and analyzing web traffic, especially due to QUIC's encryption. Existing datasets are inadequate—they are often outdated, lack diversity, anonymize critical information, or exclude essential features like SSL keys—limiting comprehensive research and development in this area. We introduce VisQUIC, a publicly available dataset of over 100,000 labeled QUIC traces with corresponding SSL keys, collected from more than 40,000 websites over four months. By generating visual representations of the traces, we facilitate advanced machine learning (ML) applications and in-depth analysis of encrypted QUIC traffic. To demonstrate the dataset's potential, we estimate the number of HTTP/3 request-response pairs in a QUIC connection using only encrypted traffic, achieving up to 92\% accuracy. This estimation provides insights into server behavior, client-server interactions, and connection load—crucial for tasks like load balancing and intrusion detection. Our dataset enables comprehensive studies on QUIC and HTTP/3 protocols and supports the development of tools for encrypted traffic analysis.

Presented in the 2025 Mediterranean Conference on Networks and Communications (MeditCom).

[URL for the paper](https://arxiv.org/abs/2410.03728) | [Download PDF](/files/Exploring QUIC Dynamics- A Large-Scale Dataset for Encrypted Traffic Analysis.pdf)

