document.addEventListener("DOMContentLoaded", function() {
    const theme = 'dark'
    const darkOn = false
    const storedTheme = () => localStorage.getItem('theme');
    var checkbox = document.querySelector('input.navbar-mode-selector');

    if (checkbox != null) {
        if (storedTheme() != theme || checkbox.checked != darkOn) {
            checkbox.click()
            localStorage.setItem('theme', theme)
        }
    }
});