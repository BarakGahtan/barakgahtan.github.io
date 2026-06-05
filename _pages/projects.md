---
layout: single
permalink: /projects/
author_profile: true
title: "Projects"
---

## Projects

A selection of research projects and tools I have been involved in.

---

### Communication Networks & Traffic Analysis
Research on encrypted traffic analysis, QUIC protocol visualization, and network performance optimization.

**VisQUIC** — A publicly available dataset of over 100,000 labeled QUIC traces with corresponding SSL keys, collected from more than 40,000 websites over four months. By generating visual representations of the traces, we facilitate advanced ML applications and in-depth analysis of encrypted QUIC traffic. Demonstrated up to 92% accuracy in estimating HTTP/3 request-response pairs from encrypted traffic alone.

Paper: [Exploring QUIC Dynamics: A Large-Scale Dataset for Encrypted Traffic Analysis](https://arxiv.org/abs/2410.03728) (MeditCom 2025)
GitHub: [robshahla/VisQUIC](https://github.com/robshahla/VisQUIC)

---

### Running

**Garmin Lap Analyzer** — A Chrome extension to analyze lap data from Garmin Connect activities using raw FIT files. Provides detailed lap breakdowns and pacing analysis directly within the Garmin Connect web interface.

GitHub: [BarakGahtan/garmin-lap-analyzer](https://github.com/BarakGahtan/garmin-lap-analyzer)

---

### Personal Finance

**BarakFinance** is a local-first, open-source personal finance tracker for Israeli banks. It scrapes your transactions server-side, stores them in a local SQLite database with credentials encrypted at rest (AES-256-GCM), and uses an LLM (Claude or a local Ollama model) to auto-categorize your spending. Built with Next.js and TypeScript and designed to self-host, so your financial data never leaves your machine.

GitHub: [BarakGahtan/BarakFinance](https://github.com/BarakGahtan/BarakFinance)
