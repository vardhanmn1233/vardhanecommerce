document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navbar for Mobile View
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Predefined Username & Password
    const validUsername = "admin";
    const validPassword = "123456";

    // Login Form Validation
    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const username = document.querySelector("#username").value.trim();
            const password = document.querySelector("#password").value.trim();

            if (!username || !password) {
                alert("Please enter your credentials!");
                return;
            }

            // Check if username and password match the predefined values
            if (username === validUsername && password === validPassword) {
                alert("Login successful!");
                window.location.href = "home.html"; // Redirect to home page
            } else {
                alert("Invalid login credentials! Please try again.");
            }
        });
    }

    // Google Login Button Click (Placeholder Functionality)
    const googleLoginBtn = document.querySelector(".Google");
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener("click", function () {
            alert("Google login feature coming soon!");
        });
    }

    // Forgot Password Alert
    const forgotPasswordLink = document.querySelector(".forgot-password");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Password reset link has been sent to your email (Demo).");
        });
    }
});
