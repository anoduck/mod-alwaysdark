document.addEventListener("load", function() {
    const theme = 'dark';
    localStorage.setItem('theme', theme);
    const html = document.querySelector("html");
    html.setAttribute("data-bs-theme", "dark");
    document.getElementsByClassName('mode-switch').style.display = 'none';
});
