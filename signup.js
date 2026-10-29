document.addEventListener("DOMContentLoaded", () => {
    const toggleSignupPassword = document.getElementById("toggleSignupPassword");
    const signupPasswordInput = document.getElementById("signupPassword");
    const signupForm = document.getElementById("signupForm");

    // Toggle lihat password
    if (toggleSignupPassword && signupPasswordInput) {
        toggleSignupPassword.addEventListener("click", () => {
            const isPassword = signupPasswordInput.getAttribute("type") === "password";
            signupPasswordInput.setAttribute("type", isPassword ? "text" : "password");
            
            toggleSignupPassword.classList.toggle("fa-eye");
            toggleSignupPassword.classList.toggle("fa-eye-slash");
        });
    }

    // Event submit form signup
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const fullName = document.getElementById("fullName").value;
            alert(`Registrasi berhasil untuk: ${fullName}`);
        });
    }
});