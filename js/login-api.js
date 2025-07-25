const BASE_URL = "https://dolphinwalletfinderbackend-production.up.railway.app/api";

document.getElementById("accessForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value.trim();
  const password = document.querySelector('input[name="password"]').value;
  const emailInput = document.querySelector('input[name="email"]');
  const confirmInput = document.querySelector('input[name="confirm"]');

  const isRegister = emailInput && emailInput.offsetParent !== null;
  const email = emailInput ? emailInput.value.trim() : null;
  const confirm = confirmInput ? confirmInput.value : null;

  if (isRegister && password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  const payload = {
    username: username,
    password: password,
    email: email,
    action: isRegister ? "register" : "login"
  };

  sessionStorage.setItem("username", username);
  localStorage.setItem("username", username);

  fetch(`${BASE_URL}/${payload.action}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
    .then(res => {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.json();
    })
    .then(data => {
      if (data.error) {
        alert("❌ " + data.error);
        return;
      }
      console.log("✅ User saved:", data);
      window.location.href = "index.html";
    })
    .catch(err => {
      console.error("❌ Error saving user:", err);
      alert("Server error occurred.");
    });
});
