import bookRepository from "../repositories/bookRepository.js";

const normalizeExploredBooks = (books = []) => (
    Array.isArray(books)
        ? books
            .filter((item) => item?.bookId)
            .map((item) => ({
                bookId: String(item.bookId).slice(0, 100),
                title: item.title ? String(item.title).slice(0, 255) : null,
                author: item.author ? String(item.author).slice(0, 255) : null
            }))
        : []
);

const bookServices = {
    async createBookSession(userId, payload) {
        const durationSeconds = Number(payload.durationSeconds);
        const date = payload.date ? new Date(payload.date) : new Date();
        const exploredBooks = normalizeExploredBooks(payload.exploredBooks);

        return bookRepository.createSession(userId, {
            durationSeconds,
            date,
            exploredBooks
        });
    },

    async getAllBookSessionsByUserLogin(userId) {
        return bookRepository.findAllSessionsByUserId(userId);
    },

    async createBookRead(userId, payload) {
        const bookId = String(payload.bookId);
        const title = payload.title ? String(payload.title) : null;
        const author = payload.author ? String(payload.author) : null;

        return bookRepository.upsertBookRead(userId, {
            bookId,
            title,
            author
        });
    },

    async getAllBookReadsByUserLogin(userId) {
        return bookRepository.findAllReadsByUserId(userId);
    }
};

export default bookServices;
