let deferredPrompt = null;
const installBtn = document.getElementById("installBtn");

installBtn.style.display ="none";

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "inline-block";
});

installBtn.addEventListener("click", async() => {
    if (!deferredPrompt) {
        alert("Install is not available yet.");
        return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
        console.log("App installed");
    } else {
        console.log("install dismissed");
    }
    deferredPrompt = null;
    installBtn.style.display ="none";
});

window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");
    installBtn.style.display = "none";
});