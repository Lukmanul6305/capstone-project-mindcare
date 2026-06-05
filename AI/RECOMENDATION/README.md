---
title: MindCare AI Model
emoji: 🧠
colorFrom: blue
colorTo: indigo
sdk: docker
app_port: 7860
pinned: false
---

# MindCare Recommendation API

REST API untuk sistem rekomendasi aktivitas berbasis Deep Learning (FFNN + Residual Block) untuk mengestimasi tingkat stres dan memberikan rekomendasi aktivitas.

## Endpoints

- `GET /` — Health check
- `POST /predict` — Menerima profil pengguna (JSON) dan mengembalikan estimasi tingkat stres serta rekomendasi aktivitas.

## Cara Deploy Manual ke Hugging Face Spaces

1. Buat Space baru di Hugging Face (pilih SDK **Docker**).
2. Clone repository Space tersebut ke lokal Anda.
3. Copy semua file dari project ini ke dalam folder repository Space.
4. Lakukan `git add`, `git commit`, dan `git push` ke space Anda.
