import { apiPost } from "./api";

export async function register(name, email, password) {
  return apiPost("/auth/register", { name, email, password });
}

export async function login(email, password) {
  return apiPost("/auth/login", { email, password });
}
