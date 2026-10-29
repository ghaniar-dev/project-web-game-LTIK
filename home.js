document.addEventListener("DOMContentLoaded", () => {
    const burgerToggle = document.getElementById("burgerToggle");
    const navbarMenu = document.getElementById("navbarMenu");
    const burgerIcon = document.getElementById("burgerIcon");

    // Toggle menu dropdown saat burger bar diklik
    if (burgerToggle && navbarMenu) {
        burgerToggle.addEventListener("click", () => {
            navbarMenu.classList.toggle("active");

            // Animasi ganti ikon antara burger (tiga garis) dan silang (X)
            if (navbarMenu.classList.contains("active")) {
                burgerIcon.classList.remove("fa-bars");
                burgerIcon.classList.add("fa-xmark");
            } else {
                burgerIcon.classList.remove("fa-xmark");
                burgerIcon.classList.add("fa-bars");
            }
        });
    }

    // Menutup menu otomatis jika link diklik di mode HP/Tablet
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", function() {
            navItems.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            if (window.innerWidth <= 1024) {
                navbarMenu.classList.remove("active");
                burgerIcon.classList.remove("fa-xmark");
                burgerIcon.classList.add("fa-bars");
            }
        });
    });
});