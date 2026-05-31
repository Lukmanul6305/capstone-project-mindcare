import Joi from "joi";

export const bookSessionSchema = Joi.object({
    durationSeconds: Joi.number().integer().min(1).required().messages({
        "number.base": "Durasi sesi harus berupa angka.",
        "number.integer": "Durasi sesi harus bilangan bulat.",
        "number.min": "Durasi sesi minimal 1 detik.",
        "any.required": "Durasi sesi wajib diisi."
    }),
    date: Joi.date().optional().messages({
        "date.base": "Format tanggal sesi tidak valid."
    }),
    exploredBooks: Joi.array().items(
        Joi.object({
            bookId: Joi.string().max(100).required().messages({
                "string.base": "Book ID harus berupa teks.",
                "string.max": "Book ID maksimal 100 karakter.",
                "any.required": "Book ID wajib diisi."
            }),
            title: Joi.string().allow("", null).max(255).messages({
                "string.base": "Judul buku harus berupa teks.",
                "string.max": "Judul buku maksimal 255 karakter."
            }),
            author: Joi.string().allow("", null).max(255).messages({
                "string.base": "Penulis buku harus berupa teks.",
                "string.max": "Penulis buku maksimal 255 karakter."
            })
        })
    ).default([]).messages({
        "array.base": "Daftar buku yang dijelajahi harus berupa array."
    })
});

export const bookReadSchema = Joi.object({
    bookId: Joi.string().max(100).required().messages({
        "string.base": "Book ID harus berupa teks.",
        "string.max": "Book ID maksimal 100 karakter.",
        "any.required": "Book ID wajib diisi."
    }),
    title: Joi.string().allow("", null).max(255).messages({
        "string.base": "Judul buku harus berupa teks.",
        "string.max": "Judul buku maksimal 255 karakter."
    }),
    author: Joi.string().allow("", null).max(255).messages({
        "string.base": "Penulis buku harus berupa teks.",
        "string.max": "Penulis buku maksimal 255 karakter."
    })
});
