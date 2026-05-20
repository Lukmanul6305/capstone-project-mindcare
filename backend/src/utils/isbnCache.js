// utils/isbnCache.js

// Cache ISBN untuk buku populer
const isbnCache = {
    "nonviolent communication": "9781892005281",
    "attached the new science of adult attachment": "9781585429134",
    "the body keeps the score": "9780143127741",
    "atomic habits": "9780735211292",
    "thinking fast and slow": "9780374533557",
    "the power of now": "9781577314806",
    "daring greatly": "9781592408412",
    "the happiness project": "9780061583261",
    "mindset the new psychology of success": "9780345472328",
};

export const getCachedIsbn = (title) => {
    const normalizedTitle = title.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .trim();

    // Cek exact match
    if (isbnCache[normalizedTitle]) {
        return isbnCache[normalizedTitle];
    }

    // Cek partial match
    for (const [key, isbn] of Object.entries(isbnCache)) {
        if (normalizedTitle.includes(key) || key.includes(normalizedTitle)) {
            return isbn;
        }
    }

    return null;
};

export const addToCache = (title, isbn) => {
    const normalizedTitle = title.toLowerCase().replace(/[^\w\s]/g, '');
    isbnCache[normalizedTitle] = isbn;
};