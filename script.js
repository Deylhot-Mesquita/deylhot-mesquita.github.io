/* ============================
   DARK / LIGHT MODE AUTOMÁTICO
   ============================ */

// Verifica se o utilizador já escolheu um tema antes
const savedTheme = localStorage.getItem("theme");

// Detecta o tema do sistema (dark/light)
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Aplica o tema correto ao carregar a página
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
} else {
    document.documentElement.setAttribute("data-theme", systemPrefersDark ? "dark" : "light");
}

/* ============================
   BOTÃO DARK / LIGHT
   ============================ */

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

/* ============================
   MENU MOBILE
   ============================ */

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("open");
}

/* ============================
   ANIMAÇÕES SUAVES AO SCROLL
   ============================ */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));