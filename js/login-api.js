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

      // After successful login, check if the user has a saved wallet
      fetch(`${BASE_URL}/api/wallet/${data.userId}`)
        .then(res => res.json())
        .then(walletData => {
          if (walletData.wallet) {
            // If wallet is found, redirect to results page
            localStorage.setItem("found_wallet", JSON.stringify(walletData.wallet));
            window.location.href = "results.html";
          } else {
            // If no wallet is found, redirect to scan page
            window.location.href = "scan.html";
          }
        })
        .catch(err => {
          console.error("Error checking wallet:", err);
          window.location.href = "scan.html"; // Default to scan page if an error occurs
        });
    })
    .catch(err => {
      console.error("❌ Error saving user:", err);
      alert("Server error occurred.");
    });
});
