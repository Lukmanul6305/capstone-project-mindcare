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
    "Tingkat_stres": kuesioner.tingkat_stres,
    "Penyebab_stres": kuesioner.penyebab_stres,
    "Durasi_stres": kuesioner.durasi_stres,
    "Kualitas_tidur": kuesioner.kualitas_tidur,
    "Waktu_luang": kuesioner.waktu_luang,
    "Aktivitas_fisik": kuesioner.aktivitas_fisik,
    "pref_olahraga": kuesioner.preferensi_olahraga,
    "pref_membaca": kuesioner.preferensi_membaca,
    "pref_journaling": kuesioner.preferensi_journaling
});
