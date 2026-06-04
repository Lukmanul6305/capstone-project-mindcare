// utils/bookSearch.js - Versi lebih agresif

const FETCH_TIMEOUT_MS = 4000;

const fetchGoogleBooksJson = async (query, maxResults) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=${maxResults}`,
        { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) }
    );

    if (!response.ok) {
        throw new Error(`Google Books HTTP ${response.status}`);
    }

    return response.json();
};

export async function searchBookMetadata(title, author = "") {
    try {
        // Bersihkan judul untuk query
        const cleanTitle = title
            .replace(/[^\w\s]/g, '')  // Hapus karakter khusus
            .substring(0, 100);        // Batasi panjang
        
        const cleanAuthor = author.replace(/[^\w\s]/g, '');
        
        // Strategy 1: Cari dengan judul + author (tanpa filter intitle)
        let query = `${cleanTitle}`;
        if (cleanAuthor) {
            query += ` ${cleanAuthor}`;
        }
        
        console.log(`[DEBUG] Searching Google Books: ${query}`);
        
        const data = await fetchGoogleBooksJson(query, 5);
        
        if (data.items && data.items.length > 0) {
            // Cari yang paling relevan
            let bestMatch = data.items[0];
            let bestScore = 0;
            
            for (const item of data.items) {
                const info = item.volumeInfo;
                const itemTitle = info.title?.toLowerCase() || '';
                const searchTitle = cleanTitle.toLowerCase();
                
                let score = 0;
                if (itemTitle === searchTitle) score = 100;
                else if (itemTitle.includes(searchTitle)) score = 80;
                else if (searchTitle.includes(itemTitle)) score = 60;
                
                // Cek author
                if (cleanAuthor && info.authors) {
                    if (info.authors.some(a => a.toLowerCase().includes(cleanAuthor.toLowerCase()))) {
                        score += 20;
                    }
                }
                
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = item;
                }
            }
            
            const info = bestMatch.volumeInfo;
            const isbnObj = info.industryIdentifiers?.find(
                (id) => id.type === "ISBN_13" || id.type === "ISBN_10"
            );
            
            // Ambil thumbnail dengan prioritas
            let thumbnail = null;
            if (info.imageLinks) {
                thumbnail = info.imageLinks.thumbnail || 
                           info.imageLinks.smallThumbnail ||
                           info.imageLinks.medium;
                if (thumbnail) {
                    thumbnail = thumbnail.replace("http://", "https://");
                }
            }
            
            return {
                isbn: isbnObj?.identifier ?? null,
                thumbnail: thumbnail,
                description: info.description || null,
                title: info.title,
                authors: info.authors
            };
        }
        
        // Strategy 2: Coba dengan hanya judul (tanpa author)
        console.log(`[DEBUG] Fallback: searching with title only: ${cleanTitle}`);
        const fallbackData = await fetchGoogleBooksJson(cleanTitle, 3);
        
        if (fallbackData.items && fallbackData.items.length > 0) {
            const info = fallbackData.items[0].volumeInfo;
            const isbnObj = info.industryIdentifiers?.find(
                (id) => id.type === "ISBN_13" || id.type === "ISBN_10"
            );
            
            let thumbnail = null;
            if (info.imageLinks) {
                thumbnail = info.imageLinks.thumbnail || info.imageLinks.smallThumbnail;
                if (thumbnail) thumbnail = thumbnail.replace("http://", "https://");
            }
            
            return {
                isbn: isbnObj?.identifier ?? null,
                thumbnail: thumbnail,
                description: info.description || null,
                title: info.title,
                authors: info.authors
            };
        }
        
        console.log(`[WARN] No results found for: ${title}`);
        return null;
        
    } catch (error) {
        console.error(`[ERROR] searchBookMetadata failed for "${title}":`, error.message);
        return null;
    }
}
