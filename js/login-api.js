
// ثبت‌نام کاربر
async function register(username, email, password) {
    const res = await fetch(API_BASE_URL + "/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });
    return res.json();
}

// ورود کاربر
async function login(username, password) {
    const res = await fetch(API_BASE_URL + "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
    }
    return data;
}

// خروج کاربر
function logout() {
    localStorage.removeItem("token");
    window.location.href = "/pages/login.html";
}
