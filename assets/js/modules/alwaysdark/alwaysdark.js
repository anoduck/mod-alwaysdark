document.addEventListener("load", function() {
    const theme = 'dark';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.getElementById('navbar-mode-checkbox').style.display = 'none';
});
