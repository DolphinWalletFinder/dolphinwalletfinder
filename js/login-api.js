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

        // گرفتن نقش از JWT
        const payload = JSON.parse(atob(data.token.split('.')[1]));
        if (payload.role === "admin") {
            window.location.href = "/pages/admin-licenses.html"; // آدرس پنل ادمین
        } else {
            window.location.href = "/pages/scan.html"; // آدرس صفحه اسکن
        }
    }
    return data;
}

// خروج کاربر
function logout() {
    localStorage.removeItem("token");
    window.location.href = "/pages/login.html";
}
