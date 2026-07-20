import { readAppData, writeAppData } from "./storage";

const DEFAULT_API_URL = "http://localhost:3000";

function getApiBaseUrl() {
  const configuredUrl = (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/+$/, "");
  return configuredUrl.replace(/\/api$/i, "");
}

function getAccessToken() {
  return readAppData("auth", null)?.accessToken ?? null;
}

function setAccessToken(accessToken) {
  const prev = readAppData("auth", null) ?? {};
  writeAppData("auth", { ...prev, accessToken });
}

function redirectToLogin() {
  if (typeof window === "undefined") return;
  if (window.location.pathname !== "/") {
    window.location.replace("/");
  }
}

let refreshPromise = null;

export async function refreshAccessToken({ clearOnFail = true } = {}) {
  if (refreshPromise) {
    const token = await refreshPromise;
    if (!token && clearOnFail) clearAuth();
    return token;
  }

  refreshPromise = (async () => {
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/auth/token`, {
        method: "POST",
        credentials: "include",
      });

      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.success) return null;

      const accessToken = json?.payload?.accessToken ?? null;
      if (accessToken) setAccessToken(accessToken);
      return accessToken;
    } catch (err) {
      console.error("Refresh token error:", err);
      return null;
    } finally {
      refreshPromise = null;
    }
  })();

  const token = await refreshPromise;
  if (!token && clearOnFail) clearAuth();
  return token;
}

const apiCache = new Map();

export function clearApiCache() {
  apiCache.clear();
}

export async function apiRequest(path, options = {}) {
  const {
    method = "GET",
    body,
    headers,
    auth = true,
    retryOnAuthFail = true,
    useCache = true, // Default to true for GET requests
  } = options;

  const urlPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${getApiBaseUrl()}${urlPath}`;
  const cacheKey = `${method}:${urlPath}`;

  // Return cached response for GET requests if available
  if (method === "GET" && useCache && apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  const nextHeaders = { ...(headers ?? {}) };
  const isFormData = body instanceof FormData;

  if (body !== undefined && !isFormData && !("Content-Type" in nextHeaders)) {
    nextHeaders["Content-Type"] = "application/json";
  }

  if (auth) {
    const token = getAccessToken();
    if (token) nextHeaders.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method,
    headers: nextHeaders,
    body: isFormData ? body : (body === undefined ? undefined : JSON.stringify(body)),
    credentials: "include",
  });

  const json = await res.json().catch(() => null);

  const isInvalidToken =
    res.status === 403 && typeof json?.msg === "string" && json.msg.toLowerCase().includes("token");

  // Jika token ditolak dan belum pernah retry, coba refresh token
  if ((res.status === 401 || isInvalidToken) && retryOnAuthFail && auth) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      // Retry dengan token baru
      return apiRequest(path, { ...options, retryOnAuthFail: false });
    }
    redirectToLogin();
  }

  if (!res.ok) {
    const msg = json?.msg || `HTTP ${res.status}`;
    const err = new Error(msg);
    err.status = res.status;
    err.response = json;
    throw err;
  }

  // Clear cache on mutations (POST, PUT, DELETE, etc.)
  if (method !== "GET") {
    clearApiCache();
  } else if (useCache) {
    // Cache the successful GET response
    apiCache.set(cacheKey, json);
  }

  return json;
}

export function clearAuth() {
  writeAppData("auth", null);
  writeAppData("user", null);
  clearApiCache(); // Clear cache on logout
}

/**
 * POST /api/stress-scan
 * Upload gambar untuk deteksi stress
 */
export async function scanStress(data = {}) {
  return apiRequest("/api/stress-scan", {
    method: "POST",
    body: data,
  });
}

/**
 * GET /api/stress-scan/me
 * Ambil riwayat stress scan milik user
 */
export async function getMyStressScans() {
  return apiRequest("/api/stress-scan/me");
}

/**
 * GET /api/stress-progress/me
 * Ambil persentase stress terbaru dan log penurunan aktivitas
 */
export async function getMyStressProgress() {
  return apiRequest("/api/stress-progress/me");
}

/**
 * POST /api/stress/update
 * Kalkulasi penurunan stress setelah aktivitas
 */
export async function calculateStressReductionAPI(data) {
  return apiRequest("/api/stress/update", {
    method: "POST",
    body: data,
  });
}

/**
 * GET /api/kuesioner/rekomendasi
 * Ambil riwayat rekomendasi (termasuk riwayat buku) milik user
 */
export async function getMyBookRecommendations() {
  return apiRequest("/api/kuesioner/rekomendasi");
}

/**
 * GET /api/books/general
 * Ambil rekomendasi buku umum dari katalog MindCare
 */
export async function getGeneralBookRecommendations(limit) {
  const query = limit ? `?limit=${encodeURIComponent(limit)}` : "";
  return apiRequest(`/api/books/general${query}`);
}

/**
 * POST /api/books/sessions
 * Simpan sesi eksplorasi buku
 */
export async function createBookSession(data) {
  return apiRequest("/api/books/sessions", {
    method: "POST",
    body: data,
  });
}

/**
 * GET /api/books/sessions/me
 * Ambil riwayat sesi eksplorasi buku milik user
 */
export async function getMyBookSessions() {
  return apiRequest("/api/books/sessions/me");
}

/**
 * POST /api/books/reads
 * Simpan riwayat buku yang dibuka user
 */
export async function createBookRead(data) {
  return apiRequest("/api/books/reads", {
    method: "POST",
    body: data,
  });
}

/**
 * Olahraga (Exercise) API
 */

export async function createOlahraga(data) {
  return apiRequest("/api/olahraga", {
    method: "POST",
    body: data,
  });
}

export async function getMyOlahraga() {
  return apiRequest("/api/olahraga/me");
}

/**
 * POST /api/match-route
 * Kirim array koordinat GPS, terima GeoJSON rute yang sudah di-snap ke jalan
 * @param {Array<{lat: number, lng: number}>} coords
 */
export async function matchRoute(coords) {
  return apiRequest("/api/match-route", {
    method: "POST",
    body: { coords },
  });
}

