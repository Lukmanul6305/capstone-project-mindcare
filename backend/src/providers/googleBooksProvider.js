import { searchBookMetadata } from "../utils/bookSearch.js";

export const getGoogleBooksThumbnail = async (judul, penulis) => {
    const metadata = await searchBookMetadata(judul, penulis);
    if (metadata?.thumbnail) return metadata.thumbnail;
    if (metadata?.isbn)      return metadata.isbn;
    return null;
};

export const getGoogleBooksDescription = async (judul, penulis) => {
    const metadata = await searchBookMetadata(judul, penulis);
    return metadata?.description ?? null;
};