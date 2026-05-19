/**
 * Membangun objek input yang dibutuhkan oleh model AI
 * dari data kuesioner yang sudah tersimpan di database.
 *
 * Dipakai oleh kuesionerServices dan rekomendasiServices.
 *
 * @param {object} kuesioner - Data kuesioner dari database.
 * @returns {object} Format input untuk AI prediction endpoint.
 */
export const buildAIInput = (kuesioner) => ({
    "Umur": kuesioner.umur,
    "Pekerjaan": kuesioner.pekerjaan,
    "Tingkat stres": kuesioner.tingkat_stres,
    "Penyebab stres": kuesioner.penyebab_stres,
    "Durasi stres": kuesioner.durasi_stres,
    "Kualitas tidur": kuesioner.kualitas_tidur,
    "Waktu luang per hari": kuesioner.waktu_luang,
    "Aktivitas fisik": kuesioner.aktivitas_fisik,
    "Preferensi": {
        "olahraga": kuesioner.preferensi_olahraga,
        "membaca": kuesioner.preferensi_membaca,
        "journaling": kuesioner.preferensi_journaling
    }
});
