import csvRaw from "./mindcare_books_dataset.csv?raw";

const parseCsv = (csv) => {
  const lines = csv.trim().split(/\r?\n/);
  const headers = parseCsvLine(lines[0]);

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });
    return row;
  });
};

const parseCsvLine = (line) => {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
};

const categoryRules = [
  { key: "mindfulness", match: ["mindfulness"] },
  { key: "spirituality", match: ["spirituality"] },
  { key: "psychology", match: ["psychology"] },
  { key: "fiction", match: ["fiction"] },
  { key: "education", match: ["education", "study skills", "academic"] },
  { key: "career", match: ["career"] },
  { key: "business", match: ["business"] },
  { key: "finance", match: ["finance", "investing", "personal finance"] },
  { key: "social", match: ["social"] },
  { key: "health", match: ["health", "mental health"] },
  { key: "philosophy", match: ["philosophy"] },
  { key: "productivity", match: ["productivity"] },
  { key: "relationships", match: ["relationships"] },
  { key: "science", match: ["science", "neuroscience"] },
  { key: "memoir", match: ["memoir"] },
  { key: "communication", match: ["communication"] },
  { key: "management", match: ["management"] },
  { key: "selfhelp", match: ["self help", "self-help"] },
];

const pickCategories = (categories) => {
  const text = categories.toLowerCase();
  const matched = categoryRules
    .filter((rule) => rule.match.some((keyword) => text.includes(keyword)))
    .map((rule) => rule.key);

  if (!matched.length) return ["selfhelp"];
  return [...new Set(matched)];
};

const rows = parseCsv(csvRaw);

const booksData = rows.map((row, index) => ({
  id: row.book_id || `BOOK${index + 1}`,
  title: row.title,
  author: row.authors,
  year: Number(row.year) || null,
  categoryKeys: pickCategories(row.categories || ""),
  category: pickCategories(row.categories || "")[0],
  categoriesRaw: row.categories || "",
  stressCategory: row.stress_category || "Umum",
  stressLevelTarget: row.stress_level_target || "Sedang",
  moodTag: row.mood_tag || "Umum",
  rating: Number(row.average_rating) || 0,
  match: Math.min(99, Math.max(70, Math.round((Number(row.average_rating) || 4) * 20))),
  desc: row.description || "",
  reason: `Direkomendasikan untuk kategori stres "${row.stress_category}" dengan target level "${row.stress_level_target}" dan mood "${row.mood_tag}".`,
  thumbnail: row.thumbnail || "",
  pages: Number(row.num_pages) || 0,
  duration: row.reading_duration_category || "",
  language: row.language || "",
  source: row.source || "",
}));

export default booksData;
