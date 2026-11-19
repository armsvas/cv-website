const themeToggleBtn = document.getElementById("theme-toggle");

console.log("theme button:", themeToggleBtn);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        console.log("body dark mode:", document.documentElement.classList.contains("dark-mode"));
    });
}