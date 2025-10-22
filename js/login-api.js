// login-api.js

const API_BASE_URL = "https://web-production-13d5a.up.railway.app/api";

/* Validation regex (shared with UI) */
const USERNAME_RE = /^[A-Za-z0-9]+$/;
const PASSWORD_RE = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ============ tiny fetch helper with timeout & JSON handling ============ */
async function withTimeoutFetch(url, options = {}, timeoutMs = 12000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: ctrl.signal });
    let data = null;
    try { data = await res.json(); } catch (_) { /* non-JSON */ }
    if (!res.ok) {
      const message = (data && (data.error || data.message)) || `HTTP ${res.status}`;
      const err = new Error(message);
      err.status = res.status;
      throw err;
    }
    return data ?? {};
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('Network timeout. Please try again.');
    throw err;
  } finally {
    clearTimeout(t);
  }
}

/* ============ API methods ============ */

/**
 * Register a new user
 */
async function register(username, email, password) {
  if (!USERNAME_RE.test(username)) throw new Error('Username must contain only English letters and digits.');
  if (!EMAIL_RE.test(email)) throw new Error('Invalid email format.');
  if (!PASSWORD_RE.test(password)) throw new Error('Password must be at least 6 chars and include letters and digits.');

  const data = await withTimeoutFetch(API_BASE_URL + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });

  // backend may send { ok: true, token? }
  if (data && data.error) throw new Error(data.error);
  return data;
}

/**
 * Decide where to send the user after login based on scan completion.
 * Logic: if user has a wallet record -> go to results; else -> go to scan.
 */
async function smartRedirectAfterLogin() {
  const token = localStorage.getItem("token");
  if (!token) { window.location.href = "/pages/login.html"; return; }
  try {
    const data = await withTimeoutFetch(API_BASE_URL + "/my-wallet", {
      method: "GET",
      headers: { "Authorization": "Bearer " + token }
    });
    const hasCompletedScan = !!(data && data.wallet);
    if (hasCompletedScan) window.location.href = "/pages/results.html";
    else window.location.href = "/pages/scan.html";
  } catch (_) {
    // if anything fails, still let the user continue to scan page
    window.location.href = "/pages/scan.html";
  }
}

/**
 * Login user
 */
async function login(username, password) {
  const data = await withTimeoutFetch(API_BASE_URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (data && data.token) {
    // Store token
    localStorage.setItem("token", data.token);

    // Parse role from JWT if possible
    try {
      const payload = JSON.parse(atob(data.token.split('.')[1] || '{}'));
      const role = payload.role || "user";
      localStorage.setItem("role", role);
      localStorage.setItem("username", payload.username || username);

      if (role === "admin") {
        window.location.href = "/pages/admin-licenses.html";
      } else {
        await smartRedirectAfterLogin();
      }
    } catch (err) {
      console.error("JWT parsing error:", err);
      await smartRedirectAfterLogin();
    }
  } else {
    // Backend may respond with {error} and non-2xx handled above,
    // but just in case:
    throw new Error((data && data.error) || "Login failed");
  }

  return data;
}

/**
 * Reset password using username + email + newPassword
 * Server should respond with { ok: true } even if user not found (for privacy).
 */
async function resetPassword(username, email, newPassword) {
  if (!USERNAME_RE.test(username)) throw new Error('Invalid username format.');
  if (!EMAIL_RE.test(email)) throw new Error('Invalid email format.');
  if (!PASSWORD_RE.test(newPassword)) throw new Error('Password must be at least 6 chars and include letters and digits.');

  const data = await withTimeoutFetch(API_BASE_URL + "/password/reset", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, newPassword })
  });

  // Standardize success shape
  return data && typeof data.ok !== 'undefined' ? data : { ok: true };
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("username");
  window.location.href = "/pages/login.html";
}

/* Expose to global scope (module-safe) */
window.DWF_API = {
  API_BASE_URL,
  register,
  login,
  resetPassword,
  smartRedirectAfterLogin,
  logout
};
