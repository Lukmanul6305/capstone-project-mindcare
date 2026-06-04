import kuesionerRepository from "../../repositories/kuesionerRepository.js";
import { findBookEnrichment } from "./findBook.js";

const PLACEHOLDER_COVER = "https://via.placeholder.com/300x450?text=No+Cover";
const RATE_LIMIT_DELAY_MS = 300;
const MAX_DB_TEXT_LENGTH = 255;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asSafeText = (value, fallback, maxLength = MAX_DB_TEXT_LENGTH) => {
    const text = String(value ?? fallback).trim();
    return text.slice(0, maxLength);
};

const asSafeThumbnail = (value) => {
    const thumbnail = String(value ?? "").trim().replace("http://", "https://");

    if (!thumbnail || thumbnail.length > MAX_DB_TEXT_LENGTH) {
        return PLACEHOLDER_COVER;
    }

    return thumbnail;
};

const normalizeBuku = (buku) => ({
    judul: asSafeText(buku?.judul, "Rekomendasi Buku"),
    penulis: asSafeText(buku?.penulis, "Tidak diketahui"),
    kategori: asSafeText(buku?.kategori, "Kesehatan Mental"),
    thumbnail: asSafeThumbnail(buku?.thumbnail),
    deskripsi: String(
        buku?.deskripsi ??
        `Rekomendasi buku "${buku?.judul ?? "ini"}" untuk kesehatan mental Anda.`
    ).trim()
});

const enrichOneBuku = async (buku) => {
    try {
        const { thumbnail, deskripsi } = await findBookEnrichment(
            buku.judul,
            buku.penulis,
            buku.thumbnail,
            buku.deskripsi
        );
        return {
            thumbnail: asSafeThumbnail(thumbnail),
            deskripsi: String(deskripsi ?? buku.deskripsi).trim()
        };
    } catch (error) {
        console.warn(`[WARN] Book enrichment failed for "${buku.judul}": ${error.message}`);
        return {
            thumbnail: asSafeThumbnail(buku.thumbnail),
            deskripsi: buku.deskripsi
        };
    }
};

const saveBuku = async (aktivitasId, buku) => {
    try {
        await kuesionerRepository.insertBuku(
            aktivitasId,
            buku.judul,
            buku.penulis,
            buku.kategori,
            buku.thumbnail,
            buku.deskripsi
        );
        return true;
    } catch (error) {
        console.error(`[ERROR] Failed to save book "${buku.judul}": ${error.message}`);
        return false;
    }
};

export const enrichAndSaveBuku = async (bukuList, aktivitasId) => {
    const enrichedList = [];

    for (let i = 0; i < bukuList.length; i++) {
        const buku = normalizeBuku(bukuList[i]);
        console.log(`[INFO] Processing book ${i + 1}/${bukuList.length}: ${buku.judul}`);

        const { thumbnail, deskripsi } = await enrichOneBuku(buku);
        const enrichedBuku = {
            ...buku,
            thumbnail: asSafeThumbnail(thumbnail),
            deskripsi
        };

        const saved = await saveBuku(aktivitasId, enrichedBuku);

        if (saved) {
            enrichedList.push(enrichedBuku);
        }

        await delay(RATE_LIMIT_DELAY_MS);
    }

    return enrichedList;
};
