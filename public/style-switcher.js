const styleBtn = document.getElementById("styleBtn");
const stylesheet= document.getElementById("pagestyle");

let demoMode = true;

styleBtn.addEventListener("click", () => {
    if (demoMode) {
        stylesheet.href = "basestyle.css";
        demoMode = false;
    }
    else {
        stylesheet.href = "cssdemo.css";
        demoMode = true;
    }
});