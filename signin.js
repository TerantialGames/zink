document.getElementById("signin-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target.email.value.trim();
  const password = e.target.password.value;

  // Simple validation
  if (!email || !password) {
    alert("Email and password are required.");
    return;
  }

  try {
    // Example: send to your backend API
    const response = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Sign-in failed");
    } else {
      // Redirect or do something after success
      window.location.href = "/dashboard.html";
    }
  } catch (error) {
    console.error("Error signing in:", error);
    alert("Something went wrong. Please try again.");
  }
});

