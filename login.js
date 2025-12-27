document.getElementById("loginForm").addEventListener("submit", loginUser);

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    // Demo credentials (for project use)
    const demoEmail = "admin@example.com";
    const demoPassword = "admin123";

    if (email === demoEmail && password === demoPassword) {
        alert("Login successful!");
        window.location.href = "index.html"; // redirect to AI Code Reviewer
    } else {
        errorMsg.textContent = "Invalid email or password";
    }
}
