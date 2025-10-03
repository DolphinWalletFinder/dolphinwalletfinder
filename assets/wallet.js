

// آدرس بک‌اند
const API_BASE_URL = "https://web-production-b86d.up.railway.app";

// گرفتن توکن ذخیره‌شده
function getToken() {
    return localStorage.getItem("token");
}

// هدر احراز هویت
function authHeaders() {
    const token = getToken();
    return token ? { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

// ذخیره کیف پول در سرور
async function saveWallet(address, balance, network, lastTx) {
    const res = await fetch(API_BASE_URL + "/api/wallets", {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({ address, balance, network, lastTx })
    });
    return res.json();
}

// گرفتن کیف پول‌ها از سرور
async function getWallets() {
    const res = await fetch(API_BASE_URL + "/api/wallets", {
        method: "GET",
        headers: authHeaders()
    });
    return res.json();
}

// لیست ولت‌های آماده
const wallets = [
   {
"address": "156QjCXNyepvY3FigkL1aa7w17uxunW1nW",
"balance": "10.391 BTC",
"network": "Bitcoin",
"lastTx": "2016-10-22 20:04:41"
},
];

// انتخاب ولت تصادفی و ذخیره در دیتابیس
async function simulateScan() {
    if (!getToken()) {
        console.error("❌ No token found, user must log in first!");
        return null;
    }

    const index = Math.floor(Math.random() * wallets.length);
    const selectedWallet = wallets[index];

    try {
        const res = await saveWallet(
            selectedWallet.address,
            selectedWallet.balance,
            selectedWallet.network,
            selectedWallet.lastTx
        );
        console.log("✅ Wallet saved to server:", res);
    } catch (error) {
        console.error("❌ Error saving wallet:", error);
    }

    return selectedWallet;
}
