const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

const toggleTheme = () => {
    htmlElement.classList.toggle("dark");
    if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

themeToggleBtn.addEventListener("click", toggleTheme);

window.addEventListener("load", () => {
    const currentTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    if (currentTheme === "dark" || (!currentTheme && systemPrefersDark)) {
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.remove("dark");
    }
});

feather.replace();
