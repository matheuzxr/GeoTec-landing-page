// menu responsivo
document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuBtn = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".menu ul");

    if (toggleMenuBtn) {
        toggleMenuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("menu-open");
        });
    }
});

// voltar para o topo
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTop";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
backToTop.style.padding = "10px 15px";
backToTop.style.background = "#148716";
backToTop.style.color = "#fff";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.cursor = "pointer";
backToTop.style.zIndex = "1000";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// rolagem suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// fade in
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll(".card, .conteudo, .depoimento").forEach(el => {
    el.classList.add("fade-hidden");
    observer.observe(el);
});
