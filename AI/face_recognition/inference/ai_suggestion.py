# -*- coding: utf-8 -*-

from datetime import datetime
import random

MOOD_DATA = {
    "happy": {
        "messages": [
            "Kamu terlihat penuh energi hari ini.",
            "Suasana hatimu sedang sangat positif.",
            "Ini waktu yang baik untuk memanfaatkan produktivitasmu."
        ],
        "activities": [
            "Mulai proyek yang sempat tertunda.",
            "Bagikan apresiasi kepada seseorang.",
            "Catat pencapaian hari ini."
        ],
        "quotes": [
            "Kebahagiaan bertambah ketika dibagikan.",
            "Energi positif adalah investasi terbaik."
        ],
        "color": "#2ecc71"
    },

    "sad": {
        "messages": [
            "Hari ini mungkin terasa berat, tetapi kamu tidak harus menghadapinya sendirian.",
            "Tidak apa-apa untuk beristirahat sejenak.",
            "Perasaan sedih adalah bagian dari proses manusia."
        ],
        "activities": [
            "Jalan santai selama 10 menit.",
            "Hubungi orang yang kamu percaya.",
            "Dengarkan musik yang menenangkan."
        ],
        "quotes": [
            "Setelah hujan selalu ada langit yang lebih cerah.",
            "Langkah kecil tetap merupakan kemajuan."
        ],
        "color": "#3498db"
    },

    "angry": {
        "messages": [
            "Luangkan waktu untuk menenangkan pikiran sebelum mengambil keputusan.",
            "Emosi kuat dapat dikelola dengan langkah kecil.",
            "Fokus pada apa yang bisa kamu kontrol."
        ],
        "activities": [
            "Tarik napas dalam selama 1 menit.",
            "Minum air putih.",
            "Tulis apa yang sedang kamu rasakan."
        ],
        "quotes": [
            "Ketegangan berkurang saat kita memberi ruang untuk berpikir.",
            "Respon yang tenang sering lebih kuat daripada reaksi cepat."
        ],
        "color": "#e74c3c"
    },

    "neutral": {
        "messages": [
            "Hari yang stabil adalah kesempatan untuk berkembang.",
            "Kondisimu terlihat cukup seimbang.",
            "Gunakan hari ini untuk membuat kemajuan kecil."
        ],
        "activities": [
            "Buat target sederhana hari ini.",
            "Lakukan stretching 5 menit.",
            "Rapikan area kerja."
        ],
        "quotes": [
            "Konsistensi mengalahkan motivasi sesaat.",
            "Perubahan besar dimulai dari langkah kecil."
        ],
        "color": "#95a5a6"
    }
}


def confidence_level(confidence):
    if confidence >= 85:
        return "very_high"
    elif confidence >= 70:
        return "high"
    elif confidence >= 50:
        return "medium"
    return "low"


def build_tips(mood):
    mood_tips = {
        "happy": [
            "Pertahankan pola aktivitas positif.",
            "Nikmati momen yang membuatmu bersyukur.",
            "Gunakan energi ini untuk hal produktif."
        ],
        "sad": [
            "Istirahat jika diperlukan.",
            "Jangan ragu mencari dukungan sosial.",
            "Lakukan aktivitas ringan yang menyenangkan."
        ],
        "angry": [
            "Hindari keputusan impulsif.",
            "Fokus pada pernapasan.",
            "Beri jeda sebelum merespons sesuatu."
        ],
        "neutral": [
            "Tetapkan satu target kecil hari ini.",
            "Jaga keseimbangan aktivitas dan istirahat.",
            "Gunakan waktu untuk refleksi singkat."
        ]
    }

    return mood_tips[mood]


def get_suggestion(
    mood: str,
    confidence: float = 0.0,
    enabled: bool = True,
    use_ai: bool = False
):
    if not enabled:
        return None

    mood = mood.lower()

    if mood not in MOOD_DATA:
        mood = "neutral"

    data = MOOD_DATA[mood]

    return {
        "enabled": True,
        "source": "smart_rule_engine",
        "timestamp": datetime.utcnow().isoformat(),

        "mood": mood,
        "confidence": confidence,
        "confidence_level": confidence_level(confidence),

        "message": random.choice(data["messages"]),
        "tips": build_tips(mood),

        "activity": random.choice(data["activities"]),
        "quote": random.choice(data["quotes"]),

        "color": data["color"]
    }