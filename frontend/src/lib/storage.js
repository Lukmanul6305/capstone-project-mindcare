const APP_PREFIX = "mindcare_";

export function readJson(storageKey, fallback) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeJson(storageKey, value) {
  localStorage.setItem(storageKey, JSON.stringify(value));
}

export function readAppData(key, fallback) {
  return readJson(`${APP_PREFIX}${key}`, fallback);
}

export function writeAppData(key, value) {
  writeJson(`${APP_PREFIX}${key}`, value);
}

