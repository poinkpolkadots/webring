lightMode = true;
function modeToggle() {
    if (lightMode) {
        document.documentElement.style.setProperty('--background-color', '#000000');
        document.documentElement.style.setProperty('--text-color', '#FFFFFF');
        document.documentElement.style.setProperty('--comment-color', '#FFFFFF80');
        lightMode = false;
    } else {
        document.documentElement.style.setProperty('--background-color', '#FFFFFF');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--comment-color', '#00000080');
        lightMode = true;
    }
}

const toggle = document.getElementById("toggle");
toggle.addEventListener("click", modeToggle);