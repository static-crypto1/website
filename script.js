const revealElements = document.querySelectorAll(
    ".work, .about, footer"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});