document.addEventListener("DOMContentLoaded", function() {
    const theme = 'dark'
    const storedTheme = () => localStorage.getItem('theme');
    var checkbox = document.querySelector('input.navbar-mode-selector');

    if (checkbox !== null) {
        while (storedTheme() !== theme) {
            checkbox.click()
            window.reload()
        }
    }
});
