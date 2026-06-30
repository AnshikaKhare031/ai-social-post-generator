const API_URL = import.meta.env.VITE_API_URL;

function authHeaders() {
  const token = localStorage.getItem("udaan_token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function apiPost(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Request failed");
  return data;
}

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: authHeaders(),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Request failed");
  return data;
}

// Legacy helper kept for History page compatibility
export const getPosts = () => apiGet("/posts");