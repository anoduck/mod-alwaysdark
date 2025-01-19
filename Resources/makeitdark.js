(() => {
//javascript goes here.
    const theme = 'dark';
    const getStoredTheme = () => localStorage.getItem('theme');
    const storedTheme = getStoredTheme();

    function hideToggle() {
        var modeToggle = document.querySelector('li.mode-switch');
        var toggleStyle = document.createElement('style');
        toggleStyle.type = 'text/css';
        toggleStyle.innerHTML = ".hide { absolute; overflow: hidden; display: none; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; border: 0; }";
        document.getElementsByClassName('mode-switch')[0].appendChild(toggleStyle);
        modeToggle.className = 'hide';
    }

    function setTheme (theme) {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-bs-theme', theme)
    };

    if (storedTheme !== 'dark') {
        setTheme(theme)
        hideToggle();
    };

    function toggleTheme(theme) {
        var selector = document.querySelector('.navbar-mode-selector');
        var curTheme = selector.getAttribute('data-bs-theme-animate');
        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.navbar-mode-selector').forEach(chk => {

            })
        })
    }

})();