const OPEN_LIBRARY_SEARCH = (judul) =>
    `https://openlibrary.org/search.json?q=${encodeURIComponent(judul)}&limit=1`;

export const OPEN_LIBRARY_COVER = (coverId) =>
    `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;

export const fetchOpenLibraryDoc = async (judul) => {
    const response = await fetch(OPEN_LIBRARY_SEARCH(judul));
    const data = await response.json();
    return data.docs?.[0] ?? null;
};