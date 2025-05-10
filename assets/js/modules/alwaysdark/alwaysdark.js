document.addEventListener("load", function() {
    const theme = 'dark';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.getElementsByClassName('mode-switch').style.display = 'none';
});
