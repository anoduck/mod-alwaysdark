document.addEventListener('DomContentLoaded', function () {
    //javascript goes here.

    function hideToggle() {
        var modeToggle = document.querySelector('li.mode-switch');
        var toggleStyle = document.createElement('style');
        toggleStyle.type = 'text/css';
        toggleStyle.innerHTML = ".hide { absolute; overflow: hidden; display: none; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; border: 0; }";
        document.getElementsByClassName('mode-switch')[0].appendChild(toggleStyle);
        modeToggle.className = 'hide';
    }

    const theme = 'dark';

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    function setTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme)
    };

    const storedTheme = getStoredTheme();
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(theme)
        hideToggle();
    };
});