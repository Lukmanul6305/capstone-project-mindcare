import { readAppData, writeAppData } from "./storage";

const DEFAULT_API_URL = "http://localhost:3000";

function getApiBaseUrl() {
  return (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/+$/, "");
}

function getAccessToken() {
  return readAppData("auth", null)?.accessToken ?? null;
}

function setAccessToken(accessToken) {
  const prev = readAppData("auth", null) ?? {};
  writeAppData("auth", { ...prev, accessToken });
}

async function tryRefreshAccessToken() {
  const res = await fetch(`${getApiBaseUrl()}/api/auth/token`, {
    method: "GET",
    credentials: "include",
  });

  const json = await res.json().catch(() => null);
  if (!res.ok || !json?.success) return null;

  const accessToken = json?.payload?.accessToken ?? null;
  if (accessToken) setAccessToken(accessToken);
  return accessToken;
}

export async function apiRequest(path, options = {}) {
  const {
    method = "GET",
    body,
    headers,
    auth = true,
    retryOnAuthFail = true,
  } = options;

  const urlPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${getApiBaseUrl()}${urlPath}`;

  const nextHeaders = { ...(headers ?? {}) };
  if (body !== undefined && !("Content-Type" in nextHeaders)) {
    nextHeaders["Content-Type"] = "application/json";
  }

  if (auth) {
    const token = getAccessToken();
    if (token) nextHeaders.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method,
    headers: nextHeaders,
    body: body === undefined ? undefined : JSON.stringify(body),
    credentials: "include",
  });

  const json = await res.json().catch(() => null);

  // Hanya retry jika pesan error mengandung "kedaluwarsa"
  if (
    res.status === 401 &&
    retryOnAuthFail &&
    auth &&
    json?.msg?.toLowerCase?.().includes("kedaluwarsa")
  ) {
    const newToken = await tryRefreshAccessToken();
    if (newToken) {
      return apiRequest(path, { ...options, retryOnAuthFail: false });
    }
  }

  if (!res.ok) {
    const msg = json?.msg || `HTTP ${res.status}`;
    const err = new Error(msg);
    err.status = res.status;
    err.response = json;
    throw err;
  }

  return json;
}

export function clearAuth() {
  writeAppData("auth", null);
  writeAppData("user", null);
}