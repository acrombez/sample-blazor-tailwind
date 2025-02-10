export function setTheme(theme) {
    let mainLayout = document.getElementById("main-layout");

    if (mainLayout) {
        if (theme === 'dark') {
            mainLayout.setAttribute("data-theme", "dark");
        } else if (theme === 'light') {
            mainLayout.setAttribute("data-theme", "light");
        }
    }
}
