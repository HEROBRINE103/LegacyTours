const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{threshold:0.2});

document.querySelectorAll(".fade-up, .slide-left, .slide-right")
.forEach(el=>observer.observe(el));

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle Menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
});

// Close menu when clicking link (mobile)
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("show");
    });
});

// Scroll shadow effect
window.addEventListener("scroll", function () {
    document.querySelector("nav")
        .classList.toggle("scrolled", window.scrollY > 50);
});